/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { autobind, override, readonly } from 'core-decorators'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'
import { withEventsMixin } from '../EventsMixin'
import DateTimeInput from '../DateTimeInput'
import Component from '../Component'

const TOKENS = {
  TOKEN_EQUAL: 'equals',
  TOKEN_NOT_EQUAL: 'notEqual',
  TOKEN_LESS: 'lessThan',
  TOKEN_GREATER: 'greaterThan',
  TOKEN_RANGE: 'inRange',
  TOKEN_AND: 'AND',
  TOKEN_OR: 'OR',
}

@withEventsMixin
class ConditionPanel extends Component {
  /**
   * Constant which describes the event name that will be fired when the option
   * state is changed
   *
   * @type {String}
   */
  @readonly
  static ON_CONDITION_CHANGED = 'ConditionPanel.ON_CONDITION_CHANGED'
  /**
   * The option state
   *
   * @type {Object}
   */
  @readonly
  state = {
    type: TOKENS.TOKEN_EQUAL,
    filter: null,
    filterTo: null,
  }

  /**
   * @type {DateTimeInput}
   */
  _filterTimeInput = new DateTimeInput()

  /**
   * @type {DateTimeInput}
   */
  _filterToDateTimeInput = new DateTimeInput()

  /**
   * An array of enabled filter types
   *
   * @type {Array}
   */
  _filterOptions = []

  /**
   * The default enabled filter type
   *
   * @type {Number}
   */
  _defaultOption = -1
  /**
   * @inheritDoc
   */
  @override
  init(params) {
    const translate = params.api.gridOptionsWrapper.getLocaleTextFunc()

    this._filterOptions = this.getOption('filterOptions', params, [
      TOKENS.TOKEN_EQUAL,
      TOKENS.TOKEN_NOT_EQUAL,
      TOKENS.TOKEN_LESS,
      TOKENS.TOKEN_GREATER,
      TOKENS.TOKEN_RANGE,
    ])

    this._defaultOption = this.getOption(
      'defaultOption',
      params,
      this._filterOptions.indexOf(TOKENS.TOKEN_EQUAL) > -1
        ? TOKENS.TOKEN_EQUAL
        : this._filterOptions[0]
    )

    this.state.type = this._defaultOption

    const optionsTranslations = {
      [TOKENS.TOKEN_EQUAL]: translate(TOKENS.TOKEN_EQUAL, 'Equals'),
      [TOKENS.TOKEN_NOT_EQUAL]: translate(TOKENS.TOKEN_EQUAL, 'Not equal'),
      [TOKENS.TOKEN_LESS]: translate(TOKENS.TOKEN_LESS, 'Less than'),
      [TOKENS.TOKEN_GREATER]: translate(TOKENS.TOKEN_GREATER, 'Greater than'),
      [TOKENS.TOKEN_RANGE]: translate(TOKENS.TOKEN_RANGE, 'In range'),
    }

    this._gui = document.createElement('div')
    this._gui.className = 'ag-filter-body-wrapper'
    this._gui.innerHTML = /* html */ `
      <select class="ag-filter-select"  ${
        this._filterOptions.length === 1 ? 'disabled' : ''
      }>
        ${this._filterOptions.map(
          option => /* html */ `
          <option 
            value="${option}" 
            ${option === this._defaultOption ? 'selected' : ''}
          >
              ${optionsTranslations[option]}
          </option>`
        )}
      </select>
      <div class="ag-filter-body">
        <div class="ag-filter-date-from">
        </div>
        <div class="ag-filter-date-to ag-hidden">
        </div>
      </div>
    `

    this._filterTimeInput.init(params)
    this._filterTimeInput.on(DateTimeInput.ON_DATE_CHANGED, selectedDate => {
      this.state.filter = selectedDate
      this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state)
    })

