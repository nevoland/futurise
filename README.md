# Futurise

🔮 Helpers for things that happen in the future.

### Features

- Event listener utilities that provide cleanup functions
- Timer helpers with convenient registering and cleanup functions
- Promise generators that wait for event occurrences
- Tool to delay function calls with throttling and introspection capabilities

## Usage

Everything is exported from the main entry-point through an ES6 module:

```js
import {
  on,
  once,
  timeout,
  interval,
  until,
  untilOnline,
  reduceStatusList,
} from "futurise";
```

## Installation

Install with the [Node Package Manager](https://www.npmjs.com/package/futurise):

```bash
npm install futurise
```

## Documentation

Documentation is generated [here](doc/README.md).

## Guide

### Create an event emitter

Use `EventEmitter` to create a new event emitter:

```typescript
import { EventEmitter } from "futurise";

const emitter = new EventEmitter<{
  A: boolean;
  B: number;
}>();

emitter.dispatchEvent("A", true);
emitter.dispatchEvent("B", 4);
```

It follows the EventTarget interface for adding and removing listeners:

```typescript
function listener(event: boolean) {
  console.log(`Boolean value: ${event}`);
}

emitter.addEventListener("A", listener);

emitter.removeEventListener("B", listener);
```

### Register a listener

Use `on` to register a listener on an `element` or any object that has the `addEventListener` and `removeEventListener` methods of the `EventTarget` interface:

```typescript
import { on } from "futurise";

const off = on(element, "click", () => console.log("Clicked!"));
```

It returns a function that, when called, removes the `listener` from the `element`:

```typescript
off();
```

This is convenient when used with tools that rely on cleanup functions such as the `React` hook `useEffect`:

```typescript
import { on } from "futurise";
import { useEffect } from "preact/hooks";

useEffect(() => on(element, "click", () => console.log("Clicked!")), [element]);
```

#### Partial curry

The `on` register function can be curried by passing only the target and event name:

```typescript
import { on } from "futurise";

const register = on(element, "click");

const off = register(() => console.log("Clicked!"));
const anotherOff = register(() => console.log("Another message!"));
```

This is convenient when using with `until`, a tool that returns a promise that resolves when a specific event is spotted:

```typescript
import { until, on } from "futurise";

async function untilOnline(request) {
  await until(on(window, "online"));
  return request();
}
```

Note that `futurise` exports a tool `untilOnline` that resolve to `true` if it waited for the system to become online:

```typescript
import { untilOnline } from "futurise";
```

#### Register once

Similar to `on`, `once` registers a listener for a given `event` on a `target` only once:

```typescript
import { once } from "futurise";

// Will execute the callback only once
once(element, "click", () => console.log("Clicked!"));
```

### Set a timer

Use `timeout` to execute a macro-task after a given delay:

```typescript
import { timeout } from "futurise";

const cancel = timeout(1000, () => console.log("At least a second elapsed!"));
```

It returns a function that, when called, cancels the timer if it has not yet elapsed:

```typescript
cancel();
```

Like for the `on` tool, this is convenient when used with tools that rely on cleanup functions such as the `React` hook `useEffect`:

```typescript
import { timeout } from "futurise";
import { useEffect } from "preact/hooks";

useEffect(
  () => timeout(1000, () => console.log("At least a second elapsed!")),
  [],
);
```

#### Partial curry

The `timeout` register function can be curried by passing only the `duration`. Similar to currying `on`, it returns a register function enabling several callbacks to be registered and called once the duration elapses. Note that calling `timeout` immediately sets the timer:

```typescript
import { timeout } from "futurise";

const register = timeout(1000);

register(() => console.log("At least a second elapsed!"));
register(() => console.log("This is called immediately after!"));
const unregister = register(() =>
  console.log("But not this, because it will be deregistered"),
);
unregister();

// After about one second, the console will show:
// > At least a second elapsed!
// > This is called immediately after!
```

Unregistering all callbacks clears the timeout if it did not elapse:

```typescript
import { timeout } from "futurise";

const register = timeout(1000);

const unregister1 = register(() => console.log("At least a second elapsed!"));
const unregister2 = register(() => console.log("Yes, at least!"));

unregister1();
unregister2();

// The timeout is cleared
```

As for `on`, this is convenient when used together with `until`:

```typescript
import {timeout, until} from "futurise";

async function task() {
  let done = false;
  while (!done) {
    try {
      await action();
      done = true;
    } except (error) {
      console.error(error);
      await until(timeout(1000));
    }
  }
}
```

Note that `futurise` exports a tool `sleep` that combines `until` and `timeout`:

```typescript
import { sleep } from "futurise";

async function task() {
  await sleep(1000);
}
```

### Set an interval

Use `interval` to repetitively execute a macro-task after a given interval:

```typescript
import { interval } from "futurise";

const cancel = interval(1000, () => console.log("At least a second elapsed!"));
```

It returns a function that, when called, cancels the interval:

```typescript
cancel();
```

#### Partial curry

The `interval` register function can be curried by passing only the `duration`. Similar to currying `on`, it returns a register function enabling several callbacks to be registered and called at each interval. Note that calling `interval` immediately sets the interval:

```typescript
import { interval } from "futurise";

const register = interval(1000);

register(() => console.log("At least a second elapsed!"));
register(() => console.log("This is called immediately after!"));
const unregister = register(() =>
  console.log("But not this, because it will be deregistered"),
);
unregister();

// After about one second, the console will show:
// > At least a second elapsed!
// > This is called immediately after!

// After about one second later, the console will show:
// > At least a second elapsed!
// > This is called immediately after!

// And so on…
```

Unregistering all callbacks clears the interval:

```typescript
import { interval } from "futurise";

const register = interval(1000);

const unregister1 = register(() => console.log("At least a second elapsed!"));
const unregister2 = register(() => console.log("Yes, at least!"));

unregister1();
unregister2();

// The interval is cleared
```

### Delay calls to a function

Delaying the invocation of a callable (also known as "debouncing") can be done using the `delay` tool:

```typescript
import { delay } from "futurise";

function doSomething(parameter) {
  heavyTaskWith(parameter);
}

const doSomethingLessOften = delay(1000, doSomething);

doSomethingLessOften(1);
doSomethingLessOften(2);
doSomethingLessOften(3);
doSomethingLessOften(4);

// Only calls `doSomething(4)` after 1 second
```

#### Immediate call

By default, the function is called after the specified duration elapsed. The `immediate` option enables calling the function immediately:

```typescript
import { delay } from "futurise";

function doSomething(parameter) {
  heavyTaskWith(parameter);
}

const doSomethingLessOften = delay(1000, doSomething, { immediate: true });

// Calls `doSomething(1)` immediately
doSomethingLessOften(1);
doSomethingLessOften(2);
doSomethingLessOften(3);
doSomethingLessOften(4);

// Calls `doSomething(4)` after 1 second
```

#### Throttling

By default, the function is delayed until the duration elapsed before a new call is made. The `throttle` option enables calling the function at most once every period set by the `duration`:

```typescript
import { delay, sleep } from "futurise";

function doSomething(parameter) {
  heavyTaskWith(parameter);
}

const doSomethingLessOften = delay(1000, doSomething, { throttle: true });

async function task() {
  doSomethingLessOften(1);
  await sleep(400);
  doSomethingLessOften(2);
  await sleep(400);
  doSomethingLessOften(3);
  await sleep(400); // Calls `doSomething(3)` while it awaits the sleep timer
  doSomethingLessOften(4);
  await sleep(1000); // Calls `doSomething(4)` while it awaits the sleep timer
}
```

Without the throttling mode, the function would have been called only once with `doSomething(4)`.

#### Cancel pending call

The function returned by `delay` has a `cancel()` method that cancel the pending invocation:

```typescript
import { delay } from "futurise";

function doSomething(parameter) {
  heavyTaskWith(parameter);
}

const doSomethingLessOften = delay(1000, doSomething);

doSomethingLessOften(1);
doSomethingLessOften.cancel();

// The function is not called
```

#### Flush the pending call

The function returned by `delay` has a `flush()` method that immediately runs the pending invocation and returns the resulting value:

```typescript
import { delay } from "futurise";

function doSomething(parameter) {
  // Returns something
  return heavyTaskWith(parameter);
}

const doSomethingLessOften = delay(1000, doSomething);

doSomethingLessOften(1);
// The function is immediately called and its result is returned
const result = doSomethingLessOften.flush();
```

#### Getting the last result

The function returned by `delay` has a `result` property that is set to the value returned by the function:

```typescript
import { delay } from "futurise";

function doSomething(parameter) {
  // Returns something
  return heavyTaskWith(parameter);
}

// Setting `immediate: true` to immediately execute the first invocation:
const doSomethingLessOften = delay(1000, doSomething, { immediate: true });

// The function is immediately called
doSomethingLessOften(1);
// The result can be retreived as such
const result = doSomethingLessOften.result;
```
