(function (undefined) {
	"use strict";

	window.Tests.FunctionData = {
		noData: function () {},
		
		data: function (testData) {
			Test.log("Value = " + testData.value);
			Assert.isSame(undefined, testData.functionValue);
		},

		oddEven: function (testData) {
			Assert.isTrue(testData.value % 2 == 0, "Should fail if odd");
		},
	};

	window.Tests.FunctionData.data.testData = [
		{
			testId: "One",
			value: 1
		},
		{
			testId: "Two",
			value: 2
		},
		{
			value: 3
		},
		{
			testId: 40,
			value: 4
		}
	];

	window.Tests.FunctionData.oddEven.testData = [
		{
			testId: "Odd 1",
			value: 3
		},
		{
			testId: "Odd 2",
			value: 5
		},
		{
			testId: "Odd 3",
			value: 7
		},
		{
			testId: "Even 1",
			value: 2
		},
		{
			testId: "Even 2",
			value: 4
		}
	];

})();
