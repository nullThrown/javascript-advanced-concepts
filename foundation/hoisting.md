# Hoisting

During program creation phase, the engine will look through the code and reserve memory for that particular declaration. Certain declarations can be accessed prior to their init. e.g., _function_ declarations
reference _hoising.js_ file for clear examples of hoisting

## functions

### function declaration

functions declared using _function_ keyword are fully hoisted - can be accessed prior to initialization.

### function expression

function expressions (const foo = () => {}) cannot be accessed prior to init. Will throw typeError: _name_ is not a func.

## variables

variables are partially hoisted, the var name is hoisted but the value is not. _var_ are initlizaed with an _undefined_ value. However, _const_ and _let_ will return a _referenceError_: cannot access _name_ before init.
