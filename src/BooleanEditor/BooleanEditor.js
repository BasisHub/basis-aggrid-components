/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from '../Component'
import BooleanSwitch from '../BooleanSwitch'

/**
 * Booleans Editor
 *
 * Handle boolean values Editing
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **booleanUsedTrueValue**   | undefined    | the value to return when the editor changes the current cell value to true. in case it is undefined then we use the first item in **booleanTrueValue[]**
 * | **booleanUsedFalseValue**   | undefined    | the value to return when the editor changes the current cell value to false. in case it is undefined then we use the first item in **booleanFalseValue[]**
 * | **booleanTrueValue[]**       | true(bool)  	| The options describes what is considered `true`                                                                                	|
 * | **booleanFalseValue[]**      | false(bool) 	| The options describes what is considered `false`
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class BooleanEditor extends Component {
  /**
   *  @inheritDoc
   */
  init(params) {
    if (params.keyPress !== null) {
      this._value = Boolean(params.keyPress)
    } else if (params.charPress !== null) {
      this._value = Boolean(params.charPress)
    }

    this._trueValue = [].concat(
      this.getOption('booleanTrueValue', params, [true])
    )
    this._falseValue = [].concat(
      this.getOption('booleanFalseValue', params, [false])
    )

    this._returnTrueValue = this.getOption(
      'booleanUsedTrueValue',
      params,
      this._trueValue[0]
    )
    this._returnFalseValue = this.getOption(
      'booleanUsedFalseValue',
      params,
      this._falseValue[0]
    )

    this.focusAfterAttached = params.cellStartedEdit
    if (this.focusAfterAttached) {
      let keyPressBackspaceOrDelete =
        params.keyPress == 32 || params.keyPress == 46 // space // delete

      if (keyPressBackspaceOrDelete) {
        this._value = false
      } else if (params.charPress !== null) {
        this._value = params.charPress
      } else {
        this._value = params.value
      }
    } else {
      this._value = params.value
    }

    this._value = this._convertValue(
      this._value,
      this._trueValue,
      this._falseValue
    )

    this.switcher = new BooleanSwitch(this._value, switcher => {
      this._value = this._convertValue(
        switcher.isChecked(),
        this._trueValue,
        this._falseValue
      )
    })
    this.switcher.init(params)

    this.focusIn()
  }

  /**
   *  @inheritDoc
   */
  getGui() {
    return this.switcher.getGui()
  }

  /**
   *  @inheritDoc
   */
  destroy() {
    this.switcher.destroy()
  }

  /**
   * Gets called once after GUI is attached to DOM.
   * Make sure the container is always focused and listening to key changes
   */
  afterGuiAttached() {
    if (this.focusAfterAttached) {
      this.focusIn()
    }
  }

  /**
   * Get the final value to the grid, the result of the editing
   *
   * @return {Boolean}
   */
  getValue() {
    return this._value ? this._returnTrueValue : this._returnFalseValue
  }

  /**
   * Gets called once after initialized and returns false so the editor appears in the cell
   *
   * @return {Boolean} always false
   **/
  isPopup() {
    return false
  }

  /**
   * If doing full row edit, then gets called when tabbing into the cell.
   */
  focusIn() {
    this.switcher.focus()
  }

  /**
   * If doing full row edit, then gets called when tabbing out of the cell.
   */
  focusOut() {
    this.switcher.setDisabled(true)
  }

  /**
   * @param {Boolean} value the current cell value
   * @param {String|Number} trueValue true value alias
   * @param {String|Number} falseValue false value alias
   */
  _convertValue(value, trueValue, falseValue) {
    return trueValue.indexOf(value) > -1
      ? true
      : falseValue.indexOf(value) > -1
      ? false
      : value
  }
}

export default BooleanEditor
