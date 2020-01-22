/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from '../Component'
import BooleanSwitch from '../BooleanSwitch'

/* eslint-disable no-prototype-builtins */

/**
 * Booleans Renderer
 *
 * Handle boolean values Rendering
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **booleanTrueRenderValue**  	| switch      	| The option controls how to render `true` values. <br> **switch** is a special value used to render true values as a switch component  	|
 * | **booleanFalseRenderValue** 	| switch      	| The option controls how to render `false` values. <br> **switch** is a special value used to render true values as a switch component 	|
 * | **booleanTrueValue[]**       | true(bool)  	| The options describes what is considered `true`                                                                                	|
 * | **booleanFalseValue[]**      | false(bool) 	| The options describes what is considered `false`                                                                               	|
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class BooleanRenderer extends Component {
  /**
   * Construct new BooleanRenderer
   */
  constructor() {
    super()

    // will this affect BBj bui ?
    this._gui = document.createElement('span')
    this._gui.className = 'boolRenderer'
    this._gui.style.fontFamily =
      '"Segoe UI Symbol",Trebuchet, Arial, sans-serif'
  }

  /**
   *  @inheritDoc
   */
  init(params) {
    this.refresh(params, true)
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
    if (this._switcher) {
      this._switcher.destroy()
    }
  }

  /**
   * Refresh the cell l
   *
   * @param {Object} params cell renderer params
   * @param {Boolean} isInit true when this method is being called in `init` phase , false otherwise
   *
   * @return {Boolean} true if the refresh succeeded, otherwise return false.
   */
  refresh(params, isInit) {
    const value = params.valueFormatted ? params.valueFormatted : params.value

    if (!params.hasOwnProperty('value')) {
      this._gui.innerHTML = ''
    } else {
      const booleanTrueRenderValue = this.getOption(
        'booleanTrueRenderValue',
        params
      )
      const booleanFalseRenderValue = this.getOption(
        'booleanFalseRenderValue',
        params
      )
      const booleanTrueValue = [].concat(
        this.getOption('booleanTrueValue', params, [true])
      )
      const booleanFalseValue = [].concat(
        this.getOption('booleanFalseValue', params, [false])
      )

      // handle true values
      if (booleanTrueValue.indexOf(value) > -1) {
        if (!booleanTrueRenderValue || booleanTrueRenderValue === 'switch') {
          const switcher = this._getSwitcher(params)
          switcher.setChecked(true)
          if (isInit) {
            this._gui.appendChild(switcher.getGui())
          }
        } else {
          this._gui.innerHTML = booleanTrueRenderValue
        }
      }
      // handle false values
      else if (booleanFalseValue.indexOf(value) > -1) {
        if (!booleanFalseRenderValue || booleanFalseRenderValue === 'switch') {
          const switcher = this._getSwitcher(params)
          switcher.setChecked(false)
          if (isInit) {
            this._gui.appendChild(switcher.getGui())
          }
        } else {
          this._gui.innerHTML = booleanFalseRenderValue
        }
      } else {
        this._gui.innerHTML = value
      }
    }

    return true
  }

  /**
   * Get switch instance if available , or create it otherwise
   *
   * @param {Object} params
   *
   * @return {BooleanSwitch} switch instance
   */
  _getSwitcher(params) {
    if (!this._switcher) {
      this._switcher = new BooleanSwitch()
      this._switcher.setDisabled(true)
      this._switcher.init(params)
    }

    return this._switcher
  }
}

export default BooleanRenderer
