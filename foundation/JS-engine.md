# JavaScript Engine

## Interpreter

Program is run line by line 'on the fly'

cons: slower, because the code cannot be optimized that is otherwise possible with a compilation step.

---

## Compiler

Works ahead of time, to create a translation and is compiled down into a language that is understood by CPU.A new program is written and that program is fed to the machine.

---

## JIT

Just in time compiling, allows for a program execution that allows both interpretation and compilation. compiler is passed code while code is being interpreted and optimizes passed in code.

pros: optimization: Can simplify repeated code. In other words, a compiler can make edits to redundant code that allows the cpu to skip calculations that have already been made.
