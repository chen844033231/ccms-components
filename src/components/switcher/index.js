/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/8/17
 */

import angular from 'angular';

import './_switcher.scss';
import template from './switcher.tpl.html';
import controller from './SwitcherCtrl';

const componentSetting = {
	template,
	bindings: {
		ngModel: '<',
		ngTrueValue: '<?',
		ngFalseValue: '<?',
		ngDisabled: '<?',
		openText: '@?',
		closeText: '@?'
	},
	require: {
		ngModelController: '?ngModel'
	},
	controller
};

export default angular.module('ccms.components.switcher', [])
	.component('ccSwitcher', componentSetting)
	.name;
