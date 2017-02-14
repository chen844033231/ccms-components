/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/13/17
 */


;(function (angular, undefined) {

	'use strict';

	angular
		.module('app', ['ccms.components'])
		.controller('ctrl', function ($scope) {

			$scope.demo1 = false;
			$scope.demo2Disabled = false;
		});

})(window.angular);

