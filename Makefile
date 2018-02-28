.PHONY: all clean bundle run debug erase console

DEVICE_BAUD ?= 115200

ESPRUINO ?= $(shell npm bin)/espruino
ESPRUINO_OPTS ?= -q -b $(DEVICE_BAUD)
#--config: RESET_BEFORE_SEND=0 SERIAL_THROTTLE_SEND=1 SET_TIME_ON_WRITE=1 SAVE_ON_SEND=1

ESPR = @$(ESPRUINO) $(ESPRUINO_OPTS)

all: bundle

clean:
	@rm -rf ./dist

bundle: ./dist/bundle.js

./dist/bundle.js: ./src/*
	npm run build

run: bundle
	$(ESPR) ./dist/bundle.js --config SAVE_ON_SEND=1 --config SET_TIME_ON_WRITE=1
	$(ESPR)

debug: bundle
	$(ESPR) -e "debugger;" ./dist/bundle.js --config SAVE_ON_SEND=1 --config SET_TIME_ON_WRITE=1
	$(ESPR)

erase:
	$(ESPR) -e "reset()" --config SAVE_ON_SEND=1

console:
	$(ESPR)
