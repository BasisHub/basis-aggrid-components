/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from '../Component'
import template from 'lodash-es/template'

/**
 * Numbers Editor
 *
 * Handle number values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **renderTemplate**   | undefined    | lodash template
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class TemplateRenderer extends Component {
  /**
   * Construct new TemplateRenderer
   */
  constructor() {
    super()

    // will this affect BBj bui ?
    this._gui = document.createElement('div')
    this._gui.className = 'templateRenderer'
    this._gui.style.width = '100%'
    this._gui.style.height = '100%'
    this._gui.style.lineHeight = 'normal'
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
   * Refresh the cell l
   *
   * @param {Object} params cell renderer params
   * @param {Boolean} isInit true when this method is being called in `init` phase , false otherwise
   *
   * @return {Boolean} true if the refresh succeeded, otherwise return false.
   */
  refresh(params, isInit) {
    if (isInit) {
      this._compiledTemplate = template(
        this.getOption('renderTemplate', params, '')
      )
    }

    let content

    if (typeof this._compiledTemplate === 'function') {
      content = this._compiledTemplate({ params })
    } else {
      content = params.valueFormatted ? params.valueFormatted : params.value
    }

    this._gui.innerHTML = content

    return true
  }
}

export default TemplateRenderer
