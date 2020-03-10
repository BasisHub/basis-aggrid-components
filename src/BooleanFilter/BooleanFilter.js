/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { autobind, override } from 'core-decorators'
import Component from '../Component'
import './style.scss'

const toTitleCase = phrase => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const stripHTML = html => {
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

/**
 * Booleans Filter
 *
 * Handle boolean values Filtering
 *
 * ## Options
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **booleanUsedTrueValue**   | undefined    | the value to use when the filter displays the true state . in case it is undefined then we use the first item in **booleanTrueValue[]**
 * | **booleanUsedFalseValue**   | undefined    | the value to use when the filter displays the false state. in case it is undefined then we use the first item in **booleanFalseValue[]**
 * | **booleanTrueValue[]**       | true(bool)  	| The options describes what is considered `true`                                                                                	|
 * | **booleanFalseValue[]**      | false(bool) 	| The options describes what is considered `false`
 * | **clearButton**   | false    |  Set to true to have the filter use a Clear button. The Clear button will clear the (form) details of the filter without removing any active filters on the column.
 * | **applyButton**   | false    |  Set to true to have the filter use an Apply button. If the Apply button is present, then the filter is only applied after the user hits the Apply button.
 * | **resetButton**   | false    |  Set to true to have the filter use a Reset button. The Reset button will clear the details of the filter and any active filters on that column.
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class BooleanFilter extends Component {
  /**
   * True , false translation
   *
   * @type {Object}
   */
  _booleanFilterTranslation = {}
  /**
   * Construct new BooleanFilter
   */
  constructor() {
    super()

    this._gui = document.createElement('div')
    this._gui.className = 'booleanFilter ag-filter-body-wrapper'
    this._gui.tabIndex = '0'
  }

  /**
   * @inheritDoc
   */
  @override
  init(params) {
    const translate = params.api.gridOptionsWrapper.getLocaleTextFunc()
    const isClearFilter = this.getOption('clearButton', params, false)
    const isResetButton = this.getOption('resetButton', params, false)
    const isApplyButton = this.getOption('applyButton', params, false)

    this._trueValue = []
      .concat(this.getOption('booleanTrueValue', params, [true]))
      .map(x => String(x))

    this._falseValue = []
      .concat(this.getOption('booleanFalseValue', params, [false]))
      .map(x => String(x))

    this._usedTrueValue = String(
      this.getOption('booleanUsedTrueValue', params, this._trueValue[0])
    )

    this._usedFalseValue = String(
      this.getOption('booleanUsedFalseValue', params, this._falseValue[0])
    )

    this._booleanFilterTranslation = this.getOption(
      'booleanFilterTranslation',
      params,
      {
        true: translate(
          'booleanTrue',
          toTitleCase(String(this._usedTrueValue))
        ),
        false: translate(
          'booleanFalse',
          toTitleCase(String(this._usedFalseValue))
        ),
        reset: translate(
          'booleanReset',
          translate('resetFilter', 'Reset Filter')
        ),
      }
    )

    this._params = params
    this._filterText = null

    this._onRadioChange = this._onRadioChange.bind(this, isApplyButton)

    // create body
    const body = document.createElement('div')
    body.className = 'booleanFilter__body ag-filter-body'
    body.style.padding = '5px 15px'
    body.innerHTML = /* html */ `
        <div class="booleanFilter__body__labels">
          <label>
            <input type="radio" name="boolean" value="true">
            ${this._booleanFilterTranslation.true}
          </label>

          <label>
            <input type="radio" name="boolean" value="false">
            ${this._booleanFilterTranslation.false}
          </label>     
          
          ${
            !isResetButton
              ? /* html */ `
                <label>
                  <input type="radio" name="boolean" value="" checked>
                  ${this._booleanFilterTranslation.reset}
                </label>   
              `
              : ''
          }       
        </div>
    `

    body.addEventListener('change', this._onRadioChange)

    this._gui.appendChild(body)

    // create apply filter panel
    const applyFilterPanel = document.createElement('div')
    applyFilterPanel.className = `booleanFilter__body__applyPanel ag-filter-apply-panel ag-hidden`
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
  }

  /**
   * @inheritDoc
   */
  @override
  destroy() {
    this._gui
      .querySelector('.booleanFilter__body__labels')
      .removeEventListener('change', this._onRadioChange)

    this._gui
      .querySelector('.booleanFilter__body__applyPanel')
      .removeEventListener('click', this._ApplyFilterPanelButtonClick)
  }

  /**
   * Check whether selected filter matches the passed cell data
   *
   * @param {Object} params
   *
   * @return {Boolean} true when pass, false otherwise
   */
  doesFilterPass(params) {
    // eslint-disable-next-line no-prototype-builtins
    const value = String(
      // eslint-disable-next-line no-prototype-builtins
      this._params.hasOwnProperty('filterValueGetter')
        ? this._params.filterValueGetter(params)
        : this._params.valueGetter(params)
    )

    return this._filterText === 'true'
      ? this._trueValue.indexOf(value) > -1
      : this._falseValue.indexOf(value) > -1
  }

  /**
   * Check whether the component is applying any filter on the column
   *
   * @return {Boolean}
   **/
  isFilterActive() {
    return (
      this._filterText !== null &&
      this._filterText !== undefined &&
      this._filterText !== ''
    )
  }

  /**
   * Gets the filter state. If filter is not active, then should return null/undefined.
   * The grid calls getModel() on all active filters when gridApi.getFilterModel() is called.
   *
   * @return Object | null the filter state
   */
  getModel() {
    if (!this.isFilterActive()) {
      return null
    }

    const model = { value: this._filterText, filterType: 'boolean' }
    return model
  }

  /**
   * Restores the filter state. Called by the grid after gridApi.setFilterModel(model) is called.
   * The grid will pass undefined/null to clear the filter.
   *
   * @param {Object | null} model
   */
  setModel(model) {
    /* eslint-disable no-prototype-builtins */
    this._filterText = model && model.hasOwnProperty('value') ? model.value : ''

    const filterTextAsString = String(this._filterText)
    const body = this._gui.querySelector('.booleanFilter__body')
    body.querySelectorAll('input[type="radio"]').forEach(i => {
      if (i.value == filterTextAsString) {
        i.checked = true
      } else {
        i.checked = false
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

    return stripHTML(
      model.value === 'true'
        ? this._booleanFilterTranslation.true
        : this._booleanFilterTranslation.false
    )
  }

  /**
   * Reset the filter state
   */
  reset() {
    const body = this._gui.querySelector('.booleanFilter__body')
    body.querySelectorAll('input[type="radio"]').forEach(i => {
      i.checked = false
    })

    this._filterText = null
  }

  /**
   * Listen to selection changes in the filter radio buttons and update the current filter text
   *
   * @param {Event} e
   */
  _onRadioChange(isApplyButton, e) {
    this._filterText = e.target.value
    if (false === isApplyButton) {
      this._params.filterChangedCallback()
    }
  }

  /**
   * Listen to the button clicks in the buttons panel and apply the chosen action
   *
   * @param {Event} e
   */
  @autobind
  _ApplyFilterPanelButtonClick(e) {
    const target = e.target

    if (target.nodeName === 'BUTTON') {
      if (target.classList.contains('reset')) {
        this.reset()
        this._params.filterChangedCallback()
      } else if (target.classList.contains('clear')) {
        this.reset()
      } else if (target.classList.contains('apply')) {
        this._params.filterChangedCallback()
      }
    }
  }
}

export default BooleanFilter
