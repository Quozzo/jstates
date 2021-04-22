# RStates

A super small, simple and fast ⚡ JavaScript state library

[![NPM](https://nodei.co/npm/rstates.png)](https://npmjs.org/package/rstates)

![GitHub issues](https://img.shields.io/github/issues/quozzo/rstates.svg)
![license](https://img.shields.io/github/license/quozzo/rstates.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/rstates)
![npm](https://img.shields.io/npm/v/rstates.svg)

## Why a fork?

RStates uses an implementation similar to React's useState hook which alleviates issues such as removing empty properties and being unable to use arrays directly within the state.

## Install

```sh
npm i rstates
```

## Usage

```js
const rstates = require('rstates')

const myState = rstates({ counter: 0 })

function onUpdate(state) {
	console.log('onUpdate: counter changed to ', state.counter)
}

myState.subscribe(onUpdate)

// Updating with an object
myState.setState({ counter: ++myState.state.counter })
// => onUpdate: counter changed to  1

// Updating with a function
myState.setState(state => ({ counter: ++state.counter }))
// => onUpdate: counter changed to  2
```

## API

```js
const initialState = {};
const stateInstance = rstates(initialState);
/* => returns state Instance
{
  state,
  subscribers,
  setState,
  subscribe,
  unsubscribe,
};
*/

// Get the state
stateInstance.state;

// Change the state
stateInstance.setState(<object or a function that returns and object>);
// => returns a promise

// Subscribe to state changes
stateInstance.subscribe(<function that will be called with the state on each update>);


// Unsubscribe from state changes
stateInstance.unsubscribe(<function that already subscribed>);

```
