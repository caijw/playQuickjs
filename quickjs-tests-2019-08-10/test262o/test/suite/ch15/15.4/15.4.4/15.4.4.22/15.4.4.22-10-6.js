/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-10-6.js
 * @description Array.prototype.reduceRight - subclassed array when initialvalue provided
 */


function testcase() {
  foo.prototype = new Array(0, 1, 2, 3);
  function foo() {}
  var f = new foo();
  
  function cb(prevVal, curVal, idx, obj){return prevVal + curVal;}
  if(f.reduceRight(cb,"4") === "43210")
    return true;
 }
runTestCase(testcase);
