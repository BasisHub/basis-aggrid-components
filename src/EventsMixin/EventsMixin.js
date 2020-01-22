/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable no-prototype-builtins */

/**
 * Events Mixin
 *
 * Allow classes to have their own events manager
 *
 * @param {Class} superClass
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
const EventsMixin = superClass =>
  class extends superClass {
    /**
     * Object of registers handlers
     *
     * @type {Object}
     */
    __handlers = {}

    /**
     * Register an event handler
     *
     * @param {String} name event name
     * @param {Function} handler handler function
     */
    on(name, handler) {
      this.__handlers[name] = this.__handlers[name] || []
      this.__handlers[name].push(handler)
    }

    /**
     * Remove an event handler
     *
     * **Note :** if handler is not provided then all registered handler for the given event will be removed
     *
     * @param {String} name event name
     * @param {Function} handler handler function
     */
    off(name, handler) {
      this.__handlers[name] = this.__handlers[name] || []
      if (!handler) {
        delete this.__handlers[name]
      } else {
        for (const registeredHandler in this.__handlers) {
          if (
            this.__handlers.hasOwnProperty(registeredHandler) &&
            this.__handlers[registeredHandler] === handler
          ) {
            delete this.__handlers[name]
          }
        }
      }
    }

    /**
     * Notify handlers
     *
     * @param {String} name event name
     * @param {Object} event payload
     */
    notify(name, payload) {
      const handlers = this.__handlers[name] || []
      handlers.forEach(handler => {
        handler(payload)
      })
    }
  }

/**
 * An events mixin decorator
 *
 * @param {Class} superClass
 *
 * @see {EventsMixin}
 */
function withEventsMixin(superClass) {
  return EventsMixin(superClass)
}

export default EventsMixin
export { EventsMixin, withEventsMixin }
