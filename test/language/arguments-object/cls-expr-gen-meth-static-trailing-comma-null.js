// This file was procedurally generated from the following sources:
// - src/arguments/trailing-comma-null.case
// - src/arguments/default/cls-expr-gen-meth-static.template
/*---
description: A trailing comma after null should not increase the arguments.length (static class expression generator method)
esid: sec-arguments-exotic-objects
flags: [generated]
info: |
    9.4.4 Arguments Exotic Objects

    Most ECMAScript functions make an arguments object available to their code. Depending upon the
    characteristics of the function definition, its arguments object is either an ordinary object
    or an arguments exotic object.

    Trailing comma in the arguments list

    12.3 Left-Hand-Side Expressions

    Arguments[Yield, Await] : ( ArgumentList[?Yield, ?Await] , )
---*/


var callCount = 0;
var C = class {
  static *method() {
    assert.sameValue(arguments.length, 2);
    assert.sameValue(arguments[0], 42);
    assert.sameValue(arguments[1], null);
    callCount = callCount + 1;
  }
};

C.method(42, null,).next();

// Stores a reference `ref` for case evaluation
var ref = C.method;

assert.sameValue(callCount, 1, 'method invoked exactly once');
