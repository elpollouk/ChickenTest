(function () {
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
		},

		oddEven: function (testData) {
			Assert.isTrue(testData.value % 2 == 0, "Should fail if odd");
		}
	};

})();