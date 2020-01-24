/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable no-prototype-builtins */

/**
 * The base component class
 *
 * This class is the abstract class which all components should use
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class Component {
  /**
   * The component html element
   *
   * @type {HTMLElement}
   */
  _gui = null

  /**
   * Initialize the component
   *
   * @param {Object} params
   *
   * @return void
   */
  // eslint-disable-next-line no-unused-vars
  init(params) {
    console.warn(
      `${this.constructor.name} does not implement the [init] method`
    )
  }

  /**
   * Return the DOM element of the component, this is what the grid puts into the cell
   *
   * @return {HTMLElement}
   */
  getGui() {
    return this._gui
  }

  /**
   * Gets called when the component is destroyed. If your custom component needs to do
   * any resource cleaning up, do it here.
   */
  destroy() {
    // pass
  }

  /**
   * Find the required option value
   *
   * This function will try to find the passed option's value in the following order
   *
   *  1. params
   *  2. Search `params.colDef`
   *  3. Search `params.context.AGridComponentsMetaConfig[COLUMN_ID]` or `params.context.meta[COLUMN_ID]`
   *  4. Search `params.context.AGridComponentsMetaConfig` or `params.context.meta`
   *  5. Search `params.context`
   *  6. If none found return the fallback
   *
   * @param {String} name the name of the option
   * @param {params} params an object used to search for the option
   * @param {String} fallback a value to return in case the option can not be found
   */
  getOption(name, params, fallback = null) {
    let option

    if (params && params.hasOwnProperty(name)) {
      option = params[name]
    } else {
      // try to fetch from the column def first
      if (
        params.hasOwnProperty('colDef') &&
        params.colDef.hasOwnProperty(name)
      ) {
        option = params.colDef[name]
      } else {
        // try to fetch from AGridComponentsMetaConfig|meta in the context
        let AGridComponentsMetaConfig = null
        if (params.hasOwnProperty('context')) {
          AGridComponentsMetaConfig =
            params.context.AGridComponentsMetaConfig || params.context.meta
        }

        if (
          AGridComponentsMetaConfig &&
          AGridComponentsMetaConfig.hasOwnProperty(params.column.colId) &&
          AGridComponentsMetaConfig[params.column.colId].hasOwnProperty(name)
        ) {
          option = AGridComponentsMetaConfig[params.column.colId][name]
        } else if (
          AGridComponentsMetaConfig &&
          AGridComponentsMetaConfig.hasOwnProperty(name)
        ) {
          option = AGridComponentsMetaConfig[name]
        } else {
          // try to fetch from the context object itself
          const context = params.context
          if (context && context.hasOwnProperty(name)) {
            option = context[name]
          } else {
            // try to check params itself or fallback to default
            option = fallback
          }
        }
      }
    }

    return typeof option !== 'undefined' ? option : fallback
  }

  /**
   * Get Window Instance
   *
   * @param {params} params an object used to search for the window instance
   *
   * @return {Window}
   */
  getWin(params) {
    const win = this.getOption('window', params) || window || null

    if (!win) {
      throw new Error('Current environment does not support window')
    }

    return win
  }

  /**
   * Get document Instance
   *
   * @param {params} params an object used to search for the document instance
   *
   * @return {HTMLDocument}
   */
  getDoc(params) {
    const doc = this.getOption('document', params) || document || null

    if (!doc) {
      throw new Error('Current environment does not support document')
    }

    return doc
  }
}

export default Component
