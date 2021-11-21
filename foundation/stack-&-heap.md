##Call Stack
The call stack is the main execution of our app. Any piece of code that is being run will be placed onto the callstack to be executed. The call stack runs on a last in first out (LIFO) basis.

When a function is invoked it is placed onto the stack until it runs to completion. Once completed, the function is removed from the stack and the stack is left empty.

single threaded - JS is single threaded --meaning -- JS can only do one thing at a time. If the call stack hangs(function is being processed over a long period of time), the page will become unresponsive. No mouse clicks, no new render cycles.

Asynchronous code -- The javascript runtime may only be able to do one thing at a time, but the browser is able to carry the load for specific tasks. Callbacks, promises, timers can all be handled by web APIs. However, once the timer is complete, the callback still needs to be placed onto Call stack to be executed.

LIFO - the last function added to the stack will be the first one to complete.

Stack Overflow - when the stack fills up with too many tasks (tasks are being added faster than they can be executed) the process will exit and an error will be thrown i.e., stack overflow.
A.K.A RangeError, blowing the stack

##Heap
The place where data is read and written to. A region in memory that the JS engine provides for the current application.

###garbage Collection
GC monitors the allocated memory and determines when a block of memory is no longer needed. Memory deemed unneeded is reclaimed and provides space for new memory to be allocated. Garabage collection is not a perfect process because it must determine algorithmically what is no longer needed.

###Memory leaks
data stored in memory that is no longer needed but continues to be stored in memory, taking up useful space. Garabage collection is put in place to mitigate these but is not perfect. Hence, C's better optimization by forcing programmers to deal with memory allocation/deletion manually.

3 common memory leaks:
1.global variables --
2.event listeners --
3.setIntereval --
