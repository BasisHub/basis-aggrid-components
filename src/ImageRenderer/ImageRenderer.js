/*
 * This file is part of basis-aggrid-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import TemplateRenderer from '../TemplateRenderer'

/**
 * Numbers Editor
 *
 * Handle number values Editing
 *
 * | Name                  	| Default     	| Description                                                                                                                    	|
 * |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 * | **imageRendererWidth**   | 28px    | image width
 * | **imageRendererHeight**   | 28px    | image height
 * | **imageRendererList**       | {}  	| a list of which maps images with cell values as JSON or plain JS object
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 *
 * @see https://lodash.com/docs/4.17.15#template
 */
class ImageRenderer extends TemplateRenderer {
  /**
   * @inheritDoc
   */
  refresh(params, isInit) {
    const value = params.value
    const imageWidth = this.getOption('imageRendererWidth', params, '28px')
    const imageHeight = this.getOption('imageRendererHeight', params, '28px')
    let imageList = this.getOption('imageRendererList', params)

    try {
      imageList = JSON.parse(imageList)
    } catch (e) {
      imageList = imageList || {}
    }

    /* eslint-disable no-prototype-builtins */
    if (imageList && imageList.hasOwnProperty(value)) {
      params.renderTemplate = /*html*/ `
        <img 
          src="${imageList[params.value]}" 
          width="${imageWidth}"
          height="${imageHeight}"  
        />
      `
    } else {
      params.renderTemplate = value
    }

    return super.refresh(params, isInit)
  }
}

export default ImageRenderer
