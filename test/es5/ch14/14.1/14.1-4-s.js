/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch14/14.1/14.1-4-s.js
 * @description 'use strict' directive - not recognized if contains Line Continuation
 * @noStrict
 */


function testcase() {

  function foo()
  {
    'use str\
ict';
     return (this !== undefined);
  }

  return foo.call(undefined);
 }
runTestCase(testcase);
