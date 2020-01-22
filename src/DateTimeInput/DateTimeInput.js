/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import flatpickr from 'flatpickr'
import { autobind, override, readonly } from 'core-decorators'
import DateMask, { getWeekStartByLocale } from 'bbj-masks/src/DateMask'
import { withEventsMixin } from '../EventsMixin'
import Component from '../Component'
import './style.scss'

/**
 * DateTimeInput
 *
 * Simple DateTimeInput component which integrates the flatpickr
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
@withEventsMixin
class DateTimeInput extends Component {
  /**
   * Constant which describes the event name that will be fired when a date
   * is selected using the date picker
   *
   * @type {String}
   */
  @readonly
  static ON_DATE_CHANGED = 'DateTimeInput.ON_DATE_CHANGED'

  /**
   * The date picker instance
   *
   * @type {FlatpickrFn}
   */
  picker = null

  /**
   * The last selected date
   *
   * @type {Date|null}
   */
  selectedDate = null

  /**
   * The component received params when init is called
   *s
   * @type {Object}
   */
  _params = {}

  /**
   * Construct new DateTimeInput
   */
  constructor() {
    super()

    this._gui = document.createElement('div')
    this._gui.className = 'ag-input-wrapper'
    this._gui.innerHTML = /* html */ `
    <div class="datetime__input">
        <input class="datetime__input__input" type="text" data-input>
        <a class="datetime__input__clear" data-clear>
          <i class="datetime__input__clear__icon ag-icon ag-icon-cross"></i>
        </a>
    </div>
    `
  }

  /**
   * @inheritDoc
   */
  @override
  // eslint-disable-next-line no-unused-vars
  init(params) {
    this._params = params
    const enableTime = this.getOption('dateTimeEnabledTime', params, true)
    const time_24hr = this.getOption('dateTimeEnabled24HR', params, true)
    const enableSeconds = this.getOption(
      'dateTimeEnabledSeconds',
      params,
      false
    )
    const noCalendar = !this.getOption('dateTimeEnableCalendar', params, true)

    let dateFormat = this.getOption('dateTimeMask', params)

    // try to generate a default date format based on the options
    if (!dateFormat) {
      dateFormat = noCalendar ? '' : '%Y/%Mz/%Dz'
      if (enableTime) {
        dateFormat += time_24hr ? ' %Hz:%mz' : ' %hz:%mz'

        if (enableSeconds) {
          dateFormat += ':%sz'
        }
      }
    }

    dateFormat = dateFormat.trim()

    // init the date picker
    this.picker = flatpickr(this._gui, {
      wrap: true,
      // allow entering the date manually requires date parsing from string
      // this is a tough thing and requires libs like moment
      allowInput: false,
      onChange: this._onDateChanged,
      formatDate: this.formatDate,
      maxDate: this.getOption('dateTimeMax', params, null),
      minDate: this.getOption('dateTimeMin', params, null),
      defaultHour: this.getOption('dateTimeDefaultHour', params, 12),
      defaultMinute: this.getOption('dateTimeDefaultMinute', params, 0),
      disableMobile: this.getOption('dateTimeDisableMobile', params, false),
      weekNumbers: this.getOption('dateTimeEnableWeekNumber', params, false),
      locale: this._getPickerLocale(),
      noCalendar,
      dateFormat,
      enableTime,
      enableSeconds,
      time_24hr,
    })

    // force dialog overflow
    this.picker.calendarContainer.classList.add('ag-custom-component-popup')
  }

  /**
   * @inheritDoc
   */
  @override
  destroy() {
    this.picker.destroy()
    this.off(DateTimeInput.ON_DATE_CHANGED)
  }

  /**
   * Set the picker date
   *
   * @param {Date|String} value the date value to set
   */
  setDate(value) {
    this.picker.setDate(value, true)
  }

  /**
   * Open Picker
   */
  open() {
    this.picker.open()
  }

  /**
   * Close picker
   */
  close() {
    this.picker.close()
  }

  /**
   * Reset the picker
   */
  reset() {
    /** this check because the tests fail here for some reasons  */
    if (this.picker.config) {
      this.picker.clear()
    }
  }

  /**
   * Format the date using `BBj.Masks.Types.date`
   *
   * @param {String} date date as a string
   * @param {String} format BBj date format
   *
   * @return {String} formatted date as string
   */
  @autobind
  formatDate(date, format) {
    const dateTimeFormatter = this.getOption('dateTimeFormatter', this._params)
    const locale = this.getOption(
      'dateTimeLocale',
      this._params,
      Intl.DateTimeFormat().resolvedOptions().locale || 'en-US'
    )

    if (dateTimeFormatter) {
      const type = typeof dateTimeFormatter
      let expression = dateTimeFormatter

      switch (type) {
        case 'string':
          if (!(expression.indexOf('return') >= 0)) {
            expression = 'return ' + expression + ';'
          }

          return new Function(
            'date',
            'format',
            'locale',
            'DateMask',
            expression
          )(date, format, locale, DateMask)

        case 'function':
          return dateTimeFormatter(date, format, locale, DateMask)
        default:
          throw new Error(
            `Invalid dateTimeFormatter defined for column "${this._params.colDef.field}". The formatter should be an expression or plain function`
          )
      }
    } else {
      if (!format || (format && format.indexOf('%') < 0)) {
        return
      }

      return DateMask.mask(date, format, locale)
    }
  }

  /**
   * Listen to date picker changes and update the selected date
   *
   * @param {Array} selectedDates  array of selected dates
   */
  @autobind
  _onDateChanged(selectedDates) {
    this.selectedDate = selectedDates[0] || null
    this.notify(DateTimeInput.ON_DATE_CHANGED, this.selectedDate)
  }

  /**
   * Get picker global localization which will work with any locale
   *
   * @return {Object}
   *
   * https://github.com/flatpickr/flatpickr/blob/master/src/l10n/default.ts
   */
  _getPickerLocale() {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale || 'en-US'

    const weekDaysShort = []
    const weekDaysLong = []

    for (let day = 4; day < 11; day++) {
      const date = new Date(1970, 1 - 1, day)

      weekDaysShort.push(
        date
          .toLocaleString(locale, {
            weekday: 'short',
          })
          .split(',')[0] // the date-time-format-timezone polyfill attach the date also
      )

      weekDaysLong.push(
        date
          .toLocaleString(locale, {
            weekday: 'long',
          })
          .split(',')[0] // the date-time-format-timezone polyfill attach the date also
      )
    }

    const monthsShort = []
    const monthsLong = []

    for (let month = 0; month < 12; month++) {
      const date = new Date(1970, month, 4)

      monthsShort.push(
        date.toLocaleString(locale, {
          month: 'short',
        })
      )

      monthsLong.push(
        date.toLocaleString(locale, {
          month: 'long',
        })
      )
    }

    return {
      weekdays: {
        shorthand: weekDaysShort,
        longhand: weekDaysLong,
      },
      months: {
        shorthand: monthsShort,
        longhand: monthsLong,
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: getWeekStartByLocale(locale),
      // eslint-disable-next-line no-unused-vars
      ordinal: number => '',
      rangeSeparator: '  ',
      weekAbbreviation: '',
      scrollTitle: '',
      toggleTitle: '',
      amPM: ['AM', 'PM'],
      yearAriaLabel: '',
      hourAriaLabel: '',
      minuteAriaLabel: '',
    }
  }
}

export default DateTimeInput
