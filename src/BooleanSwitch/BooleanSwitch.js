/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { autobind, override } from 'core-decorators'
import Component from '../Component'
import './style.scss'

/**
 * Boolean Renderer
 *
 * Simple toggle switch to handle boolean values
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class BooleanSwitch extends Component {
  /**
   * Construct new BooleanSwitch Component
   *
   * @param {Boolean} [initialValue = false] the default state , checked or unchecked
   * @param {Function} [listener = null] a listener to be called when the state is changed
   */
  constructor(initialValue = false, listener = null) {
    super()
    this.setChecked(initialValue)
    this.setListener(listener)
    this.setDisabled(false)
  }

  /**
   *  @inheritDoc
   */
  @override
  init(params) {
    this._params = params
    this._onClick = this._onClick.bind(this)
    this._onKeydown = this._onKeydown.bind(this)

    this._gui = this.getDoc(params).createElement('div')
    this._gui.className = 'boolSwitch__wrapper'
    this._gui.tabIndex = -1

    this.render()
  }

  /**
   * Render the switch slider and hidden input.
   */
  render() {
    const doc = this.getDoc(this._params)

    const boolSwitch = document.createElement('div')
    boolSwitch.className = 'boolSwitch'

    // input
    this._input = doc.createElement('input')
    this._input.id = Math.random()
    this._input.name = 'checkbox'
    this._input.className = 'boolSwitch__checkbox'
    this._input.type = 'checkbox'
    this._input.checked = this.isChecked()
    this._input.disabled = this.isDisabled()
    this._input.tabIndex = '0'

    // label
    const label = document.createElement('label')
    label.className = 'boolSwitch__label'
    label.for = this._input.id
    label.innerHTML = /* html */ `
      <span class="boolSwitch__inner"></span>
      <span class="boolSwitch__switch"></span>
    `

    // attache input and slider to component
    boolSwitch.appendChild(this._input)
    boolSwitch.appendChild(label)

    boolSwitch.addEventListener('click', this._onClick)
    this._gui.addEventListener('keydown', this._onKeydown)

    this._gui.appendChild(boolSwitch)
  }

  /**
   *  @inheritDoc
   */
  @override
  destroy() {
    const boolSwitch = this._gui.querySelector('.boolSwitch')
    boolSwitch.removeEventListener('click', this._onClick)
    this._gui.removeEventListener('keydown', this._onKeydown)
  }

  /**
   * Focus the component
   */
  focus() {
    this._gui.focus()
  }

  /**
   * Set a listener to be called when the switch state is changed
   *
   * @param {Function} listener
   */
  setListener(listener) {
    this._listener = listener
  }

  /**
   * Get the listener instance , if
   *
   * @return {Function|null}
   */
  getListener() {
    return this._listener
  }

  /**
   * Set checked
   *
   * @param {Boolean} value true to check , false to uncheck
   */
  setChecked(value) {
    this._checked = value
    if (this._input) {
      this._input.checked = value
    }
  }

  /**
   * Check the if switch is checked
   *
   * @return {Boolean}  true when checked , false otherwise
   */
  isChecked() {
    return this._checked
  }

  /**
   * Toggle the component state
   */
  toggle() {
    this.setChecked(!this.isChecked())
  }

  /**
   * Set disabled
   *
   * @param {Boolean} value true to disabled , false to enable
   */
  setDisabled(value) {
    this._disabled = value
    if (this._input) {
      this._input.disabled = value
    }
  }

  /**
   * Check if the switch is disabled
   *
   * @return {Boolean} true when disabled , false otherwise
   */
  isDisabled() {
    return this._disabled
  }

  /**
   * The default click listener of the switch. It will toggle the state and fire any registered listener
   *
   * @param {Event} e the event object
   *
   * @protected
   */
  @autobind
  // eslint-disable-next-line no-unused-vars
  _onClick(e) {
    if (this._disabled) {
      return false
    }

    this.toggle()

    if (this._listener) {
      this._listener(this)
    }
  }

  /**
   * The default key listener of the switch. It will toggle the state using keyboard keys (left , right , space)
   * and fire any registered listener
   *
   * @param {Event} e  the event object
   *
   * @protected
   */
  @autobind
  _onKeydown(e) {
    if (this._disabled) {
      return false
    }

    const key = e.which || e.keyCode

    // space
    if (key == 32) {
      this.toggle()
      if (this._listener) {
        this._listener(this)
      }
      e.stopPropagation()
    }
    // right
    else if (key == 39) {
      this.setChecked(true)
      if (this._listener) {
        this._listener(this)
      }
      e.stopPropagation()
    }
    // left
    else if (key == 37) {
      this.setChecked(false)
      if (this._listener) {
        this._listener(this)
      }
      e.stopPropagation()
    }
  }
}

export default BooleanSwitch
