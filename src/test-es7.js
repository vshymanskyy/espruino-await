'use strict';

export function test_es7() {
  assert([1, 2, 3].includes(2) === true);
  assert([1, 2, 3].includes(4) === false);
  assert((7 ** 12) === Math.pow(7,12));

  let obj = { a: 1, b: 2, c: 3 }
  for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
  }

  Object.values(obj).forEach(value => console.log(value));

  console.log(JSON.stringify(Object.entries(obj)));

  console.log('0.00'.padStart(20))
  console.log('10,000.00'.padStart(20))
  console.log('250,000.00'.padStart(20))

  console.log('react'.padEnd(10, ':-)'))
  console.log('backbone'.padEnd(10, '*'))

  let f = function(a,b,c,d,) {
    console.log(d)
  }
  f(1,2,3,'this')
}