    this._filterToDateTimeInput.init(params)
    this._filterToDateTimeInput.on(
      DateTimeInput.ON_DATE_CHANGED,
      selectedDate => {
        this.state.filterTo = selectedDate
        this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state)
      }
    )

    this._gui
      .querySelector('.ag-filter-date-from')
      .appendChild(this._filterTimeInput.getGui())
    this._gui
      .querySelector('.ag-filter-date-to')
      .appendChild(this._filterToDateTimeInput.getGui())

    const select = this._gui.querySelector('.ag-filter-select')
    select.addEventListener('change', this._onTypeChange)

    this.setState(this._state)
  }

  /**
   * @inheritDoc
   */
  @override
  destroy() {
    this.off(ConditionPanel.ON_CONDITION_CHANGED)
    this._filterTimeInput.destroy()
    this._filterToDateTimeInput.destroy()
    this._gui
      .querySelector('.ag-filter-select')
      .removeEventListener('change', this._onTypeChange)
    this.reset()
  }

  /**
   * Reset the state
   */
  reset() {
    this.state.filter = null
    this.state.filterTo = null
    this._filterTimeInput.reset()
    this._filterToDateTimeInput.reset()

    this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state)
  }

  /**
   * Set the condition state
   *
   * @param {Object} state
   */
  setState(state) {
    state = state || {}
    this.state.filter = state.filter || null
    this.state.filterTo = state.filterTo || null
    this.state.type = state.type || this._defaultOption

    const gui = this._gui
    const filterOptions = this._filterOptions
    const selectEl = gui.querySelector('.ag-filter-select')
    const filterInput = this._filterTimeInput
    const filterToInput = this._filterToDateTimeInput

    selectEl.selectedIndex = filterOptions.indexOf(this.state.type)
    filterInput.setDate(this.state.filter)
    filterToInput.setDate(this.state.filterTo)

    // we fire on change event in case the filter options contain
    // one option which is in Range "inRange"
    if ('createEvent' in document) {
      const evt = document.createEvent('HTMLEvents')
      evt.initEvent('change', false, true)
      selectEl.dispatchEvent(evt)
    } else {
      selectEl.fireEvent('onchange')
    }

    this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state)
  }

  /**
   * Update the state with the selected type
   *
   * @param {Event} e
   */
  @autobind
  _onTypeChange(e) {
    const el = e.target
    const filterDateTo = this._gui.querySelector('.ag-filter-date-to')

    this.state.type = el.options[el.selectedIndex].value

    if (this.state.type === TOKENS.TOKEN_RANGE) {
      filterDateTo.classList.remove('ag-hidden')
    } else {
      filterDateTo.classList.add('ag-hidden')
    }

    this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state)
  }
}

@withEventsMixin
class JoinConditionPanel extends Component {
  /**
   * Constant which describes the event name that will be fired when the join
   * state is changed
   *
   * @type {String}
   */
  @readonly
  static ON_JOIN_CONDITION_CHANGED =
    'JoinConditionPanel.ON_JOIN_CONDITION_CHANGED'
  /**
   * The join state
   *
   * @type {Object}
   */
  @readonly
  state = {
    condition1: {},
    condition2: {},
    operator: TOKENS.TOKEN_OR,
  }

  /**
   * @type {Option}
   */
  _firstConditionPanel = new ConditionPanel()

  /**
   * @type {Option}
   */
  _secondConditionPanel = new ConditionPanel()

  /**
   * @type {HTMLElement}
   */
  _operatorPanel = null

