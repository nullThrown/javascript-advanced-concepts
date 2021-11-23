# execution context

## global execution context

Js creates this context that allows for a global object and the _this_ keyword. the global object in the browser is the _window_(_global_ in Node). The _this_ keyword will initially point to the window object unless utilized in another context.

Global vars are added to the global object.

---

## lexical environment

Any snapshot of execution has a specific enviroment(lexical envi.) that has access to certain contexts(functions, variables etc.). A current function call has access to its own as well as the global envi. Functions can call other func. but cannot access var declared in side of other func.

--

## function execution context

When a function is called a new ex. context is created that is specific to that block of code. This is why variables declared inside of functions are not accessible outside of them. Each function, when called and placed on call stack has its own environmnet.
