/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { autobind, override } from 'core-decorators'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'
import DateTimeInput from '../DateTimeInput'
import Component from '../Component'

/**
 * DateTimeInput
 *
 * Simple DateTimeInput component which integrates the flatpickr
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **dateTimeEnableTime**   | false    | enable / disable time
 * | **dateTimeEnable24HR**   | false    | enable / disable time 24 format
 * | **dateTimeEnableSeconds**   | false    | enable / disable seconds management
 * | **dateTimeEnableCalendar**   | false    | enable / disable Calendar.
 * | **dateTimeMask**   | false    | The mask used to format the selected date
 * | **dateTimeMax**   | undefined    |  Max allowed date
 * | **dateTimeMin**   | undefined    |  Min allowed date
 * | **dateTimeFormatter**   | false    |  A function or expression to format the date (@see supported param)
 * | **dateTimeLocale**   | System default    |  A locale to use for date formatting
 * | **dateTimeDefaultHour**   | 12    |  Initial value of the hour element.
 * | **dateTimeDefaultMinute**   | 0    |  Initial value of the minute element.
 * | **dateTimeDisableMobile**   | false    |  Set disableMobile to true to always use the non-native picker.
 * | **dateTimeEnableWeekNumber**   | true    |  Enables display of week numbers in calendar.
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class DateTimeEditor extends Component {
  /**
   * @type {DateTimeInput}
   */
  _input = new DateTimeInput()

  /**
   * @type {String}
   */
  _value = null

  /**
   * Params received in init
   *
   * @type {Object}
   */
  _params = null

  /**
   * Takes incomplete iso string and return a complete one
   *
   * @param {String} date incomplete iso string
   *
   * @return {String} complete iso string
   */
  static fixShortISO(value) {
    return BBj.Masks.Utils.Dates.fixShortISO(value)
  }

  /**
   * @inheritDoc
   */
  @override
  init(params) {
    this._params = params
    this.focusAfterAttached = params.cellStartedEdit
    if (this.focusAfterAttached) {
      let keyPressBackspaceOrDelete =
        params.keyPress == 32 || params.keyPress == 46 // space // delete

      if (keyPressBackspaceOrDelete) {
        this._value = ''
      } else if (params.charPress !== null) {
        this._value = params.charPress
      } else {
        this._value = params.value
        if (params.keyPress != 113) {
          //F2
          this.highlightAllOnFocus = true
        }
      }
    } else {
      this._value = params.value
    }

    this._value = DateTimeEditor.fixShortISO(this._value)
    this._input.init(params)
    this._input.on(DateTimeInput.ON_DATE_CHANGED, this._onDateChange)

    if (this._value) {
      this._input.setDate(
        utcToZonedTime(this._value, BBj.Masks.Utils.Dates.getTimezoneOrOffset())
      )
    }

    this._gui = this._input.getGui()
  }

  /**
   * @inheritDoc
   */
  @override
  destroy() {
    this._input.destroy()
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
    return this._params.parseValue(this._value)
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
    this._input.open()
  }

  /**
   * If doing full row edit, then gets called when tabbing out of the cell.
   */
  focusOut() {
    this._input.close()
  }

  /**
   * Update the editor value with selected date from the input
   *
   * @param {String} date
   */
  @autobind
  _onDateChange(date) {
    this._value = date instanceof Date ? date.toISOString() : ''
  }
}

export default DateTimeEditor
