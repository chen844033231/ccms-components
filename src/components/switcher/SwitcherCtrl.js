/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 2/8/17
 */
const DEFAULT_OPTIONS = {
	textOn: '已开启',
	textOff: '已关闭'
};

export default class SwitcherController {
	/**
	 * @name $onInit
	 * controller init method, init values
	 */
	$onInit() {
		this.ngTrueValue = this.ngModelController ? (typeof this.ngTrueValue === 'undefined' ? true : this.ngTrueValue) : true;
		this.ngFalseValue = this.ngModelController ? (typeof this.ngFalseValue === 'undefined' ? false : this.ngFalseValue) : false;
		this.textOn = typeof this.textOn === 'undefined' ? DEFAULT_OPTIONS.textOn : this.textOn;
		this.textOff = typeof this.textOff === 'undefined' ? DEFAULT_OPTIONS.textOff : this.textOff;
		this.opened = true;
		this.text = this.opened ? this.textOn : this.textOff;
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

	/**
	 * @name changeStatus
	 * change the status of opened
	 */
	changeStatus() {
		this.opened = !this.opened;
		this.text = this.opened ? this.textOn : this.textOff;
	}
}
