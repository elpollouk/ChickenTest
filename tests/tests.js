(function (undefined) {
	"use strict";

		//-------------------------------------------------------------------------------------------//
	// Test framework tests
	//-------------------------------------------------------------------------------------------//
	var Tests = {
		_memberVar: 12345,

		beforeTest: function () {
			Test.log("Before all tests");
		},

		afterTest: function () {
			Test.log("After all tests");
		},

		_notExecuted: function () {
			Assert.fail("This code should not be executed");
		},

		alsoNotExecuted: {},

		htmlEscape: function () {
			var text = Test.htmlEscape("<> \n\r\n\r");
			Assert.isEqual("&lt;&gt;&nbsp;<br /><br /><br />", text);
		},

		invokedWithCorrectThis: function () {
			Assert.isSame(12345, this._memberVar);
		},

		passed: function () {
			Test.log("This test should pass");
		},

		passedWithBeforeAndAfter: function () {
			Test.log("During test");
		},

		passIsEqual: function () {
			Assert.isEqual(1, 1);
		},

		passIsSame: function () {
			Assert.isSame("1", "1");
		},

		passArrayEqual: function () {
			var a1 = ["a", "b", "c"];
			var a2 = ["a", "b", "c"];
			Assert.arrayEqual(a1, a2);
		},

		passIsTrue: function () {
			Assert.isTrue(true);
		},

		passIsFalse: function () {
			Assert.isFalse(false);
		},

		passIsNull: function () {
			Assert.isNull(null);
		},

		passIsUndefined: function () {
			Assert.isUndefined(undefined);
		},

        passIsNullOrUndefined: function () {
        	Assert.isNullOrUndefined(null);
        	Assert.isNullOrUndefined(undefined);
		},

		passIsNotNull: function () {
			Assert.isNotNull({});
			Assert.isNotNull(undefined);
		},

		passIsNotUndefined: function () {
			Assert.isNotUndefined({});
			Assert.isNotUndefined(null);
		},

		passIsNotNullOrUndefined: function () {
			Assert.isNotNullOrUndefined({});
			Assert.isNotNullOrUndefined(0);
			Assert.isNotNullOrUndefined(false);
		},

		passIsInRange: function () {
			Assert.isInRange(3, 5, 3);
			Assert.isInRange(3, 5, 4);
			Assert.isInRange(3, 5, 5);

			Assert.isInRange("m", "q", "mike");
			Assert.isInRange("m", "q", "norman");
			Assert.isInRange("m", "q", "oswald");
		},

		passExpectedException_any: function () {
			Assert.expectedException({}, function () {
				throw new Error();
			}, "Didn't throw an exception");
		},

		passExpectedException_type: function () {
			Assert.expectedException({
				type: RangeError,
			}, function () {
				throw new RangeError();
			}, "Didn't throw right type of exception");
		},

		passExpectedException_exactMatch: function () {
			Assert.expectedException({
				message: "Expected Exception",
			}, function () {
				throw new Error("Expected Exception");
			}, "Message didn't match");
		},

		passExpectedException_regexMatch: function () {
			Assert.expectedException({
				message: /Expected '.+' Exception/,
			}, function () {
				throw new Error("Expected 'Foo' Exception");
			}, "Message didn't match");
		},

		passExpectedException_matchTypeAndMessage: function () {
			Assert.expectedException ({
				type: URIError,
				message: /Some .+ exception/
			}, function () {
				throw new URIError("Some other exception");
			}, "Type and message didn't match");
		},

		failIsEqual: function () {
			Test.log("This test should fail.");
			Assert.isEqual(2, 3, "isEqual Passed");
		},

		failIsSame: function () {
			Test.log("This test should fail.");
			Assert.isSame(2, "2", "isSame Passed");
		},

		failArrayEqual_length: function () {
			var a1 = [1, 2, 3];
			var a2 = [];
			Test.log("This test should fail.");
			Assert.arrayEqual(a1, a2, "arrayEqual Passed");
		},

		failArrayEqual_content: function () {
			var a1 = [1, 2, 3];
			var a2 = ["a", "b", "c"];
			Test.log("This test should fail.");
			Assert.arrayEqual(a1, a2, "arrayEqual Passed");
		},

		failIsTrue: function () {
			Test.log("This test should fail.");
			Assert.isTrue(false, "isTrue passed");
		},

		failIsFalse: function () {
			Test.log("This test should fail.");
			Assert.isFalse(true, "isFalse passed");
		},

		failIsNull: function () {
			Test.log("This test should fail.");
			Assert.isNull({}, "isNull passed");
		},

		failIsUndefined: function () {
			Test.log("This test should fail.");
			Assert.isUndefined({}, "isUndefined passed");
		},

		failIsNull_undefined: function (undefined) {
			Test.log("This test should fail.");
			Assert.isNull(undefined, "isNull with undefined value passed");
		},

		failIsNullOrUndefined: function () {
			Test.log("This test should fail.");
			Assert.isNullOrUndefined({}, "isNullOrUndefined passed");
		},

		failIsNotNull: function () {
			Test.log("This test should fail.");
			Assert.isNotNull(null, "isNotNull passed");
		},

		failIsNotUndefined: function () {
			Test.log("This test should fail.");
			Assert.isNotUndefined(undefined, "isNotUndefined passed");
		},

		failIsNotNullOrUndefined_null: function () {
			Test.log("This test should fail.");
			Assert.isNotNullOrUndefined(null, "isNotNullOrUndefined passed");
		},

		failIsNotNullOrUndefined_undefined: function () {
			Test.log("This test should fail.");
			Assert.isNotNullOrUndefined(undefined, "isNotNullOrUndefined passed");
		},

		failIsInRange_below: function () {
			Test.log("This test should fail.");
			Assert.isInRange(6, 7, 2, "isInRange passed");
		},

		failIsInRange_above: function () {
			Test.log("This test should fail.");
			Assert.isInRange(6, 7, 10, "isInRange passed");
		},

		failFail: function () {
			Test.log("This test should fail.");
			Assert.fail("fail passed");
		},

		failExpectedException_noneThrown: function () {
			Test.log("This test should fail.");
			Assert.expectedException({}, function () {}, "failExpectedException_noneThrown passed");
		},

		failExpectedException_wrongTypeThrown: function () {
			Test.log("This test should fail.");
			Assert.expectedException({
				type: RangeError,
			}, function () {
				throw new Error();
			}, "failExpectedException_wrongTypeThrown passed");
		},

		failExpectedException_wrongMessageThrown: function () {
			Test.log("This test should fail.");
			Assert.expectedException({
				message: /not matched/,
			}, function () {
				throw new Error("Foo");
			}, "failExpectedException_wrongMessageThrown passed");
		},

		mock_withFunction: function () {
			var target = {
				mockMe: function(a, b, c) {
					Assert.areEqual(target, this, "Incorrect this pointer in unmocked function");
					return a + b + c;
				},
				dontMock: function () {
					return 1;
				}
			}

			var mock = Test.mock(target, "mockMe", function (a, b, c) {
				Assert.areEqual(target, this, "This pointer was incorrect");
				return a * b * c;
			});

			Assert.isEqual(1, target.dontMock(), "Target object was altered incorrectly");
			Assert.isEqual(64, target.mockMe(2, 4, 8), "Mock returned wrong result");
			Assert.isEqual(24, target.mockMe(4, 3, 2), "Mock returned wrong result");
			Assert.isEqual(2, mock.calls.length, "Wrong number of calls registered");
			Assert.isEqual(2, mock.calls[0][0], "Wrong argument value saved");
			Assert.isEqual(4, mock.calls[0][1], "Wrong argument value saved");
			Assert.isEqual(8, mock.calls[0][2], "Wrong argument value saved");
			Assert.isEqual(4, mock.calls[1][0], "Wrong argument value saved");
			Assert.isEqual(3, mock.calls[1][1], "Wrong argument value saved");
			Assert.isEqual(2, mock.calls[1][2], "Wrong argument value saved");
			Assert.isEqual(2, mock.returns.length, "Wrong number of return values saved");
			Assert.isEqual(64, mock.returns[0], "Wrong return value saved");
			Assert.isEqual(24, mock.returns[1], "Wrong return value saved");
			Assert.isEqual(2, mock.exceptions.length, "Wrong number of exceptions");
			Assert.isNull(mock.exceptions[0], "Exception was not null");
			Assert.isNull(mock.exceptions[1], "Exception was not null");

			mock.reset();
			Assert.isEqual(15, target.mockMe(3, 5, 7), "Target object wasn't reset");
			Assert.isEqual(1, target.dontMock(), "Target object was reset incorrectly");
		},

		mock_withoutFunction: function () {
			var target = {
				mockMe: function(a, b, c) {
					Assert.areEqual(target, this, "Incorrect this pointer in unmocked function");
					return a + b + c;
				},
				dontMock: function () {
					return 1;
				}
			}

			var mock = Test.mock(target, "mockMe");

			Assert.isEqual(1, target.dontMock(), "Target object was altered incorrectly");
			Assert.isEqual("undefined", typeof target.mockMe(1, 2, 3), "Mocked function returned a value");
			Assert.isEqual("undefined", typeof target.mockMe(4, 5, 6), "Mocked function returned a value");
			Assert.isEqual(2, mock.calls.length, "Wrong number of calls registered");
			Assert.isEqual(1, mock.calls[0][0], "Wrong argument value saved");
			Assert.isEqual(2, mock.calls[0][1], "Wrong argument value saved");
			Assert.isEqual(3, mock.calls[0][2], "Wrong argument value saved");
			Assert.isEqual(4, mock.calls[1][0], "Wrong argument value saved");
			Assert.isEqual(5, mock.calls[1][1], "Wrong argument value saved");
			Assert.isEqual(6, mock.calls[1][2], "Wrong argument value saved");
			Assert.isEqual(2, mock.returns.length, "Wrong number of return values saved");
			Assert.isEqual("undefined", typeof mock.returns[0], "Wrong return value saved");
			Assert.isEqual("undefined", typeof mock.returns[1], "Wrong return value saved");
			Assert.isEqual(2, mock.exceptions.length, "Wrong number of exceptions");
			Assert.isNull(mock.exceptions[0], "Exception was not null");
			Assert.isNull(mock.exceptions[1], "Exception was not null");

			mock.reset();
			Assert.isEqual(41, target.mockMe(11, 13, 17), "Target object wasn't reset");
			Assert.isEqual(1, target.dontMock(), "Target object was reset incorrectly");
		},

		mock_exception: function () {
			var target = {
				func: function () { return 1; }
			};

			var mock = Test.mock(target, "func", function () {
				throw Error("Test Exception");
			});

			try {
				target.func(1, 2, 3);
				Assert.fail("Mock did not throw an exception");
			}
			catch (ex) {
				Assert.isEqual("Test Exception", ex.message, "Wrong exception thrown");
			}

			try {
				target.func(4, 5, 6);
				Assert.fail("Mock did not throw an exception");
			}
			catch (ex) {
				Assert.isEqual("Test Exception", ex.message, "Wrong exception thrown");
			}

			Assert.isEqual(2, mock.calls.length, "Wrong number of calls registered");
			Assert.isEqual(1, mock.calls[0][0], "Wrong argument value saved");
			Assert.isEqual(2, mock.calls[0][1], "Wrong argument value saved");
			Assert.isEqual(3, mock.calls[0][2], "Wrong argument value saved");
			Assert.isEqual(4, mock.calls[1][0], "Wrong argument value saved");
			Assert.isEqual(5, mock.calls[1][1], "Wrong argument value saved");
			Assert.isEqual(6, mock.calls[1][2], "Wrong argument value saved");

			Assert.isEqual(2, mock.returns.length, "Wrong number of return values saved");
			Assert.isEqual("undefined", typeof mock.returns[0], "Wrong return value saved");
			Assert.isEqual("undefined", typeof mock.returns[1], "Wrong return value saved");

			Assert.isEqual(2, mock.exceptions.length, "Wrong number of exceptions saved");
			Assert.isEqual("Test Exception", mock.exceptions[0].message, "Wrong exception saved");
			Assert.isEqual("Test Exception", mock.exceptions[1].message, "Wrong exception saved");
		},

		mockFunction_returnValue: function () {
			var func = Test.mockFunction(123);

			Assert.isSame(123, func(1), "Incorrect return value from function");
			Assert.isSame(123, func("A", "b"), "Incorrect return value from function");
			Assert.isSame(123, func(true, false, 3, "four"), "Incorrect return value from function");
			Assert.isSame(3, func.calls.length, "Incorrect number of calls recorded");
			Assert.arrayEqual([1], func.calls[0], "Incorrect arguments stored");
			Assert.arrayEqual(["A", "b"], func.calls[1], "Incorrect arguments stored");
			Assert.arrayEqual([true, false, 3, "four"], func.calls[2], "Incorrect arguments stored");
		},

		mockFunction_noReturnValue: function () {
			var func = Test.mockFunction();

			Assert.isSame(undefined, func(1), "Incorrect return value from function");
			Assert.isSame(undefined, func("A", "b"), "Incorrect return value from function");
			Assert.isSame(undefined, func(true, false, 3, "four"), "Incorrect return value from function");
			Assert.isSame(3, func.calls.length, "Incorrect number of calls recorded");
			Assert.arrayEqual([1], func.calls[0], "Incorrect arguments stored");
			Assert.arrayEqual(["A", "b"], func.calls[1], "Incorrect arguments stored");
			Assert.arrayEqual([true, false, 3, "four"], func.calls[2], "Incorrect arguments stored");
		},

		mockFunction_returnValueByFunction: function () {
			var func = Test.mockFunction(function (a, b, c) {
				return a + b + c;
			});

			Assert.isSame(6, func(1, 2, 3), "Incorrect return value from function");
			Assert.isSame("ABC", func("A", "B", "C"), "Incorrect return value from function");
			Assert.isSame(2, func.calls.length, "Incorrect number of calls recorded");
			Assert.arrayEqual([1, 2, 3], func.calls[0], "Incorrect arguments stored");
			Assert.arrayEqual(["A", "B", "C"], func.calls[1], "Incorrect arguments stored");
		},


		spy: function () {
			var target = {
				spyMe: function(a, b, c) {
					Assert.areEqual(target, this, "Incorrect this pointer in spied function");
					return a + b + c;
				},
				dontSpy: function () {
					Assert.areEqual(target, this, "Incorrect this pointer in non-spied function");
					return 1;
				}
			}

			var spy = Test.spy(target, "spyMe");

			Assert.isEqual(1, target.dontSpy(), "Target object was altered incorrectly");
			Assert.isEqual(6, target.spyMe(1, 2, 3), "Spied function returned a value");
			Assert.isEqual(15, target.spyMe(4, 5, 6), "Spied function returned a value");
			Assert.isEqual(2, spy.calls.length, "Wrong number of calls registered");
			Assert.isEqual(1, spy.calls[0][0], "Wrong argument value saved");
			Assert.isEqual(2, spy.calls[0][1], "Wrong argument value saved");
			Assert.isEqual(3, spy.calls[0][2], "Wrong argument value saved");
			Assert.isEqual(4, spy.calls[1][0], "Wrong argument value saved");
			Assert.isEqual(5, spy.calls[1][1], "Wrong argument value saved");
			Assert.isEqual(6, spy.calls[1][2], "Wrong argument value saved");
			Assert.isEqual(2, spy.returns.length, "Wrong number of return values saved");
			Assert.isEqual(6, spy.returns[0], "Wrong return value saved");
			Assert.isEqual(15, spy.returns[1], "Wrong return value saved");
			Assert.isEqual(2, spy.exceptions.length, "Wrong number of exceptions");
			Assert.isNull(spy.exceptions[0], "Exception was not null");
			Assert.isNull(spy.exceptions[1], "Exception was not null");

			spy.reset();
			Assert.isEqual(24, target.spyMe(7, 8, 9), "Target object wasn't reset");
			Assert.isEqual(1, target.dontSpy(), "Target object was reset incorrectly");
			Assert.isEqual(2, spy.calls.length, "Additional calls were registered in the spy");
			Assert.isEqual(2, spy.returns.length, "Additional returns were registered in the spy");
		},

		spy_correctThis: function () {
			var target = {
				data: 37,
				func: function () {
					return this.data;
				}
			}

			var spy = Test.spy(target, "func");

			Assert.isSame(37, target.func(), "Target function didn't return correct value");
			Assert.isSame(1, spy.calls.length, "Wrong number of calls registered");
			Assert.isSame("undefined", typeof spy.calls[0][0], "Wrong argument data registered");
			Assert.isSame(37, spy.returns[0], "Wrong return value registered");
			Assert.isNull(spy.exceptions[0], "Execption was not null");
		},

		spy_exception: function () {
			var target = {
				func: function () {
					throw new Error("Spied Exception");
				}
			};

			var spy = Test.spy(target, "func");

			try {
				target.func(1, 2, 3);
				Assert.fail("Spy did not throw an exception");
			}
			catch (ex) {
				Assert.isEqual("Spied Exception", ex.message, "Wrong exception thrown");
			}

			try {
				target.func(4, 5, 6);
				Assert.fail("Spy did not throw an exception");
			}
			catch (ex) {
				Assert.isEqual("Spied Exception", ex.message, "Wrong exception thrown");
			}

			Assert.isEqual(2, spy.calls.length, "Wrong number of calls registered");
			Assert.isEqual(1, spy.calls[0][0], "Wrong argument value saved");
			Assert.isEqual(2, spy.calls[0][1], "Wrong argument value saved");
			Assert.isEqual(3, spy.calls[0][2], "Wrong argument value saved");
			Assert.isEqual(4, spy.calls[1][0], "Wrong argument value saved");
			Assert.isEqual(5, spy.calls[1][1], "Wrong argument value saved");
			Assert.isEqual(6, spy.calls[1][2], "Wrong argument value saved");

			Assert.isEqual(2, spy.returns.length, "Wrong number of return values saved");
			Assert.isEqual("undefined", typeof spy.returns[0], "Wrong return value saved");
			Assert.isEqual("undefined", typeof spy.returns[1], "Wrong return value saved");

			Assert.isEqual(2, spy.exceptions.length, "Wrong number of exceptions saved");
			Assert.isEqual("Spied Exception", spy.exceptions[0].message, "Wrong exception saved");
			Assert.isEqual("Spied Exception", spy.exceptions[1].message, "Wrong exception saved");
		},

		monitor_noReturn: function () {
			var monitor = Test.monitor();

			var r = monitor(1, 2);
			Assert.isEqual("undefined", typeof r, "Wrong return value");
			r = monitor("Three");
			Assert.isEqual("undefined", typeof r, "Wrong return value");
			r = monitor(4, "V", true);
			Assert.isEqual("undefined", typeof r, "Wrong return value");

			Assert.isEqual(3, monitor.calls.length, "Wrong number of calls registered");
			Assert.isSame(1, monitor.calls[0][0], "Wrong argument value saved");
			Assert.isSame(2, monitor.calls[0][1], "Wrong argument value saved");
			Assert.isSame("Three", monitor.calls[1][0], "Wrong argument value saved");
			Assert.isSame(4, monitor.calls[2][0], "Wrong argument value saved");
			Assert.isSame("V", monitor.calls[2][1], "Wrong argument value saved");
			Assert.isSame(true, monitor.calls[2][2], "Wrong argument value saved");
		},

		monitor_singleReturn: function () {
			var monitor = Test.monitor("foo");

			var r = monitor(3, 4);
			Assert.isEqual("foo", r, "Wrong return value");
			r = monitor(5, 6, 7);
			Assert.isEqual("foo", r, "Wrong return value");
			r = monitor(1);
			Assert.isEqual("foo", r, "Wrong return value");

			Assert.isEqual(3, monitor.calls.length, "Wrong number of calls registered");
			Assert.isSame(3, monitor.calls[0][0], "Wrong argument value saved");
			Assert.isSame(4, monitor.calls[0][1], "Wrong argument value saved");
			Assert.isSame(5, monitor.calls[1][0], "Wrong argument value saved");
			Assert.isSame(6, monitor.calls[1][1], "Wrong argument value saved");
			Assert.isSame(7, monitor.calls[1][2], "Wrong argument value saved");
			Assert.isSame(1, monitor.calls[2][0], "Wrong argument value saved");
		},

		monitor_multipleReturn: function () {
			var monitor = Test.monitor([1, "two", "C"]);

			var r = monitor("a");
			Assert.isSame(1, r, "Wrong return value");
			r = monitor("b", "c");
			Assert.isSame("two", r, "Wrong return value");
			r = monitor("d", null);
			Assert.isSame("C", r, "Wrong return value");
			r = monitor();
			Assert.isSame("C", r, "Wrong return value");

			Assert.isEqual(4, monitor.calls.length, "Wrong number of calls registered");
			Assert.isSame("a", monitor.calls[0][0], "Wrong argument value saved");
			Assert.isSame("b", monitor.calls[1][0], "Wrong argument value saved");
			Assert.isSame("c", monitor.calls[1][1], "Wrong argument value saved");
			Assert.isSame("d", monitor.calls[2][0], "Wrong argument value saved");
			Assert.isSame(null, monitor.calls[2][1], "Wrong argument value saved");
			Assert.isSame(0, monitor.calls[3].length, "Wrong argument value saved");
		},
	};

	Tests.passedWithBeforeAndAfter.before = function () {
		Test.log("Before test");
	};
	Tests.passedWithBeforeAndAfter.after = function () {
		Test.log("After test");
	};

	// Uncomment the line below to run the test tests
	window.Tests.Tests = Tests;
})();
