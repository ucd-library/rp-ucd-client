(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~page-components"],{

/***/ "./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js":
/*!*****************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js ***!
  \*****************************************************************************************/
/*! exports provided: IronA11yKeysBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yKeysBehavior", function() { return IronA11yKeysBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */
var KEY_IDENTIFIER = {
  'U+0008': 'backspace',
  'U+0009': 'tab',
  'U+001B': 'esc',
  'U+0020': 'space',
  'U+007F': 'del'
};

/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */
var KEY_CODE = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  46: 'del',
  106: '*'
};

/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */
var MODIFIER_KEYS = {
  'shift': 'shiftKey',
  'ctrl': 'ctrlKey',
  'alt': 'altKey',
  'meta': 'metaKey'
};

/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */
var KEY_CHAR = /[a-z0-9*]/;

/**
 * Matches a keyIdentifier string.
 */
var IDENT_CHAR = /U\+/;

/**
 * Matches arrow keys in Gecko 27.0+
 */
var ARROW_KEY = /^arrow/;

/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */
var SPACE_KEY = /^space(bar)?/;

/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */
var ESC_KEY = /^escape$/;

/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */
function transformKey(key, noSpecialChars) {
  var validKey = '';
  if (key) {
    var lKey = key.toLowerCase();
    if (lKey === ' ' || SPACE_KEY.test(lKey)) {
      validKey = 'space';
    } else if (ESC_KEY.test(lKey)) {
      validKey = 'esc';
    } else if (lKey.length == 1) {
      if (!noSpecialChars || KEY_CHAR.test(lKey)) {
        validKey = lKey;
      }
    } else if (ARROW_KEY.test(lKey)) {
      validKey = lKey.replace('arrow', '');
    } else if (lKey == 'multiply') {
      // numpad '*' can map to Multiply on IE/Windows
      validKey = '*';
    } else {
      validKey = lKey;
    }
  }
  return validKey;
}

function transformKeyIdentifier(keyIdent) {
  var validKey = '';
  if (keyIdent) {
    if (keyIdent in KEY_IDENTIFIER) {
      validKey = KEY_IDENTIFIER[keyIdent];
    } else if (IDENT_CHAR.test(keyIdent)) {
      keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
      validKey = String.fromCharCode(keyIdent).toLowerCase();
    } else {
      validKey = keyIdent.toLowerCase();
    }
  }
  return validKey;
}

function transformKeyCode(keyCode) {
  var validKey = '';
  if (Number(keyCode)) {
    if (keyCode >= 65 && keyCode <= 90) {
      // ascii a-z
      // lowercase is 32 offset from uppercase
      validKey = String.fromCharCode(32 + keyCode);
    } else if (keyCode >= 112 && keyCode <= 123) {
      // function keys f1-f12
      validKey = 'f' + (keyCode - 112 + 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // top 0-9 keys
      validKey = String(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      // num pad 0-9
      validKey = String(keyCode - 96);
    } else {
      validKey = KEY_CODE[keyCode];
    }
  }
  return validKey;
}

/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */
function normalizedKeyForEvent(keyEvent, noSpecialChars) {
  // Fall back from .key, to .detail.key for artifical keyboard events,
  // and then to deprecated .keyIdentifier and .keyCode.
  if (keyEvent.key) {
    return transformKey(keyEvent.key, noSpecialChars);
  }
  if (keyEvent.detail && keyEvent.detail.key) {
    return transformKey(keyEvent.detail.key, noSpecialChars);
  }
  return transformKeyIdentifier(keyEvent.keyIdentifier) ||
      transformKeyCode(keyEvent.keyCode) || '';
}

function keyComboMatchesEvent(keyCombo, event) {
  // For combos with modifiers we support only alpha-numeric keys
  var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
  return keyEvent === keyCombo.key &&
      (!keyCombo.hasModifiers ||
       (!!event.shiftKey === !!keyCombo.shiftKey &&
        !!event.ctrlKey === !!keyCombo.ctrlKey &&
        !!event.altKey === !!keyCombo.altKey &&
        !!event.metaKey === !!keyCombo.metaKey));
}

function parseKeyComboString(keyComboString) {
  if (keyComboString.length === 1) {
    return {combo: keyComboString, key: keyComboString, event: 'keydown'};
  }
  return keyComboString.split('+')
      .reduce(function(parsedKeyCombo, keyComboPart) {
        var eventParts = keyComboPart.split(':');
        var keyName = eventParts[0];
        var event = eventParts[1];

        if (keyName in MODIFIER_KEYS) {
          parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
          parsedKeyCombo.hasModifiers = true;
        } else {
          parsedKeyCombo.key = keyName;
          parsedKeyCombo.event = event || 'keydown';
        }

        return parsedKeyCombo;
      }, {combo: keyComboString.split(':').shift()});
}

function parseEventString(eventString) {
  return eventString.trim().split(' ').map(function(keyComboString) {
    return parseKeyComboString(keyComboString);
  });
}

/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronA11yKeysBehavior = {
  properties: {
    /**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */
    keyEventTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */
    stopKeyboardEventPropagation: {type: Boolean, value: false},

    _boundKeyHandlers: {
      type: Array,
      value: function() {
        return [];
      }
    },

    // We use this due to a limitation in IE10 where instances will have
    // own properties of everything on the "prototype".
    _imperativeKeyBindings: {
      type: Object,
      value: function() {
        return {};
      }
    }
  },

  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],


  /**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */
  keyBindings: {},

  registered: function() {
    this._prepKeyBindings();
  },

  attached: function() {
    this._listenKeyEventListeners();
  },

  detached: function() {
    this._unlistenKeyEventListeners();
  },

  /**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */
  addOwnKeyBinding: function(eventString, handlerName) {
    this._imperativeKeyBindings[eventString] = handlerName;
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * When called, will remove all imperatively-added key bindings.
   */
  removeOwnKeyBindings: function() {
    this._imperativeKeyBindings = {};
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */
  keyboardEventMatchesKeys: function(event, eventString) {
    var keyCombos = parseEventString(eventString);
    for (var i = 0; i < keyCombos.length; ++i) {
      if (keyComboMatchesEvent(keyCombos[i], event)) {
        return true;
      }
    }
    return false;
  },

  _collectKeyBindings: function() {
    var keyBindings = this.behaviors.map(function(behavior) {
      return behavior.keyBindings;
    });

    if (keyBindings.indexOf(this.keyBindings) === -1) {
      keyBindings.push(this.keyBindings);
    }

    return keyBindings;
  },

  _prepKeyBindings: function() {
    this._keyBindings = {};

    this._collectKeyBindings().forEach(function(keyBindings) {
      for (var eventString in keyBindings) {
        this._addKeyBinding(eventString, keyBindings[eventString]);
      }
    }, this);

    for (var eventString in this._imperativeKeyBindings) {
      this._addKeyBinding(
          eventString, this._imperativeKeyBindings[eventString]);
    }

    // Give precedence to combos with modifiers to be checked first.
    for (var eventName in this._keyBindings) {
      this._keyBindings[eventName].sort(function(kb1, kb2) {
        var b1 = kb1[0].hasModifiers;
        var b2 = kb2[0].hasModifiers;
        return (b1 === b2) ? 0 : b1 ? -1 : 1;
      })
    }
  },

  _addKeyBinding: function(eventString, handlerName) {
    parseEventString(eventString).forEach(function(keyCombo) {
      this._keyBindings[keyCombo.event] =
          this._keyBindings[keyCombo.event] || [];

      this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
    }, this);
  },

  _resetKeyEventListeners: function() {
    this._unlistenKeyEventListeners();

    if (this.isAttached) {
      this._listenKeyEventListeners();
    }
  },

  _listenKeyEventListeners: function() {
    if (!this.keyEventTarget) {
      return;
    }
    Object.keys(this._keyBindings).forEach(function(eventName) {
      var keyBindings = this._keyBindings[eventName];
      var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

      this._boundKeyHandlers.push(
          [this.keyEventTarget, eventName, boundKeyHandler]);

      this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
    }, this);
  },

  _unlistenKeyEventListeners: function() {
    var keyHandlerTuple;
    var keyEventTarget;
    var eventName;
    var boundKeyHandler;

    while (this._boundKeyHandlers.length) {
      // My kingdom for block-scope binding and destructuring assignment..
      keyHandlerTuple = this._boundKeyHandlers.pop();
      keyEventTarget = keyHandlerTuple[0];
      eventName = keyHandlerTuple[1];
      boundKeyHandler = keyHandlerTuple[2];

      keyEventTarget.removeEventListener(eventName, boundKeyHandler);
    }
  },

  _onKeyBindingEvent: function(keyBindings, event) {
    if (this.stopKeyboardEventPropagation) {
      event.stopPropagation();
    }

    // if event has been already prevented, don't do anything
    if (event.defaultPrevented) {
      return;
    }

    for (var i = 0; i < keyBindings.length; i++) {
      var keyCombo = keyBindings[i][0];
      var handlerName = keyBindings[i][1];
      if (keyComboMatchesEvent(keyCombo, event)) {
        this._triggerKeyHandler(keyCombo, handlerName, event);
        // exit the loop if eventDefault was prevented
        if (event.defaultPrevented) {
          return;
        }
      }
    }
  },

  _triggerKeyHandler: function(keyCombo, handlerName, keyboardEvent) {
    var detail = Object.create(keyCombo);
    detail.keyboardEvent = keyboardEvent;
    var event =
        new CustomEvent(keyCombo.event, {detail: detail, cancelable: true});
    this[handlerName].call(this, event);
    if (event.defaultPrevented) {
      keyboardEvent.preventDefault();
    }
  }
};


/***/ }),

/***/ "./public/node_modules/@polymer/iron-behaviors/iron-control-state.js":
/*!***************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-behaviors/iron-control-state.js ***!
  \***************************************************************************/
/*! exports provided: IronControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronControlState", function() { return IronControlState; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronControlState = {

  properties: {

    /**
     * If true, the element currently has focus.
     */
    focused: {
      type: Boolean,
      value: false,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * If true, the user cannot interact with this element.
     */
    disabled: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_disabledChanged',
      reflectToAttribute: true
    },

    /**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */
    _oldTabIndex: {type: String},

    _boundFocusBlurHandler: {
      type: Function,
      value: function() {
        return this._focusBlurHandler.bind(this);
      }
    }
  },

  observers: ['_changedControlState(focused, disabled)'],

  /**
   * @return {void}
   */
  ready: function() {
    this.addEventListener('focus', this._boundFocusBlurHandler, true);
    this.addEventListener('blur', this._boundFocusBlurHandler, true);
  },

  _focusBlurHandler: function(event) {
    // Polymer takes care of retargeting events.
    this._setFocused(event.type === 'focus');
    return;
  },

  _disabledChanged: function(disabled, old) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    this.style.pointerEvents = disabled ? 'none' : '';
    if (disabled) {
      // Read the `tabindex` attribute instead of the `tabIndex` property.
      // The property returns `-1` if there is no `tabindex` attribute.
      // This distinction is important when restoring the value because
      // leaving `-1` hides shadow root children from the tab order.
      this._oldTabIndex = this.getAttribute('tabindex');
      this._setFocused(false);
      this.tabIndex = -1;
      this.blur();
    } else if (this._oldTabIndex !== undefined) {
      if (this._oldTabIndex === null) {
        this.removeAttribute('tabindex');
      } else {
        this.setAttribute('tabindex', this._oldTabIndex);
      }
    }
  },

  _changedControlState: function() {
    // _controlStateChanged is abstract, follow-on behaviors may implement it
    if (this._controlStateChanged) {
      this._controlStateChanged();
    }
  }

};


/***/ }),

/***/ "./public/node_modules/@polymer/iron-dropdown/iron-dropdown.js":
/*!*********************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-dropdown/iron-dropdown.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./public/node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/neon-animation/neon-animation-runner-behavior.js */ "./public/node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/










/**
`<iron-dropdown>` is a generalized element that is useful when you have
hidden content (`dropdown-content`) that is revealed due to some change in
state that should cause it to do so.

Note that this is a low-level element intended to be used as part of other
composite elements that cause dropdowns to be revealed.

Examples of elements that might be implemented using an `iron-dropdown`
include comboboxes, menubuttons, selects. The list goes on.

The `<iron-dropdown>` element exposes attributes that allow the position
of the `dropdown-content` relative to the `dropdown-trigger` to be
configured.

    <iron-dropdown horizontal-align="right" vertical-align="top">
      <div slot="dropdown-content">Hello!</div>
    </iron-dropdown>

In the above example, the `<div>` assigned to the `dropdown-content` slot will
be hidden until the dropdown element has `opened` set to true, or when the
`open` method is called on the element.

@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,

  is: 'iron-dropdown',

  behaviors: [
    _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"],
    _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"],
    _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehavior"],
    _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_4__["NeonAnimationRunnerBehavior"]
  ],

  properties: {
    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    horizontalAlign: {type: String, value: 'left', reflectToAttribute: true},

    /**
     * The orientation against which to align the dropdown content
     * vertically relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    verticalAlign: {type: String, value: 'top', reflectToAttribute: true},

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    openAnimationConfig: {type: Object},

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    closeAnimationConfig: {type: Object},

    /**
     * If provided, this will be the element that will be focused when
     * the dropdown opens.
     */
    focusTarget: {type: Object},

    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: {type: Boolean, value: false},

    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     * This property is a shortcut to set `scrollAction` to lock or refit.
     * Prefer directly setting the `scrollAction` property.
     */
    allowOutsideScroll:
        {type: Boolean, value: false, observer: '_allowOutsideScrollChanged'}
  },

  listeners: {'neon-animation-finish': '_onNeonAnimationFinish'},

  observers: [
    '_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)'
  ],

  /**
   * The element that is contained by the dropdown, if any.
   */
  get containedElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this.$.content).getDistributedNodes();
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  ready: function() {
    // Ensure scrollAction is set.
    if (!this.scrollAction) {
      this.scrollAction = this.allowOutsideScroll ? 'refit' : 'lock';
    }
    this._readied = true;
  },

  attached: function() {
    if (!this.sizingTarget || this.sizingTarget === this) {
      this.sizingTarget = this.containedElement || this;
    }
  },

  detached: function() {
    this.cancelAnimation();
  },

  /**
   * Called when the value of `opened` changes.
   * Overridden from `IronOverlayBehavior`
   */
  _openedChanged: function() {
    if (this.opened && this.disabled) {
      this.cancel();
    } else {
      this.cancelAnimation();
      this._updateAnimationConfig();
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._openedChanged.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened: function() {
    if (!this.noAnimations && this.animationConfig.open) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('open');
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._renderOpened.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed: function() {
    if (!this.noAnimations && this.animationConfig.close) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('close');
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._renderClosed.apply(this, arguments);
    }
  },

  /**
   * Called when animation finishes on the dropdown (when opening or
   * closing). Responsible for "completing" the process of opening or
   * closing the dropdown by positioning it or setting its display to
   * none.
   */
  _onNeonAnimationFinish: function() {
    this.$.contentWrapper.classList.remove('animating');
    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  },

  /**
   * Constructs the final animation config from different properties used
   * to configure specific parts of the opening and closing animations.
   */
  _updateAnimationConfig: function() {
    // Update the animation node to be the containedElement.
    var animationNode = this.containedElement;
    var animations = [].concat(this.openAnimationConfig || [])
                         .concat(this.closeAnimationConfig || []);
    for (var i = 0; i < animations.length; i++) {
      animations[i].node = animationNode;
    }
    this.animationConfig = {
      open: this.openAnimationConfig,
      close: this.closeAnimationConfig
    };
  },

  /**
   * Updates the overlay position based on configured horizontal
   * and vertical alignment.
   */
  _updateOverlayPosition: function() {
    if (this.isAttached) {
      // This triggers iron-resize, and iron-overlay-behavior will call refit if
      // needed.
      this.notifyResize();
    }
  },

  /**
   * Sets scrollAction according to the value of allowOutsideScroll.
   * Prefer setting directly scrollAction.
   */
  _allowOutsideScrollChanged: function(allowOutsideScroll) {
    // Wait until initial values are all set.
    if (!this._readied) {
      return;
    }
    if (!allowOutsideScroll) {
      this.scrollAction = 'lock';
    } else if (!this.scrollAction || this.scrollAction === 'lock') {
      this.scrollAction = 'refit';
    }
  },

  /**
   * Apply focus to focusTarget or containedElement
   */
  _applyFocus: function() {
    var focusTarget = this.focusTarget || this.containedElement;
    if (focusTarget && this.opened && !this.noAutoFocus) {
      focusTarget.focus();
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._applyFocus.apply(this, arguments);
    }
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js":
/*!*****************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js ***!
  \*****************************************************************************/
/*! exports provided: IronFitBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFitBehavior", function() { return IronFitBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
`Polymer.IronFitBehavior` fits an element in another element using `max-height`
and `max-width`, and optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been
sized and/or positioned by CSS.

CSS properties            | Action
--------------------------|-------------------------------------------
`position` set            | Element is not centered horizontally or vertically
`top` or `bottom` set     | Element is not vertically centered
`left` or `right` set     | Element is not horizontally centered
`max-height` set          | Element respects `max-height`
`max-width` set           | Element respects `max-width`

`Polymer.IronFitBehavior` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css
position.

    <div class="container">
      <iron-fit-impl vertical-align="top" horizontal-align="auto">
        Positioned into the container
      </iron-fit-impl>
    </div>

Use `noOverlap` to position the element around another element without
overlapping it.

    <div class="container">
      <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
        Positioned around the container
      </iron-fit-impl>
    </div>

Use `horizontalOffset, verticalOffset` to offset the element from its
`positionTarget`; `Polymer.IronFitBehavior` will collapse these in order to
keep the element within `fitInto` boundaries, while preserving the element's
CSS margin values.

    <div class="container">
      <iron-fit-impl vertical-align="top" vertical-offset="20">
        With vertical offset
      </iron-fit-impl>
    </div>

@demo demo/index.html
@polymerBehavior
*/
const IronFitBehavior = {

  properties: {

    /**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */
    sizingTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * The element to fit `this` into.
     */
    fitInto: {type: Object, value: window},

    /**
     * Will position the element around the positionTarget without overlapping
     * it.
     */
    noOverlap: {type: Boolean},

    /**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */
    positionTarget: {type: Element},

    /**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */
    horizontalAlign: {type: String},

    /**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */
    verticalAlign: {type: String},

    /**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */
    dynamicAlign: {type: Boolean},

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */
    horizontalOffset: {type: Number, value: 0, notify: true},

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */
    verticalOffset: {type: Number, value: 0, notify: true},

    /**
     * Set to true to auto-fit on attach.
     */
    autoFitOnAttach: {type: Boolean, value: false},

    /** @type {?Object} */
    _fitInfo: {type: Object}
  },

  get _fitWidth() {
    var fitWidth;
    if (this.fitInto === window) {
      fitWidth = this.fitInto.innerWidth;
    } else {
      fitWidth = this.fitInto.getBoundingClientRect().width;
    }
    return fitWidth;
  },

  get _fitHeight() {
    var fitHeight;
    if (this.fitInto === window) {
      fitHeight = this.fitInto.innerHeight;
    } else {
      fitHeight = this.fitInto.getBoundingClientRect().height;
    }
    return fitHeight;
  },

  get _fitLeft() {
    var fitLeft;
    if (this.fitInto === window) {
      fitLeft = 0;
    } else {
      fitLeft = this.fitInto.getBoundingClientRect().left;
    }
    return fitLeft;
  },

  get _fitTop() {
    var fitTop;
    if (this.fitInto === window) {
      fitTop = 0;
    } else {
      fitTop = this.fitInto.getBoundingClientRect().top;
    }
    return fitTop;
  },

  /**
   * The element that should be used to position the element,
   * if no position target is configured.
   */
  get _defaultPositionTarget() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).parentNode;

    if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      parent = parent.host;
    }

    return parent;
  },

  /**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */
  get _localeHorizontalAlign() {
    if (this._isRTL) {
      // In RTL, "left" becomes "right".
      if (this.horizontalAlign === 'right') {
        return 'left';
      }
      if (this.horizontalAlign === 'left') {
        return 'right';
      }
    }
    return this.horizontalAlign;
  },

  /**
   * True if the element should be positioned instead of centered.
   * @private
   */
  get __shouldPosition() {
    return (this.horizontalAlign || this.verticalAlign) && this.positionTarget;
  },

  /**
   * True if the component is RTL.
   * @private
   */
  get _isRTL() {
    // Memoize this to avoid expensive calculations & relayouts.
    // Make sure we do it only once
    if (typeof this._memoizedIsRTL === 'undefined') {
      this._memoizedIsRTL = window.getComputedStyle(this).direction == 'rtl';
    }
    return this._memoizedIsRTL;
  },

  /** @override */
  attached: function() {
    this.positionTarget = this.positionTarget || this._defaultPositionTarget;
    if (this.autoFitOnAttach) {
      if (window.getComputedStyle(this).display === 'none') {
        setTimeout(function() {
          this.fit();
        }.bind(this));
      } else {
        // NOTE: shadydom applies distribution asynchronously
        // for performance reasons webcomponents/shadydom#120
        // Flush to get correct layout info.
        window.ShadyDOM && ShadyDOM.flush();
        this.fit();
      }
    }
  },

  /** @override */
  detached: function() {
    if (this.__deferredFit) {
      clearTimeout(this.__deferredFit);
      this.__deferredFit = null;
    }
  },

  /**
   * Positions and fits the element into the `fitInto` element.
   */
  fit: function() {
    this.position();
    this.constrain();
    this.center();
  },

  /**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */
  _discoverInfo: function() {
    if (this._fitInfo) {
      return;
    }
    var target = window.getComputedStyle(this);
    var sizer = window.getComputedStyle(this.sizingTarget);

    this._fitInfo = {
      inlineStyle: {
        top: this.style.top || '',
        left: this.style.left || '',
        position: this.style.position || ''
      },
      sizerInlineStyle: {
        maxWidth: this.sizingTarget.style.maxWidth || '',
        maxHeight: this.sizingTarget.style.maxHeight || '',
        boxSizing: this.sizingTarget.style.boxSizing || ''
      },
      positionedBy: {
        vertically: target.top !== 'auto' ?
            'top' :
            (target.bottom !== 'auto' ? 'bottom' : null),
        horizontally: target.left !== 'auto' ?
            'left' :
            (target.right !== 'auto' ? 'right' : null)
      },
      sizedBy: {
        height: sizer.maxHeight !== 'none',
        width: sizer.maxWidth !== 'none',
        minWidth: parseInt(sizer.minWidth, 10) || 0,
        minHeight: parseInt(sizer.minHeight, 10) || 0
      },
      margin: {
        top: parseInt(target.marginTop, 10) || 0,
        right: parseInt(target.marginRight, 10) || 0,
        bottom: parseInt(target.marginBottom, 10) || 0,
        left: parseInt(target.marginLeft, 10) || 0
      }
    };
  },

  /**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */
  resetFit: function() {
    var info = this._fitInfo || {};
    for (var property in info.sizerInlineStyle) {
      this.sizingTarget.style[property] = info.sizerInlineStyle[property];
    }
    for (var property in info.inlineStyle) {
      this.style[property] = info.inlineStyle[property];
    }

    this._fitInfo = null;
  },

  /**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */
  refit: function() {
    var scrollLeft = this.sizingTarget.scrollLeft;
    var scrollTop = this.sizingTarget.scrollTop;
    this.resetFit();
    this.fit();
    this.sizingTarget.scrollLeft = scrollLeft;
    this.sizingTarget.scrollTop = scrollTop;
  },

  /**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */
  position: function() {
    if (!this.__shouldPosition) {
      // needs to be centered, and it is done after constrain.
      return;
    }
    this._discoverInfo();

    this.style.position = 'fixed';
    // Need border-box for margin/padding.
    this.sizingTarget.style.boxSizing = 'border-box';
    // Set to 0, 0 in order to discover any offset caused by parent stacking
    // contexts.
    this.style.left = '0px';
    this.style.top = '0px';

    var rect = this.getBoundingClientRect();
    var positionRect = this.__getNormalizedRect(this.positionTarget);
    var fitRect = this.__getNormalizedRect(this.fitInto);

    var margin = this._fitInfo.margin;

    // Consider the margin as part of the size for position calculations.
    var size = {
      width: rect.width + margin.left + margin.right,
      height: rect.height + margin.top + margin.bottom
    };

    var position = this.__getPosition(
        this._localeHorizontalAlign,
        this.verticalAlign,
        size,
        rect,
        positionRect,
        fitRect);

    var left = position.left + margin.left;
    var top = position.top + margin.top;

    // We first limit right/bottom within fitInto respecting the margin,
    // then use those values to limit top/left.
    var right = Math.min(fitRect.right - margin.right, left + rect.width);
    var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height);

    // Keep left/top within fitInto respecting the margin.
    left = Math.max(
        fitRect.left + margin.left,
        Math.min(left, right - this._fitInfo.sizedBy.minWidth));
    top = Math.max(
        fitRect.top + margin.top,
        Math.min(top, bottom - this._fitInfo.sizedBy.minHeight));

    // Use right/bottom to set maxWidth/maxHeight, and respect
    // minWidth/minHeight.
    this.sizingTarget.style.maxWidth =
        Math.max(right - left, this._fitInfo.sizedBy.minWidth) + 'px';
    this.sizingTarget.style.maxHeight =
        Math.max(bottom - top, this._fitInfo.sizedBy.minHeight) + 'px';

    // Remove the offset caused by any stacking context.
    this.style.left = (left - rect.left) + 'px';
    this.style.top = (top - rect.top) + 'px';
  },

  /**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */
  constrain: function() {
    if (this.__shouldPosition) {
      return;
    }
    this._discoverInfo();

    var info = this._fitInfo;
    // position at (0px, 0px) if not already positioned, so we can measure the
    // natural size.
    if (!info.positionedBy.vertically) {
      this.style.position = 'fixed';
      this.style.top = '0px';
    }
    if (!info.positionedBy.horizontally) {
      this.style.position = 'fixed';
      this.style.left = '0px';
    }

    // need border-box for margin/padding
    this.sizingTarget.style.boxSizing = 'border-box';
    // constrain the width and height if not already set
    var rect = this.getBoundingClientRect();
    if (!info.sizedBy.height) {
      this.__sizeDimension(
          rect, info.positionedBy.vertically, 'top', 'bottom', 'Height');
    }
    if (!info.sizedBy.width) {
      this.__sizeDimension(
          rect, info.positionedBy.horizontally, 'left', 'right', 'Width');
    }
  },

  /**
   * @protected
   * @deprecated
   */
  _sizeDimension: function(rect, positionedBy, start, end, extent) {
    this.__sizeDimension(rect, positionedBy, start, end, extent);
  },

  /**
   * @private
   */
  __sizeDimension: function(rect, positionedBy, start, end, extent) {
    var info = this._fitInfo;
    var fitRect = this.__getNormalizedRect(this.fitInto);
    var max = extent === 'Width' ? fitRect.width : fitRect.height;
    var flip = (positionedBy === end);
    var offset = flip ? max - rect[end] : rect[start];
    var margin = info.margin[flip ? start : end];
    var offsetExtent = 'offset' + extent;
    var sizingOffset = this[offsetExtent] - this.sizingTarget[offsetExtent];
    this.sizingTarget.style['max' + extent] =
        (max - margin - offset - sizingOffset) + 'px';
  },

  /**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */
  center: function() {
    if (this.__shouldPosition) {
      return;
    }
    this._discoverInfo();

    var positionedBy = this._fitInfo.positionedBy;
    if (positionedBy.vertically && positionedBy.horizontally) {
      // Already positioned.
      return;
    }
    // Need position:fixed to center
    this.style.position = 'fixed';
    // Take into account the offset caused by parents that create stacking
    // contexts (e.g. with transform: translate3d). Translate to 0,0 and
    // measure the bounding rect.
    if (!positionedBy.vertically) {
      this.style.top = '0px';
    }
    if (!positionedBy.horizontally) {
      this.style.left = '0px';
    }
    // It will take in consideration margins and transforms
    var rect = this.getBoundingClientRect();
    var fitRect = this.__getNormalizedRect(this.fitInto);
    if (!positionedBy.vertically) {
      var top = fitRect.top - rect.top + (fitRect.height - rect.height) / 2;
      this.style.top = top + 'px';
    }
    if (!positionedBy.horizontally) {
      var left = fitRect.left - rect.left + (fitRect.width - rect.width) / 2;
      this.style.left = left + 'px';
    }
  },

  __getNormalizedRect: function(target) {
    if (target === document.documentElement || target === window) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    }
    return target.getBoundingClientRect();
  },

  __getOffscreenArea: function(position, size, fitRect) {
    var verticalCrop = Math.min(0, position.top) +
        Math.min(0, fitRect.bottom - (position.top + size.height));
    var horizontalCrop = Math.min(0, position.left) +
        Math.min(0, fitRect.right - (position.left + size.width));
    return Math.abs(verticalCrop) * size.width +
        Math.abs(horizontalCrop) * size.height;
  },


  __getPosition: function(
      hAlign, vAlign, size, sizeNoMargins, positionRect, fitRect) {
    // All the possible configurations.
    // Ordered as top-left, top-right, bottom-left, bottom-right.
    var positions = [
      {
        verticalAlign: 'top',
        horizontalAlign: 'left',
        top: positionRect.top + this.verticalOffset,
        left: positionRect.left + this.horizontalOffset
      },
      {
        verticalAlign: 'top',
        horizontalAlign: 'right',
        top: positionRect.top + this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset
      },
      {
        verticalAlign: 'bottom',
        horizontalAlign: 'left',
        top: positionRect.bottom - size.height - this.verticalOffset,
        left: positionRect.left + this.horizontalOffset
      },
      {
        verticalAlign: 'bottom',
        horizontalAlign: 'right',
        top: positionRect.bottom - size.height - this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset
      }
    ];

    if (this.noOverlap) {
      // Duplicate.
      for (var i = 0, l = positions.length; i < l; i++) {
        var copy = {};
        for (var key in positions[i]) {
          copy[key] = positions[i][key];
        }
        positions.push(copy);
      }
      // Horizontal overlap only.
      positions[0].top = positions[1].top += positionRect.height;
      positions[2].top = positions[3].top -= positionRect.height;
      // Vertical overlap only.
      positions[4].left = positions[6].left += positionRect.width;
      positions[5].left = positions[7].left -= positionRect.width;
    }

    // Consider auto as null for coding convenience.
    vAlign = vAlign === 'auto' ? null : vAlign;
    hAlign = hAlign === 'auto' ? null : hAlign;

    if (!hAlign || hAlign === 'center') {
      positions.push({
        verticalAlign: 'top',
        horizontalAlign: 'center',
        top: positionRect.top + this.verticalOffset +
            (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 +
            positionRect.width / 2 + this.horizontalOffset
      });
      positions.push({
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        top: positionRect.bottom - size.height - this.verticalOffset -
            (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 +
            positionRect.width / 2 + this.horizontalOffset
      });
    }

    if (!vAlign || vAlign === 'middle') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'left',
        top: positionRect.top - sizeNoMargins.height / 2 +
            positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left + this.horizontalOffset +
            (this.noOverlap ? positionRect.width : 0)
      });
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'right',
        top: positionRect.top - sizeNoMargins.height / 2 +
            positionRect.height / 2 + this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset -
            (this.noOverlap ? positionRect.width : 0)
      });
    }

    if (vAlign === 'middle' && hAlign === 'center') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'center',
        top: positionRect.top - sizeNoMargins.height / 2 +
            positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left - sizeNoMargins.width / 2 +
            positionRect.width / 2 + this.horizontalOffset
      });
    }

    var position;
    for (var i = 0; i < positions.length; i++) {
      var candidate = positions[i];
      var vAlignOk = candidate.verticalAlign === vAlign;
      var hAlignOk = candidate.horizontalAlign === hAlign;

      // If both vAlign and hAlign are defined, return exact match.
      // For dynamicAlign and noOverlap we'll have more than one candidate, so
      // we'll have to check the offscreenArea to make the best choice.
      if (!this.dynamicAlign && !this.noOverlap && vAlignOk && hAlignOk) {
        position = candidate;
        break;
      }

      // Align is ok if alignment preferences are respected. If no preferences,
      // it is considered ok.
      var alignOk = (!vAlign || vAlignOk) && (!hAlign || hAlignOk);

      // Filter out elements that don't match the alignment (if defined).
      // With dynamicAlign, we need to consider all the positions to find the
      // one that minimizes the cropped area.
      if (!this.dynamicAlign && !alignOk) {
        continue;
      }

      candidate.offscreenArea =
          this.__getOffscreenArea(candidate, size, fitRect);
      // If not cropped and respects the align requirements, keep it.
      // This allows to prefer positions overlapping horizontally over the
      // ones overlapping vertically.
      if (candidate.offscreenArea === 0 && alignOk) {
        position = candidate;
        break;
      }
      position = position || candidate;
      var diff = candidate.offscreenArea - position.offscreenArea;
      // Check which crops less. If it crops equally, check if at least one
      // align setting is ok.
      if (diff < 0 || (diff === 0 && (vAlignOk || hAlignOk))) {
        position = candidate;
      }
    }

    return position;
  }

};


/***/ }),

/***/ "./public/node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js":
/*!**************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js ***!
  \**************************************************************************************/
/*! exports provided: IronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFocusablesHelper", function() { return IronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




var p = Element.prototype;
var matches = p.matches || p.matchesSelector || p.mozMatchesSelector ||
    p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;

class IronFocusablesHelperClass {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes(node) {
    var result = [];
    // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.
    var needsSortByTabIndex = this._collectTabbableNodes(node, result);
    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }
    return result;
  }

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable(element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html

    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    }
    // Elements that can be focused even if they have [disabled] attribute.
    return matches.call(
        element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  }

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable(element) {
    return this.isFocusable(element) &&
        matches.call(element, ':not([tabindex="-1"])') &&
        this._isVisible(element);
  }

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex(element) {
    if (this.isFocusable(element)) {
      var tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }
    return -1;
  }

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    var element = /** @type {!HTMLElement} */ (node);
    if (!this._isVisible(element)) {
      return false;
    }
    var tabIndex = this._normalizedTabIndex(element);
    var needsSort = tabIndex > 0;
    if (tabIndex >= 0) {
      result.push(element);
    }
    // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
    var children;
    if (element.localName === 'content' || element.localName === 'slot') {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).getDistributedNodes();
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element.root || element).children;
    }
    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }
    return needsSort;
  }

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible(element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    var style = element.style;
    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return (style.visibility !== 'hidden' && style.display !== 'none');
    }
    return false;
  }

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex(tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var len = tabbables.length;
    if (len < 2) {
      return tabbables;
    }
    var pivot = Math.ceil(len / 2);
    var left = this._sortByTabIndex(tabbables.slice(0, pivot));
    var right = this._sortByTabIndex(tabbables.slice(pivot));
    return this._mergeSortByTabIndex(left, right);
  }

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex(left, right) {
    var result = [];
    while ((left.length > 0) && (right.length > 0)) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  }

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder(a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    var ati = Math.max(a.tabIndex, 0);
    var bti = Math.max(b.tabIndex, 0);
    return (ati === 0 || bti === 0) ? bti > ati : ati > bti;
  }
}

const IronFocusablesHelper = new IronFocusablesHelperClass();


/***/ }),