  /**
   * Params received after init
   *
   * @type {Object}
   */
  _params = null
  /**
   * @inheritDoc
   */
  @override
  init(params) {
    const translate = params.api.gridOptionsWrapper.getLocaleTextFunc()

    this._params = params

    this._firstConditionPanel.init(params)
    this._firstConditionPanel.on(
      ConditionPanel.ON_CONDITION_CHANGED,
      this._onFirstConditionChanged
    )

    this._secondConditionPanel.init(params)
    this._secondConditionPanel.on(
      ConditionPanel.ON_CONDITION_CHANGED,
      this._onSecondConditionChanged
    )
    this._secondConditionPanel.getGui().classList.add('ag-hidden')

    this._gui = document.createElement('div')
    this._gui.className = 'ag-filter-body-wrapper'
    this._gui.appendChild(this._firstConditionPanel.getGui())

    this._operatorPanel = document.createElement('div')
    this._operatorPanel.className = 'ag-filter-condition ag-hidden'
    this._operatorPanel.innerHTML = /* html */ `
      <label>
        <input class="AND" type="radio" name="orAndRadio" value="${
          TOKENS.TOKEN_AND
        }"/>
        ${translate('andCondition', 'AND')}
      </label> 
      <label>
        <input class="OR" type="radio" name="orAndRadio" value="${
          TOKENS.TOKEN_OR
        }" checked />
        ${translate('orCondition', 'OR')}
      </label>
    `
    this._gui.appendChild(this._operatorPanel)
    this._operatorPanel.addEventListener('change', this._onOperatorChanged)

    this._gui.appendChild(this._secondConditionPanel.getGui())
  }

  /**
   * @inheritDoc
   */
  @override
  destroy() {
    this._firstConditionPanel.destroy()
    this._secondConditionPanel.destroy()
    this._operatorPanel.removeEventListener('change', this._onOperatorChanged)
    this.off(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED)
    this.reset()
  }

  /**
   * Reset the state
   */
  reset() {
    this._firstConditionPanel.reset()
    this._secondConditionPanel.reset()
    this.notify(ConditionPanel.ON_CONDITION_CHANGED, this.state)
  }

  /**
   * Set the condition join state
   *
   * @param {Object} state
   */
  setState(state) {
    state = state || {}
    this.state.operator = state.operator || TOKENS.TOKEN_OR
    this.state.condition1 = state.condition1 || null
    this.state.condition2 = state.condition2 || null

    this._firstConditionPanel.setState(this.state.condition1)
    this._secondConditionPanel.setState(this.state.condition2)
    this._operatorPanel.querySelectorAll('input').forEach(input => {
      if (input.classList.contains(this.state.operator)) {
        input.checked = true
      } else {
        input.checked = false
      }
    })

    this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state)
  }

  /**
   * Add the selected condition to the component stater
   *
   * @param {Event} e
   */
  @autobind
  _onOperatorChanged(e) {
    this.state.operator = e.target.value
    this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state)
  }

  /**
   * @param {Object} state  the option state
   */
  @autobind
  _onFirstConditionChanged(state) {
    this.state.condition1 = state

    const suppressAndOrCondition = this.getOption(
      'suppressAndOrCondition',
      this._params,
      false
    )

    if (!suppressAndOrCondition) {
      const { filter, filterTo, type } = this.state.condition1
      const secondConditionGui = this._secondConditionPanel.getGui()
      const operatorPanelGui = this._operatorPanel
      const condition =
        type === TOKENS.TOKEN_RANGE ? !filter || !filterTo : !filter

      if (condition) {
        secondConditionGui.classList.add('ag-hidden')
        operatorPanelGui.classList.add('ag-hidden')
      } else {
        secondConditionGui.classList.remove('ag-hidden')
        operatorPanelGui.classList.remove('ag-hidden')
      }
    }

    this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state)
  }

  /**
   * @param {Object} state  the option state
   */
  @autobind
  _onSecondConditionChanged(state) {
    this.state.condition2 = state
    this.notify(JoinConditionPanel.ON_JOIN_CONDITION_CHANGED, this.state)
  }
}

