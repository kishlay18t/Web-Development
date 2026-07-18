# Bug #1 — children not iterable

## Problem

TypeError: `node.children` is not iterable

## Cause
Some file nodes had:

`children: undefined`

while recursion assumed every node had a children array [].

## Fix
Use a consistent data model:

`children: []`

for every node.

Lesson

Uniform data structures simplify algorithms.

# Bug #2 — focus() not working

## Problem

document.getElementsByClassName(...).focus();

## Cause

`getElementsByClassName()` returns an *HTMLCollection*, not an element.

## Fix

`document.querySelector(".prompt-input").focus();`

or

`getElementsByClassName(...)[0].focus();`

## Lesson

Always know what type a DOM method returns.

# Bug #3 — ls is not defined

## Problem

*ReferenceError*: ls is not defined

## Cause

`storage.js` tried to create:

```JS
const commands = {
    ls,
    cd,
    mkdir
}
```

without importing those functions.

## Fix

Move the command dispatcher out of storage.js and into the parser (or another appropriate module).

Lesson

Keep data modules separate from execution logic.

# Bug #4 — Comparing functions with strings

## Problem

Command validation always failed.

## Cause

Compared:

`function ls()` {}

to

`"ls"`

using `Object.values()`

## Fix

Lookup directly:

commands[inputArray[0]]

or use:
```JS
Object.keys(Commands);
```

## Lesson

Objects are dictionaries, not arrays.

# Bug #5 — Form submitting unexpectedly

## Problem

The page behaved like the form was submitting normally.

## Cause

`handleInput()` crashed before `preventDefault()` was executed.

## Fix

Find and remove the earlier exception.

## Lesson

A thrown exception immediately stops execution.

# Bug #6 — Misplaced return

## Problem

```JS
return
"Invalid Command"
```

returned undefined.

## Cause

Automatic Semicolon Insertion.

## Fix

```JS
return "Invalid Command";
```

## Lesson

Never put the returned value on the next line.

# Bug #7 — Function dispatcher misunderstanding

## Problem

Confusion over:

```JS
const commands = {
    ls,
    cd
}
```

## Cause

Thought object values were strings.

## Reality

It's shorthand for:

```JS
const commands = {
ls: ls
};
```

which stores function references.

## Lesson

Functions are first-class values in JavaScript.

# Bug #8 — Initialization assumption

## Problem

Assumed:

`getElementsByClassName()``

returns one element.

## Reality

- Returns a collection even if only one element matches.

## Lesson

DOM APIs often return `collections` rather than `single elements`.