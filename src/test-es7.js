'use strict';

import {assert, log} from './utils';

export function test_es7() {
  assert([1, 2, 3].includes(2) === true);
  assert([1, 2, 3].includes(4) === false);
  assert((7 ** 12) === Math.pow(7,12));

  let obj = { a: 1, b: 2, c: 3 }
  for (let key of Object.keys(obj)) {
    log(obj[key]);
  }

  Object.values(obj).forEach(value => log(value));

  log(JSON.stringify(Object.entries(obj)));

  log('0.00'.padStart(20))
  log('10,000.00'.padStart(20))
  log('250,000.00'.padStart(20))

  log('react'.padEnd(10, ':-)'))
  log('backbone'.padEnd(10, '*'))

  let f = function(a,b,c,d,) {
    log(d)
  }
  f(1,2,3,'this')
}