/**
 * DateTime Filter
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
 * | **dateTimeFormatter**   | undefined    |  A function or expression to format the date (@see supported param)
 * | **dateTimeLocale**   | System default    |  A locale to use for date formatting
 * | **dateTimeDefaultHour**   | 12    |  Initial value of the hour element.
 * | **dateTimeDefaultMinute**   | 0    |  Initial value of the minute element.
 * | **dateTimeDisableMobile**   | false    |  Set disableMobile to true to always use the non-native picker.
 * | **dateTimeEnableWeekNumber**   | true    |  Enables display of week numbers in calendar.
 * | **filterOptions**   | Equals, Greater Than, Less Than, Not Equals, In Range.    |  What Filter Options to present to the user.
 * | **defaultOption**   | Equals    |  The default Filter Options to be selected.
 * | **suppressAndOrCondition**   | false    |  If true, the filter will only offer Condition 1.
 * | **inRangeInclusive**   | false    |  If true then doing 'inRange' filter option will include values equal to the start and end of the range.
 * | **clearButton**   | false    |  Set to true to have the filter use a Clear button. The Clear button will clear the (form) details of the filter without removing any active filters on the column.
 * | **applyButton**   | false    |  Set to true to have the filter use an Apply button. If the Apply button is present, then the filter is only applied after the user hits the Apply button.
 * | **resetButton**   | false    |  Set to true to have the filter use a Reset button. The Reset button will clear the details of the filter and any active filters on that column.
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class DateTimeFilter extends Component {
  /**
   * @type {Join}
   */
  _JoinConditionPanel = new JoinConditionPanel()

  /**
   * Join panel state
   *
   * @type {Object}
   */
  _state = {}

  /**
   * Component params
   *
   * @type {Object}
   */
  _params = {}

  /**
   * An object of all the required options cached for doesFilterPass method
   */
  _doesFilterPassOptions = null

  /**
   * @inheritDoc
   */
  @override
  init(params) {
    const translate = params.api.gridOptionsWrapper.getLocaleTextFunc()
    const isClearFilter = this.getOption('clearButton', params, false)
    const isResetButton = this.getOption('resetButton', params, false)
    const isApplyButton = this.getOption('applyButton', params, false)

    this._gui = document.createElement('div')

    this._JoinConditionPanel.init(params)
    this._JoinConditionPanel.on(
      JoinConditionPanel.ON_JOIN_CONDITION_CHANGED,
      state => {
        if (!this.__disableStateChangeListener) {
          this._onJoinConditionPanelStateChanged(state, isApplyButton)
        }
      }
    )

    this._gui.appendChild(this._JoinConditionPanel.getGui())

    const applyFilterPanel = document.createElement('div')
    applyFilterPanel.className = `ag-filter-apply-panel ag-hidden`
    applyFilterPanel.innerHTML = /* html */ `
      <button class="clear ${!isClearFilter &&
        'ag-hidden'}" type="button">${translate(
      'clearFilter',
      'Clear Filter'
    )}</button>
      <button class="reset ${!isResetButton &&
        'ag-hidden'}" type="button">${translate(
      'resetFilter',
      'Reset Filter'
    )}</button>
      <button class="apply ${!isApplyButton &&
        'ag-hidden'}" type="button">${translate(
      'applyFilter',
      'Apply Filter'
    )}</button>
    `

    if (isClearFilter || isResetButton || isApplyButton) {
      applyFilterPanel.classList.remove('ag-hidden')
    }

    applyFilterPanel.addEventListener(
      'click',
      this._ApplyFilterPanelButtonClick
    )

    this._gui.appendChild(applyFilterPanel)

    this._state = this._JoinConditionPanel.state
    this._params = params

    this._doesFilterPassOptions = {
      enableTime: this.getOption('dateTimeEnableTime', this._params, true),
      inRangeInclusive: this.getOption('inRangeInclusive', this._params, false),
      // eslint-disable-next-line no-prototype-builtins
      valueGetter: this._params.hasOwnProperty('filterValueGetter')
        ? this._params.filterValueGetter
        : this._params.valueGetter,
    }
  }

  /**
   * @inheritDoc
   */
  @override
  destroy() {
    this._JoinConditionPanel.destroy()
  }

  /**
   * Check whether selected filter matches the passed cell data
   *
   * @param {Object} params
   *
   * @return {Boolean} true when pass, false otherwise
   */
  doesFilterPass(params) {
    const value = this._doesFilterPassOptions.valueGetter(params)
    const { condition1, condition2, operator } = this._state
    const doesPassFirstCondition = this._doesPassCondition(condition1, value)
    const doesPassSecondCondition = this._doesPassCondition(condition2, value)

    return operator === TOKENS.TOKEN_OR
      ? doesPassFirstCondition || doesPassSecondCondition
      : doesPassFirstCondition && doesPassSecondCondition
  }

  /**
   * Check whether the component is applying any filter on the column
   *
   * @return {Boolean}
   **/
  isFilterActive() {
    const { condition1 } = this._state

    if (condition1 && condition1.filter) {
      if (condition1.filterTo && condition1.type === TOKENS.TOKEN_RANGE) {
        return condition1.filter !== null && condition1.filterTo !== null
      }

      return condition1.filter !== null
    }

    return false
  }

  /**
   * Gets the filter state. If filter is not active, then should return null/undefined.
   * The grid calls getModel() on all active filters when gridApi.getFilterModel() is called.
   *
   * @return Object | null the filter state
   */
  getModel() {
    const clone = JSON.parse(JSON.stringify(this._state))
    ;[clone.condition1, clone.condition2].forEach((condition, i) => {
      if (condition.filter) {
        condition.filter = this._state[`condition${i + 1}`].filter.toISOString()
      }
      if (condition.filterTo) {
        condition.filterTo = this._state[
          `condition${i + 1}`
        ].filterTo.toISOString()
      }
    })

    return clone
  }

  /**
   * Restores the filter state. Called by the grid after gridApi.setFilterModel(model) is called.
   * The grid will pass undefined/null to clear the filter.
   *
   * @param {Object | null} model
   */
  setModel(model) {
    if (
      model &&
      // eslint-disable-next-line no-prototype-builtins
      !model.hasOwnProperty('condition1') &&
      // eslint-disable-next-line no-prototype-builtins
      !model.hasOwnProperty('condition2')
    ) {
      model = {
        condition1: model,
      }
    }
    this.__disableStateChangeListener = true
    this._JoinConditionPanel.setState(model)
    this.__disableStateChangeListener = false

    this._state = this._JoinConditionPanel.state
    ;[this._state.condition1, this._state.condition2].forEach(condition => {
      if (condition.filter) {
        condition.filter = new Date(condition.filter)
      }
      if (condition.filterTo) {
        condition.filterTo = new Date(condition.filterTo)
      }
    })
  }

  /**
   * Get the filter model as plain string to display in the floating filter input
   *
   * @param {Object | null} model
   */
  getModelAsString(model) {
    if (!model) {
      return ''
    }

    const dateTimeMask = this.getOption(
      'dateTimeMask',
      this._params,
      // @todo Find a better way for this
      this._JoinConditionPanel._firstConditionPanel._filterTimeInput.picker
        .config['dateFormat']
    )
    const locale = this.getOption(
      'dateTimeLocale',
      this._params,
      Intl.DateTimeFormat().resolvedOptions().locale || 'en-US'
    )

    const { condition1, condition2, operator } = JSON.parse(
      JSON.stringify(model)
    )

    ;[condition1, condition2].forEach(condition => {
      if (condition.filter) {
        condition.filter = BBj.Masks.DateMask.mask(
          condition.filter,
          dateTimeMask,
          locale
        )
      }

      if (condition.filterTo) {
        condition.filterTo = BBj.Masks.DateMask.mask(
          condition.filterTo,
          dateTimeMask,
          locale
        )
      }
    })

    const firstConditionAsString = `${condition1.filter || ''} ${
      condition1.filterTo ? '→ ' + condition1.filterTo : ''
    }`
    const secondConditionAsString = `${condition2.filter || ''} ${
      condition2.filterTo ? '→ ' + condition2.filterTo : ''
    }`
    const operatorAsString = `${condition2.filter && operator ? operator : ''}`

    return `${firstConditionAsString} ${operatorAsString} ${secondConditionAsString}`.trim()
  }

  /**
   * Check if the given value passes the filter defined in the passed ConditionPanel's state
   *
   * @param {Object} condition condition panel state
   * @param {String} value cell value
   *
   * @return {Boolean} true when pass, false otherwise
   */
  _doesPassCondition(condition, value) {
    if (!condition.filter || !value) {
      return false
    }

    const { filter, filterTo, type } = condition
    const timezone = BBj.Masks.Utils.Dates.getTimezoneOrOffset()
    const inRangeInclusive = this._doesFilterPassOptions.inRangeInclusive
    const enableTime = this._doesFilterPassOptions.enableTime
    let passed = false

    if (BBj.Masks.Utils.Dates.IS_TIME_REGEX.test(value)) {
      value = value = BBj.Masks.Utils.Dates.fixShortISO(value)
      ;[filter, filterTo].forEach(date => {
        if (date instanceof Date) {
          date.setFullYear(1970)
          date.setMonth(0)
          date.setDate(1)
        }
      })
    } else if (BBj.Masks.Utils.Dates.IS_DATE_REGEX.test(value)) {
      value = BBj.Masks.Utils.Dates.fixShortISO(value)
    }

    // convert the datetime from utc to locale
    value = utcToZonedTime(value, timezone)
    // firstDate = firstDate ? zonedTimeToUtc(firstDate , timezone) : firstDate
    // secondDate = secondDate ? zonedTimeToUtc(secondDate , timezone) : secondDate

    if (!enableTime) {
      // remove the time portion from the date
      // eslint-disable-next-line no-extra-semi
      ;[value, filter, filterTo].forEach(date => {
        if (date instanceof Date) {
          date.setHours(0)
          date.setMinutes(0)
          date.setSeconds(0)
          date.setMilliseconds(0)
        }
      })
    }

    if (type === TOKENS.TOKEN_EQUAL) {
      passed = filter > value === false && filter < value == false
    } else if (type === TOKENS.TOKEN_NOT_EQUAL) {
      passed = !(filter > value === false && filter < value == false)
    } else if (type === TOKENS.TOKEN_GREATER) {
      passed = filter < value
    } else if (type === TOKENS.TOKEN_LESS) {
      passed = filter > value
    } else if (type === TOKENS.TOKEN_RANGE && filterTo) {
      if (inRangeInclusive) {
        passed =
          ((filter < value ||
            (filter > value === false && filter < value == false)) &&
            filterTo > value) ||
          (filterTo > value === false && filterTo < value == false)
      } else {
        passed = filter < value && filterTo > value
      }
    }

    return passed
  }

  /**
   * List to click button event on the filter panel and execute the
   * right action
   *
   * @param {Event} e
   */
  @autobind
  _ApplyFilterPanelButtonClick(e) {
    const target = e.target

    if (target.nodeName === 'BUTTON') {
      if (target.classList.contains('reset')) {
        this._JoinConditionPanel.reset()
        this._params.filterChangedCallback()
      } else if (target.classList.contains('clear')) {
        this._JoinConditionPanel.reset()
      } else if (target.classList.contains('apply')) {
        this._params.filterChangedCallback()
      }
    }
  }

  /**
   * Update the filter state and Apply the filter depending on
   * whether the `isApplyButtonActive` is true or false
   *
   * @param {Object} state
   * @param {Boolean} isApplyButtonActive
   */
  @autobind
  _onJoinConditionPanelStateChanged(state, isApplyButtonActive) {
    this._state = state
    if (false === isApplyButtonActive) {
      this._params.filterChangedCallback()
    }
  }
}

export default DateTimeFilter
