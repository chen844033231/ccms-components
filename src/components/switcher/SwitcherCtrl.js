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
		this.valueOn = this.ngModelController ? (typeof this.valueOn === 'undefined' ? true : this.valueOn) : true;
		this.valueOff = this.ngModelController ? (typeof this.valueOff === 'undefined' ? false : this.valueOff) : false;
		this.textOn = typeof this.textOn === 'undefined' ? DEFAULT_OPTIONS.textOn : this.textOn;
		this.textOff = typeof this.textOff === 'undefined' ? DEFAULT_OPTIONS.textOff : this.textOff;
		this.opened = true;
		this.text = this.opened ? this.textOn : this.textOff;
		this.updateNgModel(this._state);
	}

	/**
	 * @name updateNgModel
	 * @param {boolean} state
	 */
	updateNgModel(state) {
		this.ngModelController.$setViewValue(state ? this.valueOn : this.valueOff); // change model value & $setViewValue method will trigger method binding on model
	}

	/**
	 * @name changeStatus
	 */
	changeStatus() {
		if (!this.disable) {
			this.opened = !this.opened;
			this.text = this.opened ? this.textOn : this.textOff;
		}
	}
}
