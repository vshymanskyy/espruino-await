# espruino-await

This uses rollup, babel and fast-async to show how async/await can be used with Espruino

## Howto

```bash
npm install

# Bundle the source code and upload it to the board
npm start --production

# Bundle in development mode
npm run build

# Bundle in production mode (minified)
npm run build --production

```

**Note:** this currently uses a Makefile, so can have trouble uploading to the board on Windows. This can be easily tweaked.

## Related issues

https://github.com/espruino/Espruino/issues/948
https://github.com/espruino/Espruino/issues/1272
https://github.com/espruino/Espruino/issues/1302