/***/ "./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js":
/*!*************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/*
`iron-overlay-backdrop` is a backdrop used by `Polymer.IronOverlayBehavior`. It
should be a singleton.

### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
-------------------------------------------|------------------------|---------
`--iron-overlay-backdrop-background-color` | Backdrop background color | #000
`--iron-overlay-backdrop-opacity`          | Backdrop opacity | 0.6
`--iron-overlay-backdrop`                  | Mixin applied to `iron-overlay-backdrop`.                      | {}
`--iron-overlay-backdrop-opened`           | Mixin applied to `iron-overlay-backdrop` when it is displayed | {}
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-overlay-backdrop',

  properties: {

    /**
     * Returns true if the backdrop is opened.
     */
    opened: {
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_openedChanged',
    }

  },

  listeners: {
    'transitionend': '_onTransitionend',
  },

  /** @override */
  created: function() {
    // Used to cancel previous requestAnimationFrame calls when opened changes.
    this.__openedRaf = null;
  },

  /** @override */
  attached: function() {
    this.opened && this._openedChanged(this.opened);
  },

  /**
   * Appends the backdrop to document body if needed.
   */
  prepare: function() {
    if (this.opened && !this.parentNode) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(document.body).appendChild(this);
    }
  },

  /**
   * Shows the backdrop.
   */
  open: function() {
    this.opened = true;
  },

  /**
   * Hides the backdrop.
   */
  close: function() {
    this.opened = false;
  },

  /**
   * Removes the backdrop from document body if needed.
   */
  complete: function() {
    if (!this.opened && this.parentNode === document.body) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this.parentNode).removeChild(this);
    }
  },

  _onTransitionend: function(event) {
    if (event && event.target === this) {
      this.complete();
    }
  },

  /**
   * @param {boolean} opened
   * @private
   */
  _openedChanged: function(opened) {
    if (opened) {
      // Auto-attach.
      this.prepare();
    } else {
      // Animation might be disabled via the mixin or opacity custom property.
      // If it is disabled in other ways, it's up to the user to call complete.
      var cs = window.getComputedStyle(this);
      if (cs.transitionDuration === '0s' || cs.opacity == 0) {
        this.complete();
      }
    }

    if (!this.isAttached) {
      return;
    }

    // Always cancel previous requestAnimationFrame.
    if (this.__openedRaf) {
      window.cancelAnimationFrame(this.__openedRaf);
      this.__openedRaf = null;
    }
    // Force relayout to ensure proper transitions.
    this.scrollTop = this.scrollTop;
    this.__openedRaf = window.requestAnimationFrame(function() {
      this.__openedRaf = null;
      this.toggleClass('opened', this.opened);
    }.bind(this));
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js":
/*!*************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js ***!
  \*************************************************************************************/
/*! exports provided: IronOverlayBehaviorImpl, IronOverlayBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayBehaviorImpl", function() { return IronOverlayBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayBehavior", function() { return IronOverlayBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_fit_behavior_iron_fit_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-fit-behavior/iron-fit-behavior.js */ "./public/node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./public/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./public/node_modules/@polymer/polymer/lib/utils/settings.js");
/* harmony import */ var _iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iron-focusables-helper.js */ "./public/node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/* harmony import */ var _iron_overlay_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iron-overlay-manager.js */ "./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js");
/* harmony import */ var _iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iron-scroll-manager.js */ "./public/node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/











/** @polymerBehavior */
const IronOverlayBehaviorImpl = {

  properties: {

    /**
     * True if the overlay is currently displayed.
     */
    opened:
        {observer: '_openedChanged', type: Boolean, value: false, notify: true},

    /**
     * True if the overlay was canceled when it was last closed.
     */
    canceled: {
      observer: '_canceledChanged',
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */
    withBackdrop: {
      observer: '_withBackdropChanged',
      type: Boolean,
    },

    /**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: {
      type: Boolean,
      value: false,
    },

    /**
     * Set to true to disable canceling the overlay with the ESC key.
     */
    noCancelOnEscKey: {
      type: Boolean,
      value: false,
    },

    /**
     * Set to true to disable canceling the overlay by clicking outside it.
     */
    noCancelOnOutsideClick: {
      type: Boolean,
      value: false,
    },

    /**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */
    closingReason: {
      // was a getter before, but needs to be a property so other
      // behaviors can override this.
      type: Object,
    },

    /**
     * Set to true to enable restoring of focus when overlay is closed.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: false,
    },

    /**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */
    allowClickThrough: {
      type: Boolean,
    },

    /**
     * Set to true to keep overlay always on top.
     */
    alwaysOnTop: {
      type: Boolean,
    },

    /**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */
    scrollAction: {
      type: String,
    },

    /**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */
    _manager: {
      type: Object,
      value: _iron_overlay_manager_js__WEBPACK_IMPORTED_MODULE_6__["IronOverlayManager"],
    },

    /**
     * The node being focused.
     * @type {?Node}
     */
    _focusedChild: {
      type: Object,
    }

  },

  listeners: {'iron-resize': '_onIronResize'},

  observers: ['__updateScrollObservers(isAttached, opened, scrollAction)'],

  /**
   * The backdrop element.
   * @return {!Element}
   */
  get backdropElement() {
    return this._manager.backdropElement;
  },

  /**
   * Returns the node to give focus to.
   * @return {!Node}
   */
  get _focusNode() {
    return this._focusedChild || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[autofocus]') || this;
  },

  /**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */
  get _focusableNodes() {
    return _iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["IronFocusablesHelper"].getTabbableNodes(this);
  },

  /**
   * @return {void}
   */
  ready: function() {
    // Used to skip calls to notifyResize and refit while the overlay is
    // animating.
    this.__isAnimating = false;
    // with-backdrop needs tabindex to be set in order to trap the focus.
    // If it is not set, IronOverlayBehavior will set it, and remove it if
    // with-backdrop = false.
    this.__shouldRemoveTabIndex = false;
    // Used for wrapping the focus on TAB / Shift+TAB.
    this.__firstFocusableNode = this.__lastFocusableNode = null;
    // Used by to keep track of the RAF callbacks.
    this.__rafs = {};
    // Focused node before overlay gets opened. Can be restored on close.
    this.__restoreFocusNode = null;
    // Scroll info to be restored.
    this.__scrollTop = this.__scrollLeft = null;
    this.__onCaptureScroll = this.__onCaptureScroll.bind(this);
    // Root nodes hosting the overlay, used to listen for scroll events on them.
    this.__rootNodes = null;
    this._ensureSetup();
  },

  /** @override */
  attached: function() {
    // Call _openedChanged here so that position can be computed correctly.
    if (this.opened) {
      this._openedChanged(this.opened);
    }
    this._observer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).observeNodes(this._onNodesChange);
  },

  /** @override */
  detached: function() {
    // TODO(bicknellr): Per spec, checking `this._observer` should never be
    // necessary because `connectedCallback` and `disconnectedCallback` should
    // always be called in alternating order. However, the custom elements
    // polyfill doesn't implement the reactions stack, so this can sometimes
    // happen, particularly if ShadyDOM is in noPatch mode where the custom
    // elements polyfill is installed before ShadyDOM. We should investigate
    // whether or not we can either implement the reactions stack without major
    // performance implications or patch ShadyDOM's functions to restore the
    // typical ShadyDOM-then-custom-elements order and remove this workaround.
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).unobserveNodes(this._observer);
    }
    this._observer = null;
    for (var cb in this.__rafs) {
      if (this.__rafs[cb] !== null) {
        cancelAnimationFrame(this.__rafs[cb]);
      }
    }
    this.__rafs = {};
    this._manager.removeOverlay(this);

    // We got detached while animating, ensure we show/hide the overlay
    // and fire iron-overlay-opened/closed event!
    if (this.__isAnimating) {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        // Restore the focus if necessary.
        this._applyFocus();
        this._finishRenderClosed();
      }
    }
  },

  /**
   * Toggle the opened state of the overlay.
   */
  toggle: function() {
    this._setCanceled(false);
    this.opened = !this.opened;
  },

  /**
   * Open the overlay.
   */
  open: function() {
    this._setCanceled(false);
    this.opened = true;
  },

  /**
   * Close the overlay.
   */
  close: function() {
    this._setCanceled(false);
    this.opened = false;
  },

  /**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */
  cancel: function(event) {
    var cancelEvent =
        this.fire('iron-overlay-canceled', event, {cancelable: true});
    if (cancelEvent.defaultPrevented) {
      return;
    }

    this._setCanceled(true);
    this.opened = false;
  },

  /**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */
  invalidateTabbables: function() {
    this.__firstFocusableNode = this.__lastFocusableNode = null;
  },

  _ensureSetup: function() {
    if (this._overlaySetup) {
      return;
    }
    this._overlaySetup = true;
    this.style.outline = 'none';
    this.style.display = 'none';
  },

  /**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */
  _openedChanged: function(opened) {
    if (opened) {
      this.removeAttribute('aria-hidden');
    } else {
      this.setAttribute('aria-hidden', 'true');
    }

    // Defer any animation-related code on attached
    // (_openedChanged gets called again on attached).
    if (!this.isAttached) {
      return;
    }

    this.__isAnimating = true;

    // Deraf for non-blocking rendering.
    this.__deraf('__openedChanged', this.__openedChanged);
  },

  _canceledChanged: function() {
    this.closingReason = this.closingReason || {};
    this.closingReason.canceled = this.canceled;
  },

  _withBackdropChanged: function() {
    // If tabindex is already set, no need to override it.
    if (this.withBackdrop && !this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '-1');
      this.__shouldRemoveTabIndex = true;
    } else if (this.__shouldRemoveTabIndex) {
      this.removeAttribute('tabindex');
      this.__shouldRemoveTabIndex = false;
    }
    if (this.opened && this.isAttached) {
      this._manager.trackBackdrop();
    }
  },

  /**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */
  _prepareRenderOpened: function() {
    // Store focused node.
    this.__restoreFocusNode = this._manager.deepActiveElement;

    // Needed to calculate the size of the overlay so that transitions on its
    // size will have the correct starting points.
    this._preparePositioning();
    this.refit();
    this._finishPositioning();

    // Safari will apply the focus to the autofocus element when displayed
    // for the first time, so we make sure to return the focus where it was.
    if (this.noAutoFocus && document.activeElement === this._focusNode) {
      this._focusNode.blur();
      this.__restoreFocusNode.focus();
    }
  },

  /**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */
  _renderOpened: function() {
    this._finishRenderOpened();
  },

  /**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */
  _renderClosed: function() {
    this._finishRenderClosed();
  },

  /**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */
  _finishRenderOpened: function() {
    this.notifyResize();
    this.__isAnimating = false;

    this.fire('iron-overlay-opened');
  },

  /**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */
  _finishRenderClosed: function() {
    // Hide the overlay.
    this.style.display = 'none';
    // Reset z-index only at the end of the animation.
    this.style.zIndex = '';
    this.notifyResize();
    this.__isAnimating = false;
    this.fire('iron-overlay-closed', this.closingReason);
  },

  _preparePositioning: function() {
    this.style.transition = this.style.webkitTransition = 'none';
    this.style.transform = this.style.webkitTransform = 'none';
    this.style.display = '';
  },

  _finishPositioning: function() {
    // First, make it invisible & reactivate animations.
    this.style.display = 'none';
    // Force reflow before re-enabling animations so that they don't start.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.
    this.scrollTop = this.scrollTop;
    this.style.transition = this.style.webkitTransition = '';
    this.style.transform = this.style.webkitTransform = '';
    // Now that animations are enabled, make it visible again
    this.style.display = '';
    // Force reflow, so that following animations are properly started.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.
    this.scrollTop = this.scrollTop;
  },

  /**
   * Applies focus according to the opened state.
   * @protected
   */
  _applyFocus: function() {
    if (this.opened) {
      if (!this.noAutoFocus) {
        this._focusNode.focus();
      }
    } else {
      // Restore focus.
      if (this.restoreFocusOnClose && this.__restoreFocusNode) {
        // If the activeElement is `<body>` or inside the overlay,
        // we are allowed to restore the focus. In all the other
        // cases focus might have been moved elsewhere by another
        // component or by an user interaction (e.g. click on a
        // button outside the overlay).
        var activeElement = this._manager.deepActiveElement;
        if (activeElement === document.body ||
            composedContains(this, activeElement)) {
          this.__restoreFocusNode.focus();
        }
      }
      this.__restoreFocusNode = null;
      this._focusNode.blur();
      this._focusedChild = null;
    }
  },

  /**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureClick: function(event) {
    if (!this.noCancelOnOutsideClick) {
      this.cancel(event);
    }
  },

  /**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureFocus: function(event) {
    if (!this.withBackdrop) {
      return;
    }
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path;
    if (path.indexOf(this) === -1) {
      event.stopPropagation();
      this._applyFocus();
    } else {
      this._focusedChild = /** @type {Node} */ (path[0]);
    }
  },

  /**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureEsc: function(event) {
    if (!this.noCancelOnEscKey) {
      this.cancel(event);
    }
  },

  /**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */
  _onCaptureTab: function(event) {
    if (!this.withBackdrop) {
      return;
    }
    this.__ensureFirstLastFocusables();
    // TAB wraps from last to first focusable.
    // Shift + TAB wraps from first to last focusable.
    var shift = event.shiftKey;
    var nodeToCheck =
        shift ? this.__firstFocusableNode : this.__lastFocusableNode;
    var nodeToSet =
        shift ? this.__lastFocusableNode : this.__firstFocusableNode;
    var shouldWrap = false;
    if (nodeToCheck === nodeToSet) {
      // If nodeToCheck is the same as nodeToSet, it means we have an overlay
      // with 0 or 1 focusables; in either case we still need to trap the
      // focus within the overlay.
      shouldWrap = true;
    } else {
      // In dom=shadow, the manager will receive focus changes on the main
      // root but not the ones within other shadow roots, so we can't rely on
      // _focusedChild, but we should check the deepest active element.
      var focusedNode = this._manager.deepActiveElement;
      // If the active element is not the nodeToCheck but the overlay itself,
      // it means the focus is about to go outside the overlay, hence we
      // should prevent that (e.g. user opens the overlay and hit Shift+TAB).
      shouldWrap = (focusedNode === nodeToCheck || focusedNode === this);
    }

    if (shouldWrap) {
      // When the overlay contains the last focusable element of the document
      // and it's already focused, pressing TAB would move the focus outside
      // the document (e.g. to the browser search bar). Similarly, when the
      // overlay contains the first focusable element of the document and it's
      // already focused, pressing Shift+TAB would move the focus outside the
      // document (e.g. to the browser search bar).
      // In both cases, we would not receive a focus event, but only a blur.
      // In order to achieve focus wrapping, we prevent this TAB event and
      // force the focus. This will also prevent the focus to temporarily move
      // outside the overlay, which might cause scrolling.
      event.preventDefault();
      this._focusedChild = nodeToSet;
      this._applyFocus();
    }
  },

  /**
   * Refits if the overlay is opened and not animating.
   * @protected
   */
  _onIronResize: function() {
    if (this.opened && !this.__isAnimating) {
      this.__deraf('refit', this.refit);
    }
  },

  /**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */
  _onNodesChange: function() {
    if (this.opened && !this.__isAnimating) {
      // It might have added focusable nodes, so invalidate cached values.
      this.invalidateTabbables();
      this.notifyResize();
    }
  },

  /**
   * Updates the references to the first and last focusable nodes.
   * @private
   */
  __ensureFirstLastFocusables: function() {
    var focusableNodes = this._focusableNodes;
    this.__firstFocusableNode = focusableNodes[0];
    this.__lastFocusableNode = focusableNodes[focusableNodes.length - 1];
  },

  /**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */
  __openedChanged: function() {
    if (this.opened) {
      // Make overlay visible, then add it to the manager.
      this._prepareRenderOpened();
      this._manager.addOverlay(this);
      // Move the focus to the child node with [autofocus].
      this._applyFocus();

      this._renderOpened();
    } else {
      // Remove overlay, then restore the focus before actually closing.
      this._manager.removeOverlay(this);
      this._applyFocus();

      this._renderClosed();
    }
  },

  /**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */
  __deraf: function(jobname, callback) {
    var rafs = this.__rafs;
    if (rafs[jobname] !== null) {
      cancelAnimationFrame(rafs[jobname]);
    }
    rafs[jobname] = requestAnimationFrame(function nextAnimationFrame() {
      rafs[jobname] = null;
      callback.call(this);
    }.bind(this));
  },

  /**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */
  __updateScrollObservers: function(isAttached, opened, scrollAction) {
    if (!isAttached || !opened || !this.__isValidScrollAction(scrollAction)) {
      Object(_iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__["removeScrollLock"])(this);
      this.__removeScrollListeners();
    } else {
      if (scrollAction === 'lock') {
        this.__saveScrollPosition();
        Object(_iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__["pushScrollLock"])(this);
      }
      this.__addScrollListeners();
    }
  },

  /**
   * @private
   */
  __addScrollListeners: function() {
    if (!this.__rootNodes) {
      this.__rootNodes = [];
      // Listen for scroll events in all shadowRoots hosting this overlay only
      // when in native ShadowDOM.
      if (_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_4__["useShadow"]) {
        var node = this;
        while (node) {
          if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && node.host) {
            this.__rootNodes.push(node);
          }
          node = node.host || node.assignedSlot || node.parentNode;
        }
      }
      this.__rootNodes.push(document);
    }
    this.__rootNodes.forEach(function(el) {
      el.addEventListener('scroll', this.__onCaptureScroll, {
        capture: true,
        passive: true,
      });
    }, this);
  },

  /**
   * @private
   */
  __removeScrollListeners: function() {
    if (this.__rootNodes) {
      this.__rootNodes.forEach(function(el) {
        el.removeEventListener('scroll', this.__onCaptureScroll, {
          capture: true,
          passive: true,
        });
      }, this);
    }
    if (!this.isAttached) {
      this.__rootNodes = null;
    }
  },

  /**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */
  __isValidScrollAction: function(scrollAction) {
    return scrollAction === 'lock' || scrollAction === 'refit' ||
        scrollAction === 'cancel';
  },

  /**
   * @private
   */
  __onCaptureScroll: function(event) {
    if (this.__isAnimating) {
      return;
    }
    // Check if scroll outside the overlay.
    if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path.indexOf(this) >= 0) {
      return;
    }
    switch (this.scrollAction) {
      case 'lock':
        // NOTE: scrolling might happen if a scroll event is not cancellable, or
        // if user pressed keys that cause scrolling (they're not prevented in
        // order not to break a11y features like navigate with arrow keys).
        this.__restoreScrollPosition();
        break;
      case 'refit':
        this.__deraf('refit', this.refit);
        break;
      case 'cancel':
        this.cancel(event);
        break;
    }
  },

  /**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */
  __saveScrollPosition: function() {
    if (document.scrollingElement) {
      this.__scrollTop = document.scrollingElement.scrollTop;
      this.__scrollLeft = document.scrollingElement.scrollLeft;
    } else {
      // Since we don't know if is the body or html, get max.
      this.__scrollTop =
          Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      this.__scrollLeft = Math.max(
          document.documentElement.scrollLeft, document.body.scrollLeft);
    }
  },

  /**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */
  __restoreScrollPosition: function() {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = this.__scrollTop;
      document.scrollingElement.scrollLeft = this.__scrollLeft;
    } else {
      // Since we don't know if is the body or html, set both.
      document.documentElement.scrollTop = document.body.scrollTop =
          this.__scrollTop;
      document.documentElement.scrollLeft = document.body.scrollLeft =
          this.__scrollLeft;
    }
  },

};

const composedParent = node =>
    node.assignedSlot || node.parentNode || node.host;

const composedContains = (ancestor, descendant) => {
  for (let element = descendant; element; element = composedParent(element)) {
    if (element === ancestor) {
      return true;
    }
  }
  return false;
};

/**
  Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden
  or shown, and displays on top of other content. It includes an optional
  backdrop, and can be used to implement a variety of UI controls including
  dialogs and drop downs. Multiple overlays may be displayed at once.

  See the [demo source
  code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
  for an example.

  ### Closing and canceling

  An overlay may be hidden by closing or canceling. The difference between close
  and cancel is user intent. Closing generally implies that the user
  acknowledged the content on the overlay. By default, it will cancel whenever
  the user taps outside it or presses the escape key. This behavior is
  configurable with the `no-cancel-on-esc-key` and the
  `no-cancel-on-outside-click` properties. `close()` should be called explicitly
  by the implementer when the user interacts with a control in the overlay
  element. When the dialog is canceled, the overlay fires an
  'iron-overlay-canceled' event. Call `preventDefault` on this event to prevent
  the overlay from closing.

  ### Positioning

  By default the element is sized and positioned to fit and centered inside the
  window. You can position and size it manually using CSS. See
  `Polymer.IronFitBehavior`.

  ### Backdrop

  Set the `with-backdrop` attribute to display a backdrop behind the overlay.
  The backdrop is appended to `<body>` and is of type `<iron-overlay-backdrop>`.
  See its doc page for styling options.

  In addition, `with-backdrop` will wrap the focus within the content in the
  light DOM. Override the [`_focusableNodes`
  getter](#Polymer.IronOverlayBehavior:property-_focusableNodes) to achieve a
  different behavior.

  ### Limitations

  The element is styled to appear on top of other content by setting its
  `z-index` property. You must ensure no element has a stacking context with a
  higher `z-index` than its parent stacking context. You should place this
  element as a child of `<body>` whenever possible.

  @demo demo/index.html
  @polymerBehavior
 */
const IronOverlayBehavior =
    [_polymer_iron_fit_behavior_iron_fit_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFitBehavior"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], IronOverlayBehaviorImpl];

/**
 * Fired after the overlay opens.
 * @event iron-overlay-opened
 */

/**
 * Fired when the overlay is canceled, but before it is closed.
 * @event iron-overlay-canceled
 * @param {Event} event The closing of the overlay can be prevented
 * by calling `event.preventDefault()`. The `event.detail` is the original event
 * that originated the canceling (e.g. ESC keyboard event or click event outside
 * the overlay).
 */

/**
 * Fired after the overlay closes.
 * @event iron-overlay-closed
 * @param {Event} event The `event.detail` is the `closingReason` property
 * (contains `canceled`, whether the overlay was canceled).
 */


/***/ }),

/***/ "./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js":
/*!************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js ***!
  \************************************************************************************/
/*! exports provided: IronOverlayManagerClass, IronOverlayManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayManagerClass", function() { return IronOverlayManagerClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayManager", function() { return IronOverlayManager; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_overlay_backdrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-overlay-backdrop.js */ "./public/node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./public/node_modules/@polymer/polymer/lib/utils/gestures.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/







/**
 * @package
 */
class IronOverlayManagerClass {
  constructor() {
    /**
     * Used to keep track of the opened overlays.
     * @private {!Array<!Element>}
     */
    this._overlays = [];

    /**
     * iframes have a default z-index of 100,
     * so this default should be at least that.
     * @private {number}
     */
    this._minimumZ = 101;

    /**
     * Memoized backdrop element.
     * @private {Element|null}
     */
    this._backdropElement = null;

    // Enable document-wide tap recognizer.
    // NOTE: Use useCapture=true to avoid accidentally prevention of the closing
    // of an overlay via event.stopPropagation(). The only way to prevent
    // closing of an overlay should be through its APIs.
    // NOTE: enable tap on <html> to workaround Polymer/polymer#4459
    // Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
    // https://github.com/Microsoft/ChakraCore/issues/3863
    _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_4__["addListener"](document.documentElement, 'tap', function() {});
    document.addEventListener('tap', this._onCaptureClick.bind(this), true);
    document.addEventListener('focus', this._onCaptureFocus.bind(this), true);
    document.addEventListener(
        'keydown', this._onCaptureKeyDown.bind(this), true);
  }

  /**
   * The shared backdrop element.
   * @return {!Element} backdropElement
   */
  get backdropElement() {
    if (!this._backdropElement) {
      this._backdropElement = document.createElement('iron-overlay-backdrop');
    }
    return this._backdropElement;
  }

  /**
   * The deepest active element.
   * @return {!Element} activeElement the active element
   */
  get deepActiveElement() {
    var active = document.activeElement;
    // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes.
    // In these cases, default it to document.body.
    if (!active || active instanceof Element === false) {
      active = document.body;
    }
    while (active.root && Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(active.root).activeElement) {
      active = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(active.root).activeElement;
    }
    return active;
  }

  /**
   * Brings the overlay at the specified index to the front.
   * @param {number} i
   * @private
   */
  _bringOverlayAtIndexToFront(i) {
    var overlay = this._overlays[i];
    if (!overlay) {
      return;
    }
    var lastI = this._overlays.length - 1;
    var currentOverlay = this._overlays[lastI];
    // Ensure always-on-top overlay stays on top.
    if (currentOverlay &&
        this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      lastI--;
    }
    // If already the top element, return.
    if (i >= lastI) {
      return;
    }
    // Update z-index to be on top.
    var minimumZ = Math.max(this.currentOverlayZ(), this._minimumZ);
    if (this._getZ(overlay) <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }

    // Shift other overlays behind the new on top.
    while (i < lastI) {
      this._overlays[i] = this._overlays[i + 1];
      i++;
    }
    this._overlays[lastI] = overlay;
  }

  /**
   * Adds the overlay and updates its z-index if it's opened, or removes it if
   * it's closed. Also updates the backdrop z-index.
   * @param {!Element} overlay
   */
  addOrRemoveOverlay(overlay) {
    if (overlay.opened) {
      this.addOverlay(overlay);
    } else {
      this.removeOverlay(overlay);
    }
  }

  /**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   * @param {!Element} overlay
   */
  addOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);
    if (i >= 0) {
      this._bringOverlayAtIndexToFront(i);
      this.trackBackdrop();
      return;
    }
    var insertionIndex = this._overlays.length;
    var currentOverlay = this._overlays[insertionIndex - 1];
    var minimumZ = Math.max(this._getZ(currentOverlay), this._minimumZ);
    var newZ = this._getZ(overlay);

    // Ensure always-on-top overlay stays on top.
    if (currentOverlay &&
        this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      // This bumps the z-index of +2.
      this._applyOverlayZ(currentOverlay, minimumZ);
      insertionIndex--;
      // Update minimumZ to match previous overlay's z-index.
      var previousOverlay = this._overlays[insertionIndex - 1];
      minimumZ = Math.max(this._getZ(previousOverlay), this._minimumZ);
    }

    // Update z-index and insert overlay.
    if (newZ <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }
    this._overlays.splice(insertionIndex, 0, overlay);

    this.trackBackdrop();
  }

  /**
   * @param {!Element} overlay
   */
  removeOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);
    if (i === -1) {
      return;
    }
    this._overlays.splice(i, 1);

    this.trackBackdrop();
  }

  /**
   * Returns the current overlay.
   * @return {!Element|undefined}
   */
  currentOverlay() {
    var i = this._overlays.length - 1;
    return this._overlays[i];
  }

  /**
   * Returns the current overlay z-index.
   * @return {number}
   */
  currentOverlayZ() {
    return this._getZ(this.currentOverlay());
  }

  /**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   * @param {number} minimumZ
   */
  ensureMinimumZ(minimumZ) {
    this._minimumZ = Math.max(this._minimumZ, minimumZ);
  }

  focusOverlay() {
    var current = /** @type {?} */ (this.currentOverlay());
    if (current) {
      current._applyFocus();
    }
  }

  /**
   * Updates the backdrop z-index.
   */
  trackBackdrop() {
    var overlay = this._overlayWithBackdrop();
    // Avoid creating the backdrop if there is no overlay with backdrop.
    if (!overlay && !this._backdropElement) {
      return;
    }
    this.backdropElement.style.zIndex = this._getZ(overlay) - 1;
    this.backdropElement.opened = !!overlay;
    // Property observers are not fired until element is attached
    // in Polymer 2.x, so we ensure element is attached if needed.
    // https://github.com/Polymer/polymer/issues/4526
    this.backdropElement.prepare();
  }

  /**
   * @return {!Array<!Element>}
   */
  getBackdrops() {
    var backdrops = [];
    for (var i = 0; i < this._overlays.length; i++) {
      if (this._overlays[i].withBackdrop) {
        backdrops.push(this._overlays[i]);
      }
    }
    return backdrops;
  }

  /**
   * Returns the z-index for the backdrop.
   * @return {number}
   */
  backdropZ() {
    return this._getZ(this._overlayWithBackdrop()) - 1;
  }

  /**
   * Returns the top opened overlay that has a backdrop.
   * @return {!Element|undefined}
   * @private
   */
  _overlayWithBackdrop() {
    for (var i = this._overlays.length - 1; i >= 0; i--) {
      if (this._overlays[i].withBackdrop) {
        return this._overlays[i];
      }
    }
  }

  /**
   * Calculates the minimum z-index for the overlay.
   * @param {Element=} overlay
   * @private
   */
  _getZ(overlay) {
    var z = this._minimumZ;
    if (overlay) {
      var z1 = Number(
          overlay.style.zIndex || window.getComputedStyle(overlay).zIndex);
      // Check if is a number
      // Number.isNaN not supported in IE 10+
      if (z1 === z1) {
        z = z1;
      }
    }
    return z;
  }

  /**
   * @param {!Element} element
   * @param {number|string} z
   * @private
   */
  _setZ(element, z) {
    element.style.zIndex = z;
  }

  /**
   * @param {!Element} overlay
   * @param {number} aboveZ
   * @private
   */
  _applyOverlayZ(overlay, aboveZ) {
    this._setZ(overlay, aboveZ + 2);
  }

  /**
   * Returns the deepest overlay in the path.
   * @param {!Array<!Element>=} path
   * @return {!Element|undefined}
   * @suppress {missingProperties}
   * @private
   */
  _overlayInPath(path) {
    path = path || [];
    for (var i = 0; i < path.length; i++) {
      if (path[i]._manager === this) {
        return path[i];
      }
    }
  }

  /**
   * Ensures the click event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureClick(event) {
    var i = this._overlays.length - 1;
    if (i === -1)
      return;
    var path = /** @type {!Array<!EventTarget>} */ (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path);
    var overlay;
    // Check if clicked outside of overlay.
    while ((overlay = /** @type {?} */ (this._overlays[i])) &&
           this._overlayInPath(path) !== overlay) {
      overlay._onCaptureClick(event);
      if (overlay.allowClickThrough) {
        i--;
      } else {
        break;
      }
    }
  }

  /**
   * Ensures the focus event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureFocus(event) {
    var overlay = /** @type {?} */ (this.currentOverlay());
    if (overlay) {
      overlay._onCaptureFocus(event);
    }
  }

  /**
   * Ensures TAB and ESC keyboard events are delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureKeyDown(event) {
    var overlay = /** @type {?} */ (this.currentOverlay());
    if (overlay) {
      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(event, 'esc')) {
        overlay._onCaptureEsc(event);
      } else if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(event, 'tab')) {
        overlay._onCaptureTab(event);
      }
    }
  }

  /**
   * Returns if the overlay1 should be behind overlay2.
   * @param {!Element} overlay1
   * @param {!Element} overlay2
   * @return {boolean}
   * @suppress {missingProperties}
   * @private
   */
  _shouldBeBehindOverlay(overlay1, overlay2) {
    return !overlay1.alwaysOnTop && overlay2.alwaysOnTop;
  }
};

const IronOverlayManager = new IronOverlayManagerClass();


/***/ }),

/***/ "./public/node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js":
/*!***********************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js ***!
  \***********************************************************************************/
/*! exports provided: currentLockingElement, elementIsScrollLocked, pushScrollLock, removeScrollLock, _lockingElements, _lockedElementCache, _unlockedElementCache, _hasCachedLockedElement, _hasCachedUnlockedElement, _composedTreeContains, _scrollInteractionHandler, _boundScrollHandler, _lockScrollInteractions, _unlockScrollInteractions, _shouldPreventScrolling, _getScrollableNodes, _getScrollingNode, _getScrollInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLockingElement", function() { return currentLockingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementIsScrollLocked", function() { return elementIsScrollLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushScrollLock", function() { return pushScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollLock", function() { return removeScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockingElements", function() { return _lockingElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockedElementCache", function() { return _lockedElementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unlockedElementCache", function() { return _unlockedElementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_hasCachedLockedElement", function() { return _hasCachedLockedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_hasCachedUnlockedElement", function() { return _hasCachedUnlockedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_composedTreeContains", function() { return _composedTreeContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollInteractionHandler", function() { return _scrollInteractionHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_boundScrollHandler", function() { return _boundScrollHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockScrollInteractions", function() { return _lockScrollInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unlockScrollInteractions", function() { return _unlockScrollInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_shouldPreventScrolling", function() { return _shouldPreventScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollableNodes", function() { return _getScrollableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollingNode", function() { return _getScrollingNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollInfo", function() { return _getScrollInfo; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/



/**
 * Used to calculate the scroll direction during touch events.
 * @type {!Object}
 */
var lastTouchPosition = {pageX: 0, pageY: 0};
/**
 * Used to avoid computing event.path and filter scrollable nodes (better perf).
 * @type {?EventTarget}
 */
var lastRootTarget = null;
/**
 * @type {!Array<!Node>}
 */
var lastScrollableNodes = [];
/**
 * @type {!Array<string>}
 */
var scrollEvents = [
  // Modern `wheel` event for mouse wheel scrolling:
  'wheel',
  // Older, non-standard `mousewheel` event for some FF:
  'mousewheel',
  // IE:
  'DOMMouseScroll',
  // Touch enabled devices
  'touchstart',
  'touchmove'
];
// must be defined for modulizer
var _boundScrollHandler;

/**
 * The current element that defines the DOM boundaries of the
 * scroll lock. This is always the most recently locking element.
 *
 * @type {!Node|undefined}
 */
var currentLockingElement;



/**
 * Returns true if the provided element is "scroll locked", which is to
 * say that it cannot be scrolled via pointer or keyboard interactions.
 *
 * @param {!HTMLElement} element An HTML element instance which may or may
 * not be scroll locked.
 */
function elementIsScrollLocked(element) {
  var lockingElement = currentLockingElement;

  if (lockingElement === undefined) {
    return false;
  }

  var scrollLocked;

  if (_hasCachedLockedElement(element)) {
    return true;
  }

  if (_hasCachedUnlockedElement(element)) {
    return false;
  }

  scrollLocked = !!lockingElement && lockingElement !== element &&
      !_composedTreeContains(lockingElement, element);

  if (scrollLocked) {
    _lockedElementCache.push(element);
  } else {
    _unlockedElementCache.push(element);
  }

  return scrollLocked;
}

/**
 * Push an element onto the current scroll lock stack. The most recently
 * pushed element and its children will be considered scrollable. All
 * other elements will not be scrollable.
 *
 * Scroll locking is implemented as a stack so that cases such as
 * dropdowns within dropdowns are handled well.
 *
 * @param {!HTMLElement} element The element that should lock scroll.
 */
function pushScrollLock(element) {
  // Prevent pushing the same element twice
  if (_lockingElements.indexOf(element) >= 0) {
    return;
  }

  if (_lockingElements.length === 0) {
    _lockScrollInteractions();
  }

  _lockingElements.push(element);
  currentLockingElement = _lockingElements[_lockingElements.length - 1];

  _lockedElementCache = [];
  _unlockedElementCache = [];
}

/**
 * Remove an element from the scroll lock stack. The element being
 * removed does not need to be the most recently pushed element. However,
 * the scroll lock constraints only change when the most recently pushed
 * element is removed.
 *
 * @param {!HTMLElement} element The element to remove from the scroll
 * lock stack.
 */
function removeScrollLock(element) {
  var index = _lockingElements.indexOf(element);

  if (index === -1) {
    return;
  }

  _lockingElements.splice(index, 1);
  currentLockingElement = _lockingElements[_lockingElements.length - 1];

  _lockedElementCache = [];
  _unlockedElementCache = [];

  if (_lockingElements.length === 0) {
    _unlockScrollInteractions();
  }
}

const _lockingElements = [];
let _lockedElementCache = null;
let _unlockedElementCache = null;

function _hasCachedLockedElement(element) {
  return _lockedElementCache.indexOf(element) > -1;
}

function _hasCachedUnlockedElement(element) {
  return _unlockedElementCache.indexOf(element) > -1;
}

function _composedTreeContains(element, child) {
  // NOTE(cdata): This method iterates over content elements and their
  // corresponding distributed nodes to implement a contains-like method
  // that pierces through the composed tree of the ShadowDOM. Results of
  // this operation are cached (elsewhere) on a per-scroll-lock basis, to
  // guard against potentially expensive lookups happening repeatedly as
  // a user scrolls / touchmoves.
  var contentElements;
  var distributedNodes;
  var contentIndex;
  var nodeIndex;

  if (element.contains(child)) {
    return true;
  }

  contentElements = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).querySelectorAll('content,slot');

  for (contentIndex = 0; contentIndex < contentElements.length;
       ++contentIndex) {
    distributedNodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(contentElements[contentIndex]).getDistributedNodes();

    for (nodeIndex = 0; nodeIndex < distributedNodes.length; ++nodeIndex) {
      // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
      if (distributedNodes[nodeIndex].nodeType !== Node.ELEMENT_NODE)
        continue;

      if (_composedTreeContains(distributedNodes[nodeIndex], child)) {
        return true;
      }
    }
  }

  return false;
}

