/*
 * This file is part of basis-aggrid-components lib.
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

    this._trueValue = this._trueValue.map(x => String(x))
    this._falseValue = this._falseValue.map(x => String(x))

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

    this._switcher = new BooleanSwitch(this._value, switcher => {
      this._value = this._convertValue(
        switcher.isChecked(),
        this._trueValue,
        this._falseValue
      )
    })
    this._switcher.init(params)
  }

  /**
   *  @inheritDoc
   */
  getGui() {
    return this._switcher.getGui()
  }

  /**
   *  @inheritDoc
   */
  destroy() {
    this._switcher.destroy()
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
   *
   * @return {Boolean}
   */
  focusIn() {
    this._switcher.setDisabled(false)
    this._switcher.focus()
    return true
  }

  /**
   * If doing full row edit, then gets called when tabbing out of the cell.
   *
   * @return {Boolean}
   */
  focusOut() {
    this._switcher.setDisabled(true)
    return true
  }

  /**
   * @param {Boolean} value the current cell value
   * @param {String|Number} trueValue true value alias
   * @param {String|Number} falseValue false value alias
   */
  _convertValue(value, trueValue, falseValue) {
    const valueAsString = String(value)

    return trueValue.indexOf(valueAsString) > -1
      ? true
      : falseValue.indexOf(valueAsString) > -1
      ? false
      : value
  }
}

export default BooleanEditor
