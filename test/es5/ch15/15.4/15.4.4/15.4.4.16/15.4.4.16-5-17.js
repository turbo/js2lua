/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-5-17.js
 * @description Array.prototype.every - the JSON object can be used as thisArg
 */


function testcase() {
        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === JSON;
        }

        return [11].every(callbackfn, JSON) && accessed;
    }
runTestCase(testcase);