function _scrollInteractionHandler(event) {
  // Avoid canceling an event with cancelable=false, e.g. scrolling is in
  // progress and cannot be interrupted.
  if (event.cancelable && _shouldPreventScrolling(event)) {
    event.preventDefault();
  }
  // If event has targetTouches (touch event), update last touch position.
  if (event.targetTouches) {
    var touch = event.targetTouches[0];
    lastTouchPosition.pageX = touch.pageX;
    lastTouchPosition.pageY = touch.pageY;
  }
}

/**
 * @package
 */


function _lockScrollInteractions() {
  _boundScrollHandler =
      _boundScrollHandler || _scrollInteractionHandler.bind(undefined);
  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.addEventListener(
        scrollEvents[i], _boundScrollHandler, {capture: true, passive: false});
  }
}

function _unlockScrollInteractions() {
  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.removeEventListener(
        scrollEvents[i], _boundScrollHandler, {capture: true, passive: false});
  }
}

/**
 * Returns true if the event causes scroll outside the current locking
 * element, e.g. pointer/keyboard interactions, or scroll "leaking"
 * outside the locking element when it is already at its scroll boundaries.
 * @param {!Event} event
 * @return {boolean}
 * @package
 */
function _shouldPreventScrolling(event) {
  // Update if root target changed. For touch events, ensure we don't
  // update during touchmove.
  var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).rootTarget;
  if (event.type !== 'touchmove' && lastRootTarget !== target) {
    lastRootTarget = target;
    lastScrollableNodes = _getScrollableNodes(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).path);
  }

  // Prevent event if no scrollable nodes.
  if (!lastScrollableNodes.length) {
    return true;
  }
  // Don't prevent touchstart event inside the locking element when it has
  // scrollable nodes.
  if (event.type === 'touchstart') {
    return false;
  }
  // Get deltaX/Y.
  var info = _getScrollInfo(event);
  // Prevent if there is no child that can scroll.
  return !_getScrollingNode(lastScrollableNodes, info.deltaX, info.deltaY);
}

/**
 * Returns an array of scrollable nodes up to the current locking element,
 * which is included too if scrollable.
 * @param {!Array<!Node>} nodes
 * @return {!Array<!Node>} scrollables
 * @package
 */
function _getScrollableNodes(nodes) {
  var scrollables = [];
  var lockingIndex =
      nodes.indexOf(/** @type {!Node} */ (currentLockingElement));
  // Loop from root target to locking element (included).
  for (var i = 0; i <= lockingIndex; i++) {
    // Skip non-Element nodes.
    if (nodes[i].nodeType !== Node.ELEMENT_NODE) {
      continue;
    }
    var node = /** @type {!Element} */ (nodes[i]);
    // Check inline style before checking computed style.
    var style = node.style;
    if (style.overflow !== 'scroll' && style.overflow !== 'auto') {
      style = window.getComputedStyle(node);
    }
    if (style.overflow === 'scroll' || style.overflow === 'auto') {
      scrollables.push(node);
    }
  }
  return scrollables;
}

/**
 * Returns the node that is scrolling. If there is no scrolling,
 * returns undefined.
 * @param {!Array<!Node>} nodes
 * @param {number} deltaX Scroll delta on the x-axis
 * @param {number} deltaY Scroll delta on the y-axis
 * @return {!Node|undefined}
 * @package
 */
function _getScrollingNode(nodes, deltaX, deltaY) {
  // No scroll.
  if (!deltaX && !deltaY) {
    return;
  }
  // Check only one axis according to where there is more scroll.
  // Prefer vertical to horizontal.
  var verticalScroll = Math.abs(deltaY) >= Math.abs(deltaX);
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var canScroll = false;
    if (verticalScroll) {
      // delta < 0 is scroll up, delta > 0 is scroll down.
      canScroll = deltaY < 0 ?
          node.scrollTop > 0 :
          node.scrollTop < node.scrollHeight - node.clientHeight;
    } else {
      // delta < 0 is scroll left, delta > 0 is scroll right.
      canScroll = deltaX < 0 ?
          node.scrollLeft > 0 :
          node.scrollLeft < node.scrollWidth - node.clientWidth;
    }
    if (canScroll) {
      return node;
    }
  }
}

/**
 * Returns scroll `deltaX` and `deltaY`.
 * @param {!Event} event The scroll event
 * @return {{deltaX: number, deltaY: number}} Object containing the
 * x-axis scroll delta (positive: scroll right, negative: scroll left,
 * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
 * negative: scroll up, 0: no scroll).
 * @package
 */
function _getScrollInfo(event) {
  var info = {deltaX: event.deltaX, deltaY: event.deltaY};
  // Already available.
  if ('deltaX' in event) {
    // do nothing, values are already good.
  }
  // Safari has scroll info in `wheelDeltaX/Y`.
  else if ('wheelDeltaX' in event && 'wheelDeltaY' in event) {
    info.deltaX = -event.wheelDeltaX;
    info.deltaY = -event.wheelDeltaY;
  }
  // IE10 has only vertical scroll info in `wheelDelta`.
  else if ('wheelDelta' in event) {
    info.deltaX = 0;
    info.deltaY = -event.wheelDelta;
  }
  // Firefox has scroll info in `detail` and `axis`.
  else if ('axis' in event) {
    info.deltaX = event.axis === 1 ? event.detail : 0;
    info.deltaY = event.axis === 2 ? event.detail : 0;
  }
  // On mobile devices, calculate scroll direction.
  else if (event.targetTouches) {
    var touch = event.targetTouches[0];
    // Touch moves from right to left => scrolling goes right.
    info.deltaX = lastTouchPosition.pageX - touch.pageX;
    // Touch moves from down to up => scrolling goes down.
    info.deltaY = lastTouchPosition.pageY - touch.pageY;
  }
  return info;
}


/***/ }),

/***/ "./public/node_modules/@polymer/neon-animation/neon-animatable-behavior.js":
/*!*********************************************************************************!*\
  !*** ./public/node_modules/@polymer/neon-animation/neon-animatable-behavior.js ***!
  \*********************************************************************************/
/*! exports provided: NeonAnimatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimatableBehavior", function() { return NeonAnimatableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * `NeonAnimatableBehavior` is implemented by elements containing
 * animations for use with elements implementing
 * `NeonAnimationRunnerBehavior`.
 * @polymerBehavior
 */
const NeonAnimatableBehavior = {

  properties: {

    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {type: Object},

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String,
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String,
    },

  },

  _entryAnimationChanged: function() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{name: this.entryAnimation, node: this}];
  },

  _exitAnimationChanged: function() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{name: this.exitAnimation, node: this}];
  },

  _copyProperties: function(config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },

  _cloneConfig: function(config) {
    var clone = {isClone: true};
    this._copyProperties(clone, config);
    return clone;
  },

  _getAnimationConfigRecursive: function(type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value &&
        typeof this.animationConfig.value === 'function') {
      this._warn(this._logf(
          'playAnimation',
          'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));
      return;
    }

    // type is optional
    var thisConfig;
    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    }

    // iterate animations and recurse to process configurations from child nodes
    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(
              config.type || type, map, allConfigs);
        } else {
          if (config.id) {
            var cachedConfig = map[config.id];
            if (cachedConfig) {
              // merge configurations with the same id, making a clone lazily
              if (!cachedConfig.isClone) {
                map[config.id] = this._cloneConfig(cachedConfig);
                cachedConfig = map[config.id];
              }
              this._copyProperties(cachedConfig, config);
            } else {
              // put any configs with an id into a map
              map[config.id] = config;
            }
          } else {
            allConfigs.push(config);
          }
        }
      }
    }
  },

  /**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */
  getAnimationConfig: function(type) {
    var map = {};
    var allConfigs = [];
    this._getAnimationConfigRecursive(type, map, allConfigs);
    // append the configurations saved in the map to the array
    for (var key in map) {
      allConfigs.push(map[key]);
    }
    return allConfigs;
  }

};


/***/ }),

/***/ "./public/node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js":
/*!***************************************************************************************!*\
  !*** ./public/node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js ***!
  \***************************************************************************************/
/*! exports provided: NeonAnimationRunnerBehaviorImpl, NeonAnimationRunnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehaviorImpl", function() { return NeonAnimationRunnerBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehavior", function() { return NeonAnimationRunnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neon-animatable-behavior.js */ "./public/node_modules/@polymer/neon-animation/neon-animatable-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
 * `NeonAnimationRunnerBehavior` adds a method to run animations.
 *
 * @polymerBehavior NeonAnimationRunnerBehavior
 */
