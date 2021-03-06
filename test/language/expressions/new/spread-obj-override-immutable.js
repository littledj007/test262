// This file was procedurally generated from the following sources:
// - src/spread/obj-override-immutable.case
// - src/spread/default/member-expr.template
/*---
description: Object Spread overriding immutable properties (`new` operator)
esid: sec-new-operator-runtime-semantics-evaluation
es6id: 12.3.3.1
features: [object-spread]
flags: [generated]
includes: [propertyHelper.js]
info: |
    MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

    12.3.3.1.1 Runtime Semantics: EvaluateNew

    6. If arguments is empty, let argList be an empty List.
    7. Else,
       a. Let argList be ArgumentListEvaluation of arguments.
       [...]
---*/

let o = {b: 2};
Object.defineProperty(o, "a", {value: 1, enumerable: true, writable: false, configurable: true});


var callCount = 0;

new function(obj) {
  assert.sameValue(obj.a, 3)
  assert.sameValue(obj.b, 2);

  verifyEnumerable(obj, "a");
  verifyWritable(obj, "a");
  verifyConfigurable(obj, "a");

  verifyEnumerable(obj, "b");
  verifyWritable(obj, "b");
  verifyConfigurable(obj, "b");

  callCount += 1;
}({...o, a: 3});

assert.sameValue(callCount, 1);
