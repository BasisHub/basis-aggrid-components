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
 * Text Editor
 *
 * Handle text values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **textPattern**   | undefined    | A regular expression that the input's value must match in order for the value to pass constraint validation
 * | **textRequired**   | undefined    | Boolean. A value is required to consider the input valid
 * | **textMask**   | undefined    | A bbj string mask to validate the value
 * | **textTitle**   | null    | The input title , when null and the **textMask** options is defined , then we use the mask as title , when set to `default` we the browser's default title , otherwise the value defined in this option
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class TextEditor extends Component {
  /**
   *  @inheritDoc
   */
  @override
  init(params) {
    const pattern = this.getOption('textPattern', params)
    const required = this.getOption('textRequired', params)
    const mask = this.getOption('textMask', params)
    const title = this.getOption('textTitle', params)

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

    this._params = params

    this._gui = document.createElement('label')
    this._gui.className = 'textEditor ag-input-wrapper'
    this._gui.tabIndex = '0'

    // input
    this._input = document.createElement('input')
    this._input.className = 'textEditor__input ag-cell-edit-input'
    this._input.id = `el-${Math.random()
      .toString(16)
      .slice(2, 10)}` // generate random id
    this._input.type = 'text'
    this._input.value = startValue
    this._input.tabIndex = 0

    this._gui.appendChild(this._input)

    if (pattern !== null) {
      this._input.setAttribute('pattern', pattern)
    }

    if (required === true) {
      this._input.setAttribute('required', 'required')
    }

    if (title !== null) {
      if (title !== 'default') {
        this._input.title = title
      }
    } else if (mask) {
      this._input.title = mask
    }

    if (mask) {
      this._input.dataset.mask = mask
      this._textInput = new Basis.InputMasking.TextInput({
        elements: [this._input],
        onUpdate: (_masked, unmasked) => {
          this._currentValue = unmasked
          this.focusIn()
        },
        onInvalid: (error, input) => {
          if (typeof error === 'string') {
            input.setCustomValidity(error)
          }
        },
      })
    } else {
      this._input.addEventListener('keydown', this._onChange)
      this._input.addEventListener('input', this._onChange)
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
      this._input.removeEventListener('keydown', this._onChange)
      this._input.removeEventListener('input', this._onChange)
      this._input.removeEventListener('change', this._onChange)
    } else {
      this._textInput.destroy()
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
    return this._currentValue
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
   * Update `currentValue` on the input value is changed and it is valid
   */
  @autobind
  _onChange(event) {
    const isValid = this._validateInput(event.target)
    this._currentValue = this._params.value
    if (isValid) {
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

export default TextEditor