const NeonAnimationRunnerBehaviorImpl = {

  _configureAnimations: function(configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (let config, index = 0; config = configs[index]; index++) {
        let neonAnimation = document.createElement(config.name);
        // is this element actually a neon animation?
        if (neonAnimation.isNeonAnimation) {
          let result = null;
          // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined
          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function(config) {
              return null;
            }
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation,
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      let result = resultsToPlay[i].result;
      let config = resultsToPlay[i].config;
      let neonAnimation = resultsToPlay[i].neonAnimation;
      // configuration or play could fail if polyfills aren't loaded
      try {
        // Check if we have an Effect rather than an Animation
        if (typeof result.cancel != 'function') {
          result = document.timeline.play(result);
        }
      } catch (e) {
        result = null;
        console.warn('Couldnt play', '(', config.name, ').', e);
      }

      if (result) {
        results.push({
          neonAnimation: neonAnimation,
          config: config,
          animation: result,
        });
      }
    }

    return results;
  },

  _shouldComplete: function(activeEntries) {
    var finished = true;
    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }
    return finished;
  },

  _complete: function(activeEntries) {
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].neonAnimation.complete(activeEntries[i].config);
    }
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.cancel();
    }
  },

  /**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */
  playAnimation: function(type, cookie) {
    var configs = this.getAnimationConfig(type);
    if (!configs) {
      return;
    }
    this._active = this._active || {};
    if (this._active[type]) {
      this._complete(this._active[type]);
      delete this._active[type];
    }

    var activeEntries = this._configureAnimations(configs);

    if (activeEntries.length == 0) {
      this.fire('neon-animation-finish', cookie, {bubbles: false});
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function() {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);
          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {bubbles: false});
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function() {
    for (var k in this._active) {
      var entries = this._active[k]

                    for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};

/** @polymerBehavior */
const NeonAnimationRunnerBehavior =
    [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimatableBehavior"], NeonAnimationRunnerBehaviorImpl];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1kcm9wZG93bi9pcm9uLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1maXQtYmVoYXZpb3IvaXJvbi1maXQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1vdmVybGF5LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tc2Nyb2xsLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGlvbi1ydW5uZXItYmVoYXZpb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0Qzs7QUFFb0M7QUFDa0I7QUFDbkM7QUFDRTs7QUFFQTtBQUNxQjtBQUNaOztBQUUxRTtBQUNPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzRUFBc0U7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJFQUFrQjtBQUMvQixLQUFLOztBQUVMO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSCxjQUFjLCtCQUErQjs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlDQUFpQyxzRkFBRztBQUNwQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtFQUFvQjtBQUMvQixHQUFHOztBQUVIO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNGQUFHO0FBQ3hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRkFBRztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNGQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0MsS0FBSztBQUMzQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxH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Q0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtELGVBQWU7QUFDakU7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGVBQWU7QUFDckU7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLEtBQUssbUZBQXNCIiwiZmlsZSI6InZlbmRvcnN+cGFnZS1jb21wb25lbnRzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBDaHJvbWUgdXNlcyBhbiBvbGRlciB2ZXJzaW9uIG9mIERPTSBMZXZlbCAzIEtleWJvYXJkIEV2ZW50c1xuICpcbiAqIE1vc3Qga2V5cyBhcmUgbGFiZWxlZCBhcyB0ZXh0LCBidXQgc29tZSBhcmUgVW5pY29kZSBjb2RlcG9pbnRzLlxuICogVmFsdWVzIHRha2VuIGZyb206XG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA3L1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDA3MTIyMS9rZXlzZXQuaHRtbCNLZXlTZXQtU2V0XG4gKi9cbnZhciBLRVlfSURFTlRJRklFUiA9IHtcbiAgJ1UrMDAwOCc6ICdiYWNrc3BhY2UnLFxuICAnVSswMDA5JzogJ3RhYicsXG4gICdVKzAwMUInOiAnZXNjJyxcbiAgJ1UrMDAyMCc6ICdzcGFjZScsXG4gICdVKzAwN0YnOiAnZGVsJ1xufTtcblxuLyoqXG4gKiBTcGVjaWFsIHRhYmxlIGZvciBLZXlib2FyZEV2ZW50LmtleUNvZGUuXG4gKiBLZXlib2FyZEV2ZW50LmtleUlkZW50aWZpZXIgaXMgYmV0dGVyLCBhbmQgS2V5Qm9hcmRFdmVudC5rZXkgaXMgZXZlbiBiZXR0ZXJcbiAqIHRoYW4gdGhhdC5cbiAqXG4gKiBWYWx1ZXMgZnJvbTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50LmtleUNvZGUjVmFsdWVfb2Zfa2V5Q29kZVxuICovXG52YXIgS0VZX0NPREUgPSB7XG4gIDg6ICdiYWNrc3BhY2UnLFxuICA5OiAndGFiJyxcbiAgMTM6ICdlbnRlcicsXG4gIDI3OiAnZXNjJyxcbiAgMzM6ICdwYWdldXAnLFxuICAzNDogJ3BhZ2Vkb3duJyxcbiAgMzU6ICdlbmQnLFxuICAzNjogJ2hvbWUnLFxuICAzMjogJ3NwYWNlJyxcbiAgMzc6ICdsZWZ0JyxcbiAgMzg6ICd1cCcsXG4gIDM5OiAncmlnaHQnLFxuICA0MDogJ2Rvd24nLFxuICA0NjogJ2RlbCcsXG4gIDEwNjogJyonXG59O1xuXG4vKipcbiAqIE1PRElGSUVSX0tFWVMgbWFwcyB0aGUgc2hvcnQgbmFtZSBmb3IgbW9kaWZpZXIga2V5cyB1c2VkIGluIGEga2V5XG4gKiBjb21ibyBzdHJpbmcgdG8gdGhlIHByb3BlcnR5IG5hbWUgdGhhdCByZWZlcmVuY2VzIHRob3NlIHNhbWUga2V5c1xuICogaW4gYSBLZXlib2FyZEV2ZW50IGluc3RhbmNlLlxuICovXG52YXIgTU9ESUZJRVJfS0VZUyA9IHtcbiAgJ3NoaWZ0JzogJ3NoaWZ0S2V5JyxcbiAgJ2N0cmwnOiAnY3RybEtleScsXG4gICdhbHQnOiAnYWx0S2V5JyxcbiAgJ21ldGEnOiAnbWV0YUtleSdcbn07XG5cbi8qKlxuICogS2V5Ym9hcmRFdmVudC5rZXkgaXMgbW9zdGx5IHJlcHJlc2VudGVkIGJ5IHByaW50YWJsZSBjaGFyYWN0ZXIgbWFkZSBieVxuICogdGhlIGtleWJvYXJkLCB3aXRoIHVucHJpbnRhYmxlIGtleXMgbGFiZWxlZCBuaWNlbHkuXG4gKlxuICogSG93ZXZlciwgb24gT1MgWCwgQWx0K2NoYXIgY2FuIG1ha2UgYSBVbmljb2RlIGNoYXJhY3RlciB0aGF0IGZvbGxvd3MgYW5cbiAqIEFwcGxlLXNwZWNpZmljIG1hcHBpbmcuIEluIHRoaXMgY2FzZSwgd2UgZmFsbCBiYWNrIHRvIC5rZXlDb2RlLlxuICovXG52YXIgS0VZX0NIQVIgPSAvW2EtejAtOSpdLztcblxuLyoqXG4gKiBNYXRjaGVzIGEga2V5SWRlbnRpZmllciBzdHJpbmcuXG4gKi9cbnZhciBJREVOVF9DSEFSID0gL1VcXCsvO1xuXG4vKipcbiAqIE1hdGNoZXMgYXJyb3cga2V5cyBpbiBHZWNrbyAyNy4wK1xuICovXG52YXIgQVJST1dfS0VZID0gL15hcnJvdy87XG5cbi8qKlxuICogTWF0Y2hlcyBzcGFjZSBrZXlzIGV2ZXJ5d2hlcmUgKG5vdGFibHkgaW5jbHVkaW5nIElFMTAncyBleGNlcHRpb25hbCBuYW1lXG4gKiBgc3BhY2ViYXJgKS5cbiAqL1xudmFyIFNQQUNFX0tFWSA9IC9ec3BhY2UoYmFyKT8vO1xuXG4vKipcbiAqIE1hdGNoZXMgRVNDIGtleS5cbiAqXG4gKiBWYWx1ZSBmcm9tOiBodHRwOi8vdzNjLmdpdGh1Yi5pby91aWV2ZW50cy1rZXkvI2tleS1Fc2NhcGVcbiAqL1xudmFyIEVTQ19LRVkgPSAvXmVzY2FwZSQvO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIEtleUJvYXJkRXZlbnQua2V5XG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtub1NwZWNpYWxDaGFyc10gTGltaXRzIHRoZSB0cmFuc2Zvcm1hdGlvbiB0b1xuICogYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzLlxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1LZXkoa2V5LCBub1NwZWNpYWxDaGFycykge1xuICB2YXIgdmFsaWRLZXkgPSAnJztcbiAgaWYgKGtleSkge1xuICAgIHZhciBsS2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxLZXkgPT09ICcgJyB8fCBTUEFDRV9LRVkudGVzdChsS2V5KSkge1xuICAgICAgdmFsaWRLZXkgPSAnc3BhY2UnO1xuICAgIH0gZWxzZSBpZiAoRVNDX0tFWS50ZXN0KGxLZXkpKSB7XG4gICAgICB2YWxpZEtleSA9ICdlc2MnO1xuICAgIH0gZWxzZSBpZiAobEtleS5sZW5ndGggPT0gMSkge1xuICAgICAgaWYgKCFub1NwZWNpYWxDaGFycyB8fCBLRVlfQ0hBUi50ZXN0KGxLZXkpKSB7XG4gICAgICAgIHZhbGlkS2V5ID0gbEtleTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFSUk9XX0tFWS50ZXN0KGxLZXkpKSB7XG4gICAgICB2YWxpZEtleSA9IGxLZXkucmVwbGFjZSgnYXJyb3cnLCAnJyk7XG4gICAgfSBlbHNlIGlmIChsS2V5ID09ICdtdWx0aXBseScpIHtcbiAgICAgIC8vIG51bXBhZCAnKicgY2FuIG1hcCB0byBNdWx0aXBseSBvbiBJRS9XaW5kb3dzXG4gICAgICB2YWxpZEtleSA9ICcqJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRLZXkgPSBsS2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRLZXk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUtleUlkZW50aWZpZXIoa2V5SWRlbnQpIHtcbiAgdmFyIHZhbGlkS2V5ID0gJyc7XG4gIGlmIChrZXlJZGVudCkge1xuICAgIGlmIChrZXlJZGVudCBpbiBLRVlfSURFTlRJRklFUikge1xuICAgICAgdmFsaWRLZXkgPSBLRVlfSURFTlRJRklFUltrZXlJZGVudF07XG4gICAgfSBlbHNlIGlmIChJREVOVF9DSEFSLnRlc3Qoa2V5SWRlbnQpKSB7XG4gICAgICBrZXlJZGVudCA9IHBhcnNlSW50KGtleUlkZW50LnJlcGxhY2UoJ1UrJywgJzB4JyksIDE2KTtcbiAgICAgIHZhbGlkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShrZXlJZGVudCkudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRLZXkgPSBrZXlJZGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRLZXk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUtleUNvZGUoa2V5Q29kZSkge1xuICB2YXIgdmFsaWRLZXkgPSAnJztcbiAgaWYgKE51bWJlcihrZXlDb2RlKSkge1xuICAgIGlmIChrZXlDb2RlID49IDY1ICYmIGtleUNvZGUgPD0gOTApIHtcbiAgICAgIC8vIGFzY2lpIGEtelxuICAgICAgLy8gbG93ZXJjYXNlIGlzIDMyIG9mZnNldCBmcm9tIHVwcGVyY2FzZVxuICAgICAgdmFsaWRLZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMyICsga2V5Q29kZSk7XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID49IDExMiAmJiBrZXlDb2RlIDw9IDEyMykge1xuICAgICAgLy8gZnVuY3Rpb24ga2V5cyBmMS1mMTJcbiAgICAgIHZhbGlkS2V5ID0gJ2YnICsgKGtleUNvZGUgLSAxMTIgKyAxKTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPj0gNDggJiYga2V5Q29kZSA8PSA1Nykge1xuICAgICAgLy8gdG9wIDAtOSBrZXlzXG4gICAgICB2YWxpZEtleSA9IFN0cmluZyhrZXlDb2RlIC0gNDgpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA+PSA5NiAmJiBrZXlDb2RlIDw9IDEwNSkge1xuICAgICAgLy8gbnVtIHBhZCAwLTlcbiAgICAgIHZhbGlkS2V5ID0gU3RyaW5nKGtleUNvZGUgLSA5Nik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkS2V5ID0gS0VZX0NPREVba2V5Q29kZV07XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZEtleTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBub3JtYWxpemVkIGtleSBmb3IgYSBLZXlib2FyZEV2ZW50LlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBrZXlFdmVudFxuICogQHBhcmFtIHtCb29sZWFufSBbbm9TcGVjaWFsQ2hhcnNdIFNldCB0byB0cnVlIHRvIGxpbWl0IGtleUV2ZW50LmtleVxuICogdHJhbnNmb3JtYXRpb24gdG8gYWxwaGEtbnVtZXJpYyBjaGFycy4gVGhpcyBpcyB1c2VmdWwgd2l0aCBrZXlcbiAqIGNvbWJpbmF0aW9ucyBsaWtlIHNoaWZ0ICsgMiwgd2hpY2ggb24gRkYgZm9yIE1hY09TIHByb2R1Y2VzXG4gKiBrZXlFdmVudC5rZXkgPSBAXG4gKiBUbyBnZXQgMiByZXR1cm5lZCwgc2V0IG5vU3BlY2lhbENoYXJzID0gdHJ1ZVxuICogVG8gZ2V0IEAgcmV0dXJuZWQsIHNldCBub1NwZWNpYWxDaGFycyA9IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZWRLZXlGb3JFdmVudChrZXlFdmVudCwgbm9TcGVjaWFsQ2hhcnMpIHtcbiAgLy8gRmFsbCBiYWNrIGZyb20gLmtleSwgdG8gLmRldGFpbC5rZXkgZm9yIGFydGlmaWNhbCBrZXlib2FyZCBldmVudHMsXG4gIC8vIGFuZCB0aGVuIHRvIGRlcHJlY2F0ZWQgLmtleUlkZW50aWZpZXIgYW5kIC5rZXlDb2RlLlxuICBpZiAoa2V5RXZlbnQua2V5KSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybUtleShrZXlFdmVudC5rZXksIG5vU3BlY2lhbENoYXJzKTtcbiAgfVxuICBpZiAoa2V5RXZlbnQuZGV0YWlsICYmIGtleUV2ZW50LmRldGFpbC5rZXkpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtS2V5KGtleUV2ZW50LmRldGFpbC5rZXksIG5vU3BlY2lhbENoYXJzKTtcbiAgfVxuICByZXR1cm4gdHJhbnNmb3JtS2V5SWRlbnRpZmllcihrZXlFdmVudC5rZXlJZGVudGlmaWVyKSB8fFxuICAgICAgdHJhbnNmb3JtS2V5Q29kZShrZXlFdmVudC5rZXlDb2RlKSB8fCAnJztcbn1cblxuZnVuY3Rpb24ga2V5Q29tYm9NYXRjaGVzRXZlbnQoa2V5Q29tYm8sIGV2ZW50KSB7XG4gIC8vIEZvciBjb21ib3Mgd2l0aCBtb2RpZmllcnMgd2Ugc3VwcG9ydCBvbmx5IGFscGhhLW51bWVyaWMga2V5c1xuICB2YXIga2V5RXZlbnQgPSBub3JtYWxpemVkS2V5Rm9yRXZlbnQoZXZlbnQsIGtleUNvbWJvLmhhc01vZGlmaWVycyk7XG4gIHJldHVybiBrZXlFdmVudCA9PT0ga2V5Q29tYm8ua2V5ICYmXG4gICAgICAoIWtleUNvbWJvLmhhc01vZGlmaWVycyB8fFxuICAgICAgICghIWV2ZW50LnNoaWZ0S2V5ID09PSAhIWtleUNvbWJvLnNoaWZ0S2V5ICYmXG4gICAgICAgICEhZXZlbnQuY3RybEtleSA9PT0gISFrZXlDb21iby5jdHJsS2V5ICYmXG4gICAgICAgICEhZXZlbnQuYWx0S2V5ID09PSAhIWtleUNvbWJvLmFsdEtleSAmJlxuICAgICAgICAhIWV2ZW50Lm1ldGFLZXkgPT09ICEha2V5Q29tYm8ubWV0YUtleSkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUtleUNvbWJvU3RyaW5nKGtleUNvbWJvU3RyaW5nKSB7XG4gIGlmIChrZXlDb21ib1N0cmluZy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4ge2NvbWJvOiBrZXlDb21ib1N0cmluZywga2V5OiBrZXlDb21ib1N0cmluZywgZXZlbnQ6ICdrZXlkb3duJ307XG4gIH1cbiAgcmV0dXJuIGtleUNvbWJvU3RyaW5nLnNwbGl0KCcrJylcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24ocGFyc2VkS2V5Q29tYm8sIGtleUNvbWJvUGFydCkge1xuICAgICAgICB2YXIgZXZlbnRQYXJ0cyA9IGtleUNvbWJvUGFydC5zcGxpdCgnOicpO1xuICAgICAgICB2YXIga2V5TmFtZSA9IGV2ZW50UGFydHNbMF07XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50UGFydHNbMV07XG5cbiAgICAgICAgaWYgKGtleU5hbWUgaW4gTU9ESUZJRVJfS0VZUykge1xuICAgICAgICAgIHBhcnNlZEtleUNvbWJvW01PRElGSUVSX0tFWVNba2V5TmFtZV1dID0gdHJ1ZTtcbiAgICAgICAgICBwYXJzZWRLZXlDb21iby5oYXNNb2RpZmllcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlZEtleUNvbWJvLmtleSA9IGtleU5hbWU7XG4gICAgICAgICAgcGFyc2VkS2V5Q29tYm8uZXZlbnQgPSBldmVudCB8fCAna2V5ZG93bic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkS2V5Q29tYm87XG4gICAgICB9LCB7Y29tYm86IGtleUNvbWJvU3RyaW5nLnNwbGl0KCc6Jykuc2hpZnQoKX0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV2ZW50U3RyaW5nKGV2ZW50U3RyaW5nKSB7XG4gIHJldHVybiBldmVudFN0cmluZy50cmltKCkuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oa2V5Q29tYm9TdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VLZXlDb21ib1N0cmluZyhrZXlDb21ib1N0cmluZyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIGBQb2x5bWVyLklyb25BMTF5S2V5c0JlaGF2aW9yYCBwcm92aWRlcyBhIG5vcm1hbGl6ZWQgaW50ZXJmYWNlIGZvciBwcm9jZXNzaW5nXG4gKiBrZXlib2FyZCBjb21tYW5kcyB0aGF0IHBlcnRhaW4gdG8gW1dBSS1BUklBIGJlc3RcbiAqIHByYWN0aWNlc10oaHR0cDovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyNrYmRfZ2VuZXJhbF9iaW5kaW5nKS4gVGhlXG4gKiBlbGVtZW50IHRha2VzIGNhcmUgb2YgYnJvd3NlciBkaWZmZXJlbmNlcyB3aXRoIHJlc3BlY3QgdG8gS2V5Ym9hcmQgZXZlbnRzIGFuZFxuICogdXNlcyBhbiBleHByZXNzaXZlIHN5bnRheCB0byBmaWx0ZXIga2V5IHByZXNzZXMuXG4gKlxuICogVXNlIHRoZSBga2V5QmluZGluZ3NgIHByb3RvdHlwZSBwcm9wZXJ0eSB0byBleHByZXNzIHdoYXQgY29tYmluYXRpb24gb2Yga2V5c1xuICogd2lsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gQSBrZXkgYmluZGluZyBoYXMgdGhlIGZvcm1hdFxuICogYFwiS0VZK01PRElGSUVSOkVWRU5UXCI6IFwiY2FsbGJhY2tcImAgKGBcIktFWVwiOiBcImNhbGxiYWNrXCJgIG9yXG4gKiBgXCJLRVk6RVZFTlRcIjogXCJjYWxsYmFja1wiYCBhcmUgdmFsaWQgYXMgd2VsbCkuIFNvbWUgZXhhbXBsZXM6XG4gKlxuICogICAgICBrZXlCaW5kaW5nczoge1xuICogICAgICAgICdzcGFjZSc6ICdfb25LZXlkb3duJywgLy8gc2FtZSBhcyAnc3BhY2U6a2V5ZG93bidcbiAqICAgICAgICAnc2hpZnQrdGFiJzogJ19vbktleWRvd24nLFxuICogICAgICAgICdlbnRlcjprZXlwcmVzcyc6ICdfb25LZXlwcmVzcycsXG4gKiAgICAgICAgJ2VzYzprZXl1cCc6ICdfb25LZXl1cCdcbiAqICAgICAgfVxuICpcbiAqIFRoZSBjYWxsYmFjayB3aWxsIHJlY2VpdmUgd2l0aCBhbiBldmVudCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgaW5mb3JtYXRpb25cbiAqIGluIGBldmVudC5kZXRhaWxgOlxuICpcbiAqICAgICAgX29uS2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAqICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuY29tYm8pOyAvLyBLRVkrTU9ESUZJRVIsIGUuZy4gXCJzaGlmdCt0YWJcIlxuICogICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5rZXkpOyAvLyBLRVkgb25seSwgZS5nLiBcInRhYlwiXG4gKiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLmV2ZW50KTsgLy8gRVZFTlQsIGUuZy4gXCJrZXlkb3duXCJcbiAqICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudCk7IC8vIHRoZSBvcmlnaW5hbCBLZXlib2FyZEV2ZW50XG4gKiAgICAgIH1cbiAqXG4gKiBVc2UgdGhlIGBrZXlFdmVudFRhcmdldGAgYXR0cmlidXRlIHRvIHNldCB1cCBldmVudCBoYW5kbGVycyBvbiBhIHNwZWNpZmljXG4gKiBub2RlLlxuICpcbiAqIFNlZSB0aGUgW2RlbW8gc291cmNlXG4gKiBjb2RlXShodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2Jsb2IvbWFzdGVyL2RlbW8veC1rZXktYXdhcmUuaHRtbClcbiAqIGZvciBhbiBleGFtcGxlLlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkExMXlLZXlzQmVoYXZpb3IgPSB7XG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgRXZlbnRUYXJnZXQgdGhhdCB3aWxsIGJlIGZpcmluZyByZWxldmFudCBLZXlib2FyZEV2ZW50cy4gU2V0IGl0IHRvXG4gICAgICogYG51bGxgIHRvIGRpc2FibGUgdGhlIGxpc3RlbmVycy5cbiAgICAgKiBAdHlwZSB7P0V2ZW50VGFyZ2V0fVxuICAgICAqL1xuICAgIGtleUV2ZW50VGFyZ2V0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGlzIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlIGltcGxlbWVudGluZyBlbGVtZW50IHRvXG4gICAgICogYXV0b21hdGljYWxseSBzdG9wIHByb3BhZ2F0aW9uIG9uIGFueSBoYW5kbGVkIEtleWJvYXJkRXZlbnRzLlxuICAgICAqL1xuICAgIHN0b3BLZXlib2FyZEV2ZW50UHJvcGFnYXRpb246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgX2JvdW5kS2V5SGFuZGxlcnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFdlIHVzZSB0aGlzIGR1ZSB0byBhIGxpbWl0YXRpb24gaW4gSUUxMCB3aGVyZSBpbnN0YW5jZXMgd2lsbCBoYXZlXG4gICAgLy8gb3duIHByb3BlcnRpZXMgb2YgZXZlcnl0aGluZyBvbiB0aGUgXCJwcm90b3R5cGVcIi5cbiAgICBfaW1wZXJhdGl2ZUtleUJpbmRpbmdzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXNldEtleUV2ZW50TGlzdGVuZXJzKGtleUV2ZW50VGFyZ2V0LCBfYm91bmRLZXlIYW5kbGVycyknXSxcblxuXG4gIC8qKlxuICAgKiBUbyBiZSB1c2VkIHRvIGV4cHJlc3Mgd2hhdCBjb21iaW5hdGlvbiBvZiBrZXlzICB3aWxsIHRyaWdnZXIgdGhlIHJlbGF0aXZlXG4gICAqIGNhbGxiYWNrLiBlLmcuIGBrZXlCaW5kaW5nczogeyAnZXNjJzogJ19vbkVzY1ByZXNzZWQnfWBcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczoge30sXG5cbiAgcmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcHJlcEtleUJpbmRpbmdzKCk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpc3RlbktleUV2ZW50TGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VubGlzdGVuS2V5RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gaW1wZXJhdGl2ZWx5IGFkZCBhIGtleSBiaW5kaW5nIHRvIHRoZSBpbXBsZW1lbnRpbmdcbiAgICogZWxlbWVudC4gVGhpcyBpcyB0aGUgaW1wZXJhdGl2ZSBlcXVpdmFsZW50IG9mIGRlY2xhcmluZyBhIGtleWJpbmRpbmdcbiAgICogaW4gdGhlIGBrZXlCaW5kaW5nc2AgcHJvdG90eXBlIHByb3BlcnR5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRTdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhbmRsZXJOYW1lXG4gICAqL1xuICBhZGRPd25LZXlCaW5kaW5nOiBmdW5jdGlvbihldmVudFN0cmluZywgaGFuZGxlck5hbWUpIHtcbiAgICB0aGlzLl9pbXBlcmF0aXZlS2V5QmluZGluZ3NbZXZlbnRTdHJpbmddID0gaGFuZGxlck5hbWU7XG4gICAgdGhpcy5fcHJlcEtleUJpbmRpbmdzKCk7XG4gICAgdGhpcy5fcmVzZXRLZXlFdmVudExpc3RlbmVycygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgd2lsbCByZW1vdmUgYWxsIGltcGVyYXRpdmVseS1hZGRlZCBrZXkgYmluZGluZ3MuXG4gICAqL1xuICByZW1vdmVPd25LZXlCaW5kaW5nczogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faW1wZXJhdGl2ZUtleUJpbmRpbmdzID0ge307XG4gICAgdGhpcy5fcHJlcEtleUJpbmRpbmdzKCk7XG4gICAgdGhpcy5fcmVzZXRLZXlFdmVudExpc3RlbmVycygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSBrZXlib2FyZCBldmVudCBtYXRjaGVzIGBldmVudFN0cmluZ2AuXG4gICAqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50U3RyaW5nXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBrZXlib2FyZEV2ZW50TWF0Y2hlc0tleXM6IGZ1bmN0aW9uKGV2ZW50LCBldmVudFN0cmluZykge1xuICAgIHZhciBrZXlDb21ib3MgPSBwYXJzZUV2ZW50U3RyaW5nKGV2ZW50U3RyaW5nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleUNvbWJvcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGtleUNvbWJvTWF0Y2hlc0V2ZW50KGtleUNvbWJvc1tpXSwgZXZlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgX2NvbGxlY3RLZXlCaW5kaW5nczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleUJpbmRpbmdzID0gdGhpcy5iZWhhdmlvcnMubWFwKGZ1bmN0aW9uKGJlaGF2aW9yKSB7XG4gICAgICByZXR1cm4gYmVoYXZpb3Iua2V5QmluZGluZ3M7XG4gICAgfSk7XG5cbiAgICBpZiAoa2V5QmluZGluZ3MuaW5kZXhPZih0aGlzLmtleUJpbmRpbmdzKSA9PT0gLTEpIHtcbiAgICAgIGtleUJpbmRpbmdzLnB1c2godGhpcy5rZXlCaW5kaW5ncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUJpbmRpbmdzO1xuICB9LFxuXG4gIF9wcmVwS2V5QmluZGluZ3M6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2tleUJpbmRpbmdzID0ge307XG5cbiAgICB0aGlzLl9jb2xsZWN0S2V5QmluZGluZ3MoKS5mb3JFYWNoKGZ1bmN0aW9uKGtleUJpbmRpbmdzKSB7XG4gICAgICBmb3IgKHZhciBldmVudFN0cmluZyBpbiBrZXlCaW5kaW5ncykge1xuICAgICAgICB0aGlzLl9hZGRLZXlCaW5kaW5nKGV2ZW50U3RyaW5nLCBrZXlCaW5kaW5nc1tldmVudFN0cmluZ10pO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgZm9yICh2YXIgZXZlbnRTdHJpbmcgaW4gdGhpcy5faW1wZXJhdGl2ZUtleUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9hZGRLZXlCaW5kaW5nKFxuICAgICAgICAgIGV2ZW50U3RyaW5nLCB0aGlzLl9pbXBlcmF0aXZlS2V5QmluZGluZ3NbZXZlbnRTdHJpbmddKTtcbiAgICB9XG5cbiAgICAvLyBHaXZlIHByZWNlZGVuY2UgdG8gY29tYm9zIHdpdGggbW9kaWZpZXJzIHRvIGJlIGNoZWNrZWQgZmlyc3QuXG4gICAgZm9yICh2YXIgZXZlbnROYW1lIGluIHRoaXMuX2tleUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9rZXlCaW5kaW5nc1tldmVudE5hbWVdLnNvcnQoZnVuY3Rpb24oa2IxLCBrYjIpIHtcbiAgICAgICAgdmFyIGIxID0ga2IxWzBdLmhhc01vZGlmaWVycztcbiAgICAgICAgdmFyIGIyID0ga2IyWzBdLmhhc01vZGlmaWVycztcbiAgICAgICAgcmV0dXJuIChiMSA9PT0gYjIpID8gMCA6IGIxID8gLTEgOiAxO1xuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgX2FkZEtleUJpbmRpbmc6IGZ1bmN0aW9uKGV2ZW50U3RyaW5nLCBoYW5kbGVyTmFtZSkge1xuICAgIHBhcnNlRXZlbnRTdHJpbmcoZXZlbnRTdHJpbmcpLmZvckVhY2goZnVuY3Rpb24oa2V5Q29tYm8pIHtcbiAgICAgIHRoaXMuX2tleUJpbmRpbmdzW2tleUNvbWJvLmV2ZW50XSA9XG4gICAgICAgICAgdGhpcy5fa2V5QmluZGluZ3Nba2V5Q29tYm8uZXZlbnRdIHx8IFtdO1xuXG4gICAgICB0aGlzLl9rZXlCaW5kaW5nc1trZXlDb21iby5ldmVudF0ucHVzaChba2V5Q29tYm8sIGhhbmRsZXJOYW1lXSk7XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX3Jlc2V0S2V5RXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VubGlzdGVuS2V5RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbktleUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LFxuXG4gIF9saXN0ZW5LZXlFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmtleUV2ZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRoaXMuX2tleUJpbmRpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgdmFyIGtleUJpbmRpbmdzID0gdGhpcy5fa2V5QmluZGluZ3NbZXZlbnROYW1lXTtcbiAgICAgIHZhciBib3VuZEtleUhhbmRsZXIgPSB0aGlzLl9vbktleUJpbmRpbmdFdmVudC5iaW5kKHRoaXMsIGtleUJpbmRpbmdzKTtcblxuICAgICAgdGhpcy5fYm91bmRLZXlIYW5kbGVycy5wdXNoKFxuICAgICAgICAgIFt0aGlzLmtleUV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGJvdW5kS2V5SGFuZGxlcl0pO1xuXG4gICAgICB0aGlzLmtleUV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZEtleUhhbmRsZXIpO1xuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF91bmxpc3RlbktleUV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5SGFuZGxlclR1cGxlO1xuICAgIHZhciBrZXlFdmVudFRhcmdldDtcbiAgICB2YXIgZXZlbnROYW1lO1xuICAgIHZhciBib3VuZEtleUhhbmRsZXI7XG5cbiAgICB3aGlsZSAodGhpcy5fYm91bmRLZXlIYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIC8vIE15IGtpbmdkb20gZm9yIGJsb2NrLXNjb3BlIGJpbmRpbmcgYW5kIGRlc3RydWN0dXJpbmcgYXNzaWdubWVudC4uXG4gICAgICBrZXlIYW5kbGVyVHVwbGUgPSB0aGlzLl9ib3VuZEtleUhhbmRsZXJzLnBvcCgpO1xuICAgICAga2V5RXZlbnRUYXJnZXQgPSBrZXlIYW5kbGVyVHVwbGVbMF07XG4gICAgICBldmVudE5hbWUgPSBrZXlIYW5kbGVyVHVwbGVbMV07XG4gICAgICBib3VuZEtleUhhbmRsZXIgPSBrZXlIYW5kbGVyVHVwbGVbMl07XG5cbiAgICAgIGtleUV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZEtleUhhbmRsZXIpO1xuICAgIH1cbiAgfSxcblxuICBfb25LZXlCaW5kaW5nRXZlbnQ6IGZ1bmN0aW9uKGtleUJpbmRpbmdzLCBldmVudCkge1xuICAgIGlmICh0aGlzLnN0b3BLZXlib2FyZEV2ZW50UHJvcGFnYXRpb24pIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIGlmIGV2ZW50IGhhcyBiZWVuIGFscmVhZHkgcHJldmVudGVkLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlCaW5kaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleUNvbWJvID0ga2V5QmluZGluZ3NbaV1bMF07XG4gICAgICB2YXIgaGFuZGxlck5hbWUgPSBrZXlCaW5kaW5nc1tpXVsxXTtcbiAgICAgIGlmIChrZXlDb21ib01hdGNoZXNFdmVudChrZXlDb21ibywgZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJLZXlIYW5kbGVyKGtleUNvbWJvLCBoYW5kbGVyTmFtZSwgZXZlbnQpO1xuICAgICAgICAvLyBleGl0IHRoZSBsb29wIGlmIGV2ZW50RGVmYXVsdCB3YXMgcHJldmVudGVkXG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF90cmlnZ2VyS2V5SGFuZGxlcjogZnVuY3Rpb24oa2V5Q29tYm8sIGhhbmRsZXJOYW1lLCBrZXlib2FyZEV2ZW50KSB7XG4gICAgdmFyIGRldGFpbCA9IE9iamVjdC5jcmVhdGUoa2V5Q29tYm8pO1xuICAgIGRldGFpbC5rZXlib2FyZEV2ZW50ID0ga2V5Ym9hcmRFdmVudDtcbiAgICB2YXIgZXZlbnQgPVxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoa2V5Q29tYm8uZXZlbnQsIHtkZXRhaWw6IGRldGFpbCwgY2FuY2VsYWJsZTogdHJ1ZX0pO1xuICAgIHRoaXNbaGFuZGxlck5hbWVdLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBrZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25Db250cm9sU3RhdGUgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQgY3VycmVudGx5IGhhcyBmb2N1cy5cbiAgICAgKi9cbiAgICBmb2N1c2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhpcyBlbGVtZW50LlxuICAgICAqL1xuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfZGlzYWJsZWRDaGFuZ2VkJyxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgYmVmb3JlIGBkaXNhYmxlZGAgd2FzIGFjdGl2YXRlZC5cbiAgICAgKiBgbnVsbGAgbWVhbnMgdGhlIGF0dHJpYnV0ZSB3YXMgbm90IHByZXNlbnQuXG4gICAgICogQHR5cGUgez9zdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIF9vbGRUYWJJbmRleDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICBfYm91bmRGb2N1c0JsdXJIYW5kbGVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzQmx1ckhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19jaGFuZ2VkQ29udHJvbFN0YXRlKGZvY3VzZWQsIGRpc2FibGVkKSddLFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZEZvY3VzQmx1ckhhbmRsZXIsIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JvdW5kRm9jdXNCbHVySGFuZGxlciwgdHJ1ZSk7XG4gIH0sXG5cbiAgX2ZvY3VzQmx1ckhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gUG9seW1lciB0YWtlcyBjYXJlIG9mIHJldGFyZ2V0aW5nIGV2ZW50cy5cbiAgICB0aGlzLl9zZXRGb2N1c2VkKGV2ZW50LnR5cGUgPT09ICdmb2N1cycpO1xuICAgIHJldHVybjtcbiAgfSxcblxuICBfZGlzYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihkaXNhYmxlZCwgb2xkKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBkaXNhYmxlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIHRoaXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IGRpc2FibGVkID8gJ25vbmUnIDogJyc7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAvLyBSZWFkIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIHRoZSBgdGFiSW5kZXhgIHByb3BlcnR5LlxuICAgICAgLy8gVGhlIHByb3BlcnR5IHJldHVybnMgYC0xYCBpZiB0aGVyZSBpcyBubyBgdGFiaW5kZXhgIGF0dHJpYnV0ZS5cbiAgICAgIC8vIFRoaXMgZGlzdGluY3Rpb24gaXMgaW1wb3J0YW50IHdoZW4gcmVzdG9yaW5nIHRoZSB2YWx1ZSBiZWNhdXNlXG4gICAgICAvLyBsZWF2aW5nIGAtMWAgaGlkZXMgc2hhZG93IHJvb3QgY2hpbGRyZW4gZnJvbSB0aGUgdGFiIG9yZGVyLlxuICAgICAgdGhpcy5fb2xkVGFiSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMuX3NldEZvY3VzZWQoZmFsc2UpO1xuICAgICAgdGhpcy50YWJJbmRleCA9IC0xO1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vbGRUYWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fb2xkVGFiSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9vbGRUYWJJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9jaGFuZ2VkQ29udHJvbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAvLyBfY29udHJvbFN0YXRlQ2hhbmdlZCBpcyBhYnN0cmFjdCwgZm9sbG93LW9uIGJlaGF2aW9ycyBtYXkgaW1wbGVtZW50IGl0XG4gICAgaWYgKHRoaXMuX2NvbnRyb2xTdGF0ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuX2NvbnRyb2xTdGF0ZUNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUtleXNCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uT3ZlcmxheUJlaGF2aW9yLCBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge05lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5gPGlyb24tZHJvcGRvd24+YCBpcyBhIGdlbmVyYWxpemVkIGVsZW1lbnQgdGhhdCBpcyB1c2VmdWwgd2hlbiB5b3UgaGF2ZVxuaGlkZGVuIGNvbnRlbnQgKGBkcm9wZG93bi1jb250ZW50YCkgdGhhdCBpcyByZXZlYWxlZCBkdWUgdG8gc29tZSBjaGFuZ2UgaW5cbnN0YXRlIHRoYXQgc2hvdWxkIGNhdXNlIGl0IHRvIGRvIHNvLlxuXG5Ob3RlIHRoYXQgdGhpcyBpcyBhIGxvdy1sZXZlbCBlbGVtZW50IGludGVuZGVkIHRvIGJlIHVzZWQgYXMgcGFydCBvZiBvdGhlclxuY29tcG9zaXRlIGVsZW1lbnRzIHRoYXQgY2F1c2UgZHJvcGRvd25zIHRvIGJlIHJldmVhbGVkLlxuXG5FeGFtcGxlcyBvZiBlbGVtZW50cyB0aGF0IG1pZ2h0IGJlIGltcGxlbWVudGVkIHVzaW5nIGFuIGBpcm9uLWRyb3Bkb3duYFxuaW5jbHVkZSBjb21ib2JveGVzLCBtZW51YnV0dG9ucywgc2VsZWN0cy4gVGhlIGxpc3QgZ29lcyBvbi5cblxuVGhlIGA8aXJvbi1kcm9wZG93bj5gIGVsZW1lbnQgZXhwb3NlcyBhdHRyaWJ1dGVzIHRoYXQgYWxsb3cgdGhlIHBvc2l0aW9uXG5vZiB0aGUgYGRyb3Bkb3duLWNvbnRlbnRgIHJlbGF0aXZlIHRvIHRoZSBgZHJvcGRvd24tdHJpZ2dlcmAgdG8gYmVcbmNvbmZpZ3VyZWQuXG5cbiAgICA8aXJvbi1kcm9wZG93biBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIiB2ZXJ0aWNhbC1hbGlnbj1cInRvcFwiPlxuICAgICAgPGRpdiBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPkhlbGxvITwvZGl2PlxuICAgIDwvaXJvbi1kcm9wZG93bj5cblxuSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBgPGRpdj5gIGFzc2lnbmVkIHRvIHRoZSBgZHJvcGRvd24tY29udGVudGAgc2xvdCB3aWxsXG5iZSBoaWRkZW4gdW50aWwgdGhlIGRyb3Bkb3duIGVsZW1lbnQgaGFzIGBvcGVuZWRgIHNldCB0byB0cnVlLCBvciB3aGVuIHRoZVxuYG9wZW5gIG1ldGhvZCBpcyBjYWxsZWQgb24gdGhlIGVsZW1lbnQuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50V3JhcHBlciA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRXcmFwcGVyLmFuaW1hdGluZyA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRXcmFwcGVyXCI+XG4gICAgICA8c2xvdCBpZD1cImNvbnRlbnRcIiBuYW1lPVwiZHJvcGRvd24tY29udGVudFwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdpcm9uLWRyb3Bkb3duJyxcblxuICBiZWhhdmlvcnM6IFtcbiAgICBJcm9uQ29udHJvbFN0YXRlLFxuICAgIElyb25BMTF5S2V5c0JlaGF2aW9yLFxuICAgIElyb25PdmVybGF5QmVoYXZpb3IsXG4gICAgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yXG4gIF0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBkcm9wZG93biBjb250ZW50XG4gICAgICogaG9yaXpvbnRhbGx5IHJlbGF0aXZlIHRvIHRoZSBkcm9wZG93biB0cmlnZ2VyLlxuICAgICAqIE92ZXJyaWRkZW4gZnJvbSBgUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgLlxuICAgICAqL1xuICAgIGhvcml6b250YWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdsZWZ0JywgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBkcm9wZG93biBjb250ZW50XG4gICAgICogdmVydGljYWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3RvcCcsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBBbiBhbmltYXRpb24gY29uZmlnLiBJZiBwcm92aWRlZCwgdGhpcyB3aWxsIGJlIHVzZWQgdG8gYW5pbWF0ZSB0aGVcbiAgICAgKiBvcGVuaW5nIG9mIHRoZSBkcm9wZG93bi4gUGFzcyBhbiBBcnJheSBmb3IgbXVsdGlwbGUgYW5pbWF0aW9ucy5cbiAgICAgKiBTZWUgYG5lb24tYW5pbWF0aW9uYCBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGFuaW1hdGlvbiBjb25maWd1cmF0aW9uXG4gICAgICogZGV0YWlscy5cbiAgICAgKi9cbiAgICBvcGVuQW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFuaW1hdGlvbiBjb25maWcuIElmIHByb3ZpZGVkLCB0aGlzIHdpbGwgYmUgdXNlZCB0byBhbmltYXRlIHRoZVxuICAgICAqIGNsb3Npbmcgb2YgdGhlIGRyb3Bkb3duLiBQYXNzIGFuIEFycmF5IGZvciBtdWx0aXBsZSBhbmltYXRpb25zLlxuICAgICAqIFNlZSBgbmVvbi1hbmltYXRpb25gIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgYW5pbWF0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBkZXRhaWxzLlxuICAgICAqL1xuICAgIGNsb3NlQW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIElmIHByb3ZpZGVkLCB0aGlzIHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGZvY3VzZWQgd2hlblxuICAgICAqIHRoZSBkcm9wZG93biBvcGVucy5cbiAgICAgKi9cbiAgICBmb2N1c1RhcmdldDoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGFuaW1hdGlvbnMgd2hlbiBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZVxuICAgICAqIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIG5vQW5pbWF0aW9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgZHJvcGRvd24gd2lsbCBjb25zdHJhaW4gc2Nyb2xsaW5nIG9uIHRoZSBwYWdlXG4gICAgICogdG8gaXRzZWxmIHdoZW4gb3BlbmVkLlxuICAgICAqIFNldCB0byB0cnVlIGluIG9yZGVyIHRvIHByZXZlbnQgc2Nyb2xsIGZyb20gYmVpbmcgY29uc3RyYWluZWRcbiAgICAgKiB0byB0aGUgZHJvcGRvd24gd2hlbiBpdCBvcGVucy5cbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIGEgc2hvcnRjdXQgdG8gc2V0IGBzY3JvbGxBY3Rpb25gIHRvIGxvY2sgb3IgcmVmaXQuXG4gICAgICogUHJlZmVyIGRpcmVjdGx5IHNldHRpbmcgdGhlIGBzY3JvbGxBY3Rpb25gIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsbG93T3V0c2lkZVNjcm9sbDpcbiAgICAgICAge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfYWxsb3dPdXRzaWRlU2Nyb2xsQ2hhbmdlZCd9XG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7J25lb24tYW5pbWF0aW9uLWZpbmlzaCc6ICdfb25OZW9uQW5pbWF0aW9uRmluaXNoJ30sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVPdmVybGF5UG9zaXRpb24ocG9zaXRpb25UYXJnZXQsIHZlcnRpY2FsQWxpZ24sIGhvcml6b250YWxBbGlnbiwgdmVydGljYWxPZmZzZXQsIGhvcml6b250YWxPZmZzZXQpJ1xuICBdLFxuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGF0IGlzIGNvbnRhaW5lZCBieSB0aGUgZHJvcGRvd24sIGlmIGFueS5cbiAgICovXG4gIGdldCBjb250YWluZWRFbGVtZW50KCkge1xuICAgIC8vIFBvbHltZXIgMi54IHJldHVybnMgc2xvdC5hc3NpZ25lZE5vZGVzIHdoaWNoIGNhbiBjb250YWluIHRleHQgbm9kZXMuXG4gICAgdmFyIG5vZGVzID0gZG9tKHRoaXMuJC5jb250ZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gRW5zdXJlIHNjcm9sbEFjdGlvbiBpcyBzZXQuXG4gICAgaWYgKCF0aGlzLnNjcm9sbEFjdGlvbikge1xuICAgICAgdGhpcy5zY3JvbGxBY3Rpb24gPSB0aGlzLmFsbG93T3V0c2lkZVNjcm9sbCA/ICdyZWZpdCcgOiAnbG9jayc7XG4gICAgfVxuICAgIHRoaXMuX3JlYWRpZWQgPSB0cnVlO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc2l6aW5nVGFyZ2V0IHx8IHRoaXMuc2l6aW5nVGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICB0aGlzLnNpemluZ1RhcmdldCA9IHRoaXMuY29udGFpbmVkRWxlbWVudCB8fCB0aGlzO1xuICAgIH1cbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jYW5jZWxBbmltYXRpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZhbHVlIG9mIGBvcGVuZWRgIGNoYW5nZXMuXG4gICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmBcbiAgICovXG4gIF9vcGVuZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbkNvbmZpZygpO1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX29wZW5lZENoYW5nZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAqL1xuICBfcmVuZGVyT3BlbmVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMubm9BbmltYXRpb25zICYmIHRoaXMuYW5pbWF0aW9uQ29uZmlnLm9wZW4pIHtcbiAgICAgIHRoaXMuJC5jb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRpbmcnKTtcbiAgICAgIHRoaXMucGxheUFuaW1hdGlvbignb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbC5fcmVuZGVyT3BlbmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKi9cbiAgX3JlbmRlckNsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm5vQW5pbWF0aW9ucyAmJiB0aGlzLmFuaW1hdGlvbkNvbmZpZy5jbG9zZSkge1xuICAgICAgdGhpcy4kLmNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGluZycpO1xuICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKCdjbG9zZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbC5fcmVuZGVyQ2xvc2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbmltYXRpb24gZmluaXNoZXMgb24gdGhlIGRyb3Bkb3duICh3aGVuIG9wZW5pbmcgb3JcbiAgICogY2xvc2luZykuIFJlc3BvbnNpYmxlIGZvciBcImNvbXBsZXRpbmdcIiB0aGUgcHJvY2VzcyBvZiBvcGVuaW5nIG9yXG4gICAqIGNsb3NpbmcgdGhlIGRyb3Bkb3duIGJ5IHBvc2l0aW9uaW5nIGl0IG9yIHNldHRpbmcgaXRzIGRpc3BsYXkgdG9cbiAgICogbm9uZS5cbiAgICovXG4gIF9vbk5lb25BbmltYXRpb25GaW5pc2g6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5jb250ZW50V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpbmcnKTtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2ZpbmlzaFJlbmRlck9wZW5lZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maW5pc2hSZW5kZXJDbG9zZWQoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgdGhlIGZpbmFsIGFuaW1hdGlvbiBjb25maWcgZnJvbSBkaWZmZXJlbnQgcHJvcGVydGllcyB1c2VkXG4gICAqIHRvIGNvbmZpZ3VyZSBzcGVjaWZpYyBwYXJ0cyBvZiB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyBhbmltYXRpb25zLlxuICAgKi9cbiAgX3VwZGF0ZUFuaW1hdGlvbkNvbmZpZzogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHRoZSBhbmltYXRpb24gbm9kZSB0byBiZSB0aGUgY29udGFpbmVkRWxlbWVudC5cbiAgICB2YXIgYW5pbWF0aW9uTm9kZSA9IHRoaXMuY29udGFpbmVkRWxlbWVudDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IFtdLmNvbmNhdCh0aGlzLm9wZW5BbmltYXRpb25Db25maWcgfHwgW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmNsb3NlQW5pbWF0aW9uQ29uZmlnIHx8IFtdKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFuaW1hdGlvbnNbaV0ubm9kZSA9IGFuaW1hdGlvbk5vZGU7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0ge1xuICAgICAgb3BlbjogdGhpcy5vcGVuQW5pbWF0aW9uQ29uZmlnLFxuICAgICAgY2xvc2U6IHRoaXMuY2xvc2VBbmltYXRpb25Db25maWdcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHBvc2l0aW9uIGJhc2VkIG9uIGNvbmZpZ3VyZWQgaG9yaXpvbnRhbFxuICAgKiBhbmQgdmVydGljYWwgYWxpZ25tZW50LlxuICAgKi9cbiAgX3VwZGF0ZU92ZXJsYXlQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgLy8gVGhpcyB0cmlnZ2VycyBpcm9uLXJlc2l6ZSwgYW5kIGlyb24tb3ZlcmxheS1iZWhhdmlvciB3aWxsIGNhbGwgcmVmaXQgaWZcbiAgICAgIC8vIG5lZWRlZC5cbiAgICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHNjcm9sbEFjdGlvbiBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlIG9mIGFsbG93T3V0c2lkZVNjcm9sbC5cbiAgICogUHJlZmVyIHNldHRpbmcgZGlyZWN0bHkgc2Nyb2xsQWN0aW9uLlxuICAgKi9cbiAgX2FsbG93T3V0c2lkZVNjcm9sbENoYW5nZWQ6IGZ1bmN0aW9uKGFsbG93T3V0c2lkZVNjcm9sbCkge1xuICAgIC8vIFdhaXQgdW50aWwgaW5pdGlhbCB2YWx1ZXMgYXJlIGFsbCBzZXQuXG4gICAgaWYgKCF0aGlzLl9yZWFkaWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghYWxsb3dPdXRzaWRlU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbEFjdGlvbiA9ICdsb2NrJztcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnNjcm9sbEFjdGlvbiB8fCB0aGlzLnNjcm9sbEFjdGlvbiA9PT0gJ2xvY2snKSB7XG4gICAgICB0aGlzLnNjcm9sbEFjdGlvbiA9ICdyZWZpdCc7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBseSBmb2N1cyB0byBmb2N1c1RhcmdldCBvciBjb250YWluZWRFbGVtZW50XG4gICAqL1xuICBfYXBwbHlGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvY3VzVGFyZ2V0ID0gdGhpcy5mb2N1c1RhcmdldCB8fCB0aGlzLmNvbnRhaW5lZEVsZW1lbnQ7XG4gICAgaWYgKGZvY3VzVGFyZ2V0ICYmIHRoaXMub3BlbmVkICYmICF0aGlzLm5vQXV0b0ZvY3VzKSB7XG4gICAgICBmb2N1c1RhcmdldC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbC5fYXBwbHlGb2N1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbmBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAgZml0cyBhbiBlbGVtZW50IGluIGFub3RoZXIgZWxlbWVudCB1c2luZyBgbWF4LWhlaWdodGBcbmFuZCBgbWF4LXdpZHRoYCwgYW5kIG9wdGlvbmFsbHkgY2VudGVycyBpdCBpbiB0aGUgd2luZG93IG9yIGFub3RoZXIgZWxlbWVudC5cblxuVGhlIGVsZW1lbnQgd2lsbCBvbmx5IGJlIHNpemVkIGFuZC9vciBwb3NpdGlvbmVkIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuXG5zaXplZCBhbmQvb3IgcG9zaXRpb25lZCBieSBDU1MuXG5cbkNTUyBwcm9wZXJ0aWVzICAgICAgICAgICAgfCBBY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmBwb3NpdGlvbmAgc2V0ICAgICAgICAgICAgfCBFbGVtZW50IGlzIG5vdCBjZW50ZXJlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuYHRvcGAgb3IgYGJvdHRvbWAgc2V0ICAgICB8IEVsZW1lbnQgaXMgbm90IHZlcnRpY2FsbHkgY2VudGVyZWRcbmBsZWZ0YCBvciBgcmlnaHRgIHNldCAgICAgfCBFbGVtZW50IGlzIG5vdCBob3Jpem9udGFsbHkgY2VudGVyZWRcbmBtYXgtaGVpZ2h0YCBzZXQgICAgICAgICAgfCBFbGVtZW50IHJlc3BlY3RzIGBtYXgtaGVpZ2h0YFxuYG1heC13aWR0aGAgc2V0ICAgICAgICAgICB8IEVsZW1lbnQgcmVzcGVjdHMgYG1heC13aWR0aGBcblxuYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYCBjYW4gcG9zaXRpb24gYW4gZWxlbWVudCBpbnRvIGFub3RoZXIgZWxlbWVudCB1c2luZ1xuYHZlcnRpY2FsQWxpZ25gIGFuZCBgaG9yaXpvbnRhbEFsaWduYC4gVGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBlbGVtZW50J3MgY3NzXG5wb3NpdGlvbi5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpcm9uLWZpdC1pbXBsIHZlcnRpY2FsLWFsaWduPVwidG9wXCIgaG9yaXpvbnRhbC1hbGlnbj1cImF1dG9cIj5cbiAgICAgICAgUG9zaXRpb25lZCBpbnRvIHRoZSBjb250YWluZXJcbiAgICAgIDwvaXJvbi1maXQtaW1wbD5cbiAgICA8L2Rpdj5cblxuVXNlIGBub092ZXJsYXBgIHRvIHBvc2l0aW9uIHRoZSBlbGVtZW50IGFyb3VuZCBhbm90aGVyIGVsZW1lbnQgd2l0aG91dFxub3ZlcmxhcHBpbmcgaXQuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aXJvbi1maXQtaW1wbCBuby1vdmVybGFwIHZlcnRpY2FsLWFsaWduPVwiYXV0b1wiIGhvcml6b250YWwtYWxpZ249XCJhdXRvXCI+XG4gICAgICAgIFBvc2l0aW9uZWQgYXJvdW5kIHRoZSBjb250YWluZXJcbiAgICAgIDwvaXJvbi1maXQtaW1wbD5cbiAgICA8L2Rpdj5cblxuVXNlIGBob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldGAgdG8gb2Zmc2V0IHRoZSBlbGVtZW50IGZyb20gaXRzXG5gcG9zaXRpb25UYXJnZXRgOyBgUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgIHdpbGwgY29sbGFwc2UgdGhlc2UgaW4gb3JkZXIgdG9cbmtlZXAgdGhlIGVsZW1lbnQgd2l0aGluIGBmaXRJbnRvYCBib3VuZGFyaWVzLCB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBlbGVtZW50J3NcbkNTUyBtYXJnaW4gdmFsdWVzLlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGlyb24tZml0LWltcGwgdmVydGljYWwtYWxpZ249XCJ0b3BcIiB2ZXJ0aWNhbC1vZmZzZXQ9XCIyMFwiPlxuICAgICAgICBXaXRoIHZlcnRpY2FsIG9mZnNldFxuICAgICAgPC9pcm9uLWZpdC1pbXBsPlxuICAgIDwvZGl2PlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBwb2x5bWVyQmVoYXZpb3JcbiovXG5leHBvcnQgY29uc3QgSXJvbkZpdEJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgd2lsbCByZWNlaXZlIGEgYG1heC1oZWlnaHRgL2B3aWR0aGAuIEJ5IGRlZmF1bHQgaXQgaXNcbiAgICAgKiB0aGUgc2FtZSBhcyBgdGhpc2AsIGJ1dCBpdCBjYW4gYmUgc2V0IHRvIGEgY2hpbGQgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwsXG4gICAgICogZm9yIGV4YW1wbGUsIGZvciBpbXBsZW1lbnRpbmcgYSBzY3JvbGxpbmcgcmVnaW9uIGluc2lkZSB0aGUgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7IUVsZW1lbnR9XG4gICAgICovXG4gICAgc2l6aW5nVGFyZ2V0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBmaXQgYHRoaXNgIGludG8uXG4gICAgICovXG4gICAgZml0SW50bzoge3R5cGU6IE9iamVjdCwgdmFsdWU6IHdpbmRvd30sXG5cbiAgICAvKipcbiAgICAgKiBXaWxsIHBvc2l0aW9uIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgcG9zaXRpb25UYXJnZXQgd2l0aG91dCBvdmVybGFwcGluZ1xuICAgICAqIGl0LlxuICAgICAqL1xuICAgIG5vT3ZlcmxhcDoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwb3NpdGlvbiB0aGUgZWxlbWVudC4gSWYgbm90IHNldCwgaXRcbiAgICAgKiB3aWxsIGRlZmF1bHQgdG8gdGhlIHBhcmVudCBub2RlLlxuICAgICAqIEB0eXBlIHshRWxlbWVudH1cbiAgICAgKi9cbiAgICBwb3NpdGlvblRhcmdldDoge3R5cGU6IEVsZW1lbnR9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGVsZW1lbnQgaG9yaXpvbnRhbGx5XG4gICAgICogcmVsYXRpdmUgdG8gdGhlIGBwb3NpdGlvblRhcmdldGAuIFBvc3NpYmxlIHZhbHVlcyBhcmUgXCJsZWZ0XCIsIFwicmlnaHRcIixcbiAgICAgKiBcImNlbnRlclwiLCBcImF1dG9cIi5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGVsZW1lbnQgdmVydGljYWxseVxuICAgICAqIHJlbGF0aXZlIHRvIHRoZSBgcG9zaXRpb25UYXJnZXRgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFwidG9wXCIsIFwiYm90dG9tXCIsXG4gICAgICogXCJtaWRkbGVcIiwgXCJhdXRvXCIuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBpdCB3aWxsIHVzZSBgaG9yaXpvbnRhbEFsaWduYCBhbmQgYHZlcnRpY2FsQWxpZ25gIHZhbHVlcyBhc1xuICAgICAqIHByZWZlcnJlZCBhbGlnbm1lbnQgYW5kIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSwgaXQgd2lsbCBwaWNrIHRoZVxuICAgICAqIHZhbHVlcyB3aGljaCBtaW5pbWl6ZSB0aGUgY3JvcHBpbmcuXG4gICAgICovXG4gICAgZHluYW1pY0FsaWduOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKipcbiAgICAgKiBBIHBpeGVsIHZhbHVlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgcG9zaXRpb24gY2FsY3VsYXRlZCBmb3IgdGhlXG4gICAgICogZ2l2ZW4gYGhvcml6b250YWxBbGlnbmAsIGluIHRoZSBkaXJlY3Rpb24gb2YgYWxpZ25tZW50LiBZb3UgY2FuIHRoaW5rXG4gICAgICogb2YgaXQgYXMgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nIHRoZSBkaXN0YW5jZSB0byB0aGUgc2lkZSBvZiB0aGVcbiAgICAgKiBzY3JlZW4gZ2l2ZW4gYnkgYGhvcml6b250YWxBbGlnbmAuXG4gICAgICpcbiAgICAgKiBJZiBgaG9yaXpvbnRhbEFsaWduYCBpcyBcImxlZnRcIiBvciBcImNlbnRlclwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlIG9yXG4gICAgICogZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHNjcmVlbjogYSBuZWdhdGl2ZSBvZmZzZXRcbiAgICAgKiB3aWxsIG1vdmUgdGhlIGRyb3Bkb3duIHRvIHRoZSBsZWZ0OyBhIHBvc2l0aXZlIG9uZSwgdG8gdGhlIHJpZ2h0LlxuICAgICAqXG4gICAgICogQ29udmVyc2VseSBpZiBgaG9yaXpvbnRhbEFsaWduYCBpcyBcInJpZ2h0XCIsIHRoaXMgb2Zmc2V0IHdpbGwgaW5jcmVhc2VcbiAgICAgKiBvciBkZWNyZWFzZSB0aGUgZGlzdGFuY2UgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbjogYSBuZWdhdGl2ZVxuICAgICAqIG9mZnNldCB3aWxsIG1vdmUgdGhlIGRyb3Bkb3duIHRvIHRoZSByaWdodDsgYSBwb3NpdGl2ZSBvbmUsIHRvIHRoZSBsZWZ0LlxuICAgICAqL1xuICAgIGhvcml6b250YWxPZmZzZXQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogQSBwaXhlbCB2YWx1ZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvc2l0aW9uIGNhbGN1bGF0ZWQgZm9yIHRoZVxuICAgICAqIGdpdmVuIGB2ZXJ0aWNhbEFsaWduYCwgaW4gdGhlIGRpcmVjdGlvbiBvZiBhbGlnbm1lbnQuIFlvdSBjYW4gdGhpbmtcbiAgICAgKiBvZiBpdCBhcyBpbmNyZWFzaW5nIG9yIGRlY3JlYXNpbmcgdGhlIGRpc3RhbmNlIHRvIHRoZSBzaWRlIG9mIHRoZVxuICAgICAqIHNjcmVlbiBnaXZlbiBieSBgdmVydGljYWxBbGlnbmAuXG4gICAgICpcbiAgICAgKiBJZiBgdmVydGljYWxBbGlnbmAgaXMgXCJ0b3BcIiBvciBcIm1pZGRsZVwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlIG9yXG4gICAgICogZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSB0b3Agc2lkZSBvZiB0aGUgc2NyZWVuOiBhIG5lZ2F0aXZlIG9mZnNldFxuICAgICAqIHdpbGwgbW92ZSB0aGUgZHJvcGRvd24gdXB3YXJkczsgYSBwb3NpdGl2ZSBvbmUsIGRvd253YXJkcy5cbiAgICAgKlxuICAgICAqIENvbnZlcnNlbHkgaWYgYHZlcnRpY2FsQWxpZ25gIGlzIFwiYm90dG9tXCIsIHRoaXMgb2Zmc2V0IHdpbGwgaW5jcmVhc2VcbiAgICAgKiBvciBkZWNyZWFzZSB0aGUgZGlzdGFuY2UgdG8gdGhlIGJvdHRvbSBzaWRlIG9mIHRoZSBzY3JlZW46IGEgbmVnYXRpdmVcbiAgICAgKiBvZmZzZXQgd2lsbCBtb3ZlIHRoZSBkcm9wZG93biBkb3dud2FyZHM7IGEgcG9zaXRpdmUgb25lLCB1cHdhcmRzLlxuICAgICAqL1xuICAgIHZlcnRpY2FsT2Zmc2V0OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMCwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tZml0IG9uIGF0dGFjaC5cbiAgICAgKi9cbiAgICBhdXRvRml0T25BdHRhY2g6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqIEB0eXBlIHs/T2JqZWN0fSAqL1xuICAgIF9maXRJbmZvOiB7dHlwZTogT2JqZWN0fVxuICB9LFxuXG4gIGdldCBfZml0V2lkdGgoKSB7XG4gICAgdmFyIGZpdFdpZHRoO1xuICAgIGlmICh0aGlzLmZpdEludG8gPT09IHdpbmRvdykge1xuICAgICAgZml0V2lkdGggPSB0aGlzLmZpdEludG8uaW5uZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0V2lkdGggPSB0aGlzLmZpdEludG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBmaXRXaWR0aDtcbiAgfSxcblxuICBnZXQgX2ZpdEhlaWdodCgpIHtcbiAgICB2YXIgZml0SGVpZ2h0O1xuICAgIGlmICh0aGlzLmZpdEludG8gPT09IHdpbmRvdykge1xuICAgICAgZml0SGVpZ2h0ID0gdGhpcy5maXRJbnRvLmlubmVySGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXRIZWlnaHQgPSB0aGlzLmZpdEludG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gZml0SGVpZ2h0O1xuICB9LFxuXG4gIGdldCBfZml0TGVmdCgpIHtcbiAgICB2YXIgZml0TGVmdDtcbiAgICBpZiAodGhpcy5maXRJbnRvID09PSB3aW5kb3cpIHtcbiAgICAgIGZpdExlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXRMZWZ0ID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgfVxuICAgIHJldHVybiBmaXRMZWZ0O1xuICB9LFxuXG4gIGdldCBfZml0VG9wKCkge1xuICAgIHZhciBmaXRUb3A7XG4gICAgaWYgKHRoaXMuZml0SW50byA9PT0gd2luZG93KSB7XG4gICAgICBmaXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXRUb3AgPSB0aGlzLmZpdEludG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIH1cbiAgICByZXR1cm4gZml0VG9wO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBvc2l0aW9uIHRoZSBlbGVtZW50LFxuICAgKiBpZiBubyBwb3NpdGlvbiB0YXJnZXQgaXMgY29uZmlndXJlZC5cbiAgICovXG4gIGdldCBfZGVmYXVsdFBvc2l0aW9uVGFyZ2V0KCkge1xuICAgIHZhciBwYXJlbnQgPSBkb20odGhpcykucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5ob3N0O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBob3Jpem9udGFsIGFsaWduIHZhbHVlLCBhY2NvdW50aW5nIGZvciB0aGUgUlRML0xUUiB0ZXh0IGRpcmVjdGlvbi5cbiAgICovXG4gIGdldCBfbG9jYWxlSG9yaXpvbnRhbEFsaWduKCkge1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgLy8gSW4gUlRMLCBcImxlZnRcIiBiZWNvbWVzIFwicmlnaHRcIi5cbiAgICAgIGlmICh0aGlzLmhvcml6b250YWxBbGlnbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICByZXR1cm4gJ2xlZnQnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbEFsaWduID09PSAnbGVmdCcpIHtcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbGlnbjtcbiAgfSxcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcG9zaXRpb25lZCBpbnN0ZWFkIG9mIGNlbnRlcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IF9fc2hvdWxkUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLmhvcml6b250YWxBbGlnbiB8fCB0aGlzLnZlcnRpY2FsQWxpZ24pICYmIHRoaXMucG9zaXRpb25UYXJnZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCBpcyBSVEwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXQgX2lzUlRMKCkge1xuICAgIC8vIE1lbW9pemUgdGhpcyB0byBhdm9pZCBleHBlbnNpdmUgY2FsY3VsYXRpb25zICYgcmVsYXlvdXRzLlxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkbyBpdCBvbmx5IG9uY2VcbiAgICBpZiAodHlwZW9mIHRoaXMuX21lbW9pemVkSXNSVEwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9tZW1vaXplZElzUlRMID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVtb2l6ZWRJc1JUTDtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uVGFyZ2V0ID0gdGhpcy5wb3NpdGlvblRhcmdldCB8fCB0aGlzLl9kZWZhdWx0UG9zaXRpb25UYXJnZXQ7XG4gICAgaWYgKHRoaXMuYXV0b0ZpdE9uQXR0YWNoKSB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5PVEU6IHNoYWR5ZG9tIGFwcGxpZXMgZGlzdHJpYnV0aW9uIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIHdlYmNvbXBvbmVudHMvc2hhZHlkb20jMTIwXG4gICAgICAgIC8vIEZsdXNoIHRvIGdldCBjb3JyZWN0IGxheW91dCBpbmZvLlxuICAgICAgICB3aW5kb3cuU2hhZHlET00gJiYgU2hhZHlET00uZmx1c2goKTtcbiAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19kZWZlcnJlZEZpdCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX19kZWZlcnJlZEZpdCk7XG4gICAgICB0aGlzLl9fZGVmZXJyZWRGaXQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUG9zaXRpb25zIGFuZCBmaXRzIHRoZSBlbGVtZW50IGludG8gdGhlIGBmaXRJbnRvYCBlbGVtZW50LlxuICAgKi9cbiAgZml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgdGhpcy5jb25zdHJhaW4oKTtcbiAgICB0aGlzLmNlbnRlcigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZW1vaXplIGluZm9ybWF0aW9uIG5lZWRlZCB0byBwb3NpdGlvbiBhbmQgc2l6ZSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBzdXBwcmVzcyB7ZGVwcmVjYXRlZH1cbiAgICovXG4gIF9kaXNjb3ZlckluZm86IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9maXRJbmZvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0YXJnZXQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICB2YXIgc2l6ZXIgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNpemluZ1RhcmdldCk7XG5cbiAgICB0aGlzLl9maXRJbmZvID0ge1xuICAgICAgaW5saW5lU3R5bGU6IHtcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlLnRvcCB8fCAnJyxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZS5sZWZ0IHx8ICcnLFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5zdHlsZS5wb3NpdGlvbiB8fCAnJ1xuICAgICAgfSxcbiAgICAgIHNpemVySW5saW5lU3R5bGU6IHtcbiAgICAgICAgbWF4V2lkdGg6IHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heFdpZHRoIHx8ICcnLFxuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heEhlaWdodCB8fCAnJyxcbiAgICAgICAgYm94U2l6aW5nOiB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5ib3hTaXppbmcgfHwgJydcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbmVkQnk6IHtcbiAgICAgICAgdmVydGljYWxseTogdGFyZ2V0LnRvcCAhPT0gJ2F1dG8nID9cbiAgICAgICAgICAgICd0b3AnIDpcbiAgICAgICAgICAgICh0YXJnZXQuYm90dG9tICE9PSAnYXV0bycgPyAnYm90dG9tJyA6IG51bGwpLFxuICAgICAgICBob3Jpem9udGFsbHk6IHRhcmdldC5sZWZ0ICE9PSAnYXV0bycgP1xuICAgICAgICAgICAgJ2xlZnQnIDpcbiAgICAgICAgICAgICh0YXJnZXQucmlnaHQgIT09ICdhdXRvJyA/ICdyaWdodCcgOiBudWxsKVxuICAgICAgfSxcbiAgICAgIHNpemVkQnk6IHtcbiAgICAgICAgaGVpZ2h0OiBzaXplci5tYXhIZWlnaHQgIT09ICdub25lJyxcbiAgICAgICAgd2lkdGg6IHNpemVyLm1heFdpZHRoICE9PSAnbm9uZScsXG4gICAgICAgIG1pbldpZHRoOiBwYXJzZUludChzaXplci5taW5XaWR0aCwgMTApIHx8IDAsXG4gICAgICAgIG1pbkhlaWdodDogcGFyc2VJbnQoc2l6ZXIubWluSGVpZ2h0LCAxMCkgfHwgMFxuICAgICAgfSxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHBhcnNlSW50KHRhcmdldC5tYXJnaW5Ub3AsIDEwKSB8fCAwLFxuICAgICAgICByaWdodDogcGFyc2VJbnQodGFyZ2V0Lm1hcmdpblJpZ2h0LCAxMCkgfHwgMCxcbiAgICAgICAgYm90dG9tOiBwYXJzZUludCh0YXJnZXQubWFyZ2luQm90dG9tLCAxMCkgfHwgMCxcbiAgICAgICAgbGVmdDogcGFyc2VJbnQodGFyZ2V0Lm1hcmdpbkxlZnQsIDEwKSB8fCAwXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB0YXJnZXQgZWxlbWVudCdzIHBvc2l0aW9uIGFuZCBzaXplIGNvbnN0cmFpbnRzLCBhbmQgY2xlYXJcbiAgICogdGhlIG1lbW9pemVkIGRhdGEuXG4gICAqL1xuICByZXNldEZpdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZm8gPSB0aGlzLl9maXRJbmZvIHx8IHt9O1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGluZm8uc2l6ZXJJbmxpbmVTdHlsZSkge1xuICAgICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGVbcHJvcGVydHldID0gaW5mby5zaXplcklubGluZVN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gaW5mby5pbmxpbmVTdHlsZSkge1xuICAgICAgdGhpcy5zdHlsZVtwcm9wZXJ0eV0gPSBpbmZvLmlubGluZVN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICB0aGlzLl9maXRJbmZvID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogRXF1aXZhbGVudCB0byBjYWxsaW5nIGByZXNldEZpdCgpYCBhbmQgYGZpdCgpYC4gVXNlZnVsIHRvIGNhbGwgdGhpcyBhZnRlclxuICAgKiB0aGUgZWxlbWVudCBvciB0aGUgYGZpdEludG9gIGVsZW1lbnQgaGFzIGJlZW4gcmVzaXplZCwgb3IgaWYgYW55IG9mIHRoZVxuICAgKiBwb3NpdGlvbmluZyBwcm9wZXJ0aWVzIChlLmcuIGBob3Jpem9udGFsQWxpZ24sIHZlcnRpY2FsQWxpZ25gKSBpcyB1cGRhdGVkLlxuICAgKiBJdCBwcmVzZXJ2ZXMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgc2l6aW5nVGFyZ2V0LlxuICAgKi9cbiAgcmVmaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gdGhpcy5zaXppbmdUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5zaXppbmdUYXJnZXQuc2Nyb2xsVG9wO1xuICAgIHRoaXMucmVzZXRGaXQoKTtcbiAgICB0aGlzLmZpdCgpO1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgfSxcblxuICAvKipcbiAgICogUG9zaXRpb25zIHRoZSBlbGVtZW50IGFjY29yZGluZyB0byBgaG9yaXpvbnRhbEFsaWduLCB2ZXJ0aWNhbEFsaWduYC5cbiAgICovXG4gIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX19zaG91bGRQb3NpdGlvbikge1xuICAgICAgLy8gbmVlZHMgdG8gYmUgY2VudGVyZWQsIGFuZCBpdCBpcyBkb25lIGFmdGVyIGNvbnN0cmFpbi5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzY292ZXJJbmZvKCk7XG5cbiAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAvLyBOZWVkIGJvcmRlci1ib3ggZm9yIG1hcmdpbi9wYWRkaW5nLlxuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAvLyBTZXQgdG8gMCwgMCBpbiBvcmRlciB0byBkaXNjb3ZlciBhbnkgb2Zmc2V0IGNhdXNlZCBieSBwYXJlbnQgc3RhY2tpbmdcbiAgICAvLyBjb250ZXh0cy5cbiAgICB0aGlzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0eWxlLnRvcCA9ICcwcHgnO1xuXG4gICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBwb3NpdGlvblJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5wb3NpdGlvblRhcmdldCk7XG4gICAgdmFyIGZpdFJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5maXRJbnRvKTtcblxuICAgIHZhciBtYXJnaW4gPSB0aGlzLl9maXRJbmZvLm1hcmdpbjtcblxuICAgIC8vIENvbnNpZGVyIHRoZSBtYXJnaW4gYXMgcGFydCBvZiB0aGUgc2l6ZSBmb3IgcG9zaXRpb24gY2FsY3VsYXRpb25zLlxuICAgIHZhciBzaXplID0ge1xuICAgICAgd2lkdGg6IHJlY3Qud2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbVxuICAgIH07XG5cbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9fZ2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMuX2xvY2FsZUhvcml6b250YWxBbGlnbixcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWduLFxuICAgICAgICBzaXplLFxuICAgICAgICByZWN0LFxuICAgICAgICBwb3NpdGlvblJlY3QsXG4gICAgICAgIGZpdFJlY3QpO1xuXG4gICAgdmFyIGxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgbWFyZ2luLmxlZnQ7XG4gICAgdmFyIHRvcCA9IHBvc2l0aW9uLnRvcCArIG1hcmdpbi50b3A7XG5cbiAgICAvLyBXZSBmaXJzdCBsaW1pdCByaWdodC9ib3R0b20gd2l0aGluIGZpdEludG8gcmVzcGVjdGluZyB0aGUgbWFyZ2luLFxuICAgIC8vIHRoZW4gdXNlIHRob3NlIHZhbHVlcyB0byBsaW1pdCB0b3AvbGVmdC5cbiAgICB2YXIgcmlnaHQgPSBNYXRoLm1pbihmaXRSZWN0LnJpZ2h0IC0gbWFyZ2luLnJpZ2h0LCBsZWZ0ICsgcmVjdC53aWR0aCk7XG4gICAgdmFyIGJvdHRvbSA9IE1hdGgubWluKGZpdFJlY3QuYm90dG9tIC0gbWFyZ2luLmJvdHRvbSwgdG9wICsgcmVjdC5oZWlnaHQpO1xuXG4gICAgLy8gS2VlcCBsZWZ0L3RvcCB3aXRoaW4gZml0SW50byByZXNwZWN0aW5nIHRoZSBtYXJnaW4uXG4gICAgbGVmdCA9IE1hdGgubWF4KFxuICAgICAgICBmaXRSZWN0LmxlZnQgKyBtYXJnaW4ubGVmdCxcbiAgICAgICAgTWF0aC5taW4obGVmdCwgcmlnaHQgLSB0aGlzLl9maXRJbmZvLnNpemVkQnkubWluV2lkdGgpKTtcbiAgICB0b3AgPSBNYXRoLm1heChcbiAgICAgICAgZml0UmVjdC50b3AgKyBtYXJnaW4udG9wLFxuICAgICAgICBNYXRoLm1pbih0b3AsIGJvdHRvbSAtIHRoaXMuX2ZpdEluZm8uc2l6ZWRCeS5taW5IZWlnaHQpKTtcblxuICAgIC8vIFVzZSByaWdodC9ib3R0b20gdG8gc2V0IG1heFdpZHRoL21heEhlaWdodCwgYW5kIHJlc3BlY3RcbiAgICAvLyBtaW5XaWR0aC9taW5IZWlnaHQuXG4gICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGUubWF4V2lkdGggPVxuICAgICAgICBNYXRoLm1heChyaWdodCAtIGxlZnQsIHRoaXMuX2ZpdEluZm8uc2l6ZWRCeS5taW5XaWR0aCkgKyAncHgnO1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heEhlaWdodCA9XG4gICAgICAgIE1hdGgubWF4KGJvdHRvbSAtIHRvcCwgdGhpcy5fZml0SW5mby5zaXplZEJ5Lm1pbkhlaWdodCkgKyAncHgnO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBvZmZzZXQgY2F1c2VkIGJ5IGFueSBzdGFja2luZyBjb250ZXh0LlxuICAgIHRoaXMuc3R5bGUubGVmdCA9IChsZWZ0IC0gcmVjdC5sZWZ0KSArICdweCc7XG4gICAgdGhpcy5zdHlsZS50b3AgPSAodG9wIC0gcmVjdC50b3ApICsgJ3B4JztcbiAgfSxcblxuICAvKipcbiAgICogQ29uc3RyYWlucyB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCB0byBgZml0SW50b2AgYnkgc2V0dGluZyBgbWF4LWhlaWdodGBcbiAgICogYW5kL29yIGBtYXgtd2lkdGhgLlxuICAgKi9cbiAgY29uc3RyYWluOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3Nob3VsZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc2NvdmVySW5mbygpO1xuXG4gICAgdmFyIGluZm8gPSB0aGlzLl9maXRJbmZvO1xuICAgIC8vIHBvc2l0aW9uIGF0ICgwcHgsIDBweCkgaWYgbm90IGFscmVhZHkgcG9zaXRpb25lZCwgc28gd2UgY2FuIG1lYXN1cmUgdGhlXG4gICAgLy8gbmF0dXJhbCBzaXplLlxuICAgIGlmICghaW5mby5wb3NpdGlvbmVkQnkudmVydGljYWxseSkge1xuICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB0aGlzLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBpZiAoIWluZm8ucG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSkge1xuICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB0aGlzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB9XG5cbiAgICAvLyBuZWVkIGJvcmRlci1ib3ggZm9yIG1hcmdpbi9wYWRkaW5nXG4gICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgIC8vIGNvbnN0cmFpbiB0aGUgd2lkdGggYW5kIGhlaWdodCBpZiBub3QgYWxyZWFkeSBzZXRcbiAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFpbmZvLnNpemVkQnkuaGVpZ2h0KSB7XG4gICAgICB0aGlzLl9fc2l6ZURpbWVuc2lvbihcbiAgICAgICAgICByZWN0LCBpbmZvLnBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5LCAndG9wJywgJ2JvdHRvbScsICdIZWlnaHQnKTtcbiAgICB9XG4gICAgaWYgKCFpbmZvLnNpemVkQnkud2lkdGgpIHtcbiAgICAgIHRoaXMuX19zaXplRGltZW5zaW9uKFxuICAgICAgICAgIHJlY3QsIGluZm8ucG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSwgJ2xlZnQnLCAncmlnaHQnLCAnV2lkdGgnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIF9zaXplRGltZW5zaW9uOiBmdW5jdGlvbihyZWN0LCBwb3NpdGlvbmVkQnksIHN0YXJ0LCBlbmQsIGV4dGVudCkge1xuICAgIHRoaXMuX19zaXplRGltZW5zaW9uKHJlY3QsIHBvc2l0aW9uZWRCeSwgc3RhcnQsIGVuZCwgZXh0ZW50KTtcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fc2l6ZURpbWVuc2lvbjogZnVuY3Rpb24ocmVjdCwgcG9zaXRpb25lZEJ5LCBzdGFydCwgZW5kLCBleHRlbnQpIHtcbiAgICB2YXIgaW5mbyA9IHRoaXMuX2ZpdEluZm87XG4gICAgdmFyIGZpdFJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5maXRJbnRvKTtcbiAgICB2YXIgbWF4ID0gZXh0ZW50ID09PSAnV2lkdGgnID8gZml0UmVjdC53aWR0aCA6IGZpdFJlY3QuaGVpZ2h0O1xuICAgIHZhciBmbGlwID0gKHBvc2l0aW9uZWRCeSA9PT0gZW5kKTtcbiAgICB2YXIgb2Zmc2V0ID0gZmxpcCA/IG1heCAtIHJlY3RbZW5kXSA6IHJlY3Rbc3RhcnRdO1xuICAgIHZhciBtYXJnaW4gPSBpbmZvLm1hcmdpbltmbGlwID8gc3RhcnQgOiBlbmRdO1xuICAgIHZhciBvZmZzZXRFeHRlbnQgPSAnb2Zmc2V0JyArIGV4dGVudDtcbiAgICB2YXIgc2l6aW5nT2Zmc2V0ID0gdGhpc1tvZmZzZXRFeHRlbnRdIC0gdGhpcy5zaXppbmdUYXJnZXRbb2Zmc2V0RXh0ZW50XTtcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zdHlsZVsnbWF4JyArIGV4dGVudF0gPVxuICAgICAgICAobWF4IC0gbWFyZ2luIC0gb2Zmc2V0IC0gc2l6aW5nT2Zmc2V0KSArICdweCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENlbnRlcnMgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IGlmIG5vdCBhbHJlYWR5IHBvc2l0aW9uZWQuIFRoaXMgYWxzb1xuICAgKiBzZXRzIGBwb3NpdGlvbjpmaXhlZGAuXG4gICAqL1xuICBjZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fc2hvdWxkUG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzY292ZXJJbmZvKCk7XG5cbiAgICB2YXIgcG9zaXRpb25lZEJ5ID0gdGhpcy5fZml0SW5mby5wb3NpdGlvbmVkQnk7XG4gICAgaWYgKHBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5ICYmIHBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIC8vIEFscmVhZHkgcG9zaXRpb25lZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTmVlZCBwb3NpdGlvbjpmaXhlZCB0byBjZW50ZXJcbiAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAvLyBUYWtlIGludG8gYWNjb3VudCB0aGUgb2Zmc2V0IGNhdXNlZCBieSBwYXJlbnRzIHRoYXQgY3JlYXRlIHN0YWNraW5nXG4gICAgLy8gY29udGV4dHMgKGUuZy4gd2l0aCB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKS4gVHJhbnNsYXRlIHRvIDAsMCBhbmRcbiAgICAvLyBtZWFzdXJlIHRoZSBib3VuZGluZyByZWN0LlxuICAgIGlmICghcG9zaXRpb25lZEJ5LnZlcnRpY2FsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUudG9wID0gJzBweCc7XG4gICAgfVxuICAgIGlmICghcG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSkge1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgfVxuICAgIC8vIEl0IHdpbGwgdGFrZSBpbiBjb25zaWRlcmF0aW9uIG1hcmdpbnMgYW5kIHRyYW5zZm9ybXNcbiAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGZpdFJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5maXRJbnRvKTtcbiAgICBpZiAoIXBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5KSB7XG4gICAgICB2YXIgdG9wID0gZml0UmVjdC50b3AgLSByZWN0LnRvcCArIChmaXRSZWN0LmhlaWdodCAtIHJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICB0aGlzLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgfVxuICAgIGlmICghcG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSkge1xuICAgICAgdmFyIGxlZnQgPSBmaXRSZWN0LmxlZnQgLSByZWN0LmxlZnQgKyAoZml0UmVjdC53aWR0aCAtIHJlY3Qud2lkdGgpIC8gMjtcbiAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgIH1cbiAgfSxcblxuICBfX2dldE5vcm1hbGl6ZWRSZWN0OiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgdGFyZ2V0ID09PSB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSxcblxuICBfX2dldE9mZnNjcmVlbkFyZWE6IGZ1bmN0aW9uKHBvc2l0aW9uLCBzaXplLCBmaXRSZWN0KSB7XG4gICAgdmFyIHZlcnRpY2FsQ3JvcCA9IE1hdGgubWluKDAsIHBvc2l0aW9uLnRvcCkgK1xuICAgICAgICBNYXRoLm1pbigwLCBmaXRSZWN0LmJvdHRvbSAtIChwb3NpdGlvbi50b3AgKyBzaXplLmhlaWdodCkpO1xuICAgIHZhciBob3Jpem9udGFsQ3JvcCA9IE1hdGgubWluKDAsIHBvc2l0aW9uLmxlZnQpICtcbiAgICAgICAgTWF0aC5taW4oMCwgZml0UmVjdC5yaWdodCAtIChwb3NpdGlvbi5sZWZ0ICsgc2l6ZS53aWR0aCkpO1xuICAgIHJldHVybiBNYXRoLmFicyh2ZXJ0aWNhbENyb3ApICogc2l6ZS53aWR0aCArXG4gICAgICAgIE1hdGguYWJzKGhvcml6b250YWxDcm9wKSAqIHNpemUuaGVpZ2h0O1xuICB9LFxuXG5cbiAgX19nZXRQb3NpdGlvbjogZnVuY3Rpb24oXG4gICAgICBoQWxpZ24sIHZBbGlnbiwgc2l6ZSwgc2l6ZU5vTWFyZ2lucywgcG9zaXRpb25SZWN0LCBmaXRSZWN0KSB7XG4gICAgLy8gQWxsIHRoZSBwb3NzaWJsZSBjb25maWd1cmF0aW9ucy5cbiAgICAvLyBPcmRlcmVkIGFzIHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHQuXG4gICAgdmFyIHBvc2l0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCAtIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCAtIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5sZWZ0ICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAncmlnaHQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCAtIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5yaWdodCAtIHNpemUud2lkdGggLSB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgaWYgKHRoaXMubm9PdmVybGFwKSB7XG4gICAgICAvLyBEdXBsaWNhdGUuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBvc2l0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBvc2l0aW9uc1tpXSkge1xuICAgICAgICAgIGNvcHlba2V5XSA9IHBvc2l0aW9uc1tpXVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKGNvcHkpO1xuICAgICAgfVxuICAgICAgLy8gSG9yaXpvbnRhbCBvdmVybGFwIG9ubHkuXG4gICAgICBwb3NpdGlvbnNbMF0udG9wID0gcG9zaXRpb25zWzFdLnRvcCArPSBwb3NpdGlvblJlY3QuaGVpZ2h0O1xuICAgICAgcG9zaXRpb25zWzJdLnRvcCA9IHBvc2l0aW9uc1szXS50b3AgLT0gcG9zaXRpb25SZWN0LmhlaWdodDtcbiAgICAgIC8vIFZlcnRpY2FsIG92ZXJsYXAgb25seS5cbiAgICAgIHBvc2l0aW9uc1s0XS5sZWZ0ID0gcG9zaXRpb25zWzZdLmxlZnQgKz0gcG9zaXRpb25SZWN0LndpZHRoO1xuICAgICAgcG9zaXRpb25zWzVdLmxlZnQgPSBwb3NpdGlvbnNbN10ubGVmdCAtPSBwb3NpdGlvblJlY3Qud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gQ29uc2lkZXIgYXV0byBhcyBudWxsIGZvciBjb2RpbmcgY29udmVuaWVuY2UuXG4gICAgdkFsaWduID0gdkFsaWduID09PSAnYXV0bycgPyBudWxsIDogdkFsaWduO1xuICAgIGhBbGlnbiA9IGhBbGlnbiA9PT0gJ2F1dG8nID8gbnVsbCA6IGhBbGlnbjtcblxuICAgIGlmICghaEFsaWduIHx8IGhBbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LnRvcCArIHRoaXMudmVydGljYWxPZmZzZXQgK1xuICAgICAgICAgICAgKHRoaXMubm9PdmVybGFwID8gcG9zaXRpb25SZWN0LmhlaWdodCA6IDApLFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCAtIHNpemVOb01hcmdpbnMud2lkdGggLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC53aWR0aCAvIDIgKyB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0pO1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQgLSB0aGlzLnZlcnRpY2FsT2Zmc2V0IC1cbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC5oZWlnaHQgOiAwKSxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgLSBzaXplTm9NYXJnaW5zLndpZHRoIC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3Qud2lkdGggLyAyICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXZBbGlnbiB8fCB2QWxpZ24gPT09ICdtaWRkbGUnKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wIC0gc2l6ZU5vTWFyZ2lucy5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC5oZWlnaHQgLyAyICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgKyB0aGlzLmhvcml6b250YWxPZmZzZXQgK1xuICAgICAgICAgICAgKHRoaXMubm9PdmVybGFwID8gcG9zaXRpb25SZWN0LndpZHRoIDogMClcbiAgICAgIH0pO1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAncmlnaHQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgLSBzaXplTm9NYXJnaW5zLmhlaWdodCAvIDIgK1xuICAgICAgICAgICAgcG9zaXRpb25SZWN0LmhlaWdodCAvIDIgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QucmlnaHQgLSBzaXplLndpZHRoIC0gdGhpcy5ob3Jpem9udGFsT2Zmc2V0IC1cbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC53aWR0aCA6IDApXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodkFsaWduID09PSAnbWlkZGxlJyAmJiBoQWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgLSBzaXplTm9NYXJnaW5zLmhlaWdodCAvIDIgK1xuICAgICAgICAgICAgcG9zaXRpb25SZWN0LmhlaWdodCAvIDIgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCAtIHNpemVOb01hcmdpbnMud2lkdGggLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC53aWR0aCAvIDIgKyB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNhbmRpZGF0ZSA9IHBvc2l0aW9uc1tpXTtcbiAgICAgIHZhciB2QWxpZ25PayA9IGNhbmRpZGF0ZS52ZXJ0aWNhbEFsaWduID09PSB2QWxpZ247XG4gICAgICB2YXIgaEFsaWduT2sgPSBjYW5kaWRhdGUuaG9yaXpvbnRhbEFsaWduID09PSBoQWxpZ247XG5cbiAgICAgIC8vIElmIGJvdGggdkFsaWduIGFuZCBoQWxpZ24gYXJlIGRlZmluZWQsIHJldHVybiBleGFjdCBtYXRjaC5cbiAgICAgIC8vIEZvciBkeW5hbWljQWxpZ24gYW5kIG5vT3ZlcmxhcCB3ZSdsbCBoYXZlIG1vcmUgdGhhbiBvbmUgY2FuZGlkYXRlLCBzb1xuICAgICAgLy8gd2UnbGwgaGF2ZSB0byBjaGVjayB0aGUgb2Zmc2NyZWVuQXJlYSB0byBtYWtlIHRoZSBiZXN0IGNob2ljZS5cbiAgICAgIGlmICghdGhpcy5keW5hbWljQWxpZ24gJiYgIXRoaXMubm9PdmVybGFwICYmIHZBbGlnbk9rICYmIGhBbGlnbk9rKSB7XG4gICAgICAgIHBvc2l0aW9uID0gY2FuZGlkYXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gQWxpZ24gaXMgb2sgaWYgYWxpZ25tZW50IHByZWZlcmVuY2VzIGFyZSByZXNwZWN0ZWQuIElmIG5vIHByZWZlcmVuY2VzLFxuICAgICAgLy8gaXQgaXMgY29uc2lkZXJlZCBvay5cbiAgICAgIHZhciBhbGlnbk9rID0gKCF2QWxpZ24gfHwgdkFsaWduT2spICYmICghaEFsaWduIHx8IGhBbGlnbk9rKTtcblxuICAgICAgLy8gRmlsdGVyIG91dCBlbGVtZW50cyB0aGF0IGRvbid0IG1hdGNoIHRoZSBhbGlnbm1lbnQgKGlmIGRlZmluZWQpLlxuICAgICAgLy8gV2l0aCBkeW5hbWljQWxpZ24sIHdlIG5lZWQgdG8gY29uc2lkZXIgYWxsIHRoZSBwb3NpdGlvbnMgdG8gZmluZCB0aGVcbiAgICAgIC8vIG9uZSB0aGF0IG1pbmltaXplcyB0aGUgY3JvcHBlZCBhcmVhLlxuICAgICAgaWYgKCF0aGlzLmR5bmFtaWNBbGlnbiAmJiAhYWxpZ25Paykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FuZGlkYXRlLm9mZnNjcmVlbkFyZWEgPVxuICAgICAgICAgIHRoaXMuX19nZXRPZmZzY3JlZW5BcmVhKGNhbmRpZGF0ZSwgc2l6ZSwgZml0UmVjdCk7XG4gICAgICAvLyBJZiBub3QgY3JvcHBlZCBhbmQgcmVzcGVjdHMgdGhlIGFsaWduIHJlcXVpcmVtZW50cywga2VlcCBpdC5cbiAgICAgIC8vIFRoaXMgYWxsb3dzIHRvIHByZWZlciBwb3NpdGlvbnMgb3ZlcmxhcHBpbmcgaG9yaXpvbnRhbGx5IG92ZXIgdGhlXG4gICAgICAvLyBvbmVzIG92ZXJsYXBwaW5nIHZlcnRpY2FsbHkuXG4gICAgICBpZiAoY2FuZGlkYXRlLm9mZnNjcmVlbkFyZWEgPT09IDAgJiYgYWxpZ25Paykge1xuICAgICAgICBwb3NpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IGNhbmRpZGF0ZTtcbiAgICAgIHZhciBkaWZmID0gY2FuZGlkYXRlLm9mZnNjcmVlbkFyZWEgLSBwb3NpdGlvbi5vZmZzY3JlZW5BcmVhO1xuICAgICAgLy8gQ2hlY2sgd2hpY2ggY3JvcHMgbGVzcy4gSWYgaXQgY3JvcHMgZXF1YWxseSwgY2hlY2sgaWYgYXQgbGVhc3Qgb25lXG4gICAgICAvLyBhbGlnbiBzZXR0aW5nIGlzIG9rLlxuICAgICAgaWYgKGRpZmYgPCAwIHx8IChkaWZmID09PSAwICYmICh2QWxpZ25PayB8fCBoQWxpZ25PaykpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gY2FuZGlkYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxudmFyIHAgPSBFbGVtZW50LnByb3RvdHlwZTtcbnZhciBtYXRjaGVzID0gcC5tYXRjaGVzIHx8IHAubWF0Y2hlc1NlbGVjdG9yIHx8IHAubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgcC5tc01hdGNoZXNTZWxlY3RvciB8fCBwLm9NYXRjaGVzU2VsZWN0b3IgfHwgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbmNsYXNzIElyb25Gb2N1c2FibGVzSGVscGVyQ2xhc3Mge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXMobm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiBhIGVsZW1lbnQgaXMgZm9jdXNhYmxlLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNGb2N1c2FibGUoZWxlbWVudCkge1xuICAgIC8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYwMDE5NC80MjI4NzAzOlxuICAgIC8vIFRoZXJlIGlzbid0IGEgZGVmaW5pdGUgbGlzdCwgaXQncyB1cCB0byB0aGUgYnJvd3Nlci4gVGhlIG9ubHlcbiAgICAvLyBzdGFuZGFyZCB3ZSBoYXZlIGlzIERPTSBMZXZlbCAyIEhUTUxcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItSFRNTC9odG1sLmh0bWwsIGFjY29yZGluZyB0byB3aGljaCB0aGVcbiAgICAvLyBvbmx5IGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGZvY3VzKCkgbWV0aG9kIGFyZSBIVE1MSW5wdXRFbGVtZW50LFxuICAgIC8vIEhUTUxTZWxlY3RFbGVtZW50LCBIVE1MVGV4dEFyZWFFbGVtZW50IGFuZCBIVE1MQW5jaG9yRWxlbWVudC4gVGhpc1xuICAgIC8vIG5vdGFibHkgb21pdHMgSFRNTEJ1dHRvbkVsZW1lbnQgYW5kIEhUTUxBcmVhRWxlbWVudC4gUmVmZXJyaW5nIHRvIHRoZXNlXG4gICAgLy8gdGVzdHMgd2l0aCB0YWJiYWJsZXMgaW4gZGlmZmVyZW50IGJyb3dzZXJzXG4gICAgLy8gaHR0cDovL2FsbHlqcy5pby9kYXRhLXRhYmxlcy9mb2N1c2FibGUuaHRtbFxuXG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgZm9jdXNlZCBpZiB0aGV5IGhhdmUgW2Rpc2FibGVkXSBhdHRyaWJ1dGUuXG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb2JqZWN0JykpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICB9XG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW4gYmUgZm9jdXNlZCBldmVuIGlmIHRoZXkgaGF2ZSBbZGlzYWJsZWRdIGF0dHJpYnV0ZS5cbiAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKFxuICAgICAgICBlbGVtZW50LCAnYVtocmVmXSwgYXJlYVtocmVmXSwgaWZyYW1lLCBbdGFiaW5kZXhdLCBbY29udGVudEVkaXRhYmxlXScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgYSBlbGVtZW50IGlzIHRhYmJhYmxlLiBUbyBiZSB0YWJiYWJsZSwgYSBlbGVtZW50IG11c3QgYmVcbiAgICogZm9jdXNhYmxlLCB2aXNpYmxlLCBhbmQgd2l0aCBhIHRhYmluZGV4ICE9PSAtMS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVGFiYmFibGUoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLmlzRm9jdXNhYmxlKGVsZW1lbnQpICYmXG4gICAgICAgIG1hdGNoZXMuY2FsbChlbGVtZW50LCAnOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKSAmJlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9ybWFsaXplZCBlbGVtZW50IHRhYmluZGV4LiBJZiBub3QgZm9jdXNhYmxlLCByZXR1cm5zIC0xLlxuICAgKiBJdCBjaGVja3MgZm9yIHRoZSBhdHRyaWJ1dGUgXCJ0YWJpbmRleFwiIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgcHJvcGVydHlcbiAgICogYHRhYkluZGV4YCBzaW5jZSBicm93c2VycyBhc3NpZ24gZGlmZmVyZW50IHZhbHVlcyB0byBpdC5cbiAgICogZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7IW51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmlzRm9jdXNhYmxlKGVsZW1lbnQpKSB7XG4gICAgICB2YXIgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAwO1xuICAgICAgcmV0dXJuIE51bWJlcih0YWJJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgaWYgKCF0aGlzLl9pc1Zpc2libGUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHRhYkluZGV4ID0gdGhpcy5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09ICdjb250ZW50JyB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gJ3Nsb3QnKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvciBgZGlzcGxheTogbm9uZWBcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc1Zpc2libGUoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIGlubGluZSBzdHlsZSBmaXJzdCB0byBzYXZlIGEgcmUtZmxvdy4gSWYgbG9va3MgZ29vZCwgY2hlY2sgYWxzb1xuICAgIC8vIGNvbXB1dGVkIHN0eWxlLlxuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgIHJldHVybiAoc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicgJiYgc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIGFuIGFycmF5IG9mIHRhYmJhYmxlIGVsZW1lbnRzIGJ5IHRhYmluZGV4LiBSZXR1cm5zIGEgbmV3IGFycmF5LlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSB0YWJiYWJsZXNcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc29ydEJ5VGFiSW5kZXgodGFiYmFibGVzKSB7XG4gICAgLy8gSW1wbGVtZW50IGEgbWVyZ2Ugc29ydCBhcyBBcnJheS5wcm90b3R5cGUuc29ydCBkb2VzIGEgbm9uLXN0YWJsZSBzb3J0XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydFxuICAgIHZhciBsZW4gPSB0YWJiYWJsZXMubGVuZ3RoO1xuICAgIGlmIChsZW4gPCAyKSB7XG4gICAgICByZXR1cm4gdGFiYmFibGVzO1xuICAgIH1cbiAgICB2YXIgcGl2b3QgPSBNYXRoLmNlaWwobGVuIC8gMik7XG4gICAgdmFyIGxlZnQgPSB0aGlzLl9zb3J0QnlUYWJJbmRleCh0YWJiYWJsZXMuc2xpY2UoMCwgcGl2b3QpKTtcbiAgICB2YXIgcmlnaHQgPSB0aGlzLl9zb3J0QnlUYWJJbmRleCh0YWJiYWJsZXMuc2xpY2UocGl2b3QpKTtcbiAgICByZXR1cm4gdGhpcy5fbWVyZ2VTb3J0QnlUYWJJbmRleChsZWZ0LCByaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugc29ydCBpdGVyYXRvciwgbWVyZ2VzIHRoZSB0d28gYXJyYXlzIGludG8gb25lLCBzb3J0ZWQgYnkgdGFiIGluZGV4LlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSBsZWZ0XG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJpZ2h0XG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21lcmdlU29ydEJ5VGFiSW5kZXgobGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKChsZWZ0Lmxlbmd0aCA+IDApICYmIChyaWdodC5sZW5ndGggPiAwKSkge1xuICAgICAgaWYgKHRoaXMuX2hhc0xvd2VyVGFiT3JkZXIobGVmdFswXSwgcmlnaHRbMF0pKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobGVmdC5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChsZWZ0LCByaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiBlbGVtZW50IGBhYCBoYXMgbG93ZXIgdGFiIG9yZGVyIGNvbXBhcmVkIHRvIGVsZW1lbnQgYGJgXG4gICAqIChib3RoIGVsZW1lbnRzIGFyZSBhc3N1bWVkIHRvIGJlIGZvY3VzYWJsZSBhbmQgdGFiYmFibGUpLlxuICAgKiBFbGVtZW50cyB3aXRoIHRhYmluZGV4ID0gMCBoYXZlIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50c1xuICAgKiB3aXRoIHRhYmluZGV4ID4gMC5cbiAgICogSWYgYm90aCBoYXZlIHNhbWUgdGFiaW5kZXgsIGl0IHJldHVybnMgZmFsc2UuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBhXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBiXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFzTG93ZXJUYWJPcmRlcihhLCBiKSB7XG4gICAgLy8gTm9ybWFsaXplIHRhYkluZGV4ZXNcbiAgICAvLyBlLmcuIGluIEZpcmVmb3ggYDxkaXYgY29udGVudGVkaXRhYmxlPmAgaGFzIGB0YWJJbmRleCA9IC0xYFxuICAgIHZhciBhdGkgPSBNYXRoLm1heChhLnRhYkluZGV4LCAwKTtcbiAgICB2YXIgYnRpID0gTWF0aC5tYXgoYi50YWJJbmRleCwgMCk7XG4gICAgcmV0dXJuIChhdGkgPT09IDAgfHwgYnRpID09PSAwKSA/IGJ0aSA+IGF0aSA6IGF0aSA+IGJ0aTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSBuZXcgSXJvbkZvY3VzYWJsZXNIZWxwZXJDbGFzcygpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5gaXJvbi1vdmVybGF5LWJhY2tkcm9wYCBpcyBhIGJhY2tkcm9wIHVzZWQgYnkgYFBvbHltZXIuSXJvbk92ZXJsYXlCZWhhdmlvcmAuIEl0XG5zaG91bGQgYmUgYSBzaW5nbGV0b24uXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nLlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLVxuYC0taXJvbi1vdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3JgIHwgQmFja2Ryb3AgYmFja2dyb3VuZCBjb2xvciB8ICMwMDBcbmAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1vcGFjaXR5YCAgICAgICAgICB8IEJhY2tkcm9wIG9wYWNpdHkgfCAwLjZcbmAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcGAgICAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gYGlyb24tb3ZlcmxheS1iYWNrZHJvcGAuICAgICAgICAgICAgICAgICAgICAgIHwge31cbmAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1vcGVuZWRgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gYGlyb24tb3ZlcmxheS1iYWNrZHJvcGAgd2hlbiBpdCBpcyBkaXNwbGF5ZWQgfCB7fVxuKi9cblBvbHltZXIoe1xuICAvKiogQG92ZXJyaWRlICovXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pcm9uLW92ZXJsYXktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvciwgIzAwMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIEBhcHBseSAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLm9wZW5lZCkge1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BhY2l0eSwgMC42KTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIEBhcHBseSAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1vcGVuZWQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdpcm9uLW92ZXJsYXktYmFja2Ryb3AnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYmFja2Ryb3AgaXMgb3BlbmVkLlxuICAgICAqL1xuICAgIG9wZW5lZDoge1xuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnLFxuICAgIH1cblxuICB9LFxuXG4gIGxpc3RlbmVyczoge1xuICAgICd0cmFuc2l0aW9uZW5kJzogJ19vblRyYW5zaXRpb25lbmQnLFxuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCB0byBjYW5jZWwgcHJldmlvdXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGNhbGxzIHdoZW4gb3BlbmVkIGNoYW5nZXMuXG4gICAgdGhpcy5fX29wZW5lZFJhZiA9IG51bGw7XG4gIH0sXG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vcGVuZWQgJiYgdGhpcy5fb3BlbmVkQ2hhbmdlZCh0aGlzLm9wZW5lZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIGJhY2tkcm9wIHRvIGRvY3VtZW50IGJvZHkgaWYgbmVlZGVkLlxuICAgKi9cbiAgcHJlcGFyZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmICF0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgIGRvbShkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3dzIHRoZSBiYWNrZHJvcC5cbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGJhY2tkcm9wLlxuICAgKi9cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGJhY2tkcm9wIGZyb20gZG9jdW1lbnQgYm9keSBpZiBuZWVkZWQuXG4gICAqL1xuICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCAmJiB0aGlzLnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGRvbSh0aGlzLnBhcmVudE5vZGUpLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBfb25UcmFuc2l0aW9uZW5kOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3BlbmVkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24ob3BlbmVkKSB7XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgLy8gQXV0by1hdHRhY2guXG4gICAgICB0aGlzLnByZXBhcmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQW5pbWF0aW9uIG1pZ2h0IGJlIGRpc2FibGVkIHZpYSB0aGUgbWl4aW4gb3Igb3BhY2l0eSBjdXN0b20gcHJvcGVydHkuXG4gICAgICAvLyBJZiBpdCBpcyBkaXNhYmxlZCBpbiBvdGhlciB3YXlzLCBpdCdzIHVwIHRvIHRoZSB1c2VyIHRvIGNhbGwgY29tcGxldGUuXG4gICAgICB2YXIgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICAgIGlmIChjcy50cmFuc2l0aW9uRHVyYXRpb24gPT09ICcwcycgfHwgY3Mub3BhY2l0eSA9PSAwKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBjYW5jZWwgcHJldmlvdXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxuICAgIGlmICh0aGlzLl9fb3BlbmVkUmFmKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX29wZW5lZFJhZik7XG4gICAgICB0aGlzLl9fb3BlbmVkUmFmID0gbnVsbDtcbiAgICB9XG4gICAgLy8gRm9yY2UgcmVsYXlvdXQgdG8gZW5zdXJlIHByb3BlciB0cmFuc2l0aW9ucy5cbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICAgIHRoaXMuX19vcGVuZWRSYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fX29wZW5lZFJhZiA9IG51bGw7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKCdvcGVuZWQnLCB0aGlzLm9wZW5lZCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZpdEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZpdC1iZWhhdmlvci9pcm9uLWZpdC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25SZXNpemFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge3VzZVNoYWRvd30gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvc2V0dGluZ3MuanMnO1xuXG5pbXBvcnQge0lyb25Gb2N1c2FibGVzSGVscGVyfSBmcm9tICcuL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMnO1xuaW1wb3J0IHtJcm9uT3ZlcmxheU1hbmFnZXIsIElyb25PdmVybGF5TWFuYWdlckNsYXNzfSBmcm9tICcuL2lyb24tb3ZlcmxheS1tYW5hZ2VyLmpzJztcbmltcG9ydCB7cHVzaFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2t9IGZyb20gJy4vaXJvbi1zY3JvbGwtbWFuYWdlci5qcyc7XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgb3ZlcmxheSBpcyBjdXJyZW50bHkgZGlzcGxheWVkLlxuICAgICAqL1xuICAgIG9wZW5lZDpcbiAgICAgICAge29ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBvdmVybGF5IHdhcyBjYW5jZWxlZCB3aGVuIGl0IHdhcyBsYXN0IGNsb3NlZC5cbiAgICAgKi9cbiAgICBjYW5jZWxlZDoge1xuICAgICAgb2JzZXJ2ZXI6ICdfY2FuY2VsZWRDaGFuZ2VkJyxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNwbGF5IGEgYmFja2Ryb3AgYmVoaW5kIHRoZSBvdmVybGF5LiBJdCB0cmFwcyB0aGUgZm9jdXNcbiAgICAgKiB3aXRoaW4gdGhlIGxpZ2h0IERPTSBvZiB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICB3aXRoQmFja2Ryb3A6IHtcbiAgICAgIG9ic2VydmVyOiAnX3dpdGhCYWNrZHJvcENoYW5nZWQnLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvLWZvY3VzaW5nIHRoZSBvdmVybGF5IG9yIGNoaWxkIG5vZGVzIHdpdGhcbiAgICAgKiB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlYCB3aGVuIHRoZSBvdmVybGF5IGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBub0F1dG9Gb2N1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBjYW5jZWxpbmcgdGhlIG92ZXJsYXkgd2l0aCB0aGUgRVNDIGtleS5cbiAgICAgKi9cbiAgICBub0NhbmNlbE9uRXNjS2V5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGNhbmNlbGluZyB0aGUgb3ZlcmxheSBieSBjbGlja2luZyBvdXRzaWRlIGl0LlxuICAgICAqL1xuICAgIG5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIHRoZSByZWFzb24ocykgdGhpcyBvdmVybGF5IHdhcyBsYXN0IGNsb3NlZCAoc2VlXG4gICAgICogYGlyb24tb3ZlcmxheS1jbG9zZWRgKS4gYElyb25PdmVybGF5QmVoYXZpb3JgIHByb3ZpZGVzIHRoZSBgY2FuY2VsZWRgXG4gICAgICogcmVhc29uOyBpbXBsZW1lbnRlcnMgb2YgdGhlIGJlaGF2aW9yIGNhbiBwcm92aWRlIG90aGVyIHJlYXNvbnMgaW5cbiAgICAgKiBhZGRpdGlvbiB0byBgY2FuY2VsZWRgLlxuICAgICAqL1xuICAgIGNsb3NpbmdSZWFzb246IHtcbiAgICAgIC8vIHdhcyBhIGdldHRlciBiZWZvcmUsIGJ1dCBuZWVkcyB0byBiZSBhIHByb3BlcnR5IHNvIG90aGVyXG4gICAgICAvLyBiZWhhdmlvcnMgY2FuIG92ZXJyaWRlIHRoaXMuXG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGVuYWJsZSByZXN0b3Jpbmcgb2YgZm9jdXMgd2hlbiBvdmVybGF5IGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICByZXN0b3JlRm9jdXNPbkNsb3NlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbGxvdyBjbGlja3MgdG8gZ28gdGhyb3VnaCBvdmVybGF5cy5cbiAgICAgKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoaXMgb3ZlcmxheSwgdGhlIGNsaWNrIG1heVxuICAgICAqIGNsb3NlIHRoZSBvdmVybGF5IGJlbG93LlxuICAgICAqL1xuICAgIGFsbG93Q2xpY2tUaHJvdWdoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBrZWVwIG92ZXJsYXkgYWx3YXlzIG9uIHRvcC5cbiAgICAgKi9cbiAgICBhbHdheXNPblRvcDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGljaCBhY3Rpb24gdG8gcGVyZm9ybSB3aGVuIHNjcm9sbCBvdXRzaWRlIGFuIG9wZW5lZCBvdmVybGF5XG4gICAgICogaGFwcGVucy4gUG9zc2libGUgdmFsdWVzOiBsb2NrIC0gYmxvY2tzIHNjcm9sbGluZyBmcm9tIGhhcHBlbmluZywgcmVmaXQgLVxuICAgICAqIGNvbXB1dGVzIHRoZSBuZXcgcG9zaXRpb24gb24gdGhlIG92ZXJsYXkgY2FuY2VsIC0gY2F1c2VzIHRoZSBvdmVybGF5IHRvXG4gICAgICogY2xvc2VcbiAgICAgKi9cbiAgICBzY3JvbGxBY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRjdXQgdG8gYWNjZXNzIHRvIHRoZSBvdmVybGF5IG1hbmFnZXIuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUlyb25PdmVybGF5TWFuYWdlckNsYXNzfVxuICAgICAqL1xuICAgIF9tYW5hZ2VyOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogSXJvbk92ZXJsYXlNYW5hZ2VyLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbm9kZSBiZWluZyBmb2N1c2VkLlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBfZm9jdXNlZENoaWxkOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfVxuXG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7J2lyb24tcmVzaXplJzogJ19vbklyb25SZXNpemUnfSxcblxuICBvYnNlcnZlcnM6IFsnX191cGRhdGVTY3JvbGxPYnNlcnZlcnMoaXNBdHRhY2hlZCwgb3BlbmVkLCBzY3JvbGxBY3Rpb24pJ10sXG5cbiAgLyoqXG4gICAqIFRoZSBiYWNrZHJvcCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICovXG4gIGdldCBiYWNrZHJvcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZXIuYmFja2Ryb3BFbGVtZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBub2RlIHRvIGdpdmUgZm9jdXMgdG8uXG4gICAqIEByZXR1cm4geyFOb2RlfVxuICAgKi9cbiAgZ2V0IF9mb2N1c05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRDaGlsZCB8fCBkb20odGhpcykucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10nKSB8fCB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBub2RlcyB0aGF0IGNhbiByZWNlaXZlIGZvY3VzIChvdmVybGF5IGluY2x1ZGVkKSwgb3JkZXJlZCBieVxuICAgKiBgdGFiaW5kZXhgLiBUaGlzIGlzIHVzZWQgdG8gcmV0cmlldmUgd2hpY2ggaXMgdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZVxuICAgKiBub2RlcyBpbiBvcmRlciB0byB3cmFwIHRoZSBmb2N1cyBmb3Igb3ZlcmxheXMgYHdpdGgtYmFja2Ryb3BgLlxuICAgKlxuICAgKiBJZiB5b3Uga25vdyB3aGF0IGlzIHlvdXIgY29udGVudCAoc3BlY2lmaWNhbGx5IHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGVcbiAgICogY2hpbGRyZW4pLCB5b3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBvbmx5IGBbZmlyc3RGb2N1c2FibGUsXG4gICAqIGxhc3RGb2N1c2FibGVdO2BcbiAgICogQHJldHVybiB7IUFycmF5PCFOb2RlPn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBVc2VkIHRvIHNraXAgY2FsbHMgdG8gbm90aWZ5UmVzaXplIGFuZCByZWZpdCB3aGlsZSB0aGUgb3ZlcmxheSBpc1xuICAgIC8vIGFuaW1hdGluZy5cbiAgICB0aGlzLl9faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAvLyB3aXRoLWJhY2tkcm9wIG5lZWRzIHRhYmluZGV4IHRvIGJlIHNldCBpbiBvcmRlciB0byB0cmFwIHRoZSBmb2N1cy5cbiAgICAvLyBJZiBpdCBpcyBub3Qgc2V0LCBJcm9uT3ZlcmxheUJlaGF2aW9yIHdpbGwgc2V0IGl0LCBhbmQgcmVtb3ZlIGl0IGlmXG4gICAgLy8gd2l0aC1iYWNrZHJvcCA9IGZhbHNlLlxuICAgIHRoaXMuX19zaG91bGRSZW1vdmVUYWJJbmRleCA9IGZhbHNlO1xuICAgIC8vIFVzZWQgZm9yIHdyYXBwaW5nIHRoZSBmb2N1cyBvbiBUQUIgLyBTaGlmdCtUQUIuXG4gICAgdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZSA9IHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZSA9IG51bGw7XG4gICAgLy8gVXNlZCBieSB0byBrZWVwIHRyYWNrIG9mIHRoZSBSQUYgY2FsbGJhY2tzLlxuICAgIHRoaXMuX19yYWZzID0ge307XG4gICAgLy8gRm9jdXNlZCBub2RlIGJlZm9yZSBvdmVybGF5IGdldHMgb3BlbmVkLiBDYW4gYmUgcmVzdG9yZWQgb24gY2xvc2UuXG4gICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSBudWxsO1xuICAgIC8vIFNjcm9sbCBpbmZvIHRvIGJlIHJlc3RvcmVkLlxuICAgIHRoaXMuX19zY3JvbGxUb3AgPSB0aGlzLl9fc2Nyb2xsTGVmdCA9IG51bGw7XG4gICAgdGhpcy5fX29uQ2FwdHVyZVNjcm9sbCA9IHRoaXMuX19vbkNhcHR1cmVTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAvLyBSb290IG5vZGVzIGhvc3RpbmcgdGhlIG92ZXJsYXksIHVzZWQgdG8gbGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzIG9uIHRoZW0uXG4gICAgdGhpcy5fX3Jvb3ROb2RlcyA9IG51bGw7XG4gICAgdGhpcy5fZW5zdXJlU2V0dXAoKTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBDYWxsIF9vcGVuZWRDaGFuZ2VkIGhlcmUgc28gdGhhdCBwb3NpdGlvbiBjYW4gYmUgY29tcHV0ZWQgY29ycmVjdGx5LlxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fb3BlbmVkQ2hhbmdlZCh0aGlzLm9wZW5lZCk7XG4gICAgfVxuICAgIHRoaXMuX29ic2VydmVyID0gZG9tKHRoaXMpLm9ic2VydmVOb2Rlcyh0aGlzLl9vbk5vZGVzQ2hhbmdlKTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBUT0RPKGJpY2tuZWxscik6IFBlciBzcGVjLCBjaGVja2luZyBgdGhpcy5fb2JzZXJ2ZXJgIHNob3VsZCBuZXZlciBiZVxuICAgIC8vIG5lY2Vzc2FyeSBiZWNhdXNlIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGBkaXNjb25uZWN0ZWRDYWxsYmFja2Agc2hvdWxkXG4gICAgLy8gYWx3YXlzIGJlIGNhbGxlZCBpbiBhbHRlcm5hdGluZyBvcmRlci4gSG93ZXZlciwgdGhlIGN1c3RvbSBlbGVtZW50c1xuICAgIC8vIHBvbHlmaWxsIGRvZXNuJ3QgaW1wbGVtZW50IHRoZSByZWFjdGlvbnMgc3RhY2ssIHNvIHRoaXMgY2FuIHNvbWV0aW1lc1xuICAgIC8vIGhhcHBlbiwgcGFydGljdWxhcmx5IGlmIFNoYWR5RE9NIGlzIGluIG5vUGF0Y2ggbW9kZSB3aGVyZSB0aGUgY3VzdG9tXG4gICAgLy8gZWxlbWVudHMgcG9seWZpbGwgaXMgaW5zdGFsbGVkIGJlZm9yZSBTaGFkeURPTS4gV2Ugc2hvdWxkIGludmVzdGlnYXRlXG4gICAgLy8gd2hldGhlciBvciBub3Qgd2UgY2FuIGVpdGhlciBpbXBsZW1lbnQgdGhlIHJlYWN0aW9ucyBzdGFjayB3aXRob3V0IG1ham9yXG4gICAgLy8gcGVyZm9ybWFuY2UgaW1wbGljYXRpb25zIG9yIHBhdGNoIFNoYWR5RE9NJ3MgZnVuY3Rpb25zIHRvIHJlc3RvcmUgdGhlXG4gICAgLy8gdHlwaWNhbCBTaGFkeURPTS10aGVuLWN1c3RvbS1lbGVtZW50cyBvcmRlciBhbmQgcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZC5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIGRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgfVxuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICBmb3IgKHZhciBjYiBpbiB0aGlzLl9fcmFmcykge1xuICAgICAgaWYgKHRoaXMuX19yYWZzW2NiXSAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmFmc1tjYl0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fcmFmcyA9IHt9O1xuICAgIHRoaXMuX21hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcblxuICAgIC8vIFdlIGdvdCBkZXRhY2hlZCB3aGlsZSBhbmltYXRpbmcsIGVuc3VyZSB3ZSBzaG93L2hpZGUgdGhlIG92ZXJsYXlcbiAgICAvLyBhbmQgZmlyZSBpcm9uLW92ZXJsYXktb3BlbmVkL2Nsb3NlZCBldmVudCFcbiAgICBpZiAodGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fZmluaXNoUmVuZGVyT3BlbmVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1cyBpZiBuZWNlc3NhcnkuXG4gICAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcbiAgICAgICAgdGhpcy5fZmluaXNoUmVuZGVyQ2xvc2VkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7RXZlbnQ9fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnRcbiAgICovXG4gIGNhbmNlbDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgY2FuY2VsRXZlbnQgPVxuICAgICAgICB0aGlzLmZpcmUoJ2lyb24tb3ZlcmxheS1jYW5jZWxlZCcsIGV2ZW50LCB7Y2FuY2VsYWJsZTogdHJ1ZX0pO1xuICAgIGlmIChjYW5jZWxFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQodHJ1ZSk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIGNhY2hlZCB0YWJiYWJsZSBub2Rlcy4gVG8gYmUgY2FsbGVkIHdoZW4gYW55IG9mIHRoZVxuICAgKiBmb2N1c2FibGUgY29udGVudCBjaGFuZ2VzIChlLmcuIGEgYnV0dG9uIGlzIGRpc2FibGVkKS5cbiAgICovXG4gIGludmFsaWRhdGVUYWJiYWJsZXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGUgPSB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgPSBudWxsO1xuICB9LFxuXG4gIF9lbnN1cmVTZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlTZXR1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vdmVybGF5U2V0dXAgPSB0cnVlO1xuICAgIHRoaXMuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGBvcGVuZWRgIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wZW5lZFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24ob3BlbmVkKSB7XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgLy8gRGVmZXIgYW55IGFuaW1hdGlvbi1yZWxhdGVkIGNvZGUgb24gYXR0YWNoZWRcbiAgICAvLyAoX29wZW5lZENoYW5nZWQgZ2V0cyBjYWxsZWQgYWdhaW4gb24gYXR0YWNoZWQpLlxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgIC8vIERlcmFmIGZvciBub24tYmxvY2tpbmcgcmVuZGVyaW5nLlxuICAgIHRoaXMuX19kZXJhZignX19vcGVuZWRDaGFuZ2VkJywgdGhpcy5fX29wZW5lZENoYW5nZWQpO1xuICB9LFxuXG4gIF9jYW5jZWxlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbiA9IHRoaXMuY2xvc2luZ1JlYXNvbiB8fCB7fTtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24uY2FuY2VsZWQgPSB0aGlzLmNhbmNlbGVkO1xuICB9LFxuXG4gIF93aXRoQmFja2Ryb3BDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB0YWJpbmRleCBpcyBhbHJlYWR5IHNldCwgbm8gbmVlZCB0byBvdmVycmlkZSBpdC5cbiAgICBpZiAodGhpcy53aXRoQmFja2Ryb3AgJiYgIXRoaXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRoaXMuX19zaG91bGRSZW1vdmVUYWJJbmRleCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9fc2hvdWxkUmVtb3ZlVGFiSW5kZXgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy5fX3Nob3VsZFJlbW92ZVRhYkluZGV4ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX21hbmFnZXIudHJhY2tCYWNrZHJvcCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogdGFza3Mgd2hpY2ggbXVzdCBvY2N1ciBiZWZvcmUgb3BlbmluZzsgZS5nLiBtYWtpbmcgdGhlIGVsZW1lbnQgdmlzaWJsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX3ByZXBhcmVSZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFN0b3JlIGZvY3VzZWQgbm9kZS5cbiAgICB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZSA9IHRoaXMuX21hbmFnZXIuZGVlcEFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBOZWVkZWQgdG8gY2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBvdmVybGF5IHNvIHRoYXQgdHJhbnNpdGlvbnMgb24gaXRzXG4gICAgLy8gc2l6ZSB3aWxsIGhhdmUgdGhlIGNvcnJlY3Qgc3RhcnRpbmcgcG9pbnRzLlxuICAgIHRoaXMuX3ByZXBhcmVQb3NpdGlvbmluZygpO1xuICAgIHRoaXMucmVmaXQoKTtcbiAgICB0aGlzLl9maW5pc2hQb3NpdGlvbmluZygpO1xuXG4gICAgLy8gU2FmYXJpIHdpbGwgYXBwbHkgdGhlIGZvY3VzIHRvIHRoZSBhdXRvZm9jdXMgZWxlbWVudCB3aGVuIGRpc3BsYXllZFxuICAgIC8vIGZvciB0aGUgZmlyc3QgdGltZSwgc28gd2UgbWFrZSBzdXJlIHRvIHJldHVybiB0aGUgZm9jdXMgd2hlcmUgaXQgd2FzLlxuICAgIGlmICh0aGlzLm5vQXV0b0ZvY3VzICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuX2ZvY3VzTm9kZSkge1xuICAgICAgdGhpcy5fZm9jdXNOb2RlLmJsdXIoKTtcbiAgICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyB3aGljaCBjYXVzZSB0aGUgb3ZlcmxheSB0byBhY3R1YWxseSBvcGVuOyB0eXBpY2FsbHkgcGxheSBhblxuICAgKiBhbmltYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9yZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZpbmlzaFJlbmRlck9wZW5lZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyB3aGljaCBjYXVzZSB0aGUgb3ZlcmxheSB0byBhY3R1YWxseSBjbG9zZTsgdHlwaWNhbGx5IHBsYXkgYW5cbiAgICogYW5pbWF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfcmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9maW5pc2hSZW5kZXJDbG9zZWQoKTtcbiAgfSxcblxuICAvKipcbiAgICogVGFza3MgdG8gYmUgcGVyZm9ybWVkIGF0IHRoZSBlbmQgb2Ygb3BlbiBhY3Rpb24uIFdpbGwgZmlyZVxuICAgKiBgaXJvbi1vdmVybGF5LW9wZW5lZGAuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9maW5pc2hSZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmZpcmUoJ2lyb24tb3ZlcmxheS1vcGVuZWQnKTtcbiAgfSxcblxuICAvKipcbiAgICogVGFza3MgdG8gYmUgcGVyZm9ybWVkIGF0IHRoZSBlbmQgb2YgY2xvc2UgYWN0aW9uLiBXaWxsIGZpcmVcbiAgICogYGlyb24tb3ZlcmxheS1jbG9zZWRgLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfZmluaXNoUmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBIaWRlIHRoZSBvdmVybGF5LlxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBSZXNldCB6LWluZGV4IG9ubHkgYXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuc3R5bGUuekluZGV4ID0gJyc7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICB0aGlzLl9faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpcmUoJ2lyb24tb3ZlcmxheS1jbG9zZWQnLCB0aGlzLmNsb3NpbmdSZWFzb24pO1xuICB9LFxuXG4gIF9wcmVwYXJlUG9zaXRpb25pbmc6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9LFxuXG4gIF9maW5pc2hQb3NpdGlvbmluZzogZnVuY3Rpb24oKSB7XG4gICAgLy8gRmlyc3QsIG1ha2UgaXQgaW52aXNpYmxlICYgcmVhY3RpdmF0ZSBhbmltYXRpb25zLlxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBGb3JjZSByZWZsb3cgYmVmb3JlIHJlLWVuYWJsaW5nIGFuaW1hdGlvbnMgc28gdGhhdCB0aGV5IGRvbid0IHN0YXJ0LlxuICAgIC8vIFNldCBzY3JvbGxUb3AgdG8gaXRzZWxmIHNvIHRoYXQgQ2xvc3VyZSBDb21waWxlciBkb2Vzbid0IHJlbW92ZSB0aGlzLlxuICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gICAgdGhpcy5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gJyc7XG4gICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICcnO1xuICAgIC8vIE5vdyB0aGF0IGFuaW1hdGlvbnMgYXJlIGVuYWJsZWQsIG1ha2UgaXQgdmlzaWJsZSBhZ2FpblxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIC8vIEZvcmNlIHJlZmxvdywgc28gdGhhdCBmb2xsb3dpbmcgYW5pbWF0aW9ucyBhcmUgcHJvcGVybHkgc3RhcnRlZC5cbiAgICAvLyBTZXQgc2Nyb2xsVG9wIHRvIGl0c2VsZiBzbyB0aGF0IENsb3N1cmUgQ29tcGlsZXIgZG9lc24ndCByZW1vdmUgdGhpcy5cbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGZvY3VzIGFjY29yZGluZyB0byB0aGUgb3BlbmVkIHN0YXRlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfYXBwbHlGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICBpZiAoIXRoaXMubm9BdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlc3RvcmUgZm9jdXMuXG4gICAgICBpZiAodGhpcy5yZXN0b3JlRm9jdXNPbkNsb3NlICYmIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlKSB7XG4gICAgICAgIC8vIElmIHRoZSBhY3RpdmVFbGVtZW50IGlzIGA8Ym9keT5gIG9yIGluc2lkZSB0aGUgb3ZlcmxheSxcbiAgICAgICAgLy8gd2UgYXJlIGFsbG93ZWQgdG8gcmVzdG9yZSB0aGUgZm9jdXMuIEluIGFsbCB0aGUgb3RoZXJcbiAgICAgICAgLy8gY2FzZXMgZm9jdXMgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGVsc2V3aGVyZSBieSBhbm90aGVyXG4gICAgICAgIC8vIGNvbXBvbmVudCBvciBieSBhbiB1c2VyIGludGVyYWN0aW9uIChlLmcuIGNsaWNrIG9uIGFcbiAgICAgICAgLy8gYnV0dG9uIG91dHNpZGUgdGhlIG92ZXJsYXkpLlxuICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHRoaXMuX21hbmFnZXIuZGVlcEFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8XG4gICAgICAgICAgICBjb21wb3NlZENvbnRhaW5zKHRoaXMsIGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNOb2RlLmJsdXIoKTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRDaGlsZCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIChjbG9zZXMpIHRoZSBvdmVybGF5LiBDYWxsIHdoZW4gY2xpY2sgaGFwcGVucyBvdXRzaWRlIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uQ2FwdHVyZUNsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICB0aGlzLmNhbmNlbChldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBLZWVwcyB0cmFjayBvZiB0aGUgZm9jdXNlZCBjaGlsZC4gSWYgd2l0aEJhY2tkcm9wLCB0cmFwcyBmb2N1cyB3aXRoaW5cbiAgICogb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbkNhcHR1cmVGb2N1czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMud2l0aEJhY2tkcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXRoID0gZG9tKGV2ZW50KS5wYXRoO1xuICAgIGlmIChwYXRoLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNlZENoaWxkID0gLyoqIEB0eXBlIHtOb2RlfSAqLyAocGF0aFswXSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBFU0Mga2V5IGV2ZW50IGFuZCBjYW5jZWxzIChjbG9zZXMpIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uQ2FwdHVyZUVzYzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubm9DYW5jZWxPbkVzY0tleSkge1xuICAgICAgdGhpcy5jYW5jZWwoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlcyBUQUIga2V5IGV2ZW50cyB0byB0cmFjayBmb2N1cyBjaGFuZ2VzLlxuICAgKiBXaWxsIHdyYXAgZm9jdXMgZm9yIG92ZXJsYXlzIHdpdGhCYWNrZHJvcC5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbkNhcHR1cmVUYWI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLndpdGhCYWNrZHJvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fZW5zdXJlRmlyc3RMYXN0Rm9jdXNhYmxlcygpO1xuICAgIC8vIFRBQiB3cmFwcyBmcm9tIGxhc3QgdG8gZmlyc3QgZm9jdXNhYmxlLlxuICAgIC8vIFNoaWZ0ICsgVEFCIHdyYXBzIGZyb20gZmlyc3QgdG8gbGFzdCBmb2N1c2FibGUuXG4gICAgdmFyIHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgdmFyIG5vZGVUb0NoZWNrID1cbiAgICAgICAgc2hpZnQgPyB0aGlzLl9fZmlyc3RGb2N1c2FibGVOb2RlIDogdGhpcy5fX2xhc3RGb2N1c2FibGVOb2RlO1xuICAgIHZhciBub2RlVG9TZXQgPVxuICAgICAgICBzaGlmdCA/IHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZSA6IHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGU7XG4gICAgdmFyIHNob3VsZFdyYXAgPSBmYWxzZTtcbiAgICBpZiAobm9kZVRvQ2hlY2sgPT09IG5vZGVUb1NldCkge1xuICAgICAgLy8gSWYgbm9kZVRvQ2hlY2sgaXMgdGhlIHNhbWUgYXMgbm9kZVRvU2V0LCBpdCBtZWFucyB3ZSBoYXZlIGFuIG92ZXJsYXlcbiAgICAgIC8vIHdpdGggMCBvciAxIGZvY3VzYWJsZXM7IGluIGVpdGhlciBjYXNlIHdlIHN0aWxsIG5lZWQgdG8gdHJhcCB0aGVcbiAgICAgIC8vIGZvY3VzIHdpdGhpbiB0aGUgb3ZlcmxheS5cbiAgICAgIHNob3VsZFdyYXAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbiBkb209c2hhZG93LCB0aGUgbWFuYWdlciB3aWxsIHJlY2VpdmUgZm9jdXMgY2hhbmdlcyBvbiB0aGUgbWFpblxuICAgICAgLy8gcm9vdCBidXQgbm90IHRoZSBvbmVzIHdpdGhpbiBvdGhlciBzaGFkb3cgcm9vdHMsIHNvIHdlIGNhbid0IHJlbHkgb25cbiAgICAgIC8vIF9mb2N1c2VkQ2hpbGQsIGJ1dCB3ZSBzaG91bGQgY2hlY2sgdGhlIGRlZXBlc3QgYWN0aXZlIGVsZW1lbnQuXG4gICAgICB2YXIgZm9jdXNlZE5vZGUgPSB0aGlzLl9tYW5hZ2VyLmRlZXBBY3RpdmVFbGVtZW50O1xuICAgICAgLy8gSWYgdGhlIGFjdGl2ZSBlbGVtZW50IGlzIG5vdCB0aGUgbm9kZVRvQ2hlY2sgYnV0IHRoZSBvdmVybGF5IGl0c2VsZixcbiAgICAgIC8vIGl0IG1lYW5zIHRoZSBmb2N1cyBpcyBhYm91dCB0byBnbyBvdXRzaWRlIHRoZSBvdmVybGF5LCBoZW5jZSB3ZVxuICAgICAgLy8gc2hvdWxkIHByZXZlbnQgdGhhdCAoZS5nLiB1c2VyIG9wZW5zIHRoZSBvdmVybGF5IGFuZCBoaXQgU2hpZnQrVEFCKS5cbiAgICAgIHNob3VsZFdyYXAgPSAoZm9jdXNlZE5vZGUgPT09IG5vZGVUb0NoZWNrIHx8IGZvY3VzZWROb2RlID09PSB0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkV3JhcCkge1xuICAgICAgLy8gV2hlbiB0aGUgb3ZlcmxheSBjb250YWlucyB0aGUgbGFzdCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgIC8vIGFuZCBpdCdzIGFscmVhZHkgZm9jdXNlZCwgcHJlc3NpbmcgVEFCIHdvdWxkIG1vdmUgdGhlIGZvY3VzIG91dHNpZGVcbiAgICAgIC8vIHRoZSBkb2N1bWVudCAoZS5nLiB0byB0aGUgYnJvd3NlciBzZWFyY2ggYmFyKS4gU2ltaWxhcmx5LCB3aGVuIHRoZVxuICAgICAgLy8gb3ZlcmxheSBjb250YWlucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50IGFuZCBpdCdzXG4gICAgICAvLyBhbHJlYWR5IGZvY3VzZWQsIHByZXNzaW5nIFNoaWZ0K1RBQiB3b3VsZCBtb3ZlIHRoZSBmb2N1cyBvdXRzaWRlIHRoZVxuICAgICAgLy8gZG9jdW1lbnQgKGUuZy4gdG8gdGhlIGJyb3dzZXIgc2VhcmNoIGJhcikuXG4gICAgICAvLyBJbiBib3RoIGNhc2VzLCB3ZSB3b3VsZCBub3QgcmVjZWl2ZSBhIGZvY3VzIGV2ZW50LCBidXQgb25seSBhIGJsdXIuXG4gICAgICAvLyBJbiBvcmRlciB0byBhY2hpZXZlIGZvY3VzIHdyYXBwaW5nLCB3ZSBwcmV2ZW50IHRoaXMgVEFCIGV2ZW50IGFuZFxuICAgICAgLy8gZm9yY2UgdGhlIGZvY3VzLiBUaGlzIHdpbGwgYWxzbyBwcmV2ZW50IHRoZSBmb2N1cyB0byB0ZW1wb3JhcmlseSBtb3ZlXG4gICAgICAvLyBvdXRzaWRlIHRoZSBvdmVybGF5LCB3aGljaCBtaWdodCBjYXVzZSBzY3JvbGxpbmcuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fZm9jdXNlZENoaWxkID0gbm9kZVRvU2V0O1xuICAgICAgdGhpcy5fYXBwbHlGb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVmaXRzIGlmIHRoZSBvdmVybGF5IGlzIG9wZW5lZCBhbmQgbm90IGFuaW1hdGluZy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uSXJvblJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmICF0aGlzLl9faXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX19kZXJhZigncmVmaXQnLCB0aGlzLnJlZml0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdpbGwgY2FsbCBub3RpZnlSZXNpemUgaWYgb3ZlcmxheSBpcyBvcGVuZWQuXG4gICAqIENhbiBiZSBvdmVycmlkZGVuIGluIG9yZGVyIHRvIGF2b2lkIG11bHRpcGxlIG9ic2VydmVycyBvbiB0aGUgc2FtZSBub2RlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25Ob2Rlc0NoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmICF0aGlzLl9faXNBbmltYXRpbmcpIHtcbiAgICAgIC8vIEl0IG1pZ2h0IGhhdmUgYWRkZWQgZm9jdXNhYmxlIG5vZGVzLCBzbyBpbnZhbGlkYXRlIGNhY2hlZCB2YWx1ZXMuXG4gICAgICB0aGlzLmludmFsaWRhdGVUYWJiYWJsZXMoKTtcbiAgICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSByZWZlcmVuY2VzIHRvIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX2Vuc3VyZUZpcnN0TGFzdEZvY3VzYWJsZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuX2ZvY3VzYWJsZU5vZGVzO1xuICAgIHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGUgPSBmb2N1c2FibGVOb2Rlc1swXTtcbiAgICB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgPSBmb2N1c2FibGVOb2Rlc1tmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxXTtcbiAgfSxcblxuICAvKipcbiAgICogVGFza3MgZXhlY3V0ZWQgd2hlbiBvcGVuZWQgY2hhbmdlczogcHJlcGFyZSBmb3IgdGhlIG9wZW5pbmcsIG1vdmUgdGhlXG4gICAqIGZvY3VzLCB1cGRhdGUgdGhlIG1hbmFnZXIsIHJlbmRlciBvcGVuZWQvY2xvc2VkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19vcGVuZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIC8vIE1ha2Ugb3ZlcmxheSB2aXNpYmxlLCB0aGVuIGFkZCBpdCB0byB0aGUgbWFuYWdlci5cbiAgICAgIHRoaXMuX3ByZXBhcmVSZW5kZXJPcGVuZWQoKTtcbiAgICAgIHRoaXMuX21hbmFnZXIuYWRkT3ZlcmxheSh0aGlzKTtcbiAgICAgIC8vIE1vdmUgdGhlIGZvY3VzIHRvIHRoZSBjaGlsZCBub2RlIHdpdGggW2F1dG9mb2N1c10uXG4gICAgICB0aGlzLl9hcHBseUZvY3VzKCk7XG5cbiAgICAgIHRoaXMuX3JlbmRlck9wZW5lZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1vdmUgb3ZlcmxheSwgdGhlbiByZXN0b3JlIHRoZSBmb2N1cyBiZWZvcmUgYWN0dWFsbHkgY2xvc2luZy5cbiAgICAgIHRoaXMuX21hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcbiAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcblxuICAgICAgdGhpcy5fcmVuZGVyQ2xvc2VkKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBEZWJvdW5jZXMgdGhlIGV4ZWN1dGlvbiBvZiBhIGNhbGxiYWNrIHRvIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZS5cbiAgICogQHBhcmFtIHshc3RyaW5nfSBqb2JuYW1lXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjYWxsYmFjayBBbHdheXMgYm91bmQgdG8gYHRoaXNgXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX2RlcmFmOiBmdW5jdGlvbihqb2JuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciByYWZzID0gdGhpcy5fX3JhZnM7XG4gICAgaWYgKHJhZnNbam9ibmFtZV0gIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZnNbam9ibmFtZV0pO1xuICAgIH1cbiAgICByYWZzW2pvYm5hbWVdID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIG5leHRBbmltYXRpb25GcmFtZSgpIHtcbiAgICAgIHJhZnNbam9ibmFtZV0gPSBudWxsO1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNoZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvcGVuZWRcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzY3JvbGxBY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fdXBkYXRlU2Nyb2xsT2JzZXJ2ZXJzOiBmdW5jdGlvbihpc0F0dGFjaGVkLCBvcGVuZWQsIHNjcm9sbEFjdGlvbikge1xuICAgIGlmICghaXNBdHRhY2hlZCB8fCAhb3BlbmVkIHx8ICF0aGlzLl9faXNWYWxpZFNjcm9sbEFjdGlvbihzY3JvbGxBY3Rpb24pKSB7XG4gICAgICByZW1vdmVTY3JvbGxMb2NrKHRoaXMpO1xuICAgICAgdGhpcy5fX3JlbW92ZVNjcm9sbExpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2Nyb2xsQWN0aW9uID09PSAnbG9jaycpIHtcbiAgICAgICAgdGhpcy5fX3NhdmVTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICBwdXNoU2Nyb2xsTG9jayh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19hZGRTY3JvbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX2FkZFNjcm9sbExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9fcm9vdE5vZGVzKSB7XG4gICAgICB0aGlzLl9fcm9vdE5vZGVzID0gW107XG4gICAgICAvLyBMaXN0ZW4gZm9yIHNjcm9sbCBldmVudHMgaW4gYWxsIHNoYWRvd1Jvb3RzIGhvc3RpbmcgdGhpcyBvdmVybGF5IG9ubHlcbiAgICAgIC8vIHdoZW4gaW4gbmF0aXZlIFNoYWRvd0RPTS5cbiAgICAgIGlmICh1c2VTaGFkb3cpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzO1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgJiYgbm9kZS5ob3N0KSB7XG4gICAgICAgICAgICB0aGlzLl9fcm9vdE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUgPSBub2RlLmhvc3QgfHwgbm9kZS5hc3NpZ25lZFNsb3QgfHwgbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9fcm9vdE5vZGVzLnB1c2goZG9jdW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLl9fcm9vdE5vZGVzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX19vbkNhcHR1cmVTY3JvbGwsIHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19yZW1vdmVTY3JvbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fcm9vdE5vZGVzKSB7XG4gICAgICB0aGlzLl9fcm9vdE5vZGVzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fX29uQ2FwdHVyZVNjcm9sbCwge1xuICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX19yb290Tm9kZXMgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzY3JvbGxBY3Rpb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9faXNWYWxpZFNjcm9sbEFjdGlvbjogZnVuY3Rpb24oc2Nyb2xsQWN0aW9uKSB7XG4gICAgcmV0dXJuIHNjcm9sbEFjdGlvbiA9PT0gJ2xvY2snIHx8IHNjcm9sbEFjdGlvbiA9PT0gJ3JlZml0JyB8fFxuICAgICAgICBzY3JvbGxBY3Rpb24gPT09ICdjYW5jZWwnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19vbkNhcHR1cmVTY3JvbGw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX19pc0FuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBzY3JvbGwgb3V0c2lkZSB0aGUgb3ZlcmxheS5cbiAgICBpZiAoZG9tKGV2ZW50KS5wYXRoLmluZGV4T2YodGhpcykgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2Nyb2xsQWN0aW9uKSB7XG4gICAgICBjYXNlICdsb2NrJzpcbiAgICAgICAgLy8gTk9URTogc2Nyb2xsaW5nIG1pZ2h0IGhhcHBlbiBpZiBhIHNjcm9sbCBldmVudCBpcyBub3QgY2FuY2VsbGFibGUsIG9yXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlZCBrZXlzIHRoYXQgY2F1c2Ugc2Nyb2xsaW5nICh0aGV5J3JlIG5vdCBwcmV2ZW50ZWQgaW5cbiAgICAgICAgLy8gb3JkZXIgbm90IHRvIGJyZWFrIGExMXkgZmVhdHVyZXMgbGlrZSBuYXZpZ2F0ZSB3aXRoIGFycm93IGtleXMpLlxuICAgICAgICB0aGlzLl9fcmVzdG9yZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVmaXQnOlxuICAgICAgICB0aGlzLl9fZGVyYWYoJ3JlZml0JywgdGhpcy5yZWZpdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgdGhpcy5jYW5jZWwoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1lbW9pemVzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIG91dHNpZGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3NhdmVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX19zY3JvbGxUb3AgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuX19zY3JvbGxMZWZ0ID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IGlmIGlzIHRoZSBib2R5IG9yIGh0bWwsIGdldCBtYXguXG4gICAgICB0aGlzLl9fc2Nyb2xsVG9wID1cbiAgICAgICAgICBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCk7XG4gICAgICB0aGlzLl9fc2Nyb2xsTGVmdCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIG91dHNpZGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3Jlc3RvcmVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5fX3Njcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdCA9IHRoaXMuX19zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IGlmIGlzIHRoZSBib2R5IG9yIGh0bWwsIHNldCBib3RoLlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID1cbiAgICAgICAgICB0aGlzLl9fc2Nyb2xsVG9wO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgPVxuICAgICAgICAgIHRoaXMuX19zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSxcblxufTtcblxuY29uc3QgY29tcG9zZWRQYXJlbnQgPSBub2RlID0+XG4gICAgbm9kZS5hc3NpZ25lZFNsb3QgfHwgbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUuaG9zdDtcblxuY29uc3QgY29tcG9zZWRDb250YWlucyA9IChhbmNlc3RvciwgZGVzY2VuZGFudCkgPT4ge1xuICBmb3IgKGxldCBlbGVtZW50ID0gZGVzY2VuZGFudDsgZWxlbWVudDsgZWxlbWVudCA9IGNvbXBvc2VkUGFyZW50KGVsZW1lbnQpKSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGFuY2VzdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gIFVzZSBgUG9seW1lci5Jcm9uT3ZlcmxheUJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYW4gZWxlbWVudCB0aGF0IGNhbiBiZSBoaWRkZW5cbiAgb3Igc2hvd24sIGFuZCBkaXNwbGF5cyBvbiB0b3Agb2Ygb3RoZXIgY29udGVudC4gSXQgaW5jbHVkZXMgYW4gb3B0aW9uYWxcbiAgYmFja2Ryb3AsIGFuZCBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgYSB2YXJpZXR5IG9mIFVJIGNvbnRyb2xzIGluY2x1ZGluZ1xuICBkaWFsb2dzIGFuZCBkcm9wIGRvd25zLiBNdWx0aXBsZSBvdmVybGF5cyBtYXkgYmUgZGlzcGxheWVkIGF0IG9uY2UuXG5cbiAgU2VlIHRoZSBbZGVtbyBzb3VyY2VcbiAgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9pcm9uLW92ZXJsYXktYmVoYXZpb3IvYmxvYi9tYXN0ZXIvZGVtby9zaW1wbGUtb3ZlcmxheS5odG1sKVxuICBmb3IgYW4gZXhhbXBsZS5cblxuICAjIyMgQ2xvc2luZyBhbmQgY2FuY2VsaW5nXG5cbiAgQW4gb3ZlcmxheSBtYXkgYmUgaGlkZGVuIGJ5IGNsb3Npbmcgb3IgY2FuY2VsaW5nLiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGNsb3NlXG4gIGFuZCBjYW5jZWwgaXMgdXNlciBpbnRlbnQuIENsb3NpbmcgZ2VuZXJhbGx5IGltcGxpZXMgdGhhdCB0aGUgdXNlclxuICBhY2tub3dsZWRnZWQgdGhlIGNvbnRlbnQgb24gdGhlIG92ZXJsYXkuIEJ5IGRlZmF1bHQsIGl0IHdpbGwgY2FuY2VsIHdoZW5ldmVyXG4gIHRoZSB1c2VyIHRhcHMgb3V0c2lkZSBpdCBvciBwcmVzc2VzIHRoZSBlc2NhcGUga2V5LiBUaGlzIGJlaGF2aW9yIGlzXG4gIGNvbmZpZ3VyYWJsZSB3aXRoIHRoZSBgbm8tY2FuY2VsLW9uLWVzYy1rZXlgIGFuZCB0aGVcbiAgYG5vLWNhbmNlbC1vbi1vdXRzaWRlLWNsaWNrYCBwcm9wZXJ0aWVzLiBgY2xvc2UoKWAgc2hvdWxkIGJlIGNhbGxlZCBleHBsaWNpdGx5XG4gIGJ5IHRoZSBpbXBsZW1lbnRlciB3aGVuIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIGEgY29udHJvbCBpbiB0aGUgb3ZlcmxheVxuICBlbGVtZW50LiBXaGVuIHRoZSBkaWFsb2cgaXMgY2FuY2VsZWQsIHRoZSBvdmVybGF5IGZpcmVzIGFuXG4gICdpcm9uLW92ZXJsYXktY2FuY2VsZWQnIGV2ZW50LiBDYWxsIGBwcmV2ZW50RGVmYXVsdGAgb24gdGhpcyBldmVudCB0byBwcmV2ZW50XG4gIHRoZSBvdmVybGF5IGZyb20gY2xvc2luZy5cblxuICAjIyMgUG9zaXRpb25pbmdcblxuICBCeSBkZWZhdWx0IHRoZSBlbGVtZW50IGlzIHNpemVkIGFuZCBwb3NpdGlvbmVkIHRvIGZpdCBhbmQgY2VudGVyZWQgaW5zaWRlIHRoZVxuICB3aW5kb3cuIFlvdSBjYW4gcG9zaXRpb24gYW5kIHNpemUgaXQgbWFudWFsbHkgdXNpbmcgQ1NTLiBTZWVcbiAgYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cblxuICAjIyMgQmFja2Ryb3BcblxuICBTZXQgdGhlIGB3aXRoLWJhY2tkcm9wYCBhdHRyaWJ1dGUgdG8gZGlzcGxheSBhIGJhY2tkcm9wIGJlaGluZCB0aGUgb3ZlcmxheS5cbiAgVGhlIGJhY2tkcm9wIGlzIGFwcGVuZGVkIHRvIGA8Ym9keT5gIGFuZCBpcyBvZiB0eXBlIGA8aXJvbi1vdmVybGF5LWJhY2tkcm9wPmAuXG4gIFNlZSBpdHMgZG9jIHBhZ2UgZm9yIHN0eWxpbmcgb3B0aW9ucy5cblxuICBJbiBhZGRpdGlvbiwgYHdpdGgtYmFja2Ryb3BgIHdpbGwgd3JhcCB0aGUgZm9jdXMgd2l0aGluIHRoZSBjb250ZW50IGluIHRoZVxuICBsaWdodCBET00uIE92ZXJyaWRlIHRoZSBbYF9mb2N1c2FibGVOb2Rlc2BcbiAgZ2V0dGVyXSgjUG9seW1lci5Jcm9uT3ZlcmxheUJlaGF2aW9yOnByb3BlcnR5LV9mb2N1c2FibGVOb2RlcykgdG8gYWNoaWV2ZSBhXG4gIGRpZmZlcmVudCBiZWhhdmlvci5cblxuICAjIyMgTGltaXRhdGlvbnNcblxuICBUaGUgZWxlbWVudCBpcyBzdHlsZWQgdG8gYXBwZWFyIG9uIHRvcCBvZiBvdGhlciBjb250ZW50IGJ5IHNldHRpbmcgaXRzXG4gIGB6LWluZGV4YCBwcm9wZXJ0eS4gWW91IG11c3QgZW5zdXJlIG5vIGVsZW1lbnQgaGFzIGEgc3RhY2tpbmcgY29udGV4dCB3aXRoIGFcbiAgaGlnaGVyIGB6LWluZGV4YCB0aGFuIGl0cyBwYXJlbnQgc3RhY2tpbmcgY29udGV4dC4gWW91IHNob3VsZCBwbGFjZSB0aGlzXG4gIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiBgPGJvZHk+YCB3aGVuZXZlciBwb3NzaWJsZS5cblxuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk92ZXJsYXlCZWhhdmlvciA9XG4gICAgW0lyb25GaXRCZWhhdmlvciwgSXJvblJlc2l6YWJsZUJlaGF2aW9yLCBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbF07XG5cbi8qKlxuICogRmlyZWQgYWZ0ZXIgdGhlIG92ZXJsYXkgb3BlbnMuXG4gKiBAZXZlbnQgaXJvbi1vdmVybGF5LW9wZW5lZFxuICovXG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBjYW5jZWxlZCwgYnV0IGJlZm9yZSBpdCBpcyBjbG9zZWQuXG4gKiBAZXZlbnQgaXJvbi1vdmVybGF5LWNhbmNlbGVkXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgY2xvc2luZyBvZiB0aGUgb3ZlcmxheSBjYW4gYmUgcHJldmVudGVkXG4gKiBieSBjYWxsaW5nIGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYC4gVGhlIGBldmVudC5kZXRhaWxgIGlzIHRoZSBvcmlnaW5hbCBldmVudFxuICogdGhhdCBvcmlnaW5hdGVkIHRoZSBjYW5jZWxpbmcgKGUuZy4gRVNDIGtleWJvYXJkIGV2ZW50IG9yIGNsaWNrIGV2ZW50IG91dHNpZGVcbiAqIHRoZSBvdmVybGF5KS5cbiAqL1xuXG4vKipcbiAqIEZpcmVkIGFmdGVyIHRoZSBvdmVybGF5IGNsb3Nlcy5cbiAqIEBldmVudCBpcm9uLW92ZXJsYXktY2xvc2VkXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgYGV2ZW50LmRldGFpbGAgaXMgdGhlIGBjbG9zaW5nUmVhc29uYCBwcm9wZXJ0eVxuICogKGNvbnRhaW5zIGBjYW5jZWxlZGAsIHdoZXRoZXIgdGhlIG92ZXJsYXkgd2FzIGNhbmNlbGVkKS5cbiAqL1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICcuL2lyb24tb3ZlcmxheS1iYWNrZHJvcC5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuXG4vKipcbiAqIEBwYWNrYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBJcm9uT3ZlcmxheU1hbmFnZXJDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb3BlbmVkIG92ZXJsYXlzLlxuICAgICAqIEBwcml2YXRlIHshQXJyYXk8IUVsZW1lbnQ+fVxuICAgICAqL1xuICAgIHRoaXMuX292ZXJsYXlzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBpZnJhbWVzIGhhdmUgYSBkZWZhdWx0IHotaW5kZXggb2YgMTAwLFxuICAgICAqIHNvIHRoaXMgZGVmYXVsdCBzaG91bGQgYmUgYXQgbGVhc3QgdGhhdC5cbiAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21pbmltdW1aID0gMTAxO1xuXG4gICAgLyoqXG4gICAgICogTWVtb2l6ZWQgYmFja2Ryb3AgZWxlbWVudC5cbiAgICAgKiBAcHJpdmF0ZSB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuX2JhY2tkcm9wRWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBFbmFibGUgZG9jdW1lbnQtd2lkZSB0YXAgcmVjb2duaXplci5cbiAgICAvLyBOT1RFOiBVc2UgdXNlQ2FwdHVyZT10cnVlIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwcmV2ZW50aW9uIG9mIHRoZSBjbG9zaW5nXG4gICAgLy8gb2YgYW4gb3ZlcmxheSB2aWEgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkuIFRoZSBvbmx5IHdheSB0byBwcmV2ZW50XG4gICAgLy8gY2xvc2luZyBvZiBhbiBvdmVybGF5IHNob3VsZCBiZSB0aHJvdWdoIGl0cyBBUElzLlxuICAgIC8vIE5PVEU6IGVuYWJsZSB0YXAgb24gPGh0bWw+IHRvIHdvcmthcm91bmQgUG9seW1lci9wb2x5bWVyIzQ0NTlcbiAgICAvLyBQYXNzIG5vLW9wIGZ1bmN0aW9uIGJlY2F1c2UgTVNFZGdlIDE1IGRvZXNuJ3QgaGFuZGxlIG51bGwgYXMgMm5kIGFyZ3VtZW50XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9DaGFrcmFDb3JlL2lzc3Vlcy8zODYzXG4gICAgZ2VzdHVyZXMuYWRkTGlzdGVuZXIoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAndGFwJywgZnVuY3Rpb24oKSB7fSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFwJywgdGhpcy5fb25DYXB0dXJlQ2xpY2suYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkNhcHR1cmVGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAna2V5ZG93bicsIHRoaXMuX29uQ2FwdHVyZUtleURvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNoYXJlZCBiYWNrZHJvcCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshRWxlbWVudH0gYmFja2Ryb3BFbGVtZW50XG4gICAqL1xuICBnZXQgYmFja2Ryb3BFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLW92ZXJsYXktYmFja2Ryb3AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tkcm9wRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVlcGVzdCBhY3RpdmUgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUVsZW1lbnR9IGFjdGl2ZUVsZW1lbnQgdGhlIGFjdGl2ZSBlbGVtZW50XG4gICAqL1xuICBnZXQgZGVlcEFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgdmFyIGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgLy8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gYmUgbnVsbFxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9hY3RpdmVFbGVtZW50XG4gICAgLy8gSW4gSUUgMTEsIGl0IGNhbiBhbHNvIGJlIGFuIG9iamVjdCB3aGVuIG9wZXJhdGluZyBpbiBpZnJhbWVzLlxuICAgIC8vIEluIHRoZXNlIGNhc2VzLCBkZWZhdWx0IGl0IHRvIGRvY3VtZW50LmJvZHkuXG4gICAgaWYgKCFhY3RpdmUgfHwgYWN0aXZlIGluc3RhbmNlb2YgRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuICAgIHdoaWxlIChhY3RpdmUucm9vdCAmJiBkb20oYWN0aXZlLnJvb3QpLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGFjdGl2ZSA9IGRvbShhY3RpdmUucm9vdCkuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcmluZ3MgdGhlIG92ZXJsYXkgYXQgdGhlIHNwZWNpZmllZCBpbmRleCB0byB0aGUgZnJvbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnJpbmdPdmVybGF5QXRJbmRleFRvRnJvbnQoaSkge1xuICAgIHZhciBvdmVybGF5ID0gdGhpcy5fb3ZlcmxheXNbaV07XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsYXN0SSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGN1cnJlbnRPdmVybGF5ID0gdGhpcy5fb3ZlcmxheXNbbGFzdEldO1xuICAgIC8vIEVuc3VyZSBhbHdheXMtb24tdG9wIG92ZXJsYXkgc3RheXMgb24gdG9wLlxuICAgIGlmIChjdXJyZW50T3ZlcmxheSAmJlxuICAgICAgICB0aGlzLl9zaG91bGRCZUJlaGluZE92ZXJsYXkob3ZlcmxheSwgY3VycmVudE92ZXJsYXkpKSB7XG4gICAgICBsYXN0SS0tO1xuICAgIH1cbiAgICAvLyBJZiBhbHJlYWR5IHRoZSB0b3AgZWxlbWVudCwgcmV0dXJuLlxuICAgIGlmIChpID49IGxhc3RJKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB6LWluZGV4IHRvIGJlIG9uIHRvcC5cbiAgICB2YXIgbWluaW11bVogPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRPdmVybGF5WigpLCB0aGlzLl9taW5pbXVtWik7XG4gICAgaWYgKHRoaXMuX2dldFoob3ZlcmxheSkgPD0gbWluaW11bVopIHtcbiAgICAgIHRoaXMuX2FwcGx5T3ZlcmxheVoob3ZlcmxheSwgbWluaW11bVopO1xuICAgIH1cblxuICAgIC8vIFNoaWZ0IG90aGVyIG92ZXJsYXlzIGJlaGluZCB0aGUgbmV3IG9uIHRvcC5cbiAgICB3aGlsZSAoaSA8IGxhc3RJKSB7XG4gICAgICB0aGlzLl9vdmVybGF5c1tpXSA9IHRoaXMuX292ZXJsYXlzW2kgKyAxXTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheXNbbGFzdEldID0gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBvdmVybGF5IGFuZCB1cGRhdGVzIGl0cyB6LWluZGV4IGlmIGl0J3Mgb3BlbmVkLCBvciByZW1vdmVzIGl0IGlmXG4gICAqIGl0J3MgY2xvc2VkLiBBbHNvIHVwZGF0ZXMgdGhlIGJhY2tkcm9wIHotaW5kZXguXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IG92ZXJsYXlcbiAgICovXG4gIGFkZE9yUmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gICAgaWYgKG92ZXJsYXkub3BlbmVkKSB7XG4gICAgICB0aGlzLmFkZE92ZXJsYXkob3ZlcmxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlT3ZlcmxheShvdmVybGF5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIG92ZXJsYXlzIGZvciB6LWluZGV4IGFuZCBmb2N1cyBtYW5hZ2VtZW50LlxuICAgKiBFbnN1cmVzIHRoZSBsYXN0IGFkZGVkIG92ZXJsYXkgd2l0aCBhbHdheXMtb24tdG9wIHJlbWFpbnMgb24gdG9wLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqL1xuICBhZGRPdmVybGF5KG92ZXJsYXkpIHtcbiAgICB2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fYnJpbmdPdmVybGF5QXRJbmRleFRvRnJvbnQoaSk7XG4gICAgICB0aGlzLnRyYWNrQmFja2Ryb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGluc2VydGlvbkluZGV4ID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50T3ZlcmxheSA9IHRoaXMuX292ZXJsYXlzW2luc2VydGlvbkluZGV4IC0gMV07XG4gICAgdmFyIG1pbmltdW1aID0gTWF0aC5tYXgodGhpcy5fZ2V0WihjdXJyZW50T3ZlcmxheSksIHRoaXMuX21pbmltdW1aKTtcbiAgICB2YXIgbmV3WiA9IHRoaXMuX2dldFoob3ZlcmxheSk7XG5cbiAgICAvLyBFbnN1cmUgYWx3YXlzLW9uLXRvcCBvdmVybGF5IHN0YXlzIG9uIHRvcC5cbiAgICBpZiAoY3VycmVudE92ZXJsYXkgJiZcbiAgICAgICAgdGhpcy5fc2hvdWxkQmVCZWhpbmRPdmVybGF5KG92ZXJsYXksIGN1cnJlbnRPdmVybGF5KSkge1xuICAgICAgLy8gVGhpcyBidW1wcyB0aGUgei1pbmRleCBvZiArMi5cbiAgICAgIHRoaXMuX2FwcGx5T3ZlcmxheVooY3VycmVudE92ZXJsYXksIG1pbmltdW1aKTtcbiAgICAgIGluc2VydGlvbkluZGV4LS07XG4gICAgICAvLyBVcGRhdGUgbWluaW11bVogdG8gbWF0Y2ggcHJldmlvdXMgb3ZlcmxheSdzIHotaW5kZXguXG4gICAgICB2YXIgcHJldmlvdXNPdmVybGF5ID0gdGhpcy5fb3ZlcmxheXNbaW5zZXJ0aW9uSW5kZXggLSAxXTtcbiAgICAgIG1pbmltdW1aID0gTWF0aC5tYXgodGhpcy5fZ2V0WihwcmV2aW91c092ZXJsYXkpLCB0aGlzLl9taW5pbXVtWik7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHotaW5kZXggYW5kIGluc2VydCBvdmVybGF5LlxuICAgIGlmIChuZXdaIDw9IG1pbmltdW1aKSB7XG4gICAgICB0aGlzLl9hcHBseU92ZXJsYXlaKG92ZXJsYXksIG1pbmltdW1aKTtcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheXMuc3BsaWNlKGluc2VydGlvbkluZGV4LCAwLCBvdmVybGF5KTtcblxuICAgIHRoaXMudHJhY2tCYWNrZHJvcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IG92ZXJsYXlcbiAgICovXG4gIHJlbW92ZU92ZXJsYXkob3ZlcmxheSkge1xuICAgIHZhciBpID0gdGhpcy5fb3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheXMuc3BsaWNlKGksIDEpO1xuXG4gICAgdGhpcy50cmFja0JhY2tkcm9wKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBvdmVybGF5LlxuICAgKiBAcmV0dXJuIHshRWxlbWVudHx1bmRlZmluZWR9XG4gICAqL1xuICBjdXJyZW50T3ZlcmxheSgpIHtcbiAgICB2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlzW2ldO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgb3ZlcmxheSB6LWluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBjdXJyZW50T3ZlcmxheVooKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFoodGhpcy5jdXJyZW50T3ZlcmxheSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoYXQgdGhlIG1pbmltdW0gei1pbmRleCBvZiBuZXcgb3ZlcmxheXMgaXMgYXQgbGVhc3QgYG1pbmltdW1aYC5cbiAgICogVGhpcyBkb2VzIG5vdCBlZmZlY3QgdGhlIHotaW5kZXggb2YgYW55IGV4aXN0aW5nIG92ZXJsYXlzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWluaW11bVpcbiAgICovXG4gIGVuc3VyZU1pbmltdW1aKG1pbmltdW1aKSB7XG4gICAgdGhpcy5fbWluaW11bVogPSBNYXRoLm1heCh0aGlzLl9taW5pbXVtWiwgbWluaW11bVopO1xuICB9XG5cbiAgZm9jdXNPdmVybGF5KCkge1xuICAgIHZhciBjdXJyZW50ID0gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5jdXJyZW50T3ZlcmxheSgpKTtcbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgY3VycmVudC5fYXBwbHlGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBiYWNrZHJvcCB6LWluZGV4LlxuICAgKi9cbiAgdHJhY2tCYWNrZHJvcCgpIHtcbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMuX292ZXJsYXlXaXRoQmFja2Ryb3AoKTtcbiAgICAvLyBBdm9pZCBjcmVhdGluZyB0aGUgYmFja2Ryb3AgaWYgdGhlcmUgaXMgbm8gb3ZlcmxheSB3aXRoIGJhY2tkcm9wLlxuICAgIGlmICghb3ZlcmxheSAmJiAhdGhpcy5fYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuX2dldFoob3ZlcmxheSkgLSAxO1xuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50Lm9wZW5lZCA9ICEhb3ZlcmxheTtcbiAgICAvLyBQcm9wZXJ0eSBvYnNlcnZlcnMgYXJlIG5vdCBmaXJlZCB1bnRpbCBlbGVtZW50IGlzIGF0dGFjaGVkXG4gICAgLy8gaW4gUG9seW1lciAyLngsIHNvIHdlIGVuc3VyZSBlbGVtZW50IGlzIGF0dGFjaGVkIGlmIG5lZWRlZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy80NTI2XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQucHJlcGFyZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBcnJheTwhRWxlbWVudD59XG4gICAqL1xuICBnZXRCYWNrZHJvcHMoKSB7XG4gICAgdmFyIGJhY2tkcm9wcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fb3ZlcmxheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5c1tpXS53aXRoQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3BzLnB1c2godGhpcy5fb3ZlcmxheXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmFja2Ryb3BzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHotaW5kZXggZm9yIHRoZSBiYWNrZHJvcC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYmFja2Ryb3BaKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRaKHRoaXMuX292ZXJsYXlXaXRoQmFja2Ryb3AoKSkgLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRvcCBvcGVuZWQgb3ZlcmxheSB0aGF0IGhhcyBhIGJhY2tkcm9wLlxuICAgKiBAcmV0dXJuIHshRWxlbWVudHx1bmRlZmluZWR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3ZlcmxheVdpdGhCYWNrZHJvcCgpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5c1tpXS53aXRoQmFja2Ryb3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXlzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBtaW5pbXVtIHotaW5kZXggZm9yIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0ge0VsZW1lbnQ9fSBvdmVybGF5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0WihvdmVybGF5KSB7XG4gICAgdmFyIHogPSB0aGlzLl9taW5pbXVtWjtcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgdmFyIHoxID0gTnVtYmVyKFxuICAgICAgICAgIG92ZXJsYXkuc3R5bGUuekluZGV4IHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG92ZXJsYXkpLnpJbmRleCk7XG4gICAgICAvLyBDaGVjayBpZiBpcyBhIG51bWJlclxuICAgICAgLy8gTnVtYmVyLmlzTmFOIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTArXG4gICAgICBpZiAoejEgPT09IHoxKSB7XG4gICAgICAgIHogPSB6MTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHo7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRaKGVsZW1lbnQsIHopIHtcbiAgICBlbGVtZW50LnN0eWxlLnpJbmRleCA9IHo7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheVxuICAgKiBAcGFyYW0ge251bWJlcn0gYWJvdmVaXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlPdmVybGF5WihvdmVybGF5LCBhYm92ZVopIHtcbiAgICB0aGlzLl9zZXRaKG92ZXJsYXksIGFib3ZlWiArIDIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlZXBlc3Qgb3ZlcmxheSBpbiB0aGUgcGF0aC5cbiAgICogQHBhcmFtIHshQXJyYXk8IUVsZW1lbnQ+PX0gcGF0aFxuICAgKiBAcmV0dXJuIHshRWxlbWVudHx1bmRlZmluZWR9XG4gICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3ZlcmxheUluUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGggfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGF0aFtpXS5fbWFuYWdlciA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcGF0aFtpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGUgY2xpY2sgZXZlbnQgaXMgZGVsZWdhdGVkIHRvIHRoZSByaWdodCBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNhcHR1cmVDbGljayhldmVudCkge1xuICAgIHZhciBpID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoIC0gMTtcbiAgICBpZiAoaSA9PT0gLTEpXG4gICAgICByZXR1cm47XG4gICAgdmFyIHBhdGggPSAvKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqLyAoZG9tKGV2ZW50KS5wYXRoKTtcbiAgICB2YXIgb3ZlcmxheTtcbiAgICAvLyBDaGVjayBpZiBjbGlja2VkIG91dHNpZGUgb2Ygb3ZlcmxheS5cbiAgICB3aGlsZSAoKG92ZXJsYXkgPSAvKiogQHR5cGUgez99ICovICh0aGlzLl9vdmVybGF5c1tpXSkpICYmXG4gICAgICAgICAgIHRoaXMuX292ZXJsYXlJblBhdGgocGF0aCkgIT09IG92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkuX29uQ2FwdHVyZUNsaWNrKGV2ZW50KTtcbiAgICAgIGlmIChvdmVybGF5LmFsbG93Q2xpY2tUaHJvdWdoKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoZSBmb2N1cyBldmVudCBpcyBkZWxlZ2F0ZWQgdG8gdGhlIHJpZ2h0IG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ2FwdHVyZUZvY3VzKGV2ZW50KSB7XG4gICAgdmFyIG92ZXJsYXkgPSAvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPdmVybGF5KCkpO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBvdmVybGF5Ll9vbkNhcHR1cmVGb2N1cyhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgVEFCIGFuZCBFU0Mga2V5Ym9hcmQgZXZlbnRzIGFyZSBkZWxlZ2F0ZWQgdG8gdGhlIHJpZ2h0IG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ2FwdHVyZUtleURvd24oZXZlbnQpIHtcbiAgICB2YXIgb3ZlcmxheSA9IC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuY3VycmVudE92ZXJsYXkoKSk7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZXZlbnQsICdlc2MnKSkge1xuICAgICAgICBvdmVybGF5Ll9vbkNhcHR1cmVFc2MoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZXZlbnQsICd0YWInKSkge1xuICAgICAgICBvdmVybGF5Ll9vbkNhcHR1cmVUYWIoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBvdmVybGF5MSBzaG91bGQgYmUgYmVoaW5kIG92ZXJsYXkyLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5MVxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5MlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3VsZEJlQmVoaW5kT3ZlcmxheShvdmVybGF5MSwgb3ZlcmxheTIpIHtcbiAgICByZXR1cm4gIW92ZXJsYXkxLmFsd2F5c09uVG9wICYmIG92ZXJsYXkyLmFsd2F5c09uVG9wO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgSXJvbk92ZXJsYXlNYW5hZ2VyID0gbmV3IElyb25PdmVybGF5TWFuYWdlckNsYXNzKCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuLyoqXG4gKiBVc2VkIHRvIGNhbGN1bGF0ZSB0aGUgc2Nyb2xsIGRpcmVjdGlvbiBkdXJpbmcgdG91Y2ggZXZlbnRzLlxuICogQHR5cGUgeyFPYmplY3R9XG4gKi9cbnZhciBsYXN0VG91Y2hQb3NpdGlvbiA9IHtwYWdlWDogMCwgcGFnZVk6IDB9O1xuLyoqXG4gKiBVc2VkIHRvIGF2b2lkIGNvbXB1dGluZyBldmVudC5wYXRoIGFuZCBmaWx0ZXIgc2Nyb2xsYWJsZSBub2RlcyAoYmV0dGVyIHBlcmYpLlxuICogQHR5cGUgez9FdmVudFRhcmdldH1cbiAqL1xudmFyIGxhc3RSb290VGFyZ2V0ID0gbnVsbDtcbi8qKlxuICogQHR5cGUgeyFBcnJheTwhTm9kZT59XG4gKi9cbnZhciBsYXN0U2Nyb2xsYWJsZU5vZGVzID0gW107XG4vKipcbiAqIEB0eXBlIHshQXJyYXk8c3RyaW5nPn1cbiAqL1xudmFyIHNjcm9sbEV2ZW50cyA9IFtcbiAgLy8gTW9kZXJuIGB3aGVlbGAgZXZlbnQgZm9yIG1vdXNlIHdoZWVsIHNjcm9sbGluZzpcbiAgJ3doZWVsJyxcbiAgLy8gT2xkZXIsIG5vbi1zdGFuZGFyZCBgbW91c2V3aGVlbGAgZXZlbnQgZm9yIHNvbWUgRkY6XG4gICdtb3VzZXdoZWVsJyxcbiAgLy8gSUU6XG4gICdET01Nb3VzZVNjcm9sbCcsXG4gIC8vIFRvdWNoIGVuYWJsZWQgZGV2aWNlc1xuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnXG5dO1xuLy8gbXVzdCBiZSBkZWZpbmVkIGZvciBtb2R1bGl6ZXJcbnZhciBfYm91bmRTY3JvbGxIYW5kbGVyO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IGVsZW1lbnQgdGhhdCBkZWZpbmVzIHRoZSBET00gYm91bmRhcmllcyBvZiB0aGVcbiAqIHNjcm9sbCBsb2NrLiBUaGlzIGlzIGFsd2F5cyB0aGUgbW9zdCByZWNlbnRseSBsb2NraW5nIGVsZW1lbnQuXG4gKlxuICogQHR5cGUgeyFOb2RlfHVuZGVmaW5lZH1cbiAqL1xudmFyIGN1cnJlbnRMb2NraW5nRWxlbWVudDtcblxuZXhwb3J0IHtjdXJyZW50TG9ja2luZ0VsZW1lbnR9O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgZWxlbWVudCBpcyBcInNjcm9sbCBsb2NrZWRcIiwgd2hpY2ggaXMgdG9cbiAqIHNheSB0aGF0IGl0IGNhbm5vdCBiZSBzY3JvbGxlZCB2aWEgcG9pbnRlciBvciBrZXlib2FyZCBpbnRlcmFjdGlvbnMuXG4gKlxuICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnQgQW4gSFRNTCBlbGVtZW50IGluc3RhbmNlIHdoaWNoIG1heSBvciBtYXlcbiAqIG5vdCBiZSBzY3JvbGwgbG9ja2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudElzU2Nyb2xsTG9ja2VkKGVsZW1lbnQpIHtcbiAgdmFyIGxvY2tpbmdFbGVtZW50ID0gY3VycmVudExvY2tpbmdFbGVtZW50O1xuXG4gIGlmIChsb2NraW5nRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNjcm9sbExvY2tlZDtcblxuICBpZiAoX2hhc0NhY2hlZExvY2tlZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChfaGFzQ2FjaGVkVW5sb2NrZWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2Nyb2xsTG9ja2VkID0gISFsb2NraW5nRWxlbWVudCAmJiBsb2NraW5nRWxlbWVudCAhPT0gZWxlbWVudCAmJlxuICAgICAgIV9jb21wb3NlZFRyZWVDb250YWlucyhsb2NraW5nRWxlbWVudCwgZWxlbWVudCk7XG5cbiAgaWYgKHNjcm9sbExvY2tlZCkge1xuICAgIF9sb2NrZWRFbGVtZW50Q2FjaGUucHVzaChlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBfdW5sb2NrZWRFbGVtZW50Q2FjaGUucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBzY3JvbGxMb2NrZWQ7XG59XG5cbi8qKlxuICogUHVzaCBhbiBlbGVtZW50IG9udG8gdGhlIGN1cnJlbnQgc2Nyb2xsIGxvY2sgc3RhY2suIFRoZSBtb3N0IHJlY2VudGx5XG4gKiBwdXNoZWQgZWxlbWVudCBhbmQgaXRzIGNoaWxkcmVuIHdpbGwgYmUgY29uc2lkZXJlZCBzY3JvbGxhYmxlLiBBbGxcbiAqIG90aGVyIGVsZW1lbnRzIHdpbGwgbm90IGJlIHNjcm9sbGFibGUuXG4gKlxuICogU2Nyb2xsIGxvY2tpbmcgaXMgaW1wbGVtZW50ZWQgYXMgYSBzdGFjayBzbyB0aGF0IGNhc2VzIHN1Y2ggYXNcbiAqIGRyb3Bkb3ducyB3aXRoaW4gZHJvcGRvd25zIGFyZSBoYW5kbGVkIHdlbGwuXG4gKlxuICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgbG9jayBzY3JvbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoU2Nyb2xsTG9jayhlbGVtZW50KSB7XG4gIC8vIFByZXZlbnQgcHVzaGluZyB0aGUgc2FtZSBlbGVtZW50IHR3aWNlXG4gIGlmIChfbG9ja2luZ0VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPj0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChfbG9ja2luZ0VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIF9sb2NrU2Nyb2xsSW50ZXJhY3Rpb25zKCk7XG4gIH1cblxuICBfbG9ja2luZ0VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIGN1cnJlbnRMb2NraW5nRWxlbWVudCA9IF9sb2NraW5nRWxlbWVudHNbX2xvY2tpbmdFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICBfbG9ja2VkRWxlbWVudENhY2hlID0gW107XG4gIF91bmxvY2tlZEVsZW1lbnRDYWNoZSA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHNjcm9sbCBsb2NrIHN0YWNrLiBUaGUgZWxlbWVudCBiZWluZ1xuICogcmVtb3ZlZCBkb2VzIG5vdCBuZWVkIHRvIGJlIHRoZSBtb3N0IHJlY2VudGx5IHB1c2hlZCBlbGVtZW50LiBIb3dldmVyLFxuICogdGhlIHNjcm9sbCBsb2NrIGNvbnN0cmFpbnRzIG9ubHkgY2hhbmdlIHdoZW4gdGhlIG1vc3QgcmVjZW50bHkgcHVzaGVkXG4gKiBlbGVtZW50IGlzIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gcmVtb3ZlIGZyb20gdGhlIHNjcm9sbFxuICogbG9jayBzdGFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudCkge1xuICB2YXIgaW5kZXggPSBfbG9ja2luZ0VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9sb2NraW5nRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgY3VycmVudExvY2tpbmdFbGVtZW50ID0gX2xvY2tpbmdFbGVtZW50c1tfbG9ja2luZ0VsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gIF9sb2NrZWRFbGVtZW50Q2FjaGUgPSBbXTtcbiAgX3VubG9ja2VkRWxlbWVudENhY2hlID0gW107XG5cbiAgaWYgKF9sb2NraW5nRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgX3VubG9ja1Njcm9sbEludGVyYWN0aW9ucygpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBfbG9ja2luZ0VsZW1lbnRzID0gW107XG5leHBvcnQgbGV0IF9sb2NrZWRFbGVtZW50Q2FjaGUgPSBudWxsO1xuZXhwb3J0IGxldCBfdW5sb2NrZWRFbGVtZW50Q2FjaGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gX2hhc0NhY2hlZExvY2tlZEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gX2xvY2tlZEVsZW1lbnRDYWNoZS5pbmRleE9mKGVsZW1lbnQpID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaGFzQ2FjaGVkVW5sb2NrZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIF91bmxvY2tlZEVsZW1lbnRDYWNoZS5pbmRleE9mKGVsZW1lbnQpID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29tcG9zZWRUcmVlQ29udGFpbnMoZWxlbWVudCwgY2hpbGQpIHtcbiAgLy8gTk9URShjZGF0YSk6IFRoaXMgbWV0aG9kIGl0ZXJhdGVzIG92ZXIgY29udGVudCBlbGVtZW50cyBhbmQgdGhlaXJcbiAgLy8gY29ycmVzcG9uZGluZyBkaXN0cmlidXRlZCBub2RlcyB0byBpbXBsZW1lbnQgYSBjb250YWlucy1saWtlIG1ldGhvZFxuICAvLyB0aGF0IHBpZXJjZXMgdGhyb3VnaCB0aGUgY29tcG9zZWQgdHJlZSBvZiB0aGUgU2hhZG93RE9NLiBSZXN1bHRzIG9mXG4gIC8vIHRoaXMgb3BlcmF0aW9uIGFyZSBjYWNoZWQgKGVsc2V3aGVyZSkgb24gYSBwZXItc2Nyb2xsLWxvY2sgYmFzaXMsIHRvXG4gIC8vIGd1YXJkIGFnYWluc3QgcG90ZW50aWFsbHkgZXhwZW5zaXZlIGxvb2t1cHMgaGFwcGVuaW5nIHJlcGVhdGVkbHkgYXNcbiAgLy8gYSB1c2VyIHNjcm9sbHMgLyB0b3VjaG1vdmVzLlxuICB2YXIgY29udGVudEVsZW1lbnRzO1xuICB2YXIgZGlzdHJpYnV0ZWROb2RlcztcbiAgdmFyIGNvbnRlbnRJbmRleDtcbiAgdmFyIG5vZGVJbmRleDtcblxuICBpZiAoZWxlbWVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnRlbnRFbGVtZW50cyA9IGRvbShlbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCdjb250ZW50LHNsb3QnKTtcblxuICBmb3IgKGNvbnRlbnRJbmRleCA9IDA7IGNvbnRlbnRJbmRleCA8IGNvbnRlbnRFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgKytjb250ZW50SW5kZXgpIHtcbiAgICBkaXN0cmlidXRlZE5vZGVzID0gZG9tKGNvbnRlbnRFbGVtZW50c1tjb250ZW50SW5kZXhdKS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG5cbiAgICBmb3IgKG5vZGVJbmRleCA9IDA7IG5vZGVJbmRleCA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyArK25vZGVJbmRleCkge1xuICAgICAgLy8gUG9seW1lciAyLnggcmV0dXJucyBzbG90LmFzc2lnbmVkTm9kZXMgd2hpY2ggY2FuIGNvbnRhaW4gdGV4dCBub2Rlcy5cbiAgICAgIGlmIChkaXN0cmlidXRlZE5vZGVzW25vZGVJbmRleF0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKF9jb21wb3NlZFRyZWVDb250YWlucyhkaXN0cmlidXRlZE5vZGVzW25vZGVJbmRleF0sIGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfc2Nyb2xsSW50ZXJhY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gIC8vIEF2b2lkIGNhbmNlbGluZyBhbiBldmVudCB3aXRoIGNhbmNlbGFibGU9ZmFsc2UsIGUuZy4gc2Nyb2xsaW5nIGlzIGluXG4gIC8vIHByb2dyZXNzIGFuZCBjYW5ub3QgYmUgaW50ZXJydXB0ZWQuXG4gIGlmIChldmVudC5jYW5jZWxhYmxlICYmIF9zaG91bGRQcmV2ZW50U2Nyb2xsaW5nKGV2ZW50KSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgLy8gSWYgZXZlbnQgaGFzIHRhcmdldFRvdWNoZXMgKHRvdWNoIGV2ZW50KSwgdXBkYXRlIGxhc3QgdG91Y2ggcG9zaXRpb24uXG4gIGlmIChldmVudC50YXJnZXRUb3VjaGVzKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcbiAgICBsYXN0VG91Y2hQb3NpdGlvbi5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIGxhc3RUb3VjaFBvc2l0aW9uLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFja2FnZVxuICovXG5leHBvcnQge19ib3VuZFNjcm9sbEhhbmRsZXJ9O1xuXG5leHBvcnQgZnVuY3Rpb24gX2xvY2tTY3JvbGxJbnRlcmFjdGlvbnMoKSB7XG4gIF9ib3VuZFNjcm9sbEhhbmRsZXIgPVxuICAgICAgX2JvdW5kU2Nyb2xsSGFuZGxlciB8fCBfc2Nyb2xsSW50ZXJhY3Rpb25IYW5kbGVyLmJpbmQodW5kZWZpbmVkKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzY3JvbGxFdmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgLy8gTk9URTogYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG9iamVjdHMgYXMgdGhpcmQgYXJnIHdpbGxcbiAgICAvLyBpbnRlcnByZXQgaXQgYXMgYm9vbGVhbiwgaGVuY2UgdXNlQ2FwdHVyZSA9IHRydWUgaW4gdGhpcyBjYXNlLlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIHNjcm9sbEV2ZW50c1tpXSwgX2JvdW5kU2Nyb2xsSGFuZGxlciwge2NhcHR1cmU6IHRydWUsIHBhc3NpdmU6IGZhbHNlfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF91bmxvY2tTY3JvbGxJbnRlcmFjdGlvbnMoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gc2Nyb2xsRXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIE5PVEU6IGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBvYmplY3RzIGFzIHRoaXJkIGFyZyB3aWxsXG4gICAgLy8gaW50ZXJwcmV0IGl0IGFzIGJvb2xlYW4sIGhlbmNlIHVzZUNhcHR1cmUgPSB0cnVlIGluIHRoaXMgY2FzZS5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICBzY3JvbGxFdmVudHNbaV0sIF9ib3VuZFNjcm9sbEhhbmRsZXIsIHtjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZX0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBldmVudCBjYXVzZXMgc2Nyb2xsIG91dHNpZGUgdGhlIGN1cnJlbnQgbG9ja2luZ1xuICogZWxlbWVudCwgZS5nLiBwb2ludGVyL2tleWJvYXJkIGludGVyYWN0aW9ucywgb3Igc2Nyb2xsIFwibGVha2luZ1wiXG4gKiBvdXRzaWRlIHRoZSBsb2NraW5nIGVsZW1lbnQgd2hlbiBpdCBpcyBhbHJlYWR5IGF0IGl0cyBzY3JvbGwgYm91bmRhcmllcy5cbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBwYWNrYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2hvdWxkUHJldmVudFNjcm9sbGluZyhldmVudCkge1xuICAvLyBVcGRhdGUgaWYgcm9vdCB0YXJnZXQgY2hhbmdlZC4gRm9yIHRvdWNoIGV2ZW50cywgZW5zdXJlIHdlIGRvbid0XG4gIC8vIHVwZGF0ZSBkdXJpbmcgdG91Y2htb3ZlLlxuICB2YXIgdGFyZ2V0ID0gZG9tKGV2ZW50KS5yb290VGFyZ2V0O1xuICBpZiAoZXZlbnQudHlwZSAhPT0gJ3RvdWNobW92ZScgJiYgbGFzdFJvb3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgIGxhc3RSb290VGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGxhc3RTY3JvbGxhYmxlTm9kZXMgPSBfZ2V0U2Nyb2xsYWJsZU5vZGVzKGRvbShldmVudCkucGF0aCk7XG4gIH1cblxuICAvLyBQcmV2ZW50IGV2ZW50IGlmIG5vIHNjcm9sbGFibGUgbm9kZXMuXG4gIGlmICghbGFzdFNjcm9sbGFibGVOb2Rlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBEb24ndCBwcmV2ZW50IHRvdWNoc3RhcnQgZXZlbnQgaW5zaWRlIHRoZSBsb2NraW5nIGVsZW1lbnQgd2hlbiBpdCBoYXNcbiAgLy8gc2Nyb2xsYWJsZSBub2Rlcy5cbiAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBHZXQgZGVsdGFYL1kuXG4gIHZhciBpbmZvID0gX2dldFNjcm9sbEluZm8oZXZlbnQpO1xuICAvLyBQcmV2ZW50IGlmIHRoZXJlIGlzIG5vIGNoaWxkIHRoYXQgY2FuIHNjcm9sbC5cbiAgcmV0dXJuICFfZ2V0U2Nyb2xsaW5nTm9kZShsYXN0U2Nyb2xsYWJsZU5vZGVzLCBpbmZvLmRlbHRhWCwgaW5mby5kZWx0YVkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc2Nyb2xsYWJsZSBub2RlcyB1cCB0byB0aGUgY3VycmVudCBsb2NraW5nIGVsZW1lbnQsXG4gKiB3aGljaCBpcyBpbmNsdWRlZCB0b28gaWYgc2Nyb2xsYWJsZS5cbiAqIEBwYXJhbSB7IUFycmF5PCFOb2RlPn0gbm9kZXNcbiAqIEByZXR1cm4geyFBcnJheTwhTm9kZT59IHNjcm9sbGFibGVzXG4gKiBAcGFja2FnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFNjcm9sbGFibGVOb2Rlcyhub2Rlcykge1xuICB2YXIgc2Nyb2xsYWJsZXMgPSBbXTtcbiAgdmFyIGxvY2tpbmdJbmRleCA9XG4gICAgICBub2Rlcy5pbmRleE9mKC8qKiBAdHlwZSB7IU5vZGV9ICovIChjdXJyZW50TG9ja2luZ0VsZW1lbnQpKTtcbiAgLy8gTG9vcCBmcm9tIHJvb3QgdGFyZ2V0IHRvIGxvY2tpbmcgZWxlbWVudCAoaW5jbHVkZWQpLlxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBsb2NraW5nSW5kZXg7IGkrKykge1xuICAgIC8vIFNraXAgbm9uLUVsZW1lbnQgbm9kZXMuXG4gICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBub2RlID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKG5vZGVzW2ldKTtcbiAgICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgYmVmb3JlIGNoZWNraW5nIGNvbXB1dGVkIHN0eWxlLlxuICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gICAgaWYgKHN0eWxlLm92ZXJmbG93ICE9PSAnc2Nyb2xsJyAmJiBzdHlsZS5vdmVyZmxvdyAhPT0gJ2F1dG8nKSB7XG4gICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIH1cbiAgICBpZiAoc3R5bGUub3ZlcmZsb3cgPT09ICdzY3JvbGwnIHx8IHN0eWxlLm92ZXJmbG93ID09PSAnYXV0bycpIHtcbiAgICAgIHNjcm9sbGFibGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY3JvbGxhYmxlcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBub2RlIHRoYXQgaXMgc2Nyb2xsaW5nLiBJZiB0aGVyZSBpcyBubyBzY3JvbGxpbmcsXG4gKiByZXR1cm5zIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7IUFycmF5PCFOb2RlPn0gbm9kZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVggU2Nyb2xsIGRlbHRhIG9uIHRoZSB4LWF4aXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVkgU2Nyb2xsIGRlbHRhIG9uIHRoZSB5LWF4aXNcbiAqIEByZXR1cm4geyFOb2RlfHVuZGVmaW5lZH1cbiAqIEBwYWNrYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U2Nyb2xsaW5nTm9kZShub2RlcywgZGVsdGFYLCBkZWx0YVkpIHtcbiAgLy8gTm8gc2Nyb2xsLlxuICBpZiAoIWRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIENoZWNrIG9ubHkgb25lIGF4aXMgYWNjb3JkaW5nIHRvIHdoZXJlIHRoZXJlIGlzIG1vcmUgc2Nyb2xsLlxuICAvLyBQcmVmZXIgdmVydGljYWwgdG8gaG9yaXpvbnRhbC5cbiAgdmFyIHZlcnRpY2FsU2Nyb2xsID0gTWF0aC5hYnMoZGVsdGFZKSA+PSBNYXRoLmFicyhkZWx0YVgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICB2YXIgY2FuU2Nyb2xsID0gZmFsc2U7XG4gICAgaWYgKHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAvLyBkZWx0YSA8IDAgaXMgc2Nyb2xsIHVwLCBkZWx0YSA+IDAgaXMgc2Nyb2xsIGRvd24uXG4gICAgICBjYW5TY3JvbGwgPSBkZWx0YVkgPCAwID9cbiAgICAgICAgICBub2RlLnNjcm9sbFRvcCA+IDAgOlxuICAgICAgICAgIG5vZGUuc2Nyb2xsVG9wIDwgbm9kZS5zY3JvbGxIZWlnaHQgLSBub2RlLmNsaWVudEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVsdGEgPCAwIGlzIHNjcm9sbCBsZWZ0LCBkZWx0YSA+IDAgaXMgc2Nyb2xsIHJpZ2h0LlxuICAgICAgY2FuU2Nyb2xsID0gZGVsdGFYIDwgMCA/XG4gICAgICAgICAgbm9kZS5zY3JvbGxMZWZ0ID4gMCA6XG4gICAgICAgICAgbm9kZS5zY3JvbGxMZWZ0IDwgbm9kZS5zY3JvbGxXaWR0aCAtIG5vZGUuY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIGlmIChjYW5TY3JvbGwpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgc2Nyb2xsIGBkZWx0YVhgIGFuZCBgZGVsdGFZYC5cbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudCBUaGUgc2Nyb2xsIGV2ZW50XG4gKiBAcmV0dXJuIHt7ZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyfX0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlXG4gKiB4LWF4aXMgc2Nyb2xsIGRlbHRhIChwb3NpdGl2ZTogc2Nyb2xsIHJpZ2h0LCBuZWdhdGl2ZTogc2Nyb2xsIGxlZnQsXG4gKiAwOiBubyBzY3JvbGwpLCBhbmQgdGhlIHktYXhpcyBzY3JvbGwgZGVsdGEgKHBvc2l0aXZlOiBzY3JvbGwgZG93bixcbiAqIG5lZ2F0aXZlOiBzY3JvbGwgdXAsIDA6IG5vIHNjcm9sbCkuXG4gKiBAcGFja2FnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFNjcm9sbEluZm8oZXZlbnQpIHtcbiAgdmFyIGluZm8gPSB7ZGVsdGFYOiBldmVudC5kZWx0YVgsIGRlbHRhWTogZXZlbnQuZGVsdGFZfTtcbiAgLy8gQWxyZWFkeSBhdmFpbGFibGUuXG4gIGlmICgnZGVsdGFYJyBpbiBldmVudCkge1xuICAgIC8vIGRvIG5vdGhpbmcsIHZhbHVlcyBhcmUgYWxyZWFkeSBnb29kLlxuICB9XG4gIC8vIFNhZmFyaSBoYXMgc2Nyb2xsIGluZm8gaW4gYHdoZWVsRGVsdGFYL1lgLlxuICBlbHNlIGlmICgnd2hlZWxEZWx0YVgnIGluIGV2ZW50ICYmICd3aGVlbERlbHRhWScgaW4gZXZlbnQpIHtcbiAgICBpbmZvLmRlbHRhWCA9IC1ldmVudC53aGVlbERlbHRhWDtcbiAgICBpbmZvLmRlbHRhWSA9IC1ldmVudC53aGVlbERlbHRhWTtcbiAgfVxuICAvLyBJRTEwIGhhcyBvbmx5IHZlcnRpY2FsIHNjcm9sbCBpbmZvIGluIGB3aGVlbERlbHRhYC5cbiAgZWxzZSBpZiAoJ3doZWVsRGVsdGEnIGluIGV2ZW50KSB7XG4gICAgaW5mby5kZWx0YVggPSAwO1xuICAgIGluZm8uZGVsdGFZID0gLWV2ZW50LndoZWVsRGVsdGE7XG4gIH1cbiAgLy8gRmlyZWZveCBoYXMgc2Nyb2xsIGluZm8gaW4gYGRldGFpbGAgYW5kIGBheGlzYC5cbiAgZWxzZSBpZiAoJ2F4aXMnIGluIGV2ZW50KSB7XG4gICAgaW5mby5kZWx0YVggPSBldmVudC5heGlzID09PSAxID8gZXZlbnQuZGV0YWlsIDogMDtcbiAgICBpbmZvLmRlbHRhWSA9IGV2ZW50LmF4aXMgPT09IDIgPyBldmVudC5kZXRhaWwgOiAwO1xuICB9XG4gIC8vIE9uIG1vYmlsZSBkZXZpY2VzLCBjYWxjdWxhdGUgc2Nyb2xsIGRpcmVjdGlvbi5cbiAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG4gICAgLy8gVG91Y2ggbW92ZXMgZnJvbSByaWdodCB0byBsZWZ0ID0+IHNjcm9sbGluZyBnb2VzIHJpZ2h0LlxuICAgIGluZm8uZGVsdGFYID0gbGFzdFRvdWNoUG9zaXRpb24ucGFnZVggLSB0b3VjaC5wYWdlWDtcbiAgICAvLyBUb3VjaCBtb3ZlcyBmcm9tIGRvd24gdG8gdXAgPT4gc2Nyb2xsaW5nIGdvZXMgZG93bi5cbiAgICBpbmZvLmRlbHRhWSA9IGxhc3RUb3VjaFBvc2l0aW9uLnBhZ2VZIC0gdG91Y2gucGFnZVk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIGlzIGltcGxlbWVudGVkIGJ5IGVsZW1lbnRzIGNvbnRhaW5pbmdcbiAqIGFuaW1hdGlvbnMgZm9yIHVzZSB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAuXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbiBjb25maWd1cmF0aW9uLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm8uXG4gICAgICovXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdlbnRyeScgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5lbnRyeWAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZW50cnlBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdleGl0JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmV4aXRgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGV4aXRBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2V4aXRBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gIH0sXG5cbiAgX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZW50cnknXSA9IFt7bmFtZTogdGhpcy5lbnRyeUFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9leGl0QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZXhpdCddID0gW3tuYW1lOiB0aGlzLmV4aXRBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfY29weVByb3BlcnRpZXM6IGZ1bmN0aW9uKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICAvLyBzaGFsbG93bHkgY29weSBwcm9wZXJ0aWVzIGZyb20gY29uZmlnMiB0byBjb25maWcxXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnMVtwcm9wZXJ0eV0gPSBjb25maWcyW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0sXG5cbiAgX2Nsb25lQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgY2xvbmUgPSB7aXNDbG9uZTogdHJ1ZX07XG4gICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2xvbmUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9LFxuXG4gIF9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmU6IGZ1bmN0aW9uKHR5cGUsIG1hcCwgYWxsQ29uZmlncykge1xuICAgIGlmICghdGhpcy5hbmltYXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl93YXJuKHRoaXMuX2xvZ2YoXG4gICAgICAgICAgJ3BsYXlBbmltYXRpb24nLFxuICAgICAgICAgICdQbGVhc2UgcHV0IFxcJ2FuaW1hdGlvbkNvbmZpZ1xcJyBpbnNpZGUgb2YgeW91ciBjb21wb25lbnRzIFxcJ3Byb3BlcnRpZXNcXCcgb2JqZWN0IGluc3RlYWQgb2Ygb3V0c2lkZSBvZiBpdC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHlwZSBpcyBvcHRpb25hbFxuICAgIHZhciB0aGlzQ29uZmlnO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpc0NvbmZpZykpIHtcbiAgICAgIHRoaXNDb25maWcgPSBbdGhpc0NvbmZpZ107XG4gICAgfVxuXG4gICAgLy8gaXRlcmF0ZSBhbmltYXRpb25zIGFuZCByZWN1cnNlIHRvIHByb2Nlc3MgY29uZmlndXJhdGlvbnMgZnJvbSBjaGlsZCBub2Rlc1xuICAgIGlmICh0aGlzQ29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gdGhpc0NvbmZpZ1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGNvbmZpZy5hbmltYXRhYmxlKSB7XG4gICAgICAgICAgY29uZmlnLmFuaW1hdGFibGUuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgY29uZmlnLnR5cGUgfHwgdHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICBpZiAoY2FjaGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgIC8vIG1lcmdlIGNvbmZpZ3VyYXRpb25zIHdpdGggdGhlIHNhbWUgaWQsIG1ha2luZyBhIGNsb25lIGxhemlseVxuICAgICAgICAgICAgICBpZiAoIWNhY2hlZENvbmZpZy5pc0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSB0aGlzLl9jbG9uZUNvbmZpZyhjYWNoZWRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNhY2hlZENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHB1dCBhbnkgY29uZmlncyB3aXRoIGFuIGlkIGludG8gYSBtYXBcbiAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSBjb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbENvbmZpZ3MucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgY2FsbHMgdGhpc1xuICAgKiBtZXRob2QgdG8gY29uZmlndXJlIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIHR5cGUuIEVsZW1lbnRzXG4gICAqIGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgc2hvdWxkIGRlZmluZSB0aGUgcHJvcGVydHlcbiAgICogYGFuaW1hdGlvbkNvbmZpZ2AsIHdoaWNoIGlzIGVpdGhlciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIGEgbWFwIG9mXG4gICAqIGFuaW1hdGlvbiB0eXBlIHRvIGFycmF5IG9mIGNvbmZpZ3VyYXRpb24gb2JqZWN0cy5cbiAgICovXG4gIGdldEFuaW1hdGlvbkNvbmZpZzogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB2YXIgYWxsQ29uZmlncyA9IFtdO1xuICAgIHRoaXMuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZSh0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgIC8vIGFwcGVuZCB0aGUgY29uZmlndXJhdGlvbnMgc2F2ZWQgaW4gdGhlIG1hcCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgICBhbGxDb25maWdzLnB1c2gobWFwW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gYWxsQ29uZmlncztcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge05lb25BbmltYXRhYmxlQmVoYXZpb3J9IGZyb20gJy4vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBhZGRzIGEgbWV0aG9kIHRvIHJ1biBhbmltYXRpb25zLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsID0ge1xuXG4gIF9jb25maWd1cmVBbmltYXRpb25zOiBmdW5jdGlvbihjb25maWdzKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVzdWx0c1RvUGxheSA9IFtdO1xuXG4gICAgaWYgKGNvbmZpZ3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IGNvbmZpZ3NbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcubmFtZSk7XG4gICAgICAgIC8vIGlzIHRoaXMgZWxlbWVudCBhY3R1YWxseSBhIG5lb24gYW5pbWF0aW9uP1xuICAgICAgICBpZiAobmVvbkFuaW1hdGlvbi5pc05lb25BbmltYXRpb24pIHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAvLyBDbG9zdXJlIGNvbXBpbGVyIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGEgdHJ5IC8gY2F0Y2ggaGVyZS5cbiAgICAgICAgICAvLyAuY29uZmlndXJlIG5lZWRzIHRvIGJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgIGlmICghbmVvbkFuaW1hdGlvbi5jb25maWd1cmUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAgICAgICAgICogQHJldHVybiB7QW5pbWF0aW9uRWZmZWN0UmVhZE9ubHl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5lb25BbmltYXRpb24uY29uZmlndXJlID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdCA9IG5lb25BbmltYXRpb24uY29uZmlndXJlKGNvbmZpZyk7XG4gICAgICAgICAgcmVzdWx0c1RvUGxheS5wdXNoKHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJzonLCBjb25maWcubmFtZSwgJ25vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0c1RvUGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNUb1BsYXlbaV0ucmVzdWx0O1xuICAgICAgbGV0IGNvbmZpZyA9IHJlc3VsdHNUb1BsYXlbaV0uY29uZmlnO1xuICAgICAgbGV0IG5lb25BbmltYXRpb24gPSByZXN1bHRzVG9QbGF5W2ldLm5lb25BbmltYXRpb247XG4gICAgICAvLyBjb25maWd1cmF0aW9uIG9yIHBsYXkgY291bGQgZmFpbCBpZiBwb2x5ZmlsbHMgYXJlbid0IGxvYWRlZFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBFZmZlY3QgcmF0aGVyIHRoYW4gYW4gQW5pbWF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmNhbmNlbCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZG9jdW1lbnQudGltZWxpbmUucGxheShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGRudCBwbGF5JywgJygnLCBjb25maWcubmFtZSwgJykuJywgZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGFuaW1hdGlvbjogcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSxcblxuICBfc2hvdWxkQ29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICB2YXIgZmluaXNoZWQgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLnBsYXlTdGF0ZSAhPSAnZmluaXNoZWQnKSB7XG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmluaXNoZWQ7XG4gIH0sXG5cbiAgX2NvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLm5lb25BbmltYXRpb24uY29tcGxldGUoYWN0aXZlRW50cmllc1tpXS5jb25maWcpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUGxheXMgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgYHR5cGVgLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0PX0gY29va2llXG4gICAqL1xuICBwbGF5QW5pbWF0aW9uOiBmdW5jdGlvbih0eXBlLCBjb29raWUpIHtcbiAgICB2YXIgY29uZmlncyA9IHRoaXMuZ2V0QW5pbWF0aW9uQ29uZmlnKHR5cGUpO1xuICAgIGlmICghY29uZmlncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9hY3RpdmUgfHwge307XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVt0eXBlXSkge1xuICAgICAgdGhpcy5fY29tcGxldGUodGhpcy5fYWN0aXZlW3R5cGVdKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVudHJpZXMgPSB0aGlzLl9jb25maWd1cmVBbmltYXRpb25zKGNvbmZpZ3MpO1xuXG4gICAgaWYgKGFjdGl2ZUVudHJpZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVbdHlwZV0gPSBhY3RpdmVFbnRyaWVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5vbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkQ29tcGxldGUoYWN0aXZlRW50cmllcykpIHtcbiAgICAgICAgICB0aGlzLl9jb21wbGV0ZShhY3RpdmVFbnRyaWVzKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgICAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIGNhbmNlbEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgayBpbiB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fYWN0aXZlW2tdXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXNbal0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IHt9O1xuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvciA9XG4gICAgW05lb25BbmltYXRhYmxlQmVoYXZpb3IsIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGxdO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==