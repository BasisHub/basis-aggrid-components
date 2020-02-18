/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from '../Component'
import NumberInput from 'basis-input-masking/src/NumberInput'
import { autobind, override } from 'core-decorators'

import './style.scss'

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
  @override
  init(params) {
    const min = this.getOption('numberMinValue', params)
    const max = this.getOption('numberMaxValue', params)
    const step = this.getOption('numberStepValue', params)
    const mask = this.getOption('numberMask', params)

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
    this._input.id = `el-${Math.random()
      .toString(16)
      .slice(2, 10)}` // generate random id
    this._input.type = mask ? 'text' : 'number'
    this._input.value = startValue
    this._input.tabIndex = 0

    this._gui.appendChild(this._input)

    if (min !== null) {
      mask ? (this._input.dataset.min = min) : (this._input.min = min)
    }

    if (max !== null) {
      mask ? (this._input.dataset.max = max) : (this._input.max = max)
    }

    if (step !== null) {
      mask ? (this._input.dataset.step = step) : (this._input.step = step)
    }

    if (mask) {
      const groupingSeparator = this.getOption(
        'numberGroupingSeparator',
        params,
        this.getOption('numberGroupSep', params)
      )
      const decimalSeparator = this.getOption(
        'numberDecimalSeparator',
        params,
        this.getOption('numberDecimalSep', params)
      )
      const forceTrailingZeros = this.getOption(
        'numberForceTrailingZeros',
        params
      )

      if (groupingSeparator !== null) {
        this._input.dataset.groupingSeparator = groupingSeparator
      }

      if (decimalSeparator !== null) {
        this._input.dataset.decimalSeparator = decimalSeparator
      }

      if (forceTrailingZeros !== null) {
        this._input.dataset.forceTrailingZeros = forceTrailingZeros
      }

      this._input.dataset.mask = mask
      this._numberInput = new NumberInput({
        elements: [this._input],
        onUpdate: (_masked, unmasked) => {
          this._currentValue = unmasked
          this.focusIn()
        },
        onInvalid: (error, input) => {
          this.focusIn()
          if (typeof error === 'string') {
            input.setCustomValidity(error)
          }
        },
      })
    } else {
      this._input.addEventListener('keydown', this._onKeyDownUp)
      this._input.addEventListener('keyup', this._onKeyDownUp)
      this._input.addEventListener('change', this._onChange)
    }

    // update `currentValue` the value which this component is managing
    this._currentValue = startValue
    this.__isMasked__ = mask && mask.length
  }

  /**
   *  @inheritDoc
   */
  @override
  destroy() {
    if (!this.__isMasked__) {
      this._input.removeEventListener('keydown', this._onKeyDownUp)
      this._input.removeEventListener('keyup', this._onKeyDownUp)
      this._input.removeEventListener('change', this._onChange)
    } else {
      this._numberInput.destroy()
    }
  }

  /**
   * Gets called once after GUI is attached to DOM.
   *
   * Make sure container is always focused to listen to key changes
   */
  afterGuiAttached() {
    if (!this.__isMasked__) {
      this._validateInput(this._input)
    }

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
    console.log('getValue', this._currentValue, this._input.value)
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
  @autobind
  _onChange(event) {
    const isValid = this._validateInput(event.target)
    if (isValid) {
      this._currentValue = this._input.value
    }
  }

  /**
   * Listen to key changes and validate the input
   *
   * @param {Event} event
   */
  @autobind
  _onKeyDownUp(event) {
    const isValid = this._validateInput(event.target)

    if (!isValid) {
      return
    }

    const key = event.which || event.keyCode

    if (key == 38 || key == 40) {
      // top | down
      this._currentValue = this._input.value
      event.stopPropagation()
    } else if (key == 13 || key === 9) {
      // enter
      this._currentValue = this._input.value
    }
  }

  /**
   * Validate the given input element
   *
   * @param {HTMLInputElement} input input element
   *
   * @return {Boolean} true when valid , false otherwise
   */
  _validateInput(input) {
    const isValid = input.checkValidity()

    if (!isValid) {
      input.classList.add('bbj-mask-error')
      input.classList.remove('bbj-mask-success')
    } else {
      input.classList.remove('bbj-mask-error')
      input.classList.add('bbj-mask-success')
    }

    return isValid
  }
}

export default NumberEditor
