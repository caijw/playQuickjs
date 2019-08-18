// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-280
description: >
    Object.create - one property in 'Properties' is an Array object
    that uses Object's [[Get]] method to access the 'set' property
    (8.10.5 step 8.a)
---*/

var arrObj = [];
var data = "data";
arrObj.set = function(value) {
  data = value;
};

var newObj = Object.create({}, {
  prop: arrObj
});

var hasProperty = newObj.hasOwnProperty("prop");

newObj.prop = "overrideData";

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(data, "overrideData", 'data');
