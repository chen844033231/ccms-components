/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/8/17
 */
const DEFAULT_OPTIONS = {
	onText: '已开启',
	offText: '已关闭'
};

export default class SwitcherController {
	/**
	 * @name $onInit
	 * controller init method, init values
	 */
	$onInit() {
		this.ngTrueValue = this.ngModelController ? (typeof this.ngTrueValue === 'undefined' ? true : this.ngTrueValue) : true;
		this.ngFalseValue = this.ngModelController ? (typeof this.ngFalseValue === 'undefined' ? false : this.ngFalseValue) : false;
		this.onText = typeof this.onText === 'undefined' ? DEFAULT_OPTIONS.onText : this.onText;
		this.offText = typeof this.offText === 'undefined' ? DEFAULT_OPTIONS.offText : this.offText;
		this.opened = false;
		this.text = this.opened ? this.onText : this.offText;
		this.updateNgModel(this._state);
	}

	/**
	 * @name updateNgModel
	 * @param {boolean} state
	 * update ng-model value
	 */
	updateNgModel(state) {
		this.ngModelController.$setViewValue(state ? this.ngTrueValue : this.ngFalseValue); // change model value & $setViewValue method will trigger method binding on model
	}

	changeStatus() {
		this.opened = !this.opened;
		this.text = this.opened ? this.onText : this.offText;
	}
}
