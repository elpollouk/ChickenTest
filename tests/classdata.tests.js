(function (undefined) {
	"use strict";

	window.Tests.ClassData = {

		testData: [
			{
				testId: "One",
				value: 1
			},
			{
				testId: "Even",
				value: 2
			},
			{	
				value: 3
			},
			{
				testId: 40,
				value: 4
			}
		],

		noData: function () {},
		
		data: function (testData) {
			Test.log("Value = " + testData.value);
			Assert.isSame(undefined, testData.functionValue);
		},

		oddEven: function (testData) {
			Assert.isTrue(testData.value % 2 == 0, "Should fail if odd");
		},

		functionData: function (testData) {
			Test.log("Value = " + testData.value);
			Test.log("FunctionValue = " + testData.functionValue);
		},
	};

	window.Tests.ClassData.functionData.testData = [
		{
			testId: "F1",
			functionValue: 5
		},
		{
			testId: 20,
			functionValue: 6
		},
		{
			functionValue: 7
		}
	];

})();