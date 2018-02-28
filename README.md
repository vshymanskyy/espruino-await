# espruino-await

This uses `rollup`, `babel` and `fast-async` to show how async/await can be used with `Espruino`.

Verified with **Puck.js**, **Espruino Pico 1.3**, **ESP32**, Espruino v1.96

## Howto

```bash
npm install

# Bundle the source code and upload it to the board
npm start --production
```
![Preview](/docs/demo.png)

Some other commands:
```
# Bundle in development mode
npm run build

# Bundle in production mode (minified)
npm run build --production

# Open device console
npm run console
```

**Note:** this currently uses a Makefile, so can have trouble uploading to the board on Windows. This can be easily tweaked.

## Related issues

- [ ] [async/await support](https://github.com/espruino/Espruino/issues/1272)
- [ ] [ES5/ES6 wishlist](https://github.com/espruino/Espruino/issues/1302)
- [ ] [Maximum number of scopes exceeded](https://github.com/espruino/Espruino/issues/948)
- [ ] `fast-async` works, while `transform-regenerator` chashes the interpreter (on all boards)
- [ ] It is mandatory to use `hoist_funs` and `hoist_vars` for uglify. Espruino does not handle hoisted transpiled code well.
