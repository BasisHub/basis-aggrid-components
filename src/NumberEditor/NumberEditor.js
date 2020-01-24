/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from '../Component'

/**
 * Numbers Editor
 *
 * Handle number values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **numberMinValue**   | undefined    | min allowed value
 * | **numberMaxValue**   | undefined    | max allowed value
 * | **numberStepValue**       | undefined  	| number of step by increment or decrement
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class NumberEditor extends Component {
  /**
   *  @inheritDoc
   */
  init(params) {
    let startValue

    this._focusAfterAttached = params.cellStartedEdit
    if (this._focusAfterAttached) {
      let keyPressBackspaceOrDelete =
        params.keyPress == 32 || params.keyPress == 46 // space // delete

      if (keyPressBackspaceOrDelete) {
        startValue = ''
      } else if (params.charPress) {
        startValue = params.charPress
      } else {
        startValue = params.value
        if (params.keyPress != 113) {
          //F2
          this._highlightAllOnFocus = true
        }
      }
    } else {
      startValue = params.value
    }

    this._gui = document.createElement('label')
    this._gui.className = 'numberEditor ag-input-wrapper'
    this._gui.tabIndex = '0'

    // input
    this._input = document.createElement('input')
    this._input.className = 'numberEditor__input ag-cell-edit-input'
    this._input.type = 'number'
    this._input.value = startValue
    this._input.tabIndex = 0

    this._gui.appendChild(this._input)

    const min = this.getOption('numberMinValue', params)
    const max = this.getOption('numberMaxValue', params)
    const step = this.getOption('numberStepValue', params)

    if (min !== 'null') {
      this._input.min = min
    }

    if (max !== 'null') {
      this._input.max = max
    }

    if (step !== 'null') {
      this._input.step = step
    }

    this._onKeyDown = this._onKeyDown.bind(this)
    this._onChange = this._onChange.bind(this)

    this._input.addEventListener('keydown', this._onKeyDown)
    this._input.addEventListener('change', this._onChange)

    // update `currentValue` the value which this component is managing
    this._currentValue = startValue
  }

  /**
   *  @inheritDoc
   */
  getGui() {
    return this._gui
  }

  /**
   *  @inheritDoc
   */
  destroy() {
    this._input.removeEventListener('keydown', this._onKeyDown)
    this._input.removeEventListener('change', this._onChange)
  }

  /**
   * Gets called once after GUI is attached to DOM.
   *
   * Make sure container is always focused to listen to key changes
   */
  afterGuiAttached() {
    if (this._highlightAllOnFocus) {
      this._input.select()
    } else {
      if (this._focusAfterAttached) {
        this.focusIn()
      }
    }
  }

  /**
   * Get The component value
   *
   * @return {Number}
   */
  getValue() {
    const casted = Number(this._currentValue)
    return isNaN(casted) ? this._currentValue : casted
  }

  /**
   * If doing full row edit, then gets called when tabbing into the cell.
   */
  focusIn() {
    this._input.focus()
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
   * Update `currentValue` when the checkbox value is changed
   */
  _onChange() {
    this._currentValue = this._input.value
  }

  /**
   * Monitor keys [top,bottom,enter] to change the input value
   *
   * @param {Event} event
   */
  _onKeyDown(event) {
    const key = event.which || event.keyCode

    if (key == 38 || key == 40) {
      // top | down
      this._currentValue = this._input.value
      event.stopPropagation()
    } else if (key == 13) {
      // enter
      this._currentValue = this._input.value
    }
  }
}

export default NumberEditor
