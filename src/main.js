'use strict';

//import 'regenerator-runtime'
import config from './config';
import {log, timeout} from './utils';

async function init() {
  await test_seq();
  await test_loop();
  await test_throw();
  //log(process.memory())
}

async function test_seq() {
  log('test seq');
  await timeout(config.delay);
  log(`${config.delay} ms passed`);
}

async function test_loop() {
  log('test loop');
  for (let i=1; i<=10; i++) {
    log(`${i}`);
    await timeout(config.delay);
  }
}

async function test_throw() {
  log('test throw');
  let do_throw = async () => {
    await timeout(500);
    throw new Error('OK');
    await timeout(1);
    log('Error1');
  }

  try {
    await do_throw();
    log('Error2');
  } catch(e) {
    log(`Test: ${e}`);
  }
  await timeout(1000);
}

if (ENV === 'production') {
  log(`Mode: production`);
} else {
  log(`Mode: ${ENV}`);
}

//log(process.memory())
init()
