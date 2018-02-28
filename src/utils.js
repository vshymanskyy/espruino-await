'use strict';

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function millis() {
  return (new Date()).getTime()
}

const started = millis();

export function log(msg) {
  const uptime = millis()-started
  console.log(`[${uptime.toFixed(0)}]`, msg)
}

export function assert(expr) {
  if (!expr)
    throw new Error('Assertion failed')
}
