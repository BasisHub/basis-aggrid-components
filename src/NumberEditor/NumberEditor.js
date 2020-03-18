/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from '../Component'
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
 * | **numberMask**       | undefined  	| a bbj number mask to validate the number against
 * |**numberGroupingSeparator** | , | a char which will be used as a grouping separator. The options is used only when **numberMask** is defined |
 * |**numberDecimalSeparator** | . | a char which will be used as a decimal separator. The options is used only when **numberMask** is defined  |
 * |**numberForceTrailingZeros** | false | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1 . The options is used only when **numberMask** is defined|
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

    // make params it accessible from tall methods
    this._params = params

    // create the input wrapper
    this._gui = document.createElement('label')
    this._gui.className = 'numberEditor ag-input-wrapper'
    this._gui.tabIndex = '0'

    // create the input
    this._inputGeneratedId = Math.random()
      .toString(16)
      .slice(2, 10) // generate random id
    this._input = document.createElement('input')
    this._input.className = 'numberEditor__input ag-cell-edit-input'
    this._input.id = `el-${this._inputGeneratedId}`
    this._input.type = mask ? 'text' : 'number'
    this._input.value = startValue
    this._input.tabIndex = 0

    // place the input inside the wrapper
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

    // If there is a mask then we use the `Basis.InputMasking.NumberInput`
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
      this._numberInput = new Basis.InputMasking.NumberInput({
        elements: [this._input],
        // doc: this.getDoc(params),
        onUpdate: this._onNumberInputUpdate,
        onInvalid: this._onNumberInputInvalid,
      })
    } else {
      this._input.addEventListener('keydown', this._onInputKeyDownUp)
      this._input.addEventListener('keyup', this._onInputKeyDownUp)
      this._input.addEventListener('change', this._onChange)
    }

    this._gui.addEventListener('keydown', this._onComponentKeyDown)

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
      this._input.removeEventListener('keydown', this._onInputKeyDownUp)
      this._input.removeEventListener('keyup', this._onInputKeyDownUp)
      this._input.removeEventListener('change', this._onChange)
    } else {
      this._numberInput.destroy()
    }

    this._gui.removeEventListener('keydown', this._onComponentKeyDown)
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
    const casted = Number(this._currentValue)
    const retValue = isNaN(casted) ? this._currentValue : casted
    return this.__isMasked__ ? retValue : this._params.parseValue(retValue)
  }

  /**
   * If doing full row edit, then gets called when tabbing into the cell.
   */
  focusIn() {
    if (!this.__isMasked__) {
      this._input.focus()
    } else {
      this._input.click()
    }
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
   * Update the current value when the NumberInput components fire the update
   * event.
   *
   * @param {String} _masked  the masked value
   * @param {Number} unmasked  the unmasked value
   */
  @autobind
  _onNumberInputUpdate(_masked, unmasked) {
    this._currentValue = unmasked
    this.focusIn()
    // we pass the last captured event back to the grid to handle it internally
    if (this.__lastComponentKeyboardPress__) {
      this._params.onKeyDown(this.__lastComponentKeyboardPress__)
      this.__lastComponentKeyboardPress__ = null
    }
  }
  /**
   * On invalid inputs , update the input with a custom validity message
   *
   * @param {String|Object} error the error message reported by NumberInput
   * @param {HTMLElement} input The input element used instance
   */
  @autobind
  _onNumberInputInvalid(error, input) {
    this.focusIn()
    // restore the original value of the cell
    this._currentValue = this._params.value
    if (typeof error === 'string') {
      input.setCustomValidity(error)
    } else {
      input.setCustomValidity(error.message)
    }
  }

  /**
   * Capture all keyboard events to allow value processing by the NumberInput component
   *
   * @param {KeyboardEvent} e
   */
  @autobind
  _onComponentKeyDown(e) {
    const key = event.which || event.keyCode

    const isNavigationKey =
      key === 37 || // left
      key === 38 || // up
      key === 39 || // right
      key === 40 || // down
      key === 33 || // page up
      key === 34 || // page down
      key === 35 || // page home
      key === 36 || // page end
      key === 13 // enter

    if (isNavigationKey) {
      event.stopPropagation()
      // save the last capture key so NumberInput can pass it again to the grid.
      this.__lastComponentKeyboardPress__ = e
    }
  }

  /**
   * Listen to key changes and validate the input
   *
   * @param {Event} event
   */
  @autobind
  _onInputKeyDownUp(event) {
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

    // we pass the last captured event back to the grid to handle it internally
    if (this.__lastComponentKeyboardPress__) {
      this._params.onKeyDown(this.__lastComponentKeyboardPress__)
      this.__lastComponentKeyboardPress__ = null
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
      // restore the original value
      this._currentValue = this._params.value
    } else {
      input.classList.remove('bbj-mask-error')
      input.classList.add('bbj-mask-success')
    }

    return isValid
  }
}

export default NumberEditor
