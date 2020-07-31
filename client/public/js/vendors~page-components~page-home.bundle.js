(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~page-components~page-home"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1kcm9wZG93bi9pcm9uLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1maXQtYmVoYXZpb3IvaXJvbi1maXQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1vdmVybGF5LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tc2Nyb2xsLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGlvbi1ydW5uZXItYmVoYXZpb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0Qzs7QUFFb0M7QUFDa0I7QUFDbkM7QUFDRTs7QUFFQTtBQUNxQjtBQUNaOztBQUUxRTtBQUNPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzRUFBc0U7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJFQUFrQjtBQUMvQixLQUFLOztBQUVMO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSCxjQUFjLCtCQUErQjs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlDQUFpQyxzRkFBRztBQUNwQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtFQUFvQjtBQUMvQixHQUFHOztBQUVIO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNGQUFHO0FBQ3hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRkFBRztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNGQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0MsS0FBSztBQUMzQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxH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Q0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtELGVBQWU7QUFDakU7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGVBQWU7QUFDckU7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLEtBQUssbUZBQXNCIiwiZmlsZSI6InZlbmRvcnN+cGFnZS1jb21wb25lbnRzfnBhZ2UtaG9tZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogQ2hyb21lIHVzZXMgYW4gb2xkZXIgdmVyc2lvbiBvZiBET00gTGV2ZWwgMyBLZXlib2FyZCBFdmVudHNcbiAqXG4gKiBNb3N0IGtleXMgYXJlIGxhYmVsZWQgYXMgdGV4dCwgYnV0IHNvbWUgYXJlIFVuaWNvZGUgY29kZXBvaW50cy5cbiAqIFZhbHVlcyB0YWtlbiBmcm9tOlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvMjAwNy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAwNzEyMjEva2V5c2V0Lmh0bWwjS2V5U2V0LVNldFxuICovXG52YXIgS0VZX0lERU5USUZJRVIgPSB7XG4gICdVKzAwMDgnOiAnYmFja3NwYWNlJyxcbiAgJ1UrMDAwOSc6ICd0YWInLFxuICAnVSswMDFCJzogJ2VzYycsXG4gICdVKzAwMjAnOiAnc3BhY2UnLFxuICAnVSswMDdGJzogJ2RlbCdcbn07XG5cbi8qKlxuICogU3BlY2lhbCB0YWJsZSBmb3IgS2V5Ym9hcmRFdmVudC5rZXlDb2RlLlxuICogS2V5Ym9hcmRFdmVudC5rZXlJZGVudGlmaWVyIGlzIGJldHRlciwgYW5kIEtleUJvYXJkRXZlbnQua2V5IGlzIGV2ZW4gYmV0dGVyXG4gKiB0aGFuIHRoYXQuXG4gKlxuICogVmFsdWVzIGZyb206XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC5rZXlDb2RlI1ZhbHVlX29mX2tleUNvZGVcbiAqL1xudmFyIEtFWV9DT0RFID0ge1xuICA4OiAnYmFja3NwYWNlJyxcbiAgOTogJ3RhYicsXG4gIDEzOiAnZW50ZXInLFxuICAyNzogJ2VzYycsXG4gIDMzOiAncGFnZXVwJyxcbiAgMzQ6ICdwYWdlZG93bicsXG4gIDM1OiAnZW5kJyxcbiAgMzY6ICdob21lJyxcbiAgMzI6ICdzcGFjZScsXG4gIDM3OiAnbGVmdCcsXG4gIDM4OiAndXAnLFxuICAzOTogJ3JpZ2h0JyxcbiAgNDA6ICdkb3duJyxcbiAgNDY6ICdkZWwnLFxuICAxMDY6ICcqJ1xufTtcblxuLyoqXG4gKiBNT0RJRklFUl9LRVlTIG1hcHMgdGhlIHNob3J0IG5hbWUgZm9yIG1vZGlmaWVyIGtleXMgdXNlZCBpbiBhIGtleVxuICogY29tYm8gc3RyaW5nIHRvIHRoZSBwcm9wZXJ0eSBuYW1lIHRoYXQgcmVmZXJlbmNlcyB0aG9zZSBzYW1lIGtleXNcbiAqIGluIGEgS2V5Ym9hcmRFdmVudCBpbnN0YW5jZS5cbiAqL1xudmFyIE1PRElGSUVSX0tFWVMgPSB7XG4gICdzaGlmdCc6ICdzaGlmdEtleScsXG4gICdjdHJsJzogJ2N0cmxLZXknLFxuICAnYWx0JzogJ2FsdEtleScsXG4gICdtZXRhJzogJ21ldGFLZXknXG59O1xuXG4vKipcbiAqIEtleWJvYXJkRXZlbnQua2V5IGlzIG1vc3RseSByZXByZXNlbnRlZCBieSBwcmludGFibGUgY2hhcmFjdGVyIG1hZGUgYnlcbiAqIHRoZSBrZXlib2FyZCwgd2l0aCB1bnByaW50YWJsZSBrZXlzIGxhYmVsZWQgbmljZWx5LlxuICpcbiAqIEhvd2V2ZXIsIG9uIE9TIFgsIEFsdCtjaGFyIGNhbiBtYWtlIGEgVW5pY29kZSBjaGFyYWN0ZXIgdGhhdCBmb2xsb3dzIGFuXG4gKiBBcHBsZS1zcGVjaWZpYyBtYXBwaW5nLiBJbiB0aGlzIGNhc2UsIHdlIGZhbGwgYmFjayB0byAua2V5Q29kZS5cbiAqL1xudmFyIEtFWV9DSEFSID0gL1thLXowLTkqXS87XG5cbi8qKlxuICogTWF0Y2hlcyBhIGtleUlkZW50aWZpZXIgc3RyaW5nLlxuICovXG52YXIgSURFTlRfQ0hBUiA9IC9VXFwrLztcblxuLyoqXG4gKiBNYXRjaGVzIGFycm93IGtleXMgaW4gR2Vja28gMjcuMCtcbiAqL1xudmFyIEFSUk9XX0tFWSA9IC9eYXJyb3cvO1xuXG4vKipcbiAqIE1hdGNoZXMgc3BhY2Uga2V5cyBldmVyeXdoZXJlIChub3RhYmx5IGluY2x1ZGluZyBJRTEwJ3MgZXhjZXB0aW9uYWwgbmFtZVxuICogYHNwYWNlYmFyYCkuXG4gKi9cbnZhciBTUEFDRV9LRVkgPSAvXnNwYWNlKGJhcik/LztcblxuLyoqXG4gKiBNYXRjaGVzIEVTQyBrZXkuXG4gKlxuICogVmFsdWUgZnJvbTogaHR0cDovL3czYy5naXRodWIuaW8vdWlldmVudHMta2V5LyNrZXktRXNjYXBlXG4gKi9cbnZhciBFU0NfS0VZID0gL15lc2NhcGUkLztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBLZXlCb2FyZEV2ZW50LmtleVxuICogQHBhcmFtIHtCb29sZWFufSBbbm9TcGVjaWFsQ2hhcnNdIExpbWl0cyB0aGUgdHJhbnNmb3JtYXRpb24gdG9cbiAqIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycy5cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtS2V5KGtleSwgbm9TcGVjaWFsQ2hhcnMpIHtcbiAgdmFyIHZhbGlkS2V5ID0gJyc7XG4gIGlmIChrZXkpIHtcbiAgICB2YXIgbEtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsS2V5ID09PSAnICcgfHwgU1BBQ0VfS0VZLnRlc3QobEtleSkpIHtcbiAgICAgIHZhbGlkS2V5ID0gJ3NwYWNlJztcbiAgICB9IGVsc2UgaWYgKEVTQ19LRVkudGVzdChsS2V5KSkge1xuICAgICAgdmFsaWRLZXkgPSAnZXNjJztcbiAgICB9IGVsc2UgaWYgKGxLZXkubGVuZ3RoID09IDEpIHtcbiAgICAgIGlmICghbm9TcGVjaWFsQ2hhcnMgfHwgS0VZX0NIQVIudGVzdChsS2V5KSkge1xuICAgICAgICB2YWxpZEtleSA9IGxLZXk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBUlJPV19LRVkudGVzdChsS2V5KSkge1xuICAgICAgdmFsaWRLZXkgPSBsS2V5LnJlcGxhY2UoJ2Fycm93JywgJycpO1xuICAgIH0gZWxzZSBpZiAobEtleSA9PSAnbXVsdGlwbHknKSB7XG4gICAgICAvLyBudW1wYWQgJyonIGNhbiBtYXAgdG8gTXVsdGlwbHkgb24gSUUvV2luZG93c1xuICAgICAgdmFsaWRLZXkgPSAnKic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkS2V5ID0gbEtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkS2V5O1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1LZXlJZGVudGlmaWVyKGtleUlkZW50KSB7XG4gIHZhciB2YWxpZEtleSA9ICcnO1xuICBpZiAoa2V5SWRlbnQpIHtcbiAgICBpZiAoa2V5SWRlbnQgaW4gS0VZX0lERU5USUZJRVIpIHtcbiAgICAgIHZhbGlkS2V5ID0gS0VZX0lERU5USUZJRVJba2V5SWRlbnRdO1xuICAgIH0gZWxzZSBpZiAoSURFTlRfQ0hBUi50ZXN0KGtleUlkZW50KSkge1xuICAgICAga2V5SWRlbnQgPSBwYXJzZUludChrZXlJZGVudC5yZXBsYWNlKCdVKycsICcweCcpLCAxNik7XG4gICAgICB2YWxpZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoa2V5SWRlbnQpLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkS2V5ID0ga2V5SWRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkS2V5O1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1LZXlDb2RlKGtleUNvZGUpIHtcbiAgdmFyIHZhbGlkS2V5ID0gJyc7XG4gIGlmIChOdW1iZXIoa2V5Q29kZSkpIHtcbiAgICBpZiAoa2V5Q29kZSA+PSA2NSAmJiBrZXlDb2RlIDw9IDkwKSB7XG4gICAgICAvLyBhc2NpaSBhLXpcbiAgICAgIC8vIGxvd2VyY2FzZSBpcyAzMiBvZmZzZXQgZnJvbSB1cHBlcmNhc2VcbiAgICAgIHZhbGlkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMiArIGtleUNvZGUpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA+PSAxMTIgJiYga2V5Q29kZSA8PSAxMjMpIHtcbiAgICAgIC8vIGZ1bmN0aW9uIGtleXMgZjEtZjEyXG4gICAgICB2YWxpZEtleSA9ICdmJyArIChrZXlDb2RlIC0gMTEyICsgMSk7XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID49IDQ4ICYmIGtleUNvZGUgPD0gNTcpIHtcbiAgICAgIC8vIHRvcCAwLTkga2V5c1xuICAgICAgdmFsaWRLZXkgPSBTdHJpbmcoa2V5Q29kZSAtIDQ4KTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPj0gOTYgJiYga2V5Q29kZSA8PSAxMDUpIHtcbiAgICAgIC8vIG51bSBwYWQgMC05XG4gICAgICB2YWxpZEtleSA9IFN0cmluZyhrZXlDb2RlIC0gOTYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZEtleSA9IEtFWV9DT0RFW2tleUNvZGVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRLZXk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbm9ybWFsaXplZCBrZXkgZm9yIGEgS2V5Ym9hcmRFdmVudC5cbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0ga2V5RXZlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW25vU3BlY2lhbENoYXJzXSBTZXQgdG8gdHJ1ZSB0byBsaW1pdCBrZXlFdmVudC5rZXlcbiAqIHRyYW5zZm9ybWF0aW9uIHRvIGFscGhhLW51bWVyaWMgY2hhcnMuIFRoaXMgaXMgdXNlZnVsIHdpdGgga2V5XG4gKiBjb21iaW5hdGlvbnMgbGlrZSBzaGlmdCArIDIsIHdoaWNoIG9uIEZGIGZvciBNYWNPUyBwcm9kdWNlc1xuICoga2V5RXZlbnQua2V5ID0gQFxuICogVG8gZ2V0IDIgcmV0dXJuZWQsIHNldCBub1NwZWNpYWxDaGFycyA9IHRydWVcbiAqIFRvIGdldCBAIHJldHVybmVkLCBzZXQgbm9TcGVjaWFsQ2hhcnMgPSBmYWxzZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVkS2V5Rm9yRXZlbnQoa2V5RXZlbnQsIG5vU3BlY2lhbENoYXJzKSB7XG4gIC8vIEZhbGwgYmFjayBmcm9tIC5rZXksIHRvIC5kZXRhaWwua2V5IGZvciBhcnRpZmljYWwga2V5Ym9hcmQgZXZlbnRzLFxuICAvLyBhbmQgdGhlbiB0byBkZXByZWNhdGVkIC5rZXlJZGVudGlmaWVyIGFuZCAua2V5Q29kZS5cbiAgaWYgKGtleUV2ZW50LmtleSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm1LZXkoa2V5RXZlbnQua2V5LCBub1NwZWNpYWxDaGFycyk7XG4gIH1cbiAgaWYgKGtleUV2ZW50LmRldGFpbCAmJiBrZXlFdmVudC5kZXRhaWwua2V5KSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybUtleShrZXlFdmVudC5kZXRhaWwua2V5LCBub1NwZWNpYWxDaGFycyk7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybUtleUlkZW50aWZpZXIoa2V5RXZlbnQua2V5SWRlbnRpZmllcikgfHxcbiAgICAgIHRyYW5zZm9ybUtleUNvZGUoa2V5RXZlbnQua2V5Q29kZSkgfHwgJyc7XG59XG5cbmZ1bmN0aW9uIGtleUNvbWJvTWF0Y2hlc0V2ZW50KGtleUNvbWJvLCBldmVudCkge1xuICAvLyBGb3IgY29tYm9zIHdpdGggbW9kaWZpZXJzIHdlIHN1cHBvcnQgb25seSBhbHBoYS1udW1lcmljIGtleXNcbiAgdmFyIGtleUV2ZW50ID0gbm9ybWFsaXplZEtleUZvckV2ZW50KGV2ZW50LCBrZXlDb21iby5oYXNNb2RpZmllcnMpO1xuICByZXR1cm4ga2V5RXZlbnQgPT09IGtleUNvbWJvLmtleSAmJlxuICAgICAgKCFrZXlDb21iby5oYXNNb2RpZmllcnMgfHxcbiAgICAgICAoISFldmVudC5zaGlmdEtleSA9PT0gISFrZXlDb21iby5zaGlmdEtleSAmJlxuICAgICAgICAhIWV2ZW50LmN0cmxLZXkgPT09ICEha2V5Q29tYm8uY3RybEtleSAmJlxuICAgICAgICAhIWV2ZW50LmFsdEtleSA9PT0gISFrZXlDb21iby5hbHRLZXkgJiZcbiAgICAgICAgISFldmVudC5tZXRhS2V5ID09PSAhIWtleUNvbWJvLm1ldGFLZXkpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VLZXlDb21ib1N0cmluZyhrZXlDb21ib1N0cmluZykge1xuICBpZiAoa2V5Q29tYm9TdHJpbmcubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHtjb21ibzoga2V5Q29tYm9TdHJpbmcsIGtleToga2V5Q29tYm9TdHJpbmcsIGV2ZW50OiAna2V5ZG93bid9O1xuICB9XG4gIHJldHVybiBrZXlDb21ib1N0cmluZy5zcGxpdCgnKycpXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uKHBhcnNlZEtleUNvbWJvLCBrZXlDb21ib1BhcnQpIHtcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBrZXlDb21ib1BhcnQuc3BsaXQoJzonKTtcbiAgICAgICAgdmFyIGtleU5hbWUgPSBldmVudFBhcnRzWzBdO1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudFBhcnRzWzFdO1xuXG4gICAgICAgIGlmIChrZXlOYW1lIGluIE1PRElGSUVSX0tFWVMpIHtcbiAgICAgICAgICBwYXJzZWRLZXlDb21ib1tNT0RJRklFUl9LRVlTW2tleU5hbWVdXSA9IHRydWU7XG4gICAgICAgICAgcGFyc2VkS2V5Q29tYm8uaGFzTW9kaWZpZXJzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZWRLZXlDb21iby5rZXkgPSBrZXlOYW1lO1xuICAgICAgICAgIHBhcnNlZEtleUNvbWJvLmV2ZW50ID0gZXZlbnQgfHwgJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZEtleUNvbWJvO1xuICAgICAgfSwge2NvbWJvOiBrZXlDb21ib1N0cmluZy5zcGxpdCgnOicpLnNoaWZ0KCl9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudFN0cmluZyhldmVudFN0cmluZykge1xuICByZXR1cm4gZXZlbnRTdHJpbmcudHJpbSgpLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGtleUNvbWJvU3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlS2V5Q29tYm9TdHJpbmcoa2V5Q29tYm9TdHJpbmcpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBgUG9seW1lci5Jcm9uQTExeUtleXNCZWhhdmlvcmAgcHJvdmlkZXMgYSBub3JtYWxpemVkIGludGVyZmFjZSBmb3IgcHJvY2Vzc2luZ1xuICoga2V5Ym9hcmQgY29tbWFuZHMgdGhhdCBwZXJ0YWluIHRvIFtXQUktQVJJQSBiZXN0XG4gKiBwcmFjdGljZXNdKGh0dHA6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy8ja2JkX2dlbmVyYWxfYmluZGluZykuIFRoZVxuICogZWxlbWVudCB0YWtlcyBjYXJlIG9mIGJyb3dzZXIgZGlmZmVyZW5jZXMgd2l0aCByZXNwZWN0IHRvIEtleWJvYXJkIGV2ZW50cyBhbmRcbiAqIHVzZXMgYW4gZXhwcmVzc2l2ZSBzeW50YXggdG8gZmlsdGVyIGtleSBwcmVzc2VzLlxuICpcbiAqIFVzZSB0aGUgYGtleUJpbmRpbmdzYCBwcm90b3R5cGUgcHJvcGVydHkgdG8gZXhwcmVzcyB3aGF0IGNvbWJpbmF0aW9uIG9mIGtleXNcbiAqIHdpbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIEEga2V5IGJpbmRpbmcgaGFzIHRoZSBmb3JtYXRcbiAqIGBcIktFWStNT0RJRklFUjpFVkVOVFwiOiBcImNhbGxiYWNrXCJgIChgXCJLRVlcIjogXCJjYWxsYmFja1wiYCBvclxuICogYFwiS0VZOkVWRU5UXCI6IFwiY2FsbGJhY2tcImAgYXJlIHZhbGlkIGFzIHdlbGwpLiBTb21lIGV4YW1wbGVzOlxuICpcbiAqICAgICAga2V5QmluZGluZ3M6IHtcbiAqICAgICAgICAnc3BhY2UnOiAnX29uS2V5ZG93bicsIC8vIHNhbWUgYXMgJ3NwYWNlOmtleWRvd24nXG4gKiAgICAgICAgJ3NoaWZ0K3RhYic6ICdfb25LZXlkb3duJyxcbiAqICAgICAgICAnZW50ZXI6a2V5cHJlc3MnOiAnX29uS2V5cHJlc3MnLFxuICogICAgICAgICdlc2M6a2V5dXAnOiAnX29uS2V5dXAnXG4gKiAgICAgIH1cbiAqXG4gKiBUaGUgY2FsbGJhY2sgd2lsbCByZWNlaXZlIHdpdGggYW4gZXZlbnQgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uXG4gKiBpbiBgZXZlbnQuZGV0YWlsYDpcbiAqXG4gKiAgICAgIF9vbktleWRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gKiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLmNvbWJvKTsgLy8gS0VZK01PRElGSUVSLCBlLmcuIFwic2hpZnQrdGFiXCJcbiAqICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwua2V5KTsgLy8gS0VZIG9ubHksIGUuZy4gXCJ0YWJcIlxuICogICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5ldmVudCk7IC8vIEVWRU5ULCBlLmcuIFwia2V5ZG93blwiXG4gKiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQpOyAvLyB0aGUgb3JpZ2luYWwgS2V5Ym9hcmRFdmVudFxuICogICAgICB9XG4gKlxuICogVXNlIHRoZSBga2V5RXZlbnRUYXJnZXRgIGF0dHJpYnV0ZSB0byBzZXQgdXAgZXZlbnQgaGFuZGxlcnMgb24gYSBzcGVjaWZpY1xuICogbm9kZS5cbiAqXG4gKiBTZWUgdGhlIFtkZW1vIHNvdXJjZVxuICogY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9ibG9iL21hc3Rlci9kZW1vL3gta2V5LWF3YXJlLmh0bWwpXG4gKiBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25BMTF5S2V5c0JlaGF2aW9yID0ge1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIEV2ZW50VGFyZ2V0IHRoYXQgd2lsbCBiZSBmaXJpbmcgcmVsZXZhbnQgS2V5Ym9hcmRFdmVudHMuIFNldCBpdCB0b1xuICAgICAqIGBudWxsYCB0byBkaXNhYmxlIHRoZSBsaXN0ZW5lcnMuXG4gICAgICogQHR5cGUgez9FdmVudFRhcmdldH1cbiAgICAgKi9cbiAgICBrZXlFdmVudFRhcmdldDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBpbXBsZW1lbnRpbmcgZWxlbWVudCB0b1xuICAgICAqIGF1dG9tYXRpY2FsbHkgc3RvcCBwcm9wYWdhdGlvbiBvbiBhbnkgaGFuZGxlZCBLZXlib2FyZEV2ZW50cy5cbiAgICAgKi9cbiAgICBzdG9wS2V5Ym9hcmRFdmVudFByb3BhZ2F0aW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIF9ib3VuZEtleUhhbmRsZXJzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBXZSB1c2UgdGhpcyBkdWUgdG8gYSBsaW1pdGF0aW9uIGluIElFMTAgd2hlcmUgaW5zdGFuY2VzIHdpbGwgaGF2ZVxuICAgIC8vIG93biBwcm9wZXJ0aWVzIG9mIGV2ZXJ5dGhpbmcgb24gdGhlIFwicHJvdG90eXBlXCIuXG4gICAgX2ltcGVyYXRpdmVLZXlCaW5kaW5nczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfcmVzZXRLZXlFdmVudExpc3RlbmVycyhrZXlFdmVudFRhcmdldCwgX2JvdW5kS2V5SGFuZGxlcnMpJ10sXG5cblxuICAvKipcbiAgICogVG8gYmUgdXNlZCB0byBleHByZXNzIHdoYXQgY29tYmluYXRpb24gb2Yga2V5cyAgd2lsbCB0cmlnZ2VyIHRoZSByZWxhdGl2ZVxuICAgKiBjYWxsYmFjay4gZS5nLiBga2V5QmluZGluZ3M6IHsgJ2VzYyc6ICdfb25Fc2NQcmVzc2VkJ31gXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHt9LFxuXG4gIHJlZ2lzdGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ByZXBLZXlCaW5kaW5ncygpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saXN0ZW5LZXlFdmVudExpc3RlbmVycygpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91bmxpc3RlbktleUV2ZW50TGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIGltcGVyYXRpdmVseSBhZGQgYSBrZXkgYmluZGluZyB0byB0aGUgaW1wbGVtZW50aW5nXG4gICAqIGVsZW1lbnQuIFRoaXMgaXMgdGhlIGltcGVyYXRpdmUgZXF1aXZhbGVudCBvZiBkZWNsYXJpbmcgYSBrZXliaW5kaW5nXG4gICAqIGluIHRoZSBga2V5QmluZGluZ3NgIHByb3RvdHlwZSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50U3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVyTmFtZVxuICAgKi9cbiAgYWRkT3duS2V5QmluZGluZzogZnVuY3Rpb24oZXZlbnRTdHJpbmcsIGhhbmRsZXJOYW1lKSB7XG4gICAgdGhpcy5faW1wZXJhdGl2ZUtleUJpbmRpbmdzW2V2ZW50U3RyaW5nXSA9IGhhbmRsZXJOYW1lO1xuICAgIHRoaXMuX3ByZXBLZXlCaW5kaW5ncygpO1xuICAgIHRoaXMuX3Jlc2V0S2V5RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHdpbGwgcmVtb3ZlIGFsbCBpbXBlcmF0aXZlbHktYWRkZWQga2V5IGJpbmRpbmdzLlxuICAgKi9cbiAgcmVtb3ZlT3duS2V5QmluZGluZ3M6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ltcGVyYXRpdmVLZXlCaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX3ByZXBLZXlCaW5kaW5ncygpO1xuICAgIHRoaXMuX3Jlc2V0S2V5RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEga2V5Ym9hcmQgZXZlbnQgbWF0Y2hlcyBgZXZlbnRTdHJpbmdgLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFN0cmluZ1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAga2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzOiBmdW5jdGlvbihldmVudCwgZXZlbnRTdHJpbmcpIHtcbiAgICB2YXIga2V5Q29tYm9zID0gcGFyc2VFdmVudFN0cmluZyhldmVudFN0cmluZyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlDb21ib3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChrZXlDb21ib01hdGNoZXNFdmVudChrZXlDb21ib3NbaV0sIGV2ZW50KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIF9jb2xsZWN0S2V5QmluZGluZ3M6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXlCaW5kaW5ncyA9IHRoaXMuYmVoYXZpb3JzLm1hcChmdW5jdGlvbihiZWhhdmlvcikge1xuICAgICAgcmV0dXJuIGJlaGF2aW9yLmtleUJpbmRpbmdzO1xuICAgIH0pO1xuXG4gICAgaWYgKGtleUJpbmRpbmdzLmluZGV4T2YodGhpcy5rZXlCaW5kaW5ncykgPT09IC0xKSB7XG4gICAgICBrZXlCaW5kaW5ncy5wdXNoKHRoaXMua2V5QmluZGluZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlCaW5kaW5ncztcbiAgfSxcblxuICBfcHJlcEtleUJpbmRpbmdzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9rZXlCaW5kaW5ncyA9IHt9O1xuXG4gICAgdGhpcy5fY29sbGVjdEtleUJpbmRpbmdzKCkuZm9yRWFjaChmdW5jdGlvbihrZXlCaW5kaW5ncykge1xuICAgICAgZm9yICh2YXIgZXZlbnRTdHJpbmcgaW4ga2V5QmluZGluZ3MpIHtcbiAgICAgICAgdGhpcy5fYWRkS2V5QmluZGluZyhldmVudFN0cmluZywga2V5QmluZGluZ3NbZXZlbnRTdHJpbmddKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGZvciAodmFyIGV2ZW50U3RyaW5nIGluIHRoaXMuX2ltcGVyYXRpdmVLZXlCaW5kaW5ncykge1xuICAgICAgdGhpcy5fYWRkS2V5QmluZGluZyhcbiAgICAgICAgICBldmVudFN0cmluZywgdGhpcy5faW1wZXJhdGl2ZUtleUJpbmRpbmdzW2V2ZW50U3RyaW5nXSk7XG4gICAgfVxuXG4gICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGNvbWJvcyB3aXRoIG1vZGlmaWVycyB0byBiZSBjaGVja2VkIGZpcnN0LlxuICAgIGZvciAodmFyIGV2ZW50TmFtZSBpbiB0aGlzLl9rZXlCaW5kaW5ncykge1xuICAgICAgdGhpcy5fa2V5QmluZGluZ3NbZXZlbnROYW1lXS5zb3J0KGZ1bmN0aW9uKGtiMSwga2IyKSB7XG4gICAgICAgIHZhciBiMSA9IGtiMVswXS5oYXNNb2RpZmllcnM7XG4gICAgICAgIHZhciBiMiA9IGtiMlswXS5oYXNNb2RpZmllcnM7XG4gICAgICAgIHJldHVybiAoYjEgPT09IGIyKSA/IDAgOiBiMSA/IC0xIDogMTtcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIF9hZGRLZXlCaW5kaW5nOiBmdW5jdGlvbihldmVudFN0cmluZywgaGFuZGxlck5hbWUpIHtcbiAgICBwYXJzZUV2ZW50U3RyaW5nKGV2ZW50U3RyaW5nKS5mb3JFYWNoKGZ1bmN0aW9uKGtleUNvbWJvKSB7XG4gICAgICB0aGlzLl9rZXlCaW5kaW5nc1trZXlDb21iby5ldmVudF0gPVxuICAgICAgICAgIHRoaXMuX2tleUJpbmRpbmdzW2tleUNvbWJvLmV2ZW50XSB8fCBbXTtcblxuICAgICAgdGhpcy5fa2V5QmluZGluZ3Nba2V5Q29tYm8uZXZlbnRdLnB1c2goW2tleUNvbWJvLCBoYW5kbGVyTmFtZV0pO1xuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF9yZXNldEtleUV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91bmxpc3RlbktleUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5LZXlFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgfSxcblxuICBfbGlzdGVuS2V5RXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5rZXlFdmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyh0aGlzLl9rZXlCaW5kaW5ncykuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgIHZhciBrZXlCaW5kaW5ncyA9IHRoaXMuX2tleUJpbmRpbmdzW2V2ZW50TmFtZV07XG4gICAgICB2YXIgYm91bmRLZXlIYW5kbGVyID0gdGhpcy5fb25LZXlCaW5kaW5nRXZlbnQuYmluZCh0aGlzLCBrZXlCaW5kaW5ncyk7XG5cbiAgICAgIHRoaXMuX2JvdW5kS2V5SGFuZGxlcnMucHVzaChcbiAgICAgICAgICBbdGhpcy5rZXlFdmVudFRhcmdldCwgZXZlbnROYW1lLCBib3VuZEtleUhhbmRsZXJdKTtcblxuICAgICAgdGhpcy5rZXlFdmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRLZXlIYW5kbGVyKTtcbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICBfdW5saXN0ZW5LZXlFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleUhhbmRsZXJUdXBsZTtcbiAgICB2YXIga2V5RXZlbnRUYXJnZXQ7XG4gICAgdmFyIGV2ZW50TmFtZTtcbiAgICB2YXIgYm91bmRLZXlIYW5kbGVyO1xuXG4gICAgd2hpbGUgKHRoaXMuX2JvdW5kS2V5SGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAvLyBNeSBraW5nZG9tIGZvciBibG9jay1zY29wZSBiaW5kaW5nIGFuZCBkZXN0cnVjdHVyaW5nIGFzc2lnbm1lbnQuLlxuICAgICAga2V5SGFuZGxlclR1cGxlID0gdGhpcy5fYm91bmRLZXlIYW5kbGVycy5wb3AoKTtcbiAgICAgIGtleUV2ZW50VGFyZ2V0ID0ga2V5SGFuZGxlclR1cGxlWzBdO1xuICAgICAgZXZlbnROYW1lID0ga2V5SGFuZGxlclR1cGxlWzFdO1xuICAgICAgYm91bmRLZXlIYW5kbGVyID0ga2V5SGFuZGxlclR1cGxlWzJdO1xuXG4gICAgICBrZXlFdmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRLZXlIYW5kbGVyKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uS2V5QmluZGluZ0V2ZW50OiBmdW5jdGlvbihrZXlCaW5kaW5ncywgZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zdG9wS2V5Ym9hcmRFdmVudFByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBpZiBldmVudCBoYXMgYmVlbiBhbHJlYWR5IHByZXZlbnRlZCwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5QmluZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXlDb21ibyA9IGtleUJpbmRpbmdzW2ldWzBdO1xuICAgICAgdmFyIGhhbmRsZXJOYW1lID0ga2V5QmluZGluZ3NbaV1bMV07XG4gICAgICBpZiAoa2V5Q29tYm9NYXRjaGVzRXZlbnQoa2V5Q29tYm8sIGV2ZW50KSkge1xuICAgICAgICB0aGlzLl90cmlnZ2VyS2V5SGFuZGxlcihrZXlDb21ibywgaGFuZGxlck5hbWUsIGV2ZW50KTtcbiAgICAgICAgLy8gZXhpdCB0aGUgbG9vcCBpZiBldmVudERlZmF1bHQgd2FzIHByZXZlbnRlZFxuICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfdHJpZ2dlcktleUhhbmRsZXI6IGZ1bmN0aW9uKGtleUNvbWJvLCBoYW5kbGVyTmFtZSwga2V5Ym9hcmRFdmVudCkge1xuICAgIHZhciBkZXRhaWwgPSBPYmplY3QuY3JlYXRlKGtleUNvbWJvKTtcbiAgICBkZXRhaWwua2V5Ym9hcmRFdmVudCA9IGtleWJvYXJkRXZlbnQ7XG4gICAgdmFyIGV2ZW50ID1cbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KGtleUNvbWJvLmV2ZW50LCB7ZGV0YWlsOiBkZXRhaWwsIGNhbmNlbGFibGU6IHRydWV9KTtcbiAgICB0aGlzW2hhbmRsZXJOYW1lXS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAga2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uQ29udHJvbFN0YXRlID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBlbGVtZW50IGN1cnJlbnRseSBoYXMgZm9jdXMuXG4gICAgICovXG4gICAgZm9jdXNlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoaXMgZWxlbWVudC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCcsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGJlZm9yZSBgZGlzYWJsZWRgIHdhcyBhY3RpdmF0ZWQuXG4gICAgICogYG51bGxgIG1lYW5zIHRoZSBhdHRyaWJ1dGUgd2FzIG5vdCBwcmVzZW50LlxuICAgICAqIEB0eXBlIHs/c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBfb2xkVGFiSW5kZXg6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgX2JvdW5kRm9jdXNCbHVySGFuZGxlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb2N1c0JsdXJIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfY2hhbmdlZENvbnRyb2xTdGF0ZShmb2N1c2VkLCBkaXNhYmxlZCknXSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYm91bmRGb2N1c0JsdXJIYW5kbGVyLCB0cnVlKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZEZvY3VzQmx1ckhhbmRsZXIsIHRydWUpO1xuICB9LFxuXG4gIF9mb2N1c0JsdXJIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFBvbHltZXIgdGFrZXMgY2FyZSBvZiByZXRhcmdldGluZyBldmVudHMuXG4gICAgdGhpcy5fc2V0Rm9jdXNlZChldmVudC50eXBlID09PSAnZm9jdXMnKTtcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgX2Rpc2FibGVkQ2hhbmdlZDogZnVuY3Rpb24oZGlzYWJsZWQsIG9sZCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZGlzYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB0aGlzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBkaXNhYmxlZCA/ICdub25lJyA6ICcnO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgLy8gUmVhZCB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaW5zdGVhZCBvZiB0aGUgYHRhYkluZGV4YCBwcm9wZXJ0eS5cbiAgICAgIC8vIFRoZSBwcm9wZXJ0eSByZXR1cm5zIGAtMWAgaWYgdGhlcmUgaXMgbm8gYHRhYmluZGV4YCBhdHRyaWJ1dGUuXG4gICAgICAvLyBUaGlzIGRpc3RpbmN0aW9uIGlzIGltcG9ydGFudCB3aGVuIHJlc3RvcmluZyB0aGUgdmFsdWUgYmVjYXVzZVxuICAgICAgLy8gbGVhdmluZyBgLTFgIGhpZGVzIHNoYWRvdyByb290IGNoaWxkcmVuIGZyb20gdGhlIHRhYiBvcmRlci5cbiAgICAgIHRoaXMuX29sZFRhYkluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgIHRoaXMudGFiSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb2xkVGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX29sZFRhYkluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fb2xkVGFiSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfY2hhbmdlZENvbnRyb2xTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gX2NvbnRyb2xTdGF0ZUNoYW5nZWQgaXMgYWJzdHJhY3QsIGZvbGxvdy1vbiBiZWhhdmlvcnMgbWF5IGltcGxlbWVudCBpdFxuICAgIGlmICh0aGlzLl9jb250cm9sU3RhdGVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9jb250cm9sU3RhdGVDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbk92ZXJsYXlCZWhhdmlvciwgSXJvbk92ZXJsYXlCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLXJ1bm5lci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYDxpcm9uLWRyb3Bkb3duPmAgaXMgYSBnZW5lcmFsaXplZCBlbGVtZW50IHRoYXQgaXMgdXNlZnVsIHdoZW4geW91IGhhdmVcbmhpZGRlbiBjb250ZW50IChgZHJvcGRvd24tY29udGVudGApIHRoYXQgaXMgcmV2ZWFsZWQgZHVlIHRvIHNvbWUgY2hhbmdlIGluXG5zdGF0ZSB0aGF0IHNob3VsZCBjYXVzZSBpdCB0byBkbyBzby5cblxuTm90ZSB0aGF0IHRoaXMgaXMgYSBsb3ctbGV2ZWwgZWxlbWVudCBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIHBhcnQgb2Ygb3RoZXJcbmNvbXBvc2l0ZSBlbGVtZW50cyB0aGF0IGNhdXNlIGRyb3Bkb3ducyB0byBiZSByZXZlYWxlZC5cblxuRXhhbXBsZXMgb2YgZWxlbWVudHMgdGhhdCBtaWdodCBiZSBpbXBsZW1lbnRlZCB1c2luZyBhbiBgaXJvbi1kcm9wZG93bmBcbmluY2x1ZGUgY29tYm9ib3hlcywgbWVudWJ1dHRvbnMsIHNlbGVjdHMuIFRoZSBsaXN0IGdvZXMgb24uXG5cblRoZSBgPGlyb24tZHJvcGRvd24+YCBlbGVtZW50IGV4cG9zZXMgYXR0cmlidXRlcyB0aGF0IGFsbG93IHRoZSBwb3NpdGlvblxub2YgdGhlIGBkcm9wZG93bi1jb250ZW50YCByZWxhdGl2ZSB0byB0aGUgYGRyb3Bkb3duLXRyaWdnZXJgIHRvIGJlXG5jb25maWd1cmVkLlxuXG4gICAgPGlyb24tZHJvcGRvd24gaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCIgdmVydGljYWwtYWxpZ249XCJ0b3BcIj5cbiAgICAgIDxkaXYgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5IZWxsbyE8L2Rpdj5cbiAgICA8L2lyb24tZHJvcGRvd24+XG5cbkluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgYDxkaXY+YCBhc3NpZ25lZCB0byB0aGUgYGRyb3Bkb3duLWNvbnRlbnRgIHNsb3Qgd2lsbFxuYmUgaGlkZGVuIHVudGlsIHRoZSBkcm9wZG93biBlbGVtZW50IGhhcyBgb3BlbmVkYCBzZXQgdG8gdHJ1ZSwgb3Igd2hlbiB0aGVcbmBvcGVuYCBtZXRob2QgaXMgY2FsbGVkIG9uIHRoZSBlbGVtZW50LlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgfVxuXG4gICAgICAjY29udGVudFdyYXBwZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50V3JhcHBlci5hbmltYXRpbmcgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50V3JhcHBlclwiPlxuICAgICAgPHNsb3QgaWQ9XCJjb250ZW50XCIgbmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnaXJvbi1kcm9wZG93bicsXG5cbiAgYmVoYXZpb3JzOiBbXG4gICAgSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBJcm9uQTExeUtleXNCZWhhdmlvcixcbiAgICBJcm9uT3ZlcmxheUJlaGF2aW9yLFxuICAgIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICBdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgZHJvcGRvd24gY29udGVudFxuICAgICAqIGhvcml6b250YWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbGVmdCcsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgZHJvcGRvd24gY29udGVudFxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICd0b3AnLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogQW4gYW5pbWF0aW9uIGNvbmZpZy4gSWYgcHJvdmlkZWQsIHRoaXMgd2lsbCBiZSB1c2VkIHRvIGFuaW1hdGUgdGhlXG4gICAgICogb3BlbmluZyBvZiB0aGUgZHJvcGRvd24uIFBhc3MgYW4gQXJyYXkgZm9yIG11bHRpcGxlIGFuaW1hdGlvbnMuXG4gICAgICogU2VlIGBuZW9uLWFuaW1hdGlvbmAgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBhbmltYXRpb24gY29uZmlndXJhdGlvblxuICAgICAqIGRldGFpbHMuXG4gICAgICovXG4gICAgb3BlbkFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBBbiBhbmltYXRpb24gY29uZmlnLiBJZiBwcm92aWRlZCwgdGhpcyB3aWxsIGJlIHVzZWQgdG8gYW5pbWF0ZSB0aGVcbiAgICAgKiBjbG9zaW5nIG9mIHRoZSBkcm9wZG93bi4gUGFzcyBhbiBBcnJheSBmb3IgbXVsdGlwbGUgYW5pbWF0aW9ucy5cbiAgICAgKiBTZWUgYG5lb24tYW5pbWF0aW9uYCBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGFuaW1hdGlvbiBjb25maWd1cmF0aW9uXG4gICAgICogZGV0YWlscy5cbiAgICAgKi9cbiAgICBjbG9zZUFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiBwcm92aWRlZCwgdGhpcyB3aWxsIGJlIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBmb2N1c2VkIHdoZW5cbiAgICAgKiB0aGUgZHJvcGRvd24gb3BlbnMuXG4gICAgICovXG4gICAgZm9jdXNUYXJnZXQ6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhbmltYXRpb25zIHdoZW4gb3BlbmluZyBhbmQgY2xvc2luZyB0aGVcbiAgICAgKiBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBub0FuaW1hdGlvbnM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgY29uc3RyYWluIHNjcm9sbGluZyBvbiB0aGUgcGFnZVxuICAgICAqIHRvIGl0c2VsZiB3aGVuIG9wZW5lZC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byBwcmV2ZW50IHNjcm9sbCBmcm9tIGJlaW5nIGNvbnN0cmFpbmVkXG4gICAgICogdG8gdGhlIGRyb3Bkb3duIHdoZW4gaXQgb3BlbnMuXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBhIHNob3J0Y3V0IHRvIHNldCBgc2Nyb2xsQWN0aW9uYCB0byBsb2NrIG9yIHJlZml0LlxuICAgICAqIFByZWZlciBkaXJlY3RseSBzZXR0aW5nIHRoZSBgc2Nyb2xsQWN0aW9uYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhbGxvd091dHNpZGVTY3JvbGw6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG9ic2VydmVyOiAnX2FsbG93T3V0c2lkZVNjcm9sbENoYW5nZWQnfVxuICB9LFxuXG4gIGxpc3RlbmVyczogeyduZW9uLWFuaW1hdGlvbi1maW5pc2gnOiAnX29uTmVvbkFuaW1hdGlvbkZpbmlzaCd9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfdXBkYXRlT3ZlcmxheVBvc2l0aW9uKHBvc2l0aW9uVGFyZ2V0LCB2ZXJ0aWNhbEFsaWduLCBob3Jpem9udGFsQWxpZ24sIHZlcnRpY2FsT2Zmc2V0LCBob3Jpem9udGFsT2Zmc2V0KSdcbiAgXSxcblxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdGhhdCBpcyBjb250YWluZWQgYnkgdGhlIGRyb3Bkb3duLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgY29udGFpbmVkRWxlbWVudCgpIHtcbiAgICAvLyBQb2x5bWVyIDIueCByZXR1cm5zIHNsb3QuYXNzaWduZWROb2RlcyB3aGljaCBjYW4gY29udGFpbiB0ZXh0IG5vZGVzLlxuICAgIHZhciBub2RlcyA9IGRvbSh0aGlzLiQuY29udGVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAobm9kZXNbaV0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEVuc3VyZSBzY3JvbGxBY3Rpb24gaXMgc2V0LlxuICAgIGlmICghdGhpcy5zY3JvbGxBY3Rpb24pIHtcbiAgICAgIHRoaXMuc2Nyb2xsQWN0aW9uID0gdGhpcy5hbGxvd091dHNpZGVTY3JvbGwgPyAncmVmaXQnIDogJ2xvY2snO1xuICAgIH1cbiAgICB0aGlzLl9yZWFkaWVkID0gdHJ1ZTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnNpemluZ1RhcmdldCB8fCB0aGlzLnNpemluZ1RhcmdldCA9PT0gdGhpcykge1xuICAgICAgdGhpcy5zaXppbmdUYXJnZXQgPSB0aGlzLmNvbnRhaW5lZEVsZW1lbnQgfHwgdGhpcztcbiAgICB9XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2YWx1ZSBvZiBgb3BlbmVkYCBjaGFuZ2VzLlxuICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLl91cGRhdGVBbmltYXRpb25Db25maWcoKTtcbiAgICAgIElyb25PdmVybGF5QmVoYXZpb3JJbXBsLl9vcGVuZWRDaGFuZ2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKi9cbiAgX3JlbmRlck9wZW5lZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm5vQW5pbWF0aW9ucyAmJiB0aGlzLmFuaW1hdGlvbkNvbmZpZy5vcGVuKSB7XG4gICAgICB0aGlzLiQuY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW5nJyk7XG4gICAgICB0aGlzLnBsYXlBbmltYXRpb24oJ29wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX3JlbmRlck9wZW5lZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICovXG4gIF9yZW5kZXJDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5ub0FuaW1hdGlvbnMgJiYgdGhpcy5hbmltYXRpb25Db25maWcuY2xvc2UpIHtcbiAgICAgIHRoaXMuJC5jb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRpbmcnKTtcbiAgICAgIHRoaXMucGxheUFuaW1hdGlvbignY2xvc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX3JlbmRlckNsb3NlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW5pbWF0aW9uIGZpbmlzaGVzIG9uIHRoZSBkcm9wZG93biAod2hlbiBvcGVuaW5nIG9yXG4gICAqIGNsb3NpbmcpLiBSZXNwb25zaWJsZSBmb3IgXCJjb21wbGV0aW5nXCIgdGhlIHByb2Nlc3Mgb2Ygb3BlbmluZyBvclxuICAgKiBjbG9zaW5nIHRoZSBkcm9wZG93biBieSBwb3NpdGlvbmluZyBpdCBvciBzZXR0aW5nIGl0cyBkaXNwbGF5IHRvXG4gICAqIG5vbmUuXG4gICAqL1xuICBfb25OZW9uQW5pbWF0aW9uRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQuY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW5nJyk7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9maW5pc2hSZW5kZXJPcGVuZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZmluaXNoUmVuZGVyQ2xvc2VkKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIHRoZSBmaW5hbCBhbmltYXRpb24gY29uZmlnIGZyb20gZGlmZmVyZW50IHByb3BlcnRpZXMgdXNlZFxuICAgKiB0byBjb25maWd1cmUgc3BlY2lmaWMgcGFydHMgb2YgdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIF91cGRhdGVBbmltYXRpb25Db25maWc6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgYW5pbWF0aW9uIG5vZGUgdG8gYmUgdGhlIGNvbnRhaW5lZEVsZW1lbnQuXG4gICAgdmFyIGFuaW1hdGlvbk5vZGUgPSB0aGlzLmNvbnRhaW5lZEVsZW1lbnQ7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBbXS5jb25jYXQodGhpcy5vcGVuQW5pbWF0aW9uQ29uZmlnIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy5jbG9zZUFuaW1hdGlvbkNvbmZpZyB8fCBbXSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbmltYXRpb25zW2ldLm5vZGUgPSBhbmltYXRpb25Ob2RlO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHtcbiAgICAgIG9wZW46IHRoaXMub3BlbkFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIGNsb3NlOiB0aGlzLmNsb3NlQW5pbWF0aW9uQ29uZmlnXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBwb3NpdGlvbiBiYXNlZCBvbiBjb25maWd1cmVkIGhvcml6b250YWxcbiAgICogYW5kIHZlcnRpY2FsIGFsaWdubWVudC5cbiAgICovXG4gIF91cGRhdGVPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgaXJvbi1yZXNpemUsIGFuZCBpcm9uLW92ZXJsYXktYmVoYXZpb3Igd2lsbCBjYWxsIHJlZml0IGlmXG4gICAgICAvLyBuZWVkZWQuXG4gICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBzY3JvbGxBY3Rpb24gYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiBhbGxvd091dHNpZGVTY3JvbGwuXG4gICAqIFByZWZlciBzZXR0aW5nIGRpcmVjdGx5IHNjcm9sbEFjdGlvbi5cbiAgICovXG4gIF9hbGxvd091dHNpZGVTY3JvbGxDaGFuZ2VkOiBmdW5jdGlvbihhbGxvd091dHNpZGVTY3JvbGwpIHtcbiAgICAvLyBXYWl0IHVudGlsIGluaXRpYWwgdmFsdWVzIGFyZSBhbGwgc2V0LlxuICAgIGlmICghdGhpcy5fcmVhZGllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWFsbG93T3V0c2lkZVNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxBY3Rpb24gPSAnbG9jayc7XG4gICAgfSBlbHNlIGlmICghdGhpcy5zY3JvbGxBY3Rpb24gfHwgdGhpcy5zY3JvbGxBY3Rpb24gPT09ICdsb2NrJykge1xuICAgICAgdGhpcy5zY3JvbGxBY3Rpb24gPSAncmVmaXQnO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQXBwbHkgZm9jdXMgdG8gZm9jdXNUYXJnZXQgb3IgY29udGFpbmVkRWxlbWVudFxuICAgKi9cbiAgX2FwcGx5Rm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb2N1c1RhcmdldCA9IHRoaXMuZm9jdXNUYXJnZXQgfHwgdGhpcy5jb250YWluZWRFbGVtZW50O1xuICAgIGlmIChmb2N1c1RhcmdldCAmJiB0aGlzLm9wZW5lZCAmJiAhdGhpcy5ub0F1dG9Gb2N1cykge1xuICAgICAgZm9jdXNUYXJnZXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX2FwcGx5Rm9jdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG5gUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgIGZpdHMgYW4gZWxlbWVudCBpbiBhbm90aGVyIGVsZW1lbnQgdXNpbmcgYG1heC1oZWlnaHRgXG5hbmQgYG1heC13aWR0aGAsIGFuZCBvcHRpb25hbGx5IGNlbnRlcnMgaXQgaW4gdGhlIHdpbmRvdyBvciBhbm90aGVyIGVsZW1lbnQuXG5cblRoZSBlbGVtZW50IHdpbGwgb25seSBiZSBzaXplZCBhbmQvb3IgcG9zaXRpb25lZCBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlblxuc2l6ZWQgYW5kL29yIHBvc2l0aW9uZWQgYnkgQ1NTLlxuXG5DU1MgcHJvcGVydGllcyAgICAgICAgICAgIHwgQWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gcG9zaXRpb25gIHNldCAgICAgICAgICAgIHwgRWxlbWVudCBpcyBub3QgY2VudGVyZWQgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHlcbmB0b3BgIG9yIGBib3R0b21gIHNldCAgICAgfCBFbGVtZW50IGlzIG5vdCB2ZXJ0aWNhbGx5IGNlbnRlcmVkXG5gbGVmdGAgb3IgYHJpZ2h0YCBzZXQgICAgIHwgRWxlbWVudCBpcyBub3QgaG9yaXpvbnRhbGx5IGNlbnRlcmVkXG5gbWF4LWhlaWdodGAgc2V0ICAgICAgICAgIHwgRWxlbWVudCByZXNwZWN0cyBgbWF4LWhlaWdodGBcbmBtYXgtd2lkdGhgIHNldCAgICAgICAgICAgfCBFbGVtZW50IHJlc3BlY3RzIGBtYXgtd2lkdGhgXG5cbmBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAgY2FuIHBvc2l0aW9uIGFuIGVsZW1lbnQgaW50byBhbm90aGVyIGVsZW1lbnQgdXNpbmdcbmB2ZXJ0aWNhbEFsaWduYCBhbmQgYGhvcml6b250YWxBbGlnbmAuIFRoaXMgd2lsbCBvdmVycmlkZSB0aGUgZWxlbWVudCdzIGNzc1xucG9zaXRpb24uXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aXJvbi1maXQtaW1wbCB2ZXJ0aWNhbC1hbGlnbj1cInRvcFwiIGhvcml6b250YWwtYWxpZ249XCJhdXRvXCI+XG4gICAgICAgIFBvc2l0aW9uZWQgaW50byB0aGUgY29udGFpbmVyXG4gICAgICA8L2lyb24tZml0LWltcGw+XG4gICAgPC9kaXY+XG5cblVzZSBgbm9PdmVybGFwYCB0byBwb3NpdGlvbiB0aGUgZWxlbWVudCBhcm91bmQgYW5vdGhlciBlbGVtZW50IHdpdGhvdXRcbm92ZXJsYXBwaW5nIGl0LlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGlyb24tZml0LWltcGwgbm8tb3ZlcmxhcCB2ZXJ0aWNhbC1hbGlnbj1cImF1dG9cIiBob3Jpem9udGFsLWFsaWduPVwiYXV0b1wiPlxuICAgICAgICBQb3NpdGlvbmVkIGFyb3VuZCB0aGUgY29udGFpbmVyXG4gICAgICA8L2lyb24tZml0LWltcGw+XG4gICAgPC9kaXY+XG5cblVzZSBgaG9yaXpvbnRhbE9mZnNldCwgdmVydGljYWxPZmZzZXRgIHRvIG9mZnNldCB0aGUgZWxlbWVudCBmcm9tIGl0c1xuYHBvc2l0aW9uVGFyZ2V0YDsgYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYCB3aWxsIGNvbGxhcHNlIHRoZXNlIGluIG9yZGVyIHRvXG5rZWVwIHRoZSBlbGVtZW50IHdpdGhpbiBgZml0SW50b2AgYm91bmRhcmllcywgd2hpbGUgcHJlc2VydmluZyB0aGUgZWxlbWVudCdzXG5DU1MgbWFyZ2luIHZhbHVlcy5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpcm9uLWZpdC1pbXBsIHZlcnRpY2FsLWFsaWduPVwidG9wXCIgdmVydGljYWwtb2Zmc2V0PVwiMjBcIj5cbiAgICAgICAgV2l0aCB2ZXJ0aWNhbCBvZmZzZXRcbiAgICAgIDwvaXJvbi1maXQtaW1wbD5cbiAgICA8L2Rpdj5cblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AcG9seW1lckJlaGF2aW9yXG4qL1xuZXhwb3J0IGNvbnN0IElyb25GaXRCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHdpbGwgcmVjZWl2ZSBhIGBtYXgtaGVpZ2h0YC9gd2lkdGhgLiBCeSBkZWZhdWx0IGl0IGlzXG4gICAgICogdGhlIHNhbWUgYXMgYHRoaXNgLCBidXQgaXQgY2FuIGJlIHNldCB0byBhIGNoaWxkIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsLFxuICAgICAqIGZvciBleGFtcGxlLCBmb3IgaW1wbGVtZW50aW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbiBpbnNpZGUgdGhlIGVsZW1lbnQuXG4gICAgICogQHR5cGUgeyFFbGVtZW50fVxuICAgICAqL1xuICAgIHNpemluZ1RhcmdldDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZml0IGB0aGlzYCBpbnRvLlxuICAgICAqL1xuICAgIGZpdEludG86IHt0eXBlOiBPYmplY3QsIHZhbHVlOiB3aW5kb3d9LFxuXG4gICAgLyoqXG4gICAgICogV2lsbCBwb3NpdGlvbiB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHBvc2l0aW9uVGFyZ2V0IHdpdGhvdXQgb3ZlcmxhcHBpbmdcbiAgICAgKiBpdC5cbiAgICAgKi9cbiAgICBub092ZXJsYXA6IHt0eXBlOiBCb29sZWFufSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcG9zaXRpb24gdGhlIGVsZW1lbnQuIElmIG5vdCBzZXQsIGl0XG4gICAgICogd2lsbCBkZWZhdWx0IHRvIHRoZSBwYXJlbnQgbm9kZS5cbiAgICAgKiBAdHlwZSB7IUVsZW1lbnR9XG4gICAgICovXG4gICAgcG9zaXRpb25UYXJnZXQ6IHt0eXBlOiBFbGVtZW50fSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBlbGVtZW50IGhvcml6b250YWxseVxuICAgICAqIHJlbGF0aXZlIHRvIHRoZSBgcG9zaXRpb25UYXJnZXRgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFwibGVmdFwiLCBcInJpZ2h0XCIsXG4gICAgICogXCJjZW50ZXJcIiwgXCJhdXRvXCIuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbEFsaWduOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBlbGVtZW50IHZlcnRpY2FsbHlcbiAgICAgKiByZWxhdGl2ZSB0byB0aGUgYHBvc2l0aW9uVGFyZ2V0YC4gUG9zc2libGUgdmFsdWVzIGFyZSBcInRvcFwiLCBcImJvdHRvbVwiLFxuICAgICAqIFwibWlkZGxlXCIsIFwiYXV0b1wiLlxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgaXQgd2lsbCB1c2UgYGhvcml6b250YWxBbGlnbmAgYW5kIGB2ZXJ0aWNhbEFsaWduYCB2YWx1ZXMgYXNcbiAgICAgKiBwcmVmZXJyZWQgYWxpZ25tZW50IGFuZCBpZiB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2UsIGl0IHdpbGwgcGljayB0aGVcbiAgICAgKiB2YWx1ZXMgd2hpY2ggbWluaW1pemUgdGhlIGNyb3BwaW5nLlxuICAgICAqL1xuICAgIGR5bmFtaWNBbGlnbjoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqXG4gICAgICogQSBwaXhlbCB2YWx1ZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvc2l0aW9uIGNhbGN1bGF0ZWQgZm9yIHRoZVxuICAgICAqIGdpdmVuIGBob3Jpem9udGFsQWxpZ25gLCBpbiB0aGUgZGlyZWN0aW9uIG9mIGFsaWdubWVudC4gWW91IGNhbiB0aGlua1xuICAgICAqIG9mIGl0IGFzIGluY3JlYXNpbmcgb3IgZGVjcmVhc2luZyB0aGUgZGlzdGFuY2UgdG8gdGhlIHNpZGUgb2YgdGhlXG4gICAgICogc2NyZWVuIGdpdmVuIGJ5IGBob3Jpem9udGFsQWxpZ25gLlxuICAgICAqXG4gICAgICogSWYgYGhvcml6b250YWxBbGlnbmAgaXMgXCJsZWZ0XCIgb3IgXCJjZW50ZXJcIiwgdGhpcyBvZmZzZXQgd2lsbCBpbmNyZWFzZSBvclxuICAgICAqIGRlY3JlYXNlIHRoZSBkaXN0YW5jZSB0byB0aGUgbGVmdCBzaWRlIG9mIHRoZSBzY3JlZW46IGEgbmVnYXRpdmUgb2Zmc2V0XG4gICAgICogd2lsbCBtb3ZlIHRoZSBkcm9wZG93biB0byB0aGUgbGVmdDsgYSBwb3NpdGl2ZSBvbmUsIHRvIHRoZSByaWdodC5cbiAgICAgKlxuICAgICAqIENvbnZlcnNlbHkgaWYgYGhvcml6b250YWxBbGlnbmAgaXMgXCJyaWdodFwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlXG4gICAgICogb3IgZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW46IGEgbmVnYXRpdmVcbiAgICAgKiBvZmZzZXQgd2lsbCBtb3ZlIHRoZSBkcm9wZG93biB0byB0aGUgcmlnaHQ7IGEgcG9zaXRpdmUgb25lLCB0byB0aGUgbGVmdC5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsT2Zmc2V0OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMCwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIEEgcGl4ZWwgdmFsdWUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBwb3NpdGlvbiBjYWxjdWxhdGVkIGZvciB0aGVcbiAgICAgKiBnaXZlbiBgdmVydGljYWxBbGlnbmAsIGluIHRoZSBkaXJlY3Rpb24gb2YgYWxpZ25tZW50LiBZb3UgY2FuIHRoaW5rXG4gICAgICogb2YgaXQgYXMgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nIHRoZSBkaXN0YW5jZSB0byB0aGUgc2lkZSBvZiB0aGVcbiAgICAgKiBzY3JlZW4gZ2l2ZW4gYnkgYHZlcnRpY2FsQWxpZ25gLlxuICAgICAqXG4gICAgICogSWYgYHZlcnRpY2FsQWxpZ25gIGlzIFwidG9wXCIgb3IgXCJtaWRkbGVcIiwgdGhpcyBvZmZzZXQgd2lsbCBpbmNyZWFzZSBvclxuICAgICAqIGRlY3JlYXNlIHRoZSBkaXN0YW5jZSB0byB0aGUgdG9wIHNpZGUgb2YgdGhlIHNjcmVlbjogYSBuZWdhdGl2ZSBvZmZzZXRcbiAgICAgKiB3aWxsIG1vdmUgdGhlIGRyb3Bkb3duIHVwd2FyZHM7IGEgcG9zaXRpdmUgb25lLCBkb3dud2FyZHMuXG4gICAgICpcbiAgICAgKiBDb252ZXJzZWx5IGlmIGB2ZXJ0aWNhbEFsaWduYCBpcyBcImJvdHRvbVwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlXG4gICAgICogb3IgZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSBib3R0b20gc2lkZSBvZiB0aGUgc2NyZWVuOiBhIG5lZ2F0aXZlXG4gICAgICogb2Zmc2V0IHdpbGwgbW92ZSB0aGUgZHJvcGRvd24gZG93bndhcmRzOyBhIHBvc2l0aXZlIG9uZSwgdXB3YXJkcy5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE9mZnNldDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLWZpdCBvbiBhdHRhY2guXG4gICAgICovXG4gICAgYXV0b0ZpdE9uQXR0YWNoOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKiBAdHlwZSB7P09iamVjdH0gKi9cbiAgICBfZml0SW5mbzoge3R5cGU6IE9iamVjdH1cbiAgfSxcblxuICBnZXQgX2ZpdFdpZHRoKCkge1xuICAgIHZhciBmaXRXaWR0aDtcbiAgICBpZiAodGhpcy5maXRJbnRvID09PSB3aW5kb3cpIHtcbiAgICAgIGZpdFdpZHRoID0gdGhpcy5maXRJbnRvLmlubmVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpdFdpZHRoID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gZml0V2lkdGg7XG4gIH0sXG5cbiAgZ2V0IF9maXRIZWlnaHQoKSB7XG4gICAgdmFyIGZpdEhlaWdodDtcbiAgICBpZiAodGhpcy5maXRJbnRvID09PSB3aW5kb3cpIHtcbiAgICAgIGZpdEhlaWdodCA9IHRoaXMuZml0SW50by5pbm5lckhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0SGVpZ2h0ID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGZpdEhlaWdodDtcbiAgfSxcblxuICBnZXQgX2ZpdExlZnQoKSB7XG4gICAgdmFyIGZpdExlZnQ7XG4gICAgaWYgKHRoaXMuZml0SW50byA9PT0gd2luZG93KSB7XG4gICAgICBmaXRMZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0TGVmdCA9IHRoaXMuZml0SW50by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gZml0TGVmdDtcbiAgfSxcblxuICBnZXQgX2ZpdFRvcCgpIHtcbiAgICB2YXIgZml0VG9wO1xuICAgIGlmICh0aGlzLmZpdEludG8gPT09IHdpbmRvdykge1xuICAgICAgZml0VG9wID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0VG9wID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB9XG4gICAgcmV0dXJuIGZpdFRvcDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwb3NpdGlvbiB0aGUgZWxlbWVudCxcbiAgICogaWYgbm8gcG9zaXRpb24gdGFyZ2V0IGlzIGNvbmZpZ3VyZWQuXG4gICAqL1xuICBnZXQgX2RlZmF1bHRQb3NpdGlvblRhcmdldCgpIHtcbiAgICB2YXIgcGFyZW50ID0gZG9tKHRoaXMpLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuaG9zdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgaG9yaXpvbnRhbCBhbGlnbiB2YWx1ZSwgYWNjb3VudGluZyBmb3IgdGhlIFJUTC9MVFIgdGV4dCBkaXJlY3Rpb24uXG4gICAqL1xuICBnZXQgX2xvY2FsZUhvcml6b250YWxBbGlnbigpIHtcbiAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgIC8vIEluIFJUTCwgXCJsZWZ0XCIgYmVjb21lcyBcInJpZ2h0XCIuXG4gICAgICBpZiAodGhpcy5ob3Jpem9udGFsQWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhvcml6b250YWxBbGlnbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHJldHVybiAncmlnaHQnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQWxpZ247XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHBvc2l0aW9uZWQgaW5zdGVhZCBvZiBjZW50ZXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBfX3Nob3VsZFBvc2l0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5ob3Jpem9udGFsQWxpZ24gfHwgdGhpcy52ZXJ0aWNhbEFsaWduKSAmJiB0aGlzLnBvc2l0aW9uVGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgaXMgUlRMLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IF9pc1JUTCgpIHtcbiAgICAvLyBNZW1vaXplIHRoaXMgdG8gYXZvaWQgZXhwZW5zaXZlIGNhbGN1bGF0aW9ucyAmIHJlbGF5b3V0cy5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG8gaXQgb25seSBvbmNlXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9tZW1vaXplZElzUlRMID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fbWVtb2l6ZWRJc1JUTCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21lbW9pemVkSXNSVEw7XG4gIH0sXG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvblRhcmdldCA9IHRoaXMucG9zaXRpb25UYXJnZXQgfHwgdGhpcy5fZGVmYXVsdFBvc2l0aW9uVGFyZ2V0O1xuICAgIGlmICh0aGlzLmF1dG9GaXRPbkF0dGFjaCkge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuZml0KCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOT1RFOiBzaGFkeWRvbSBhcHBsaWVzIGRpc3RyaWJ1dGlvbiBhc3luY2hyb25vdXNseVxuICAgICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyB3ZWJjb21wb25lbnRzL3NoYWR5ZG9tIzEyMFxuICAgICAgICAvLyBGbHVzaCB0byBnZXQgY29ycmVjdCBsYXlvdXQgaW5mby5cbiAgICAgICAgd2luZG93LlNoYWR5RE9NICYmIFNoYWR5RE9NLmZsdXNoKCk7XG4gICAgICAgIHRoaXMuZml0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fZGVmZXJyZWRGaXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9fZGVmZXJyZWRGaXQpO1xuICAgICAgdGhpcy5fX2RlZmVycmVkRml0ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyBhbmQgZml0cyB0aGUgZWxlbWVudCBpbnRvIHRoZSBgZml0SW50b2AgZWxlbWVudC5cbiAgICovXG4gIGZpdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbigpO1xuICAgIHRoaXMuY29uc3RyYWluKCk7XG4gICAgdGhpcy5jZW50ZXIoKTtcbiAgfSxcblxuICAvKipcbiAgICogTWVtb2l6ZSBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gcG9zaXRpb24gYW5kIHNpemUgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAc3VwcHJlc3Mge2RlcHJlY2F0ZWR9XG4gICAqL1xuICBfZGlzY292ZXJJbmZvOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZml0SW5mbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcyk7XG4gICAgdmFyIHNpemVyID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zaXppbmdUYXJnZXQpO1xuXG4gICAgdGhpcy5fZml0SW5mbyA9IHtcbiAgICAgIGlubGluZVN0eWxlOiB7XG4gICAgICAgIHRvcDogdGhpcy5zdHlsZS50b3AgfHwgJycsXG4gICAgICAgIGxlZnQ6IHRoaXMuc3R5bGUubGVmdCB8fCAnJyxcbiAgICAgICAgcG9zaXRpb246IHRoaXMuc3R5bGUucG9zaXRpb24gfHwgJydcbiAgICAgIH0sXG4gICAgICBzaXplcklubGluZVN0eWxlOiB7XG4gICAgICAgIG1heFdpZHRoOiB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5tYXhXaWR0aCB8fCAnJyxcbiAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5tYXhIZWlnaHQgfHwgJycsXG4gICAgICAgIGJveFNpemluZzogdGhpcy5zaXppbmdUYXJnZXQuc3R5bGUuYm94U2l6aW5nIHx8ICcnXG4gICAgICB9LFxuICAgICAgcG9zaXRpb25lZEJ5OiB7XG4gICAgICAgIHZlcnRpY2FsbHk6IHRhcmdldC50b3AgIT09ICdhdXRvJyA/XG4gICAgICAgICAgICAndG9wJyA6XG4gICAgICAgICAgICAodGFyZ2V0LmJvdHRvbSAhPT0gJ2F1dG8nID8gJ2JvdHRvbScgOiBudWxsKSxcbiAgICAgICAgaG9yaXpvbnRhbGx5OiB0YXJnZXQubGVmdCAhPT0gJ2F1dG8nID9cbiAgICAgICAgICAgICdsZWZ0JyA6XG4gICAgICAgICAgICAodGFyZ2V0LnJpZ2h0ICE9PSAnYXV0bycgPyAncmlnaHQnIDogbnVsbClcbiAgICAgIH0sXG4gICAgICBzaXplZEJ5OiB7XG4gICAgICAgIGhlaWdodDogc2l6ZXIubWF4SGVpZ2h0ICE9PSAnbm9uZScsXG4gICAgICAgIHdpZHRoOiBzaXplci5tYXhXaWR0aCAhPT0gJ25vbmUnLFxuICAgICAgICBtaW5XaWR0aDogcGFyc2VJbnQoc2l6ZXIubWluV2lkdGgsIDEwKSB8fCAwLFxuICAgICAgICBtaW5IZWlnaHQ6IHBhcnNlSW50KHNpemVyLm1pbkhlaWdodCwgMTApIHx8IDBcbiAgICAgIH0sXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwYXJzZUludCh0YXJnZXQubWFyZ2luVG9wLCAxMCkgfHwgMCxcbiAgICAgICAgcmlnaHQ6IHBhcnNlSW50KHRhcmdldC5tYXJnaW5SaWdodCwgMTApIHx8IDAsXG4gICAgICAgIGJvdHRvbTogcGFyc2VJbnQodGFyZ2V0Lm1hcmdpbkJvdHRvbSwgMTApIHx8IDAsXG4gICAgICAgIGxlZnQ6IHBhcnNlSW50KHRhcmdldC5tYXJnaW5MZWZ0LCAxMCkgfHwgMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBwb3NpdGlvbiBhbmQgc2l6ZSBjb25zdHJhaW50cywgYW5kIGNsZWFyXG4gICAqIHRoZSBtZW1vaXplZCBkYXRhLlxuICAgKi9cbiAgcmVzZXRGaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmZvID0gdGhpcy5fZml0SW5mbyB8fCB7fTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBpbmZvLnNpemVySW5saW5lU3R5bGUpIHtcbiAgICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IGluZm8uc2l6ZXJJbmxpbmVTdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGluZm8uaW5saW5lU3R5bGUpIHtcbiAgICAgIHRoaXMuc3R5bGVbcHJvcGVydHldID0gaW5mby5pbmxpbmVTdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgdGhpcy5fZml0SW5mbyA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVxdWl2YWxlbnQgdG8gY2FsbGluZyBgcmVzZXRGaXQoKWAgYW5kIGBmaXQoKWAuIFVzZWZ1bCB0byBjYWxsIHRoaXMgYWZ0ZXJcbiAgICogdGhlIGVsZW1lbnQgb3IgdGhlIGBmaXRJbnRvYCBlbGVtZW50IGhhcyBiZWVuIHJlc2l6ZWQsIG9yIGlmIGFueSBvZiB0aGVcbiAgICogcG9zaXRpb25pbmcgcHJvcGVydGllcyAoZS5nLiBgaG9yaXpvbnRhbEFsaWduLCB2ZXJ0aWNhbEFsaWduYCkgaXMgdXBkYXRlZC5cbiAgICogSXQgcHJlc2VydmVzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHNpemluZ1RhcmdldC5cbiAgICovXG4gIHJlZml0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbFRvcDtcbiAgICB0aGlzLnJlc2V0Rml0KCk7XG4gICAgdGhpcy5maXQoKTtcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgZWxlbWVudCBhY2NvcmRpbmcgdG8gYGhvcml6b250YWxBbGlnbiwgdmVydGljYWxBbGlnbmAuXG4gICAqL1xuICBwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9fc2hvdWxkUG9zaXRpb24pIHtcbiAgICAgIC8vIG5lZWRzIHRvIGJlIGNlbnRlcmVkLCBhbmQgaXQgaXMgZG9uZSBhZnRlciBjb25zdHJhaW4uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc2NvdmVySW5mbygpO1xuXG4gICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgLy8gTmVlZCBib3JkZXItYm94IGZvciBtYXJnaW4vcGFkZGluZy5cbiAgICB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgLy8gU2V0IHRvIDAsIDAgaW4gb3JkZXIgdG8gZGlzY292ZXIgYW55IG9mZnNldCBjYXVzZWQgYnkgcGFyZW50IHN0YWNraW5nXG4gICAgLy8gY29udGV4dHMuXG4gICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5zdHlsZS50b3AgPSAnMHB4JztcblxuICAgIHZhciByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgcG9zaXRpb25SZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMucG9zaXRpb25UYXJnZXQpO1xuICAgIHZhciBmaXRSZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMuZml0SW50byk7XG5cbiAgICB2YXIgbWFyZ2luID0gdGhpcy5fZml0SW5mby5tYXJnaW47XG5cbiAgICAvLyBDb25zaWRlciB0aGUgbWFyZ2luIGFzIHBhcnQgb2YgdGhlIHNpemUgZm9yIHBvc2l0aW9uIGNhbGN1bGF0aW9ucy5cbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b21cbiAgICB9O1xuXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fX2dldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLl9sb2NhbGVIb3Jpem9udGFsQWxpZ24sXG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbixcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgcmVjdCxcbiAgICAgICAgcG9zaXRpb25SZWN0LFxuICAgICAgICBmaXRSZWN0KTtcblxuICAgIHZhciBsZWZ0ID0gcG9zaXRpb24ubGVmdCArIG1hcmdpbi5sZWZ0O1xuICAgIHZhciB0b3AgPSBwb3NpdGlvbi50b3AgKyBtYXJnaW4udG9wO1xuXG4gICAgLy8gV2UgZmlyc3QgbGltaXQgcmlnaHQvYm90dG9tIHdpdGhpbiBmaXRJbnRvIHJlc3BlY3RpbmcgdGhlIG1hcmdpbixcbiAgICAvLyB0aGVuIHVzZSB0aG9zZSB2YWx1ZXMgdG8gbGltaXQgdG9wL2xlZnQuXG4gICAgdmFyIHJpZ2h0ID0gTWF0aC5taW4oZml0UmVjdC5yaWdodCAtIG1hcmdpbi5yaWdodCwgbGVmdCArIHJlY3Qud2lkdGgpO1xuICAgIHZhciBib3R0b20gPSBNYXRoLm1pbihmaXRSZWN0LmJvdHRvbSAtIG1hcmdpbi5ib3R0b20sIHRvcCArIHJlY3QuaGVpZ2h0KTtcblxuICAgIC8vIEtlZXAgbGVmdC90b3Agd2l0aGluIGZpdEludG8gcmVzcGVjdGluZyB0aGUgbWFyZ2luLlxuICAgIGxlZnQgPSBNYXRoLm1heChcbiAgICAgICAgZml0UmVjdC5sZWZ0ICsgbWFyZ2luLmxlZnQsXG4gICAgICAgIE1hdGgubWluKGxlZnQsIHJpZ2h0IC0gdGhpcy5fZml0SW5mby5zaXplZEJ5Lm1pbldpZHRoKSk7XG4gICAgdG9wID0gTWF0aC5tYXgoXG4gICAgICAgIGZpdFJlY3QudG9wICsgbWFyZ2luLnRvcCxcbiAgICAgICAgTWF0aC5taW4odG9wLCBib3R0b20gLSB0aGlzLl9maXRJbmZvLnNpemVkQnkubWluSGVpZ2h0KSk7XG5cbiAgICAvLyBVc2UgcmlnaHQvYm90dG9tIHRvIHNldCBtYXhXaWR0aC9tYXhIZWlnaHQsIGFuZCByZXNwZWN0XG4gICAgLy8gbWluV2lkdGgvbWluSGVpZ2h0LlxuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heFdpZHRoID1cbiAgICAgICAgTWF0aC5tYXgocmlnaHQgLSBsZWZ0LCB0aGlzLl9maXRJbmZvLnNpemVkQnkubWluV2lkdGgpICsgJ3B4JztcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5tYXhIZWlnaHQgPVxuICAgICAgICBNYXRoLm1heChib3R0b20gLSB0b3AsIHRoaXMuX2ZpdEluZm8uc2l6ZWRCeS5taW5IZWlnaHQpICsgJ3B4JztcblxuICAgIC8vIFJlbW92ZSB0aGUgb2Zmc2V0IGNhdXNlZCBieSBhbnkgc3RhY2tpbmcgY29udGV4dC5cbiAgICB0aGlzLnN0eWxlLmxlZnQgPSAobGVmdCAtIHJlY3QubGVmdCkgKyAncHgnO1xuICAgIHRoaXMuc3R5bGUudG9wID0gKHRvcCAtIHJlY3QudG9wKSArICdweCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnN0cmFpbnMgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgdG8gYGZpdEludG9gIGJ5IHNldHRpbmcgYG1heC1oZWlnaHRgXG4gICAqIGFuZC9vciBgbWF4LXdpZHRoYC5cbiAgICovXG4gIGNvbnN0cmFpbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19zaG91bGRQb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kaXNjb3ZlckluZm8oKTtcblxuICAgIHZhciBpbmZvID0gdGhpcy5fZml0SW5mbztcbiAgICAvLyBwb3NpdGlvbiBhdCAoMHB4LCAwcHgpIGlmIG5vdCBhbHJlYWR5IHBvc2l0aW9uZWQsIHNvIHdlIGNhbiBtZWFzdXJlIHRoZVxuICAgIC8vIG5hdHVyYWwgc2l6ZS5cbiAgICBpZiAoIWluZm8ucG9zaXRpb25lZEJ5LnZlcnRpY2FsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgdGhpcy5zdHlsZS50b3AgPSAnMHB4JztcbiAgICB9XG4gICAgaWYgKCFpbmZvLnBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgfVxuXG4gICAgLy8gbmVlZCBib3JkZXItYm94IGZvciBtYXJnaW4vcGFkZGluZ1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAvLyBjb25zdHJhaW4gdGhlIHdpZHRoIGFuZCBoZWlnaHQgaWYgbm90IGFscmVhZHkgc2V0XG4gICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghaW5mby5zaXplZEJ5LmhlaWdodCkge1xuICAgICAgdGhpcy5fX3NpemVEaW1lbnNpb24oXG4gICAgICAgICAgcmVjdCwgaW5mby5wb3NpdGlvbmVkQnkudmVydGljYWxseSwgJ3RvcCcsICdib3R0b20nLCAnSGVpZ2h0Jyk7XG4gICAgfVxuICAgIGlmICghaW5mby5zaXplZEJ5LndpZHRoKSB7XG4gICAgICB0aGlzLl9fc2l6ZURpbWVuc2lvbihcbiAgICAgICAgICByZWN0LCBpbmZvLnBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHksICdsZWZ0JywgJ3JpZ2h0JywgJ1dpZHRoJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBfc2l6ZURpbWVuc2lvbjogZnVuY3Rpb24ocmVjdCwgcG9zaXRpb25lZEJ5LCBzdGFydCwgZW5kLCBleHRlbnQpIHtcbiAgICB0aGlzLl9fc2l6ZURpbWVuc2lvbihyZWN0LCBwb3NpdGlvbmVkQnksIHN0YXJ0LCBlbmQsIGV4dGVudCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3NpemVEaW1lbnNpb246IGZ1bmN0aW9uKHJlY3QsIHBvc2l0aW9uZWRCeSwgc3RhcnQsIGVuZCwgZXh0ZW50KSB7XG4gICAgdmFyIGluZm8gPSB0aGlzLl9maXRJbmZvO1xuICAgIHZhciBmaXRSZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMuZml0SW50byk7XG4gICAgdmFyIG1heCA9IGV4dGVudCA9PT0gJ1dpZHRoJyA/IGZpdFJlY3Qud2lkdGggOiBmaXRSZWN0LmhlaWdodDtcbiAgICB2YXIgZmxpcCA9IChwb3NpdGlvbmVkQnkgPT09IGVuZCk7XG4gICAgdmFyIG9mZnNldCA9IGZsaXAgPyBtYXggLSByZWN0W2VuZF0gOiByZWN0W3N0YXJ0XTtcbiAgICB2YXIgbWFyZ2luID0gaW5mby5tYXJnaW5bZmxpcCA/IHN0YXJ0IDogZW5kXTtcbiAgICB2YXIgb2Zmc2V0RXh0ZW50ID0gJ29mZnNldCcgKyBleHRlbnQ7XG4gICAgdmFyIHNpemluZ09mZnNldCA9IHRoaXNbb2Zmc2V0RXh0ZW50XSAtIHRoaXMuc2l6aW5nVGFyZ2V0W29mZnNldEV4dGVudF07XG4gICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGVbJ21heCcgKyBleHRlbnRdID1cbiAgICAgICAgKG1heCAtIG1hcmdpbiAtIG9mZnNldCAtIHNpemluZ09mZnNldCkgKyAncHgnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseSBpZiBub3QgYWxyZWFkeSBwb3NpdGlvbmVkLiBUaGlzIGFsc29cbiAgICogc2V0cyBgcG9zaXRpb246Zml4ZWRgLlxuICAgKi9cbiAgY2VudGVyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3Nob3VsZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc2NvdmVySW5mbygpO1xuXG4gICAgdmFyIHBvc2l0aW9uZWRCeSA9IHRoaXMuX2ZpdEluZm8ucG9zaXRpb25lZEJ5O1xuICAgIGlmIChwb3NpdGlvbmVkQnkudmVydGljYWxseSAmJiBwb3NpdGlvbmVkQnkuaG9yaXpvbnRhbGx5KSB7XG4gICAgICAvLyBBbHJlYWR5IHBvc2l0aW9uZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE5lZWQgcG9zaXRpb246Zml4ZWQgdG8gY2VudGVyXG4gICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgLy8gVGFrZSBpbnRvIGFjY291bnQgdGhlIG9mZnNldCBjYXVzZWQgYnkgcGFyZW50cyB0aGF0IGNyZWF0ZSBzdGFja2luZ1xuICAgIC8vIGNvbnRleHRzIChlLmcuIHdpdGggdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCkuIFRyYW5zbGF0ZSB0byAwLDAgYW5kXG4gICAgLy8gbWVhc3VyZSB0aGUgYm91bmRpbmcgcmVjdC5cbiAgICBpZiAoIXBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5KSB7XG4gICAgICB0aGlzLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBpZiAoIXBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIH1cbiAgICAvLyBJdCB3aWxsIHRha2UgaW4gY29uc2lkZXJhdGlvbiBtYXJnaW5zIGFuZCB0cmFuc2Zvcm1zXG4gICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBmaXRSZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMuZml0SW50byk7XG4gICAgaWYgKCFwb3NpdGlvbmVkQnkudmVydGljYWxseSkge1xuICAgICAgdmFyIHRvcCA9IGZpdFJlY3QudG9wIC0gcmVjdC50b3AgKyAoZml0UmVjdC5oZWlnaHQgLSByZWN0LmhlaWdodCkgLyAyO1xuICAgICAgdGhpcy5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgIH1cbiAgICBpZiAoIXBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIHZhciBsZWZ0ID0gZml0UmVjdC5sZWZ0IC0gcmVjdC5sZWZ0ICsgKGZpdFJlY3Qud2lkdGggLSByZWN0LndpZHRoKSAvIDI7XG4gICAgICB0aGlzLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICB9XG4gIH0sXG5cbiAgX19nZXROb3JtYWxpemVkUmVjdDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IHRhcmdldCA9PT0gd2luZG93KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0sXG5cbiAgX19nZXRPZmZzY3JlZW5BcmVhOiBmdW5jdGlvbihwb3NpdGlvbiwgc2l6ZSwgZml0UmVjdCkge1xuICAgIHZhciB2ZXJ0aWNhbENyb3AgPSBNYXRoLm1pbigwLCBwb3NpdGlvbi50b3ApICtcbiAgICAgICAgTWF0aC5taW4oMCwgZml0UmVjdC5ib3R0b20gLSAocG9zaXRpb24udG9wICsgc2l6ZS5oZWlnaHQpKTtcbiAgICB2YXIgaG9yaXpvbnRhbENyb3AgPSBNYXRoLm1pbigwLCBwb3NpdGlvbi5sZWZ0KSArXG4gICAgICAgIE1hdGgubWluKDAsIGZpdFJlY3QucmlnaHQgLSAocG9zaXRpb24ubGVmdCArIHNpemUud2lkdGgpKTtcbiAgICByZXR1cm4gTWF0aC5hYnModmVydGljYWxDcm9wKSAqIHNpemUud2lkdGggK1xuICAgICAgICBNYXRoLmFicyhob3Jpem9udGFsQ3JvcCkgKiBzaXplLmhlaWdodDtcbiAgfSxcblxuXG4gIF9fZ2V0UG9zaXRpb246IGZ1bmN0aW9uKFxuICAgICAgaEFsaWduLCB2QWxpZ24sIHNpemUsIHNpemVOb01hcmdpbnMsIHBvc2l0aW9uUmVjdCwgZml0UmVjdCkge1xuICAgIC8vIEFsbCB0aGUgcG9zc2libGUgY29uZmlndXJhdGlvbnMuXG4gICAgLy8gT3JkZXJlZCBhcyB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0LlxuICAgIHZhciBwb3NpdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgKyB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdyaWdodCcsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LnRvcCArIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5yaWdodCAtIHNpemUud2lkdGggLSB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQgLSB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQgLSB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QucmlnaHQgLSBzaXplLndpZHRoIC0gdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9XG4gICAgXTtcblxuICAgIGlmICh0aGlzLm5vT3ZlcmxhcCkge1xuICAgICAgLy8gRHVwbGljYXRlLlxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwb3NpdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBjb3B5ID0ge307XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwb3NpdGlvbnNbaV0pIHtcbiAgICAgICAgICBjb3B5W2tleV0gPSBwb3NpdGlvbnNbaV1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbnMucHVzaChjb3B5KTtcbiAgICAgIH1cbiAgICAgIC8vIEhvcml6b250YWwgb3ZlcmxhcCBvbmx5LlxuICAgICAgcG9zaXRpb25zWzBdLnRvcCA9IHBvc2l0aW9uc1sxXS50b3AgKz0gcG9zaXRpb25SZWN0LmhlaWdodDtcbiAgICAgIHBvc2l0aW9uc1syXS50b3AgPSBwb3NpdGlvbnNbM10udG9wIC09IHBvc2l0aW9uUmVjdC5oZWlnaHQ7XG4gICAgICAvLyBWZXJ0aWNhbCBvdmVybGFwIG9ubHkuXG4gICAgICBwb3NpdGlvbnNbNF0ubGVmdCA9IHBvc2l0aW9uc1s2XS5sZWZ0ICs9IHBvc2l0aW9uUmVjdC53aWR0aDtcbiAgICAgIHBvc2l0aW9uc1s1XS5sZWZ0ID0gcG9zaXRpb25zWzddLmxlZnQgLT0gcG9zaXRpb25SZWN0LndpZHRoO1xuICAgIH1cblxuICAgIC8vIENvbnNpZGVyIGF1dG8gYXMgbnVsbCBmb3IgY29kaW5nIGNvbnZlbmllbmNlLlxuICAgIHZBbGlnbiA9IHZBbGlnbiA9PT0gJ2F1dG8nID8gbnVsbCA6IHZBbGlnbjtcbiAgICBoQWxpZ24gPSBoQWxpZ24gPT09ICdhdXRvJyA/IG51bGwgOiBoQWxpZ247XG5cbiAgICBpZiAoIWhBbGlnbiB8fCBoQWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0ICtcbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC5oZWlnaHQgOiAwKSxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgLSBzaXplTm9NYXJnaW5zLndpZHRoIC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3Qud2lkdGggLyAyICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9KTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LmJvdHRvbSAtIHNpemUuaGVpZ2h0IC0gdGhpcy52ZXJ0aWNhbE9mZnNldCAtXG4gICAgICAgICAgICAodGhpcy5ub092ZXJsYXAgPyBwb3NpdGlvblJlY3QuaGVpZ2h0IDogMCksXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5sZWZ0IC0gc2l6ZU5vTWFyZ2lucy53aWR0aCAvIDIgK1xuICAgICAgICAgICAgcG9zaXRpb25SZWN0LndpZHRoIC8gMiArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2QWxpZ24gfHwgdkFsaWduID09PSAnbWlkZGxlJykge1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LnRvcCAtIHNpemVOb01hcmdpbnMuaGVpZ2h0IC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3QuaGVpZ2h0IC8gMiArIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5sZWZ0ICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0ICtcbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC53aWR0aCA6IDApXG4gICAgICB9KTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wIC0gc2l6ZU5vTWFyZ2lucy5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC5oZWlnaHQgLyAyICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCAtIHRoaXMuaG9yaXpvbnRhbE9mZnNldCAtXG4gICAgICAgICAgICAodGhpcy5ub092ZXJsYXAgPyBwb3NpdGlvblJlY3Qud2lkdGggOiAwKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZBbGlnbiA9PT0gJ21pZGRsZScgJiYgaEFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wIC0gc2l6ZU5vTWFyZ2lucy5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC5oZWlnaHQgLyAyICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgLSBzaXplTm9NYXJnaW5zLndpZHRoIC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3Qud2lkdGggLyAyICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb247XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYW5kaWRhdGUgPSBwb3NpdGlvbnNbaV07XG4gICAgICB2YXIgdkFsaWduT2sgPSBjYW5kaWRhdGUudmVydGljYWxBbGlnbiA9PT0gdkFsaWduO1xuICAgICAgdmFyIGhBbGlnbk9rID0gY2FuZGlkYXRlLmhvcml6b250YWxBbGlnbiA9PT0gaEFsaWduO1xuXG4gICAgICAvLyBJZiBib3RoIHZBbGlnbiBhbmQgaEFsaWduIGFyZSBkZWZpbmVkLCByZXR1cm4gZXhhY3QgbWF0Y2guXG4gICAgICAvLyBGb3IgZHluYW1pY0FsaWduIGFuZCBub092ZXJsYXAgd2UnbGwgaGF2ZSBtb3JlIHRoYW4gb25lIGNhbmRpZGF0ZSwgc29cbiAgICAgIC8vIHdlJ2xsIGhhdmUgdG8gY2hlY2sgdGhlIG9mZnNjcmVlbkFyZWEgdG8gbWFrZSB0aGUgYmVzdCBjaG9pY2UuXG4gICAgICBpZiAoIXRoaXMuZHluYW1pY0FsaWduICYmICF0aGlzLm5vT3ZlcmxhcCAmJiB2QWxpZ25PayAmJiBoQWxpZ25Paykge1xuICAgICAgICBwb3NpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsaWduIGlzIG9rIGlmIGFsaWdubWVudCBwcmVmZXJlbmNlcyBhcmUgcmVzcGVjdGVkLiBJZiBubyBwcmVmZXJlbmNlcyxcbiAgICAgIC8vIGl0IGlzIGNvbnNpZGVyZWQgb2suXG4gICAgICB2YXIgYWxpZ25PayA9ICghdkFsaWduIHx8IHZBbGlnbk9rKSAmJiAoIWhBbGlnbiB8fCBoQWxpZ25Payk7XG5cbiAgICAgIC8vIEZpbHRlciBvdXQgZWxlbWVudHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgYWxpZ25tZW50IChpZiBkZWZpbmVkKS5cbiAgICAgIC8vIFdpdGggZHluYW1pY0FsaWduLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIGFsbCB0aGUgcG9zaXRpb25zIHRvIGZpbmQgdGhlXG4gICAgICAvLyBvbmUgdGhhdCBtaW5pbWl6ZXMgdGhlIGNyb3BwZWQgYXJlYS5cbiAgICAgIGlmICghdGhpcy5keW5hbWljQWxpZ24gJiYgIWFsaWduT2spIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNhbmRpZGF0ZS5vZmZzY3JlZW5BcmVhID1cbiAgICAgICAgICB0aGlzLl9fZ2V0T2Zmc2NyZWVuQXJlYShjYW5kaWRhdGUsIHNpemUsIGZpdFJlY3QpO1xuICAgICAgLy8gSWYgbm90IGNyb3BwZWQgYW5kIHJlc3BlY3RzIHRoZSBhbGlnbiByZXF1aXJlbWVudHMsIGtlZXAgaXQuXG4gICAgICAvLyBUaGlzIGFsbG93cyB0byBwcmVmZXIgcG9zaXRpb25zIG92ZXJsYXBwaW5nIGhvcml6b250YWxseSBvdmVyIHRoZVxuICAgICAgLy8gb25lcyBvdmVybGFwcGluZyB2ZXJ0aWNhbGx5LlxuICAgICAgaWYgKGNhbmRpZGF0ZS5vZmZzY3JlZW5BcmVhID09PSAwICYmIGFsaWduT2spIHtcbiAgICAgICAgcG9zaXRpb24gPSBjYW5kaWRhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCBjYW5kaWRhdGU7XG4gICAgICB2YXIgZGlmZiA9IGNhbmRpZGF0ZS5vZmZzY3JlZW5BcmVhIC0gcG9zaXRpb24ub2Zmc2NyZWVuQXJlYTtcbiAgICAgIC8vIENoZWNrIHdoaWNoIGNyb3BzIGxlc3MuIElmIGl0IGNyb3BzIGVxdWFsbHksIGNoZWNrIGlmIGF0IGxlYXN0IG9uZVxuICAgICAgLy8gYWxpZ24gc2V0dGluZyBpcyBvay5cbiAgICAgIGlmIChkaWZmIDwgMCB8fCAoZGlmZiA9PT0gMCAmJiAodkFsaWduT2sgfHwgaEFsaWduT2spKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbnZhciBwID0gRWxlbWVudC5wcm90b3R5cGU7XG52YXIgbWF0Y2hlcyA9IHAubWF0Y2hlcyB8fCBwLm1hdGNoZXNTZWxlY3RvciB8fCBwLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIHAubXNNYXRjaGVzU2VsZWN0b3IgfHwgcC5vTWF0Y2hlc1NlbGVjdG9yIHx8IHAud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5jbGFzcyBJcm9uRm9jdXNhYmxlc0hlbHBlckNsYXNzIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgYSBlbGVtZW50IGlzIGZvY3VzYWJsZS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2MDAxOTQvNDIyODcwMzpcbiAgICAvLyBUaGVyZSBpc24ndCBhIGRlZmluaXRlIGxpc3QsIGl0J3MgdXAgdG8gdGhlIGJyb3dzZXIuIFRoZSBvbmx5XG4gICAgLy8gc3RhbmRhcmQgd2UgaGF2ZSBpcyBET00gTGV2ZWwgMiBIVE1MXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUhUTUwvaHRtbC5odG1sLCBhY2NvcmRpbmcgdG8gd2hpY2ggdGhlXG4gICAgLy8gb25seSBlbGVtZW50cyB0aGF0IGhhdmUgYSBmb2N1cygpIG1ldGhvZCBhcmUgSFRNTElucHV0RWxlbWVudCxcbiAgICAvLyBIVE1MU2VsZWN0RWxlbWVudCwgSFRNTFRleHRBcmVhRWxlbWVudCBhbmQgSFRNTEFuY2hvckVsZW1lbnQuIFRoaXNcbiAgICAvLyBub3RhYmx5IG9taXRzIEhUTUxCdXR0b25FbGVtZW50IGFuZCBIVE1MQXJlYUVsZW1lbnQuIFJlZmVycmluZyB0byB0aGVzZVxuICAgIC8vIHRlc3RzIHdpdGggdGFiYmFibGVzIGluIGRpZmZlcmVudCBicm93c2Vyc1xuICAgIC8vIGh0dHA6Ly9hbGx5anMuaW8vZGF0YS10YWJsZXMvZm9jdXNhYmxlLmh0bWxcblxuICAgIC8vIEVsZW1lbnRzIHRoYXQgY2Fubm90IGJlIGZvY3VzZWQgaWYgdGhleSBoYXZlIFtkaXNhYmxlZF0gYXR0cmlidXRlLlxuICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIG9iamVjdCcpKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKGVsZW1lbnQsICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgfVxuICAgIC8vIEVsZW1lbnRzIHRoYXQgY2FuIGJlIGZvY3VzZWQgZXZlbiBpZiB0aGV5IGhhdmUgW2Rpc2FibGVkXSBhdHRyaWJ1dGUuXG4gICAgcmV0dXJuIG1hdGNoZXMuY2FsbChcbiAgICAgICAgZWxlbWVudCwgJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlmcmFtZSwgW3RhYmluZGV4XSwgW2NvbnRlbnRFZGl0YWJsZV0nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGEgZWxlbWVudCBpcyB0YWJiYWJsZS4gVG8gYmUgdGFiYmFibGUsIGEgZWxlbWVudCBtdXN0IGJlXG4gICAqIGZvY3VzYWJsZSwgdmlzaWJsZSwgYW5kIHdpdGggYSB0YWJpbmRleCAhPT0gLTEuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1RhYmJhYmxlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZvY3VzYWJsZShlbGVtZW50KSAmJlxuICAgICAgICBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW3RhYmluZGV4PVwiLTFcIl0pJykgJiZcbiAgICAgICAgdGhpcy5faXNWaXNpYmxlKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgZWxlbWVudCB0YWJpbmRleC4gSWYgbm90IGZvY3VzYWJsZSwgcmV0dXJucyAtMS5cbiAgICogSXQgY2hlY2tzIGZvciB0aGUgYXR0cmlidXRlIFwidGFiaW5kZXhcIiBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IHByb3BlcnR5XG4gICAqIGB0YWJJbmRleGAgc2luY2UgYnJvd3NlcnMgYXNzaWduIGRpZmZlcmVudCB2YWx1ZXMgdG8gaXQuXG4gICAqIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4geyFudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5pc0ZvY3VzYWJsZShlbGVtZW50KSkge1xuICAgICAgdmFyIHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgMDtcbiAgICAgIHJldHVybiBOdW1iZXIodGFiSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIGlmICghdGhpcy5faXNWaXNpYmxlKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0YWJJbmRleCA9IHRoaXMuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSAnY29udGVudCcgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09ICdzbG90Jykge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYHZpc2liaWxpdHk6IGhpZGRlbmAgb3IgYGRpc3BsYXk6IG5vbmVgXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgZmlyc3QgdG8gc2F2ZSBhIHJlLWZsb3cuIElmIGxvb2tzIGdvb2QsIGNoZWNrIGFsc29cbiAgICAvLyBjb21wdXRlZCBzdHlsZS5cbiAgICB2YXIgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGlmIChzdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJiBzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyBhbiBhcnJheSBvZiB0YWJiYWJsZSBlbGVtZW50cyBieSB0YWJpbmRleC4gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gdGFiYmFibGVzXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NvcnRCeVRhYkluZGV4KHRhYmJhYmxlcykge1xuICAgIC8vIEltcGxlbWVudCBhIG1lcmdlIHNvcnQgYXMgQXJyYXkucHJvdG90eXBlLnNvcnQgZG9lcyBhIG5vbi1zdGFibGUgc29ydFxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnRcbiAgICB2YXIgbGVuID0gdGFiYmFibGVzLmxlbmd0aDtcbiAgICBpZiAobGVuIDwgMikge1xuICAgICAgcmV0dXJuIHRhYmJhYmxlcztcbiAgICB9XG4gICAgdmFyIHBpdm90ID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuICAgIHZhciBsZWZ0ID0gdGhpcy5fc29ydEJ5VGFiSW5kZXgodGFiYmFibGVzLnNsaWNlKDAsIHBpdm90KSk7XG4gICAgdmFyIHJpZ2h0ID0gdGhpcy5fc29ydEJ5VGFiSW5kZXgodGFiYmFibGVzLnNsaWNlKHBpdm90KSk7XG4gICAgcmV0dXJuIHRoaXMuX21lcmdlU29ydEJ5VGFiSW5kZXgobGVmdCwgcmlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHNvcnQgaXRlcmF0b3IsIG1lcmdlcyB0aGUgdHdvIGFycmF5cyBpbnRvIG9uZSwgc29ydGVkIGJ5IHRhYiBpbmRleC5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gbGVmdFxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByaWdodFxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9tZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHdoaWxlICgobGVmdC5sZW5ndGggPiAwKSAmJiAocmlnaHQubGVuZ3RoID4gMCkpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNMb3dlclRhYk9yZGVyKGxlZnRbMF0sIHJpZ2h0WzBdKSkge1xuICAgICAgICByZXN1bHQucHVzaChyaWdodC5zaGlmdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5jb25jYXQobGVmdCwgcmlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgZWxlbWVudCBgYWAgaGFzIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50IGBiYFxuICAgKiAoYm90aCBlbGVtZW50cyBhcmUgYXNzdW1lZCB0byBiZSBmb2N1c2FibGUgYW5kIHRhYmJhYmxlKS5cbiAgICogRWxlbWVudHMgd2l0aCB0YWJpbmRleCA9IDAgaGF2ZSBsb3dlciB0YWIgb3JkZXIgY29tcGFyZWQgdG8gZWxlbWVudHNcbiAgICogd2l0aCB0YWJpbmRleCA+IDAuXG4gICAqIElmIGJvdGggaGF2ZSBzYW1lIHRhYmluZGV4LCBpdCByZXR1cm5zIGZhbHNlLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gYVxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gYlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhc0xvd2VyVGFiT3JkZXIoYSwgYikge1xuICAgIC8vIE5vcm1hbGl6ZSB0YWJJbmRleGVzXG4gICAgLy8gZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAgICB2YXIgYXRpID0gTWF0aC5tYXgoYS50YWJJbmRleCwgMCk7XG4gICAgdmFyIGJ0aSA9IE1hdGgubWF4KGIudGFiSW5kZXgsIDApO1xuICAgIHJldHVybiAoYXRpID09PSAwIHx8IGJ0aSA9PT0gMCkgPyBidGkgPiBhdGkgOiBhdGkgPiBidGk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IElyb25Gb2N1c2FibGVzSGVscGVyID0gbmV3IElyb25Gb2N1c2FibGVzSGVscGVyQ2xhc3MoKTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuYGlyb24tb3ZlcmxheS1iYWNrZHJvcGAgaXMgYSBiYWNrZHJvcCB1c2VkIGJ5IGBQb2x5bWVyLklyb25PdmVybGF5QmVoYXZpb3JgLiBJdFxuc2hvdWxkIGJlIGEgc2luZ2xldG9uLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZy5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS1cbmAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yYCB8IEJhY2tkcm9wIGJhY2tncm91bmQgY29sb3IgfCAjMDAwXG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BhY2l0eWAgICAgICAgICAgfCBCYWNrZHJvcCBvcGFjaXR5IHwgMC42XG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3BgICAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIGBpcm9uLW92ZXJsYXktYmFja2Ryb3BgLiAgICAgICAgICAgICAgICAgICAgICB8IHt9XG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BlbmVkYCAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIGBpcm9uLW92ZXJsYXktYmFja2Ryb3BgIHdoZW4gaXQgaXMgZGlzcGxheWVkIHwge31cbiovXG5Qb2x5bWVyKHtcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXJvbi1vdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IsICMwMDApO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBAYXBwbHkgLS1pcm9uLW92ZXJsYXktYmFja2Ryb3A7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5vcGVuZWQpIHtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0taXJvbi1vdmVybGF5LWJhY2tkcm9wLW9wYWNpdHksIDAuNik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBAYXBwbHkgLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BlbmVkO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAnaXJvbi1vdmVybGF5LWJhY2tkcm9wJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJhY2tkcm9wIGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBvcGVuZWQ6IHtcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJyxcbiAgICB9XG5cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAndHJhbnNpdGlvbmVuZCc6ICdfb25UcmFuc2l0aW9uZW5kJyxcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZWQgdG8gY2FuY2VsIHByZXZpb3VzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBjYWxscyB3aGVuIG9wZW5lZCBjaGFuZ2VzLlxuICAgIHRoaXMuX19vcGVuZWRSYWYgPSBudWxsO1xuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3BlbmVkICYmIHRoaXMuX29wZW5lZENoYW5nZWQodGhpcy5vcGVuZWQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBiYWNrZHJvcCB0byBkb2N1bWVudCBib2R5IGlmIG5lZWRlZC5cbiAgICovXG4gIHByZXBhcmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICBkb20oZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgYmFja2Ryb3AuXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBiYWNrZHJvcC5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBiYWNrZHJvcCBmcm9tIGRvY3VtZW50IGJvZHkgaWYgbmVlZGVkLlxuICAgKi9cbiAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5vcGVuZWQgJiYgdGhpcy5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb20odGhpcy5wYXJlbnROb2RlKS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uVHJhbnNpdGlvbmVuZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5lZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKG9wZW5lZCkge1xuICAgIGlmIChvcGVuZWQpIHtcbiAgICAgIC8vIEF1dG8tYXR0YWNoLlxuICAgICAgdGhpcy5wcmVwYXJlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFuaW1hdGlvbiBtaWdodCBiZSBkaXNhYmxlZCB2aWEgdGhlIG1peGluIG9yIG9wYWNpdHkgY3VzdG9tIHByb3BlcnR5LlxuICAgICAgLy8gSWYgaXQgaXMgZGlzYWJsZWQgaW4gb3RoZXIgd2F5cywgaXQncyB1cCB0byB0aGUgdXNlciB0byBjYWxsIGNvbXBsZXRlLlxuICAgICAgdmFyIGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcyk7XG4gICAgICBpZiAoY3MudHJhbnNpdGlvbkR1cmF0aW9uID09PSAnMHMnIHx8IGNzLm9wYWNpdHkgPT0gMCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgY2FuY2VsIHByZXZpb3VzIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cbiAgICBpZiAodGhpcy5fX29wZW5lZFJhZikge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX19vcGVuZWRSYWYpO1xuICAgICAgdGhpcy5fX29wZW5lZFJhZiA9IG51bGw7XG4gICAgfVxuICAgIC8vIEZvcmNlIHJlbGF5b3V0IHRvIGVuc3VyZSBwcm9wZXIgdHJhbnNpdGlvbnMuXG4gICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICB0aGlzLl9fb3BlbmVkUmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19vcGVuZWRSYWYgPSBudWxsO1xuICAgICAgdGhpcy50b2dnbGVDbGFzcygnb3BlbmVkJywgdGhpcy5vcGVuZWQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25GaXRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1maXQtYmVoYXZpb3IvaXJvbi1maXQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHt1c2VTaGFkb3d9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3NldHRpbmdzLmpzJztcblxuaW1wb3J0IHtJcm9uRm9jdXNhYmxlc0hlbHBlcn0gZnJvbSAnLi9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzJztcbmltcG9ydCB7SXJvbk92ZXJsYXlNYW5hZ2VyLCBJcm9uT3ZlcmxheU1hbmFnZXJDbGFzc30gZnJvbSAnLi9pcm9uLW92ZXJsYXktbWFuYWdlci5qcyc7XG5pbXBvcnQge3B1c2hTY3JvbGxMb2NrLCByZW1vdmVTY3JvbGxMb2NrfSBmcm9tICcuL2lyb24tc2Nyb2xsLW1hbmFnZXIuanMnO1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25PdmVybGF5QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIG92ZXJsYXkgaXMgY3VycmVudGx5IGRpc3BsYXllZC5cbiAgICAgKi9cbiAgICBvcGVuZWQ6XG4gICAgICAgIHtvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJywgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgb3ZlcmxheSB3YXMgY2FuY2VsZWQgd2hlbiBpdCB3YXMgbGFzdCBjbG9zZWQuXG4gICAgICovXG4gICAgY2FuY2VsZWQ6IHtcbiAgICAgIG9ic2VydmVyOiAnX2NhbmNlbGVkQ2hhbmdlZCcsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzcGxheSBhIGJhY2tkcm9wIGJlaGluZCB0aGUgb3ZlcmxheS4gSXQgdHJhcHMgdGhlIGZvY3VzXG4gICAgICogd2l0aGluIHRoZSBsaWdodCBET00gb2YgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgd2l0aEJhY2tkcm9wOiB7XG4gICAgICBvYnNlcnZlcjogJ193aXRoQmFja2Ryb3BDaGFuZ2VkJyxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYXV0by1mb2N1c2luZyB0aGUgb3ZlcmxheSBvciBjaGlsZCBub2RlcyB3aXRoXG4gICAgICogdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZWAgd2hlbiB0aGUgb3ZlcmxheSBpcyBvcGVuZWQuXG4gICAgICovXG4gICAgbm9BdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgY2FuY2VsaW5nIHRoZSBvdmVybGF5IHdpdGggdGhlIEVTQyBrZXkuXG4gICAgICovXG4gICAgbm9DYW5jZWxPbkVzY0tleToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBjYW5jZWxpbmcgdGhlIG92ZXJsYXkgYnkgY2xpY2tpbmcgb3V0c2lkZSBpdC5cbiAgICAgKi9cbiAgICBub0NhbmNlbE9uT3V0c2lkZUNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyB0aGUgcmVhc29uKHMpIHRoaXMgb3ZlcmxheSB3YXMgbGFzdCBjbG9zZWQgKHNlZVxuICAgICAqIGBpcm9uLW92ZXJsYXktY2xvc2VkYCkuIGBJcm9uT3ZlcmxheUJlaGF2aW9yYCBwcm92aWRlcyB0aGUgYGNhbmNlbGVkYFxuICAgICAqIHJlYXNvbjsgaW1wbGVtZW50ZXJzIG9mIHRoZSBiZWhhdmlvciBjYW4gcHJvdmlkZSBvdGhlciByZWFzb25zIGluXG4gICAgICogYWRkaXRpb24gdG8gYGNhbmNlbGVkYC5cbiAgICAgKi9cbiAgICBjbG9zaW5nUmVhc29uOiB7XG4gICAgICAvLyB3YXMgYSBnZXR0ZXIgYmVmb3JlLCBidXQgbmVlZHMgdG8gYmUgYSBwcm9wZXJ0eSBzbyBvdGhlclxuICAgICAgLy8gYmVoYXZpb3JzIGNhbiBvdmVycmlkZSB0aGlzLlxuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgcmVzdG9yaW5nIG9mIGZvY3VzIHdoZW4gb3ZlcmxheSBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgcmVzdG9yZUZvY3VzT25DbG9zZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWxsb3cgY2xpY2tzIHRvIGdvIHRocm91Z2ggb3ZlcmxheXMuXG4gICAgICogV2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGlzIG92ZXJsYXksIHRoZSBjbGljayBtYXlcbiAgICAgKiBjbG9zZSB0aGUgb3ZlcmxheSBiZWxvdy5cbiAgICAgKi9cbiAgICBhbGxvd0NsaWNrVGhyb3VnaDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8ga2VlcCBvdmVybGF5IGFsd2F5cyBvbiB0b3AuXG4gICAgICovXG4gICAgYWx3YXlzT25Ub3A6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hpY2ggYWN0aW9uIHRvIHBlcmZvcm0gd2hlbiBzY3JvbGwgb3V0c2lkZSBhbiBvcGVuZWQgb3ZlcmxheVxuICAgICAqIGhhcHBlbnMuIFBvc3NpYmxlIHZhbHVlczogbG9jayAtIGJsb2NrcyBzY3JvbGxpbmcgZnJvbSBoYXBwZW5pbmcsIHJlZml0IC1cbiAgICAgKiBjb21wdXRlcyB0aGUgbmV3IHBvc2l0aW9uIG9uIHRoZSBvdmVybGF5IGNhbmNlbCAtIGNhdXNlcyB0aGUgb3ZlcmxheSB0b1xuICAgICAqIGNsb3NlXG4gICAgICovXG4gICAgc2Nyb2xsQWN0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0Y3V0IHRvIGFjY2VzcyB0byB0aGUgb3ZlcmxheSBtYW5hZ2VyLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFJcm9uT3ZlcmxheU1hbmFnZXJDbGFzc31cbiAgICAgKi9cbiAgICBfbWFuYWdlcjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IElyb25PdmVybGF5TWFuYWdlcixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5vZGUgYmVpbmcgZm9jdXNlZC5cbiAgICAgKiBAdHlwZSB7P05vZGV9XG4gICAgICovXG4gICAgX2ZvY3VzZWRDaGlsZDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH1cblxuICB9LFxuXG4gIGxpc3RlbmVyczogeydpcm9uLXJlc2l6ZSc6ICdfb25Jcm9uUmVzaXplJ30sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19fdXBkYXRlU2Nyb2xsT2JzZXJ2ZXJzKGlzQXR0YWNoZWQsIG9wZW5lZCwgc2Nyb2xsQWN0aW9uKSddLFxuXG4gIC8qKlxuICAgKiBUaGUgYmFja2Ryb3AgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUVsZW1lbnR9XG4gICAqL1xuICBnZXQgYmFja2Ryb3BFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9tYW5hZ2VyLmJhY2tkcm9wRWxlbWVudDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9kZSB0byBnaXZlIGZvY3VzIHRvLlxuICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICovXG4gIGdldCBfZm9jdXNOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkQ2hpbGQgfHwgZG9tKHRoaXMpLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdJykgfHwgdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQXJyYXkgb2Ygbm9kZXMgdGhhdCBjYW4gcmVjZWl2ZSBmb2N1cyAob3ZlcmxheSBpbmNsdWRlZCksIG9yZGVyZWQgYnlcbiAgICogYHRhYmluZGV4YC4gVGhpcyBpcyB1c2VkIHRvIHJldHJpZXZlIHdoaWNoIGlzIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGVcbiAgICogbm9kZXMgaW4gb3JkZXIgdG8gd3JhcCB0aGUgZm9jdXMgZm9yIG92ZXJsYXlzIGB3aXRoLWJhY2tkcm9wYC5cbiAgICpcbiAgICogSWYgeW91IGtub3cgd2hhdCBpcyB5b3VyIGNvbnRlbnQgKHNwZWNpZmljYWxseSB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlXG4gICAqIGNoaWxkcmVuKSwgeW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gb25seSBgW2ZpcnN0Rm9jdXNhYmxlLFxuICAgKiBsYXN0Rm9jdXNhYmxlXTtgXG4gICAqIEByZXR1cm4geyFBcnJheTwhTm9kZT59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCB0byBza2lwIGNhbGxzIHRvIG5vdGlmeVJlc2l6ZSBhbmQgcmVmaXQgd2hpbGUgdGhlIG92ZXJsYXkgaXNcbiAgICAvLyBhbmltYXRpbmcuXG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgLy8gd2l0aC1iYWNrZHJvcCBuZWVkcyB0YWJpbmRleCB0byBiZSBzZXQgaW4gb3JkZXIgdG8gdHJhcCB0aGUgZm9jdXMuXG4gICAgLy8gSWYgaXQgaXMgbm90IHNldCwgSXJvbk92ZXJsYXlCZWhhdmlvciB3aWxsIHNldCBpdCwgYW5kIHJlbW92ZSBpdCBpZlxuICAgIC8vIHdpdGgtYmFja2Ryb3AgPSBmYWxzZS5cbiAgICB0aGlzLl9fc2hvdWxkUmVtb3ZlVGFiSW5kZXggPSBmYWxzZTtcbiAgICAvLyBVc2VkIGZvciB3cmFwcGluZyB0aGUgZm9jdXMgb24gVEFCIC8gU2hpZnQrVEFCLlxuICAgIHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGUgPSB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgPSBudWxsO1xuICAgIC8vIFVzZWQgYnkgdG8ga2VlcCB0cmFjayBvZiB0aGUgUkFGIGNhbGxiYWNrcy5cbiAgICB0aGlzLl9fcmFmcyA9IHt9O1xuICAgIC8vIEZvY3VzZWQgbm9kZSBiZWZvcmUgb3ZlcmxheSBnZXRzIG9wZW5lZC4gQ2FuIGJlIHJlc3RvcmVkIG9uIGNsb3NlLlxuICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAvLyBTY3JvbGwgaW5mbyB0byBiZSByZXN0b3JlZC5cbiAgICB0aGlzLl9fc2Nyb2xsVG9wID0gdGhpcy5fX3Njcm9sbExlZnQgPSBudWxsO1xuICAgIHRoaXMuX19vbkNhcHR1cmVTY3JvbGwgPSB0aGlzLl9fb25DYXB0dXJlU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgLy8gUm9vdCBub2RlcyBob3N0aW5nIHRoZSBvdmVybGF5LCB1c2VkIHRvIGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50cyBvbiB0aGVtLlxuICAgIHRoaXMuX19yb290Tm9kZXMgPSBudWxsO1xuICAgIHRoaXMuX2Vuc3VyZVNldHVwKCk7XG4gIH0sXG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gQ2FsbCBfb3BlbmVkQ2hhbmdlZCBoZXJlIHNvIHRoYXQgcG9zaXRpb24gY2FuIGJlIGNvbXB1dGVkIGNvcnJlY3RseS5cbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZENoYW5nZWQodGhpcy5vcGVuZWQpO1xuICAgIH1cbiAgICB0aGlzLl9vYnNlcnZlciA9IGRvbSh0aGlzKS5vYnNlcnZlTm9kZXModGhpcy5fb25Ob2Rlc0NoYW5nZSk7XG4gIH0sXG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETyhiaWNrbmVsbHIpOiBQZXIgc3BlYywgY2hlY2tpbmcgYHRoaXMuX29ic2VydmVyYCBzaG91bGQgbmV2ZXIgYmVcbiAgICAvLyBuZWNlc3NhcnkgYmVjYXVzZSBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIHNob3VsZFxuICAgIC8vIGFsd2F5cyBiZSBjYWxsZWQgaW4gYWx0ZXJuYXRpbmcgb3JkZXIuIEhvd2V2ZXIsIHRoZSBjdXN0b20gZWxlbWVudHNcbiAgICAvLyBwb2x5ZmlsbCBkb2Vzbid0IGltcGxlbWVudCB0aGUgcmVhY3Rpb25zIHN0YWNrLCBzbyB0aGlzIGNhbiBzb21ldGltZXNcbiAgICAvLyBoYXBwZW4sIHBhcnRpY3VsYXJseSBpZiBTaGFkeURPTSBpcyBpbiBub1BhdGNoIG1vZGUgd2hlcmUgdGhlIGN1c3RvbVxuICAgIC8vIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluc3RhbGxlZCBiZWZvcmUgU2hhZHlET00uIFdlIHNob3VsZCBpbnZlc3RpZ2F0ZVxuICAgIC8vIHdoZXRoZXIgb3Igbm90IHdlIGNhbiBlaXRoZXIgaW1wbGVtZW50IHRoZSByZWFjdGlvbnMgc3RhY2sgd2l0aG91dCBtYWpvclxuICAgIC8vIHBlcmZvcm1hbmNlIGltcGxpY2F0aW9ucyBvciBwYXRjaCBTaGFkeURPTSdzIGZ1bmN0aW9ucyB0byByZXN0b3JlIHRoZVxuICAgIC8vIHR5cGljYWwgU2hhZHlET00tdGhlbi1jdXN0b20tZWxlbWVudHMgb3JkZXIgYW5kIHJlbW92ZSB0aGlzIHdvcmthcm91bmQuXG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICBkb20odGhpcykudW5vYnNlcnZlTm9kZXModGhpcy5fb2JzZXJ2ZXIpO1xuICAgIH1cbiAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgZm9yICh2YXIgY2IgaW4gdGhpcy5fX3JhZnMpIHtcbiAgICAgIGlmICh0aGlzLl9fcmFmc1tjYl0gIT09IG51bGwpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fX3JhZnNbY2JdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3JhZnMgPSB7fTtcbiAgICB0aGlzLl9tYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG5cbiAgICAvLyBXZSBnb3QgZGV0YWNoZWQgd2hpbGUgYW5pbWF0aW5nLCBlbnN1cmUgd2Ugc2hvdy9oaWRlIHRoZSBvdmVybGF5XG4gICAgLy8gYW5kIGZpcmUgaXJvbi1vdmVybGF5LW9wZW5lZC9jbG9zZWQgZXZlbnQhXG4gICAgaWYgKHRoaXMuX19pc0FuaW1hdGluZykge1xuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZpbmlzaFJlbmRlck9wZW5lZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXMgaWYgbmVjZXNzYXJ5LlxuICAgICAgICB0aGlzLl9hcHBseUZvY3VzKCk7XG4gICAgICAgIHRoaXMuX2ZpbmlzaFJlbmRlckNsb3NlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkuXG4gICAqL1xuICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldENhbmNlbGVkKGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgfSxcblxuICAvKipcbiAgICogT3BlbiB0aGUgb3ZlcmxheS5cbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldENhbmNlbGVkKGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldENhbmNlbGVkKGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50XG4gICAqL1xuICBjYW5jZWw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGNhbmNlbEV2ZW50ID1cbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLW92ZXJsYXktY2FuY2VsZWQnLCBldmVudCwge2NhbmNlbGFibGU6IHRydWV9KTtcbiAgICBpZiAoY2FuY2VsRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldENhbmNlbGVkKHRydWUpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIHRoZSBjYWNoZWQgdGFiYmFibGUgbm9kZXMuIFRvIGJlIGNhbGxlZCB3aGVuIGFueSBvZiB0aGVcbiAgICogZm9jdXNhYmxlIGNvbnRlbnQgY2hhbmdlcyAoZS5nLiBhIGJ1dHRvbiBpcyBkaXNhYmxlZCkuXG4gICAqL1xuICBpbnZhbGlkYXRlVGFiYmFibGVzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9fZmlyc3RGb2N1c2FibGVOb2RlID0gdGhpcy5fX2xhc3RGb2N1c2FibGVOb2RlID0gbnVsbDtcbiAgfSxcblxuICBfZW5zdXJlU2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5U2V0dXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheVNldHVwID0gdHJ1ZTtcbiAgICB0aGlzLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBgb3BlbmVkYCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBvcGVuZWRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKG9wZW5lZCkge1xuICAgIGlmIChvcGVuZWQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIC8vIERlZmVyIGFueSBhbmltYXRpb24tcmVsYXRlZCBjb2RlIG9uIGF0dGFjaGVkXG4gICAgLy8gKF9vcGVuZWRDaGFuZ2VkIGdldHMgY2FsbGVkIGFnYWluIG9uIGF0dGFjaGVkKS5cbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pc0FuaW1hdGluZyA9IHRydWU7XG5cbiAgICAvLyBEZXJhZiBmb3Igbm9uLWJsb2NraW5nIHJlbmRlcmluZy5cbiAgICB0aGlzLl9fZGVyYWYoJ19fb3BlbmVkQ2hhbmdlZCcsIHRoaXMuX19vcGVuZWRDaGFuZ2VkKTtcbiAgfSxcblxuICBfY2FuY2VsZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24gPSB0aGlzLmNsb3NpbmdSZWFzb24gfHwge307XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uLmNhbmNlbGVkID0gdGhpcy5jYW5jZWxlZDtcbiAgfSxcblxuICBfd2l0aEJhY2tkcm9wQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgdGFiaW5kZXggaXMgYWxyZWFkeSBzZXQsIG5vIG5lZWQgdG8gb3ZlcnJpZGUgaXQuXG4gICAgaWYgKHRoaXMud2l0aEJhY2tkcm9wICYmICF0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB0aGlzLl9fc2hvdWxkUmVtb3ZlVGFiSW5kZXggPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fX3Nob3VsZFJlbW92ZVRhYkluZGV4KSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMuX19zaG91bGRSZW1vdmVUYWJJbmRleCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnRyYWNrQmFja2Ryb3AoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIHRhc2tzIHdoaWNoIG11c3Qgb2NjdXIgYmVmb3JlIG9wZW5pbmc7IGUuZy4gbWFraW5nIHRoZSBlbGVtZW50IHZpc2libGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9wcmVwYXJlUmVuZGVyT3BlbmVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBTdG9yZSBmb2N1c2VkIG5vZGUuXG4gICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSB0aGlzLl9tYW5hZ2VyLmRlZXBBY3RpdmVFbGVtZW50O1xuXG4gICAgLy8gTmVlZGVkIHRvIGNhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgb3ZlcmxheSBzbyB0aGF0IHRyYW5zaXRpb25zIG9uIGl0c1xuICAgIC8vIHNpemUgd2lsbCBoYXZlIHRoZSBjb3JyZWN0IHN0YXJ0aW5nIHBvaW50cy5cbiAgICB0aGlzLl9wcmVwYXJlUG9zaXRpb25pbmcoKTtcbiAgICB0aGlzLnJlZml0KCk7XG4gICAgdGhpcy5fZmluaXNoUG9zaXRpb25pbmcoKTtcblxuICAgIC8vIFNhZmFyaSB3aWxsIGFwcGx5IHRoZSBmb2N1cyB0byB0aGUgYXV0b2ZvY3VzIGVsZW1lbnQgd2hlbiBkaXNwbGF5ZWRcbiAgICAvLyBmb3IgdGhlIGZpcnN0IHRpbWUsIHNvIHdlIG1ha2Ugc3VyZSB0byByZXR1cm4gdGhlIGZvY3VzIHdoZXJlIGl0IHdhcy5cbiAgICBpZiAodGhpcy5ub0F1dG9Gb2N1cyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLl9mb2N1c05vZGUpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTm9kZS5ibHVyKCk7XG4gICAgICB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGFza3Mgd2hpY2ggY2F1c2UgdGhlIG92ZXJsYXkgdG8gYWN0dWFsbHkgb3BlbjsgdHlwaWNhbGx5IHBsYXkgYW5cbiAgICogYW5pbWF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfcmVuZGVyT3BlbmVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9maW5pc2hSZW5kZXJPcGVuZWQoKTtcbiAgfSxcblxuICAvKipcbiAgICogVGFza3Mgd2hpY2ggY2F1c2UgdGhlIG92ZXJsYXkgdG8gYWN0dWFsbHkgY2xvc2U7IHR5cGljYWxseSBwbGF5IGFuXG4gICAqIGFuaW1hdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX3JlbmRlckNsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZmluaXNoUmVuZGVyQ2xvc2VkKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRhc2tzIHRvIGJlIHBlcmZvcm1lZCBhdCB0aGUgZW5kIG9mIG9wZW4gYWN0aW9uLiBXaWxsIGZpcmVcbiAgICogYGlyb24tb3ZlcmxheS1vcGVuZWRgLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfZmluaXNoUmVuZGVyT3BlbmVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIHRoaXMuX19pc0FuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5maXJlKCdpcm9uLW92ZXJsYXktb3BlbmVkJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRhc2tzIHRvIGJlIHBlcmZvcm1lZCBhdCB0aGUgZW5kIG9mIGNsb3NlIGFjdGlvbi4gV2lsbCBmaXJlXG4gICAqIGBpcm9uLW92ZXJsYXktY2xvc2VkYC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX2ZpbmlzaFJlbmRlckNsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gSGlkZSB0aGUgb3ZlcmxheS5cbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gUmVzZXQgei1pbmRleCBvbmx5IGF0IHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLnN0eWxlLnpJbmRleCA9ICcnO1xuICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5maXJlKCdpcm9uLW92ZXJsYXktY2xvc2VkJywgdGhpcy5jbG9zaW5nUmVhc29uKTtcbiAgfSxcblxuICBfcHJlcGFyZVBvc2l0aW9uaW5nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgfSxcblxuICBfZmluaXNoUG9zaXRpb25pbmc6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZpcnN0LCBtYWtlIGl0IGludmlzaWJsZSAmIHJlYWN0aXZhdGUgYW5pbWF0aW9ucy5cbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gRm9yY2UgcmVmbG93IGJlZm9yZSByZS1lbmFibGluZyBhbmltYXRpb25zIHNvIHRoYXQgdGhleSBkb24ndCBzdGFydC5cbiAgICAvLyBTZXQgc2Nyb2xsVG9wIHRvIGl0c2VsZiBzbyB0aGF0IENsb3N1cmUgQ29tcGlsZXIgZG9lc24ndCByZW1vdmUgdGhpcy5cbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICAgIHRoaXMuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICcnO1xuICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnJztcbiAgICAvLyBOb3cgdGhhdCBhbmltYXRpb25zIGFyZSBlbmFibGVkLCBtYWtlIGl0IHZpc2libGUgYWdhaW5cbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAvLyBGb3JjZSByZWZsb3csIHNvIHRoYXQgZm9sbG93aW5nIGFuaW1hdGlvbnMgYXJlIHByb3Blcmx5IHN0YXJ0ZWQuXG4gICAgLy8gU2V0IHNjcm9sbFRvcCB0byBpdHNlbGYgc28gdGhhdCBDbG9zdXJlIENvbXBpbGVyIGRvZXNuJ3QgcmVtb3ZlIHRoaXMuXG4gICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyBmb2N1cyBhY2NvcmRpbmcgdG8gdGhlIG9wZW5lZCBzdGF0ZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX2FwcGx5Rm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKCF0aGlzLm5vQXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzTm9kZS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXN0b3JlIGZvY3VzLlxuICAgICAgaWYgKHRoaXMucmVzdG9yZUZvY3VzT25DbG9zZSAmJiB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZSkge1xuICAgICAgICAvLyBJZiB0aGUgYWN0aXZlRWxlbWVudCBpcyBgPGJvZHk+YCBvciBpbnNpZGUgdGhlIG92ZXJsYXksXG4gICAgICAgIC8vIHdlIGFyZSBhbGxvd2VkIHRvIHJlc3RvcmUgdGhlIGZvY3VzLiBJbiBhbGwgdGhlIG90aGVyXG4gICAgICAgIC8vIGNhc2VzIGZvY3VzIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBlbHNld2hlcmUgYnkgYW5vdGhlclxuICAgICAgICAvLyBjb21wb25lbnQgb3IgYnkgYW4gdXNlciBpbnRlcmFjdGlvbiAoZS5nLiBjbGljayBvbiBhXG4gICAgICAgIC8vIGJ1dHRvbiBvdXRzaWRlIHRoZSBvdmVybGF5KS5cbiAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9tYW5hZ2VyLmRlZXBBY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSB8fFxuICAgICAgICAgICAgY29tcG9zZWRDb250YWlucyh0aGlzLCBhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZvY3VzTm9kZS5ibHVyKCk7XG4gICAgICB0aGlzLl9mb2N1c2VkQ2hpbGQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyAoY2xvc2VzKSB0aGUgb3ZlcmxheS4gQ2FsbCB3aGVuIGNsaWNrIGhhcHBlbnMgb3V0c2lkZSB0aGUgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbkNhcHR1cmVDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaykge1xuICAgICAgdGhpcy5jYW5jZWwoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogS2VlcHMgdHJhY2sgb2YgdGhlIGZvY3VzZWQgY2hpbGQuIElmIHdpdGhCYWNrZHJvcCwgdHJhcHMgZm9jdXMgd2l0aGluXG4gICAqIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25DYXB0dXJlRm9jdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLndpdGhCYWNrZHJvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IGRvbShldmVudCkucGF0aDtcbiAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMpID09PSAtMSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLl9hcHBseUZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWRDaGlsZCA9IC8qKiBAdHlwZSB7Tm9kZX0gKi8gKHBhdGhbMF0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgRVNDIGtleSBldmVudCBhbmQgY2FuY2VscyAoY2xvc2VzKSB0aGUgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbkNhcHR1cmVFc2M6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5vQ2FuY2VsT25Fc2NLZXkpIHtcbiAgICAgIHRoaXMuY2FuY2VsKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgVEFCIGtleSBldmVudHMgdG8gdHJhY2sgZm9jdXMgY2hhbmdlcy5cbiAgICogV2lsbCB3cmFwIGZvY3VzIGZvciBvdmVybGF5cyB3aXRoQmFja2Ryb3AuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25DYXB0dXJlVGFiOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy53aXRoQmFja2Ryb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2Vuc3VyZUZpcnN0TGFzdEZvY3VzYWJsZXMoKTtcbiAgICAvLyBUQUIgd3JhcHMgZnJvbSBsYXN0IHRvIGZpcnN0IGZvY3VzYWJsZS5cbiAgICAvLyBTaGlmdCArIFRBQiB3cmFwcyBmcm9tIGZpcnN0IHRvIGxhc3QgZm9jdXNhYmxlLlxuICAgIHZhciBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgIHZhciBub2RlVG9DaGVjayA9XG4gICAgICAgIHNoaWZ0ID8gdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZSA6IHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZTtcbiAgICB2YXIgbm9kZVRvU2V0ID1cbiAgICAgICAgc2hpZnQgPyB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgOiB0aGlzLl9fZmlyc3RGb2N1c2FibGVOb2RlO1xuICAgIHZhciBzaG91bGRXcmFwID0gZmFsc2U7XG4gICAgaWYgKG5vZGVUb0NoZWNrID09PSBub2RlVG9TZXQpIHtcbiAgICAgIC8vIElmIG5vZGVUb0NoZWNrIGlzIHRoZSBzYW1lIGFzIG5vZGVUb1NldCwgaXQgbWVhbnMgd2UgaGF2ZSBhbiBvdmVybGF5XG4gICAgICAvLyB3aXRoIDAgb3IgMSBmb2N1c2FibGVzOyBpbiBlaXRoZXIgY2FzZSB3ZSBzdGlsbCBuZWVkIHRvIHRyYXAgdGhlXG4gICAgICAvLyBmb2N1cyB3aXRoaW4gdGhlIG92ZXJsYXkuXG4gICAgICBzaG91bGRXcmFwID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW4gZG9tPXNoYWRvdywgdGhlIG1hbmFnZXIgd2lsbCByZWNlaXZlIGZvY3VzIGNoYW5nZXMgb24gdGhlIG1haW5cbiAgICAgIC8vIHJvb3QgYnV0IG5vdCB0aGUgb25lcyB3aXRoaW4gb3RoZXIgc2hhZG93IHJvb3RzLCBzbyB3ZSBjYW4ndCByZWx5IG9uXG4gICAgICAvLyBfZm9jdXNlZENoaWxkLCBidXQgd2Ugc2hvdWxkIGNoZWNrIHRoZSBkZWVwZXN0IGFjdGl2ZSBlbGVtZW50LlxuICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5fbWFuYWdlci5kZWVwQWN0aXZlRWxlbWVudDtcbiAgICAgIC8vIElmIHRoZSBhY3RpdmUgZWxlbWVudCBpcyBub3QgdGhlIG5vZGVUb0NoZWNrIGJ1dCB0aGUgb3ZlcmxheSBpdHNlbGYsXG4gICAgICAvLyBpdCBtZWFucyB0aGUgZm9jdXMgaXMgYWJvdXQgdG8gZ28gb3V0c2lkZSB0aGUgb3ZlcmxheSwgaGVuY2Ugd2VcbiAgICAgIC8vIHNob3VsZCBwcmV2ZW50IHRoYXQgKGUuZy4gdXNlciBvcGVucyB0aGUgb3ZlcmxheSBhbmQgaGl0IFNoaWZ0K1RBQikuXG4gICAgICBzaG91bGRXcmFwID0gKGZvY3VzZWROb2RlID09PSBub2RlVG9DaGVjayB8fCBmb2N1c2VkTm9kZSA9PT0gdGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFdyYXApIHtcbiAgICAgIC8vIFdoZW4gdGhlIG92ZXJsYXkgY29udGFpbnMgdGhlIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAvLyBhbmQgaXQncyBhbHJlYWR5IGZvY3VzZWQsIHByZXNzaW5nIFRBQiB3b3VsZCBtb3ZlIHRoZSBmb2N1cyBvdXRzaWRlXG4gICAgICAvLyB0aGUgZG9jdW1lbnQgKGUuZy4gdG8gdGhlIGJyb3dzZXIgc2VhcmNoIGJhcikuIFNpbWlsYXJseSwgd2hlbiB0aGVcbiAgICAgIC8vIG92ZXJsYXkgY29udGFpbnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudCBhbmQgaXQnc1xuICAgICAgLy8gYWxyZWFkeSBmb2N1c2VkLCBwcmVzc2luZyBTaGlmdCtUQUIgd291bGQgbW92ZSB0aGUgZm9jdXMgb3V0c2lkZSB0aGVcbiAgICAgIC8vIGRvY3VtZW50IChlLmcuIHRvIHRoZSBicm93c2VyIHNlYXJjaCBiYXIpLlxuICAgICAgLy8gSW4gYm90aCBjYXNlcywgd2Ugd291bGQgbm90IHJlY2VpdmUgYSBmb2N1cyBldmVudCwgYnV0IG9ubHkgYSBibHVyLlxuICAgICAgLy8gSW4gb3JkZXIgdG8gYWNoaWV2ZSBmb2N1cyB3cmFwcGluZywgd2UgcHJldmVudCB0aGlzIFRBQiBldmVudCBhbmRcbiAgICAgIC8vIGZvcmNlIHRoZSBmb2N1cy4gVGhpcyB3aWxsIGFsc28gcHJldmVudCB0aGUgZm9jdXMgdG8gdGVtcG9yYXJpbHkgbW92ZVxuICAgICAgLy8gb3V0c2lkZSB0aGUgb3ZlcmxheSwgd2hpY2ggbWlnaHQgY2F1c2Ugc2Nyb2xsaW5nLlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRDaGlsZCA9IG5vZGVUb1NldDtcbiAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlZml0cyBpZiB0aGUgb3ZlcmxheSBpcyBvcGVuZWQgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbklyb25SZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhdGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9fZGVyYWYoJ3JlZml0JywgdGhpcy5yZWZpdCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaWxsIGNhbGwgbm90aWZ5UmVzaXplIGlmIG92ZXJsYXkgaXMgb3BlbmVkLlxuICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBpbiBvcmRlciB0byBhdm9pZCBtdWx0aXBsZSBvYnNlcnZlcnMgb24gdGhlIHNhbWUgbm9kZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uTm9kZXNDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhdGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICAvLyBJdCBtaWdodCBoYXZlIGFkZGVkIGZvY3VzYWJsZSBub2Rlcywgc28gaW52YWxpZGF0ZSBjYWNoZWQgdmFsdWVzLlxuICAgICAgdGhpcy5pbnZhbGlkYXRlVGFiYmFibGVzKCk7XG4gICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcmVmZXJlbmNlcyB0byB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19lbnN1cmVGaXJzdExhc3RGb2N1c2FibGVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLl9mb2N1c2FibGVOb2RlcztcbiAgICB0aGlzLl9fZmlyc3RGb2N1c2FibGVOb2RlID0gZm9jdXNhYmxlTm9kZXNbMF07XG4gICAgdGhpcy5fX2xhc3RGb2N1c2FibGVOb2RlID0gZm9jdXNhYmxlTm9kZXNbZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMV07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRhc2tzIGV4ZWN1dGVkIHdoZW4gb3BlbmVkIGNoYW5nZXM6IHByZXBhcmUgZm9yIHRoZSBvcGVuaW5nLCBtb3ZlIHRoZVxuICAgKiBmb2N1cywgdXBkYXRlIHRoZSBtYW5hZ2VyLCByZW5kZXIgb3BlbmVkL2Nsb3NlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAvLyBNYWtlIG92ZXJsYXkgdmlzaWJsZSwgdGhlbiBhZGQgaXQgdG8gdGhlIG1hbmFnZXIuXG4gICAgICB0aGlzLl9wcmVwYXJlUmVuZGVyT3BlbmVkKCk7XG4gICAgICB0aGlzLl9tYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG4gICAgICAvLyBNb3ZlIHRoZSBmb2N1cyB0byB0aGUgY2hpbGQgbm9kZSB3aXRoIFthdXRvZm9jdXNdLlxuICAgICAgdGhpcy5fYXBwbHlGb2N1cygpO1xuXG4gICAgICB0aGlzLl9yZW5kZXJPcGVuZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtb3ZlIG92ZXJsYXksIHRoZW4gcmVzdG9yZSB0aGUgZm9jdXMgYmVmb3JlIGFjdHVhbGx5IGNsb3NpbmcuXG4gICAgICB0aGlzLl9tYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG4gICAgICB0aGlzLl9hcHBseUZvY3VzKCk7XG5cbiAgICAgIHRoaXMuX3JlbmRlckNsb3NlZCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRGVib3VuY2VzIHRoZSBleGVjdXRpb24gb2YgYSBjYWxsYmFjayB0byB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gam9ibmFtZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2sgQWx3YXlzIGJvdW5kIHRvIGB0aGlzYFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19kZXJhZjogZnVuY3Rpb24oam9ibmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmFmcyA9IHRoaXMuX19yYWZzO1xuICAgIGlmIChyYWZzW2pvYm5hbWVdICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZzW2pvYm5hbWVdKTtcbiAgICB9XG4gICAgcmFmc1tqb2JuYW1lXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBuZXh0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICByYWZzW2pvYm5hbWVdID0gbnVsbDtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0F0dGFjaGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3BlbmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2Nyb2xsQWN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3VwZGF0ZVNjcm9sbE9ic2VydmVyczogZnVuY3Rpb24oaXNBdHRhY2hlZCwgb3BlbmVkLCBzY3JvbGxBY3Rpb24pIHtcbiAgICBpZiAoIWlzQXR0YWNoZWQgfHwgIW9wZW5lZCB8fCAhdGhpcy5fX2lzVmFsaWRTY3JvbGxBY3Rpb24oc2Nyb2xsQWN0aW9uKSkge1xuICAgICAgcmVtb3ZlU2Nyb2xsTG9jayh0aGlzKTtcbiAgICAgIHRoaXMuX19yZW1vdmVTY3JvbGxMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNjcm9sbEFjdGlvbiA9PT0gJ2xvY2snKSB7XG4gICAgICAgIHRoaXMuX19zYXZlU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgcHVzaFNjcm9sbExvY2sodGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fYWRkU2Nyb2xsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19hZGRTY3JvbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fX3Jvb3ROb2Rlcykge1xuICAgICAgdGhpcy5fX3Jvb3ROb2RlcyA9IFtdO1xuICAgICAgLy8gTGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzIGluIGFsbCBzaGFkb3dSb290cyBob3N0aW5nIHRoaXMgb3ZlcmxheSBvbmx5XG4gICAgICAvLyB3aGVuIGluIG5hdGl2ZSBTaGFkb3dET00uXG4gICAgICBpZiAodXNlU2hhZG93KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIG5vZGUuaG9zdCkge1xuICAgICAgICAgICAgdGhpcy5fX3Jvb3ROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlID0gbm9kZS5ob3N0IHx8IG5vZGUuYXNzaWduZWRTbG90IHx8IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fX3Jvb3ROb2Rlcy5wdXNoKGRvY3VtZW50KTtcbiAgICB9XG4gICAgdGhpcy5fX3Jvb3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9fb25DYXB0dXJlU2Nyb2xsLCB7XG4gICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fcmVtb3ZlU2Nyb2xsTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3Jvb3ROb2Rlcykge1xuICAgICAgdGhpcy5fX3Jvb3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX19vbkNhcHR1cmVTY3JvbGwsIHtcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9fcm9vdE5vZGVzID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2Nyb2xsQWN0aW9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX2lzVmFsaWRTY3JvbGxBY3Rpb246IGZ1bmN0aW9uKHNjcm9sbEFjdGlvbikge1xuICAgIHJldHVybiBzY3JvbGxBY3Rpb24gPT09ICdsb2NrJyB8fCBzY3JvbGxBY3Rpb24gPT09ICdyZWZpdCcgfHxcbiAgICAgICAgc2Nyb2xsQWN0aW9uID09PSAnY2FuY2VsJztcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fb25DYXB0dXJlU2Nyb2xsOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9faXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgc2Nyb2xsIG91dHNpZGUgdGhlIG92ZXJsYXkuXG4gICAgaWYgKGRvbShldmVudCkucGF0aC5pbmRleE9mKHRoaXMpID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnNjcm9sbEFjdGlvbikge1xuICAgICAgY2FzZSAnbG9jayc6XG4gICAgICAgIC8vIE5PVEU6IHNjcm9sbGluZyBtaWdodCBoYXBwZW4gaWYgYSBzY3JvbGwgZXZlbnQgaXMgbm90IGNhbmNlbGxhYmxlLCBvclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZWQga2V5cyB0aGF0IGNhdXNlIHNjcm9sbGluZyAodGhleSdyZSBub3QgcHJldmVudGVkIGluXG4gICAgICAgIC8vIG9yZGVyIG5vdCB0byBicmVhayBhMTF5IGZlYXR1cmVzIGxpa2UgbmF2aWdhdGUgd2l0aCBhcnJvdyBrZXlzKS5cbiAgICAgICAgdGhpcy5fX3Jlc3RvcmVTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlZml0JzpcbiAgICAgICAgdGhpcy5fX2RlcmFmKCdyZWZpdCcsIHRoaXMucmVmaXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgIHRoaXMuY2FuY2VsKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNZW1vaXplcyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBvdXRzaWRlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19zYXZlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9fc2Nyb2xsVG9wID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLl9fc2Nyb2xsTGVmdCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyBpZiBpcyB0aGUgYm9keSBvciBodG1sLCBnZXQgbWF4LlxuICAgICAgdGhpcy5fX3Njcm9sbFRvcCA9XG4gICAgICAgICAgTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApO1xuICAgICAgdGhpcy5fX3Njcm9sbExlZnQgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBvdXRzaWRlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19yZXN0b3JlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuX19zY3JvbGxUb3A7XG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9fc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyBpZiBpcyB0aGUgYm9keSBvciBodG1sLCBzZXQgYm90aC5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9XG4gICAgICAgICAgdGhpcy5fX3Njcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICB0aGlzLl9fc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0sXG5cbn07XG5cbmNvbnN0IGNvbXBvc2VkUGFyZW50ID0gbm9kZSA9PlxuICAgIG5vZGUuYXNzaWduZWRTbG90IHx8IG5vZGUucGFyZW50Tm9kZSB8fCBub2RlLmhvc3Q7XG5cbmNvbnN0IGNvbXBvc2VkQ29udGFpbnMgPSAoYW5jZXN0b3IsIGRlc2NlbmRhbnQpID0+IHtcbiAgZm9yIChsZXQgZWxlbWVudCA9IGRlc2NlbmRhbnQ7IGVsZW1lbnQ7IGVsZW1lbnQgPSBjb21wb3NlZFBhcmVudChlbGVtZW50KSkge1xuICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICBVc2UgYFBvbHltZXIuSXJvbk92ZXJsYXlCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGVsZW1lbnQgdGhhdCBjYW4gYmUgaGlkZGVuXG4gIG9yIHNob3duLCBhbmQgZGlzcGxheXMgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQuIEl0IGluY2x1ZGVzIGFuIG9wdGlvbmFsXG4gIGJhY2tkcm9wLCBhbmQgY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBVSSBjb250cm9scyBpbmNsdWRpbmdcbiAgZGlhbG9ncyBhbmQgZHJvcCBkb3ducy4gTXVsdGlwbGUgb3ZlcmxheXMgbWF5IGJlIGRpc3BsYXllZCBhdCBvbmNlLlxuXG4gIFNlZSB0aGUgW2RlbW8gc291cmNlXG4gIGNvZGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2Jsb2IvbWFzdGVyL2RlbW8vc2ltcGxlLW92ZXJsYXkuaHRtbClcbiAgZm9yIGFuIGV4YW1wbGUuXG5cbiAgIyMjIENsb3NpbmcgYW5kIGNhbmNlbGluZ1xuXG4gIEFuIG92ZXJsYXkgbWF5IGJlIGhpZGRlbiBieSBjbG9zaW5nIG9yIGNhbmNlbGluZy4gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBjbG9zZVxuICBhbmQgY2FuY2VsIGlzIHVzZXIgaW50ZW50LiBDbG9zaW5nIGdlbmVyYWxseSBpbXBsaWVzIHRoYXQgdGhlIHVzZXJcbiAgYWNrbm93bGVkZ2VkIHRoZSBjb250ZW50IG9uIHRoZSBvdmVybGF5LiBCeSBkZWZhdWx0LCBpdCB3aWxsIGNhbmNlbCB3aGVuZXZlclxuICB0aGUgdXNlciB0YXBzIG91dHNpZGUgaXQgb3IgcHJlc3NlcyB0aGUgZXNjYXBlIGtleS4gVGhpcyBiZWhhdmlvciBpc1xuICBjb25maWd1cmFibGUgd2l0aCB0aGUgYG5vLWNhbmNlbC1vbi1lc2Mta2V5YCBhbmQgdGhlXG4gIGBuby1jYW5jZWwtb24tb3V0c2lkZS1jbGlja2AgcHJvcGVydGllcy4gYGNsb3NlKClgIHNob3VsZCBiZSBjYWxsZWQgZXhwbGljaXRseVxuICBieSB0aGUgaW1wbGVtZW50ZXIgd2hlbiB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCBhIGNvbnRyb2wgaW4gdGhlIG92ZXJsYXlcbiAgZWxlbWVudC4gV2hlbiB0aGUgZGlhbG9nIGlzIGNhbmNlbGVkLCB0aGUgb3ZlcmxheSBmaXJlcyBhblxuICAnaXJvbi1vdmVybGF5LWNhbmNlbGVkJyBldmVudC4gQ2FsbCBgcHJldmVudERlZmF1bHRgIG9uIHRoaXMgZXZlbnQgdG8gcHJldmVudFxuICB0aGUgb3ZlcmxheSBmcm9tIGNsb3NpbmcuXG5cbiAgIyMjIFBvc2l0aW9uaW5nXG5cbiAgQnkgZGVmYXVsdCB0aGUgZWxlbWVudCBpcyBzaXplZCBhbmQgcG9zaXRpb25lZCB0byBmaXQgYW5kIGNlbnRlcmVkIGluc2lkZSB0aGVcbiAgd2luZG93LiBZb3UgY2FuIHBvc2l0aW9uIGFuZCBzaXplIGl0IG1hbnVhbGx5IHVzaW5nIENTUy4gU2VlXG4gIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG5cbiAgIyMjIEJhY2tkcm9wXG5cbiAgU2V0IHRoZSBgd2l0aC1iYWNrZHJvcGAgYXR0cmlidXRlIHRvIGRpc3BsYXkgYSBiYWNrZHJvcCBiZWhpbmQgdGhlIG92ZXJsYXkuXG4gIFRoZSBiYWNrZHJvcCBpcyBhcHBlbmRlZCB0byBgPGJvZHk+YCBhbmQgaXMgb2YgdHlwZSBgPGlyb24tb3ZlcmxheS1iYWNrZHJvcD5gLlxuICBTZWUgaXRzIGRvYyBwYWdlIGZvciBzdHlsaW5nIG9wdGlvbnMuXG5cbiAgSW4gYWRkaXRpb24sIGB3aXRoLWJhY2tkcm9wYCB3aWxsIHdyYXAgdGhlIGZvY3VzIHdpdGhpbiB0aGUgY29udGVudCBpbiB0aGVcbiAgbGlnaHQgRE9NLiBPdmVycmlkZSB0aGUgW2BfZm9jdXNhYmxlTm9kZXNgXG4gIGdldHRlcl0oI1BvbHltZXIuSXJvbk92ZXJsYXlCZWhhdmlvcjpwcm9wZXJ0eS1fZm9jdXNhYmxlTm9kZXMpIHRvIGFjaGlldmUgYVxuICBkaWZmZXJlbnQgYmVoYXZpb3IuXG5cbiAgIyMjIExpbWl0YXRpb25zXG5cbiAgVGhlIGVsZW1lbnQgaXMgc3R5bGVkIHRvIGFwcGVhciBvbiB0b3Agb2Ygb3RoZXIgY29udGVudCBieSBzZXR0aW5nIGl0c1xuICBgei1pbmRleGAgcHJvcGVydHkuIFlvdSBtdXN0IGVuc3VyZSBubyBlbGVtZW50IGhhcyBhIHN0YWNraW5nIGNvbnRleHQgd2l0aCBhXG4gIGhpZ2hlciBgei1pbmRleGAgdGhhbiBpdHMgcGFyZW50IHN0YWNraW5nIGNvbnRleHQuIFlvdSBzaG91bGQgcGxhY2UgdGhpc1xuICBlbGVtZW50IGFzIGEgY2hpbGQgb2YgYDxib2R5PmAgd2hlbmV2ZXIgcG9zc2libGUuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25PdmVybGF5QmVoYXZpb3IgPVxuICAgIFtJcm9uRml0QmVoYXZpb3IsIElyb25SZXNpemFibGVCZWhhdmlvciwgSXJvbk92ZXJsYXlCZWhhdmlvckltcGxdO1xuXG4vKipcbiAqIEZpcmVkIGFmdGVyIHRoZSBvdmVybGF5IG9wZW5zLlxuICogQGV2ZW50IGlyb24tb3ZlcmxheS1vcGVuZWRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIG92ZXJsYXkgaXMgY2FuY2VsZWQsIGJ1dCBiZWZvcmUgaXQgaXMgY2xvc2VkLlxuICogQGV2ZW50IGlyb24tb3ZlcmxheS1jYW5jZWxlZFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGNsb3Npbmcgb2YgdGhlIG92ZXJsYXkgY2FuIGJlIHByZXZlbnRlZFxuICogYnkgY2FsbGluZyBgZXZlbnQucHJldmVudERlZmF1bHQoKWAuIFRoZSBgZXZlbnQuZGV0YWlsYCBpcyB0aGUgb3JpZ2luYWwgZXZlbnRcbiAqIHRoYXQgb3JpZ2luYXRlZCB0aGUgY2FuY2VsaW5nIChlLmcuIEVTQyBrZXlib2FyZCBldmVudCBvciBjbGljayBldmVudCBvdXRzaWRlXG4gKiB0aGUgb3ZlcmxheSkuXG4gKi9cblxuLyoqXG4gKiBGaXJlZCBhZnRlciB0aGUgb3ZlcmxheSBjbG9zZXMuXG4gKiBAZXZlbnQgaXJvbi1vdmVybGF5LWNsb3NlZFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGBldmVudC5kZXRhaWxgIGlzIHRoZSBgY2xvc2luZ1JlYXNvbmAgcHJvcGVydHlcbiAqIChjb250YWlucyBgY2FuY2VsZWRgLCB3aGV0aGVyIHRoZSBvdmVybGF5IHdhcyBjYW5jZWxlZCkuXG4gKi9cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnLi9pcm9uLW92ZXJsYXktYmFja2Ryb3AuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCAqIGFzIGdlc3R1cmVzIGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcblxuLyoqXG4gKiBAcGFja2FnZVxuICovXG5leHBvcnQgY2xhc3MgSXJvbk92ZXJsYXlNYW5hZ2VyQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9wZW5lZCBvdmVybGF5cy5cbiAgICAgKiBAcHJpdmF0ZSB7IUFycmF5PCFFbGVtZW50Pn1cbiAgICAgKi9cbiAgICB0aGlzLl9vdmVybGF5cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogaWZyYW1lcyBoYXZlIGEgZGVmYXVsdCB6LWluZGV4IG9mIDEwMCxcbiAgICAgKiBzbyB0aGlzIGRlZmF1bHQgc2hvdWxkIGJlIGF0IGxlYXN0IHRoYXQuXG4gICAgICogQHByaXZhdGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9taW5pbXVtWiA9IDEwMTtcblxuICAgIC8qKlxuICAgICAqIE1lbW9pemVkIGJhY2tkcm9wIGVsZW1lbnQuXG4gICAgICogQHByaXZhdGUge0VsZW1lbnR8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gRW5hYmxlIGRvY3VtZW50LXdpZGUgdGFwIHJlY29nbml6ZXIuXG4gICAgLy8gTk9URTogVXNlIHVzZUNhcHR1cmU9dHJ1ZSB0byBhdm9pZCBhY2NpZGVudGFsbHkgcHJldmVudGlvbiBvZiB0aGUgY2xvc2luZ1xuICAgIC8vIG9mIGFuIG92ZXJsYXkgdmlhIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLiBUaGUgb25seSB3YXkgdG8gcHJldmVudFxuICAgIC8vIGNsb3Npbmcgb2YgYW4gb3ZlcmxheSBzaG91bGQgYmUgdGhyb3VnaCBpdHMgQVBJcy5cbiAgICAvLyBOT1RFOiBlbmFibGUgdGFwIG9uIDxodG1sPiB0byB3b3JrYXJvdW5kIFBvbHltZXIvcG9seW1lciM0NDU5XG4gICAgLy8gUGFzcyBuby1vcCBmdW5jdGlvbiBiZWNhdXNlIE1TRWRnZSAxNSBkb2Vzbid0IGhhbmRsZSBudWxsIGFzIDJuZCBhcmd1bWVudFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvQ2hha3JhQ29yZS9pc3N1ZXMvMzg2M1xuICAgIGdlc3R1cmVzLmFkZExpc3RlbmVyKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ3RhcCcsIGZ1bmN0aW9uKCkge30pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RhcCcsIHRoaXMuX29uQ2FwdHVyZUNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25DYXB0dXJlRm9jdXMuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2tleWRvd24nLCB0aGlzLl9vbkNhcHR1cmVLZXlEb3duLmJpbmQodGhpcyksIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzaGFyZWQgYmFja2Ryb3AgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUVsZW1lbnR9IGJhY2tkcm9wRWxlbWVudFxuICAgKi9cbiAgZ2V0IGJhY2tkcm9wRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2JhY2tkcm9wRWxlbWVudCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1vdmVybGF5LWJhY2tkcm9wJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9iYWNrZHJvcEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZXBlc3QgYWN0aXZlIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFFbGVtZW50fSBhY3RpdmVFbGVtZW50IHRoZSBhY3RpdmUgZWxlbWVudFxuICAgKi9cbiAgZ2V0IGRlZXBBY3RpdmVFbGVtZW50KCkge1xuICAgIHZhciBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGJlIG51bGxcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvYWN0aXZlRWxlbWVudFxuICAgIC8vIEluIElFIDExLCBpdCBjYW4gYWxzbyBiZSBhbiBvYmplY3Qgd2hlbiBvcGVyYXRpbmcgaW4gaWZyYW1lcy5cbiAgICAvLyBJbiB0aGVzZSBjYXNlcywgZGVmYXVsdCBpdCB0byBkb2N1bWVudC5ib2R5LlxuICAgIGlmICghYWN0aXZlIHx8IGFjdGl2ZSBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICBhY3RpdmUgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICB3aGlsZSAoYWN0aXZlLnJvb3QgJiYgZG9tKGFjdGl2ZS5yb290KS5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBhY3RpdmUgPSBkb20oYWN0aXZlLnJvb3QpLmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogQnJpbmdzIHRoZSBvdmVybGF5IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggdG8gdGhlIGZyb250LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2JyaW5nT3ZlcmxheUF0SW5kZXhUb0Zyb250KGkpIHtcbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMuX292ZXJsYXlzW2ldO1xuICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGFzdEkgPSB0aGlzLl9vdmVybGF5cy5sZW5ndGggLSAxO1xuICAgIHZhciBjdXJyZW50T3ZlcmxheSA9IHRoaXMuX292ZXJsYXlzW2xhc3RJXTtcbiAgICAvLyBFbnN1cmUgYWx3YXlzLW9uLXRvcCBvdmVybGF5IHN0YXlzIG9uIHRvcC5cbiAgICBpZiAoY3VycmVudE92ZXJsYXkgJiZcbiAgICAgICAgdGhpcy5fc2hvdWxkQmVCZWhpbmRPdmVybGF5KG92ZXJsYXksIGN1cnJlbnRPdmVybGF5KSkge1xuICAgICAgbGFzdEktLTtcbiAgICB9XG4gICAgLy8gSWYgYWxyZWFkeSB0aGUgdG9wIGVsZW1lbnQsIHJldHVybi5cbiAgICBpZiAoaSA+PSBsYXN0SSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgei1pbmRleCB0byBiZSBvbiB0b3AuXG4gICAgdmFyIG1pbmltdW1aID0gTWF0aC5tYXgodGhpcy5jdXJyZW50T3ZlcmxheVooKSwgdGhpcy5fbWluaW11bVopO1xuICAgIGlmICh0aGlzLl9nZXRaKG92ZXJsYXkpIDw9IG1pbmltdW1aKSB7XG4gICAgICB0aGlzLl9hcHBseU92ZXJsYXlaKG92ZXJsYXksIG1pbmltdW1aKTtcbiAgICB9XG5cbiAgICAvLyBTaGlmdCBvdGhlciBvdmVybGF5cyBiZWhpbmQgdGhlIG5ldyBvbiB0b3AuXG4gICAgd2hpbGUgKGkgPCBsYXN0SSkge1xuICAgICAgdGhpcy5fb3ZlcmxheXNbaV0gPSB0aGlzLl9vdmVybGF5c1tpICsgMV07XG4gICAgICBpKys7XG4gICAgfVxuICAgIHRoaXMuX292ZXJsYXlzW2xhc3RJXSA9IG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgb3ZlcmxheSBhbmQgdXBkYXRlcyBpdHMgei1pbmRleCBpZiBpdCdzIG9wZW5lZCwgb3IgcmVtb3ZlcyBpdCBpZlxuICAgKiBpdCdzIGNsb3NlZC4gQWxzbyB1cGRhdGVzIHRoZSBiYWNrZHJvcCB6LWluZGV4LlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqL1xuICBhZGRPclJlbW92ZU92ZXJsYXkob3ZlcmxheSkge1xuICAgIGlmIChvdmVybGF5Lm9wZW5lZCkge1xuICAgICAgdGhpcy5hZGRPdmVybGF5KG92ZXJsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZU92ZXJsYXkob3ZlcmxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBvdmVybGF5cyBmb3Igei1pbmRleCBhbmQgZm9jdXMgbWFuYWdlbWVudC5cbiAgICogRW5zdXJlcyB0aGUgbGFzdCBhZGRlZCBvdmVybGF5IHdpdGggYWx3YXlzLW9uLXRvcCByZW1haW5zIG9uIHRvcC5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheVxuICAgKi9cbiAgYWRkT3ZlcmxheShvdmVybGF5KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9vdmVybGF5cy5pbmRleE9mKG92ZXJsYXkpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHRoaXMuX2JyaW5nT3ZlcmxheUF0SW5kZXhUb0Zyb250KGkpO1xuICAgICAgdGhpcy50cmFja0JhY2tkcm9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbnNlcnRpb25JbmRleCA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5c1tpbnNlcnRpb25JbmRleCAtIDFdO1xuICAgIHZhciBtaW5pbXVtWiA9IE1hdGgubWF4KHRoaXMuX2dldFooY3VycmVudE92ZXJsYXkpLCB0aGlzLl9taW5pbXVtWik7XG4gICAgdmFyIG5ld1ogPSB0aGlzLl9nZXRaKG92ZXJsYXkpO1xuXG4gICAgLy8gRW5zdXJlIGFsd2F5cy1vbi10b3Agb3ZlcmxheSBzdGF5cyBvbiB0b3AuXG4gICAgaWYgKGN1cnJlbnRPdmVybGF5ICYmXG4gICAgICAgIHRoaXMuX3Nob3VsZEJlQmVoaW5kT3ZlcmxheShvdmVybGF5LCBjdXJyZW50T3ZlcmxheSkpIHtcbiAgICAgIC8vIFRoaXMgYnVtcHMgdGhlIHotaW5kZXggb2YgKzIuXG4gICAgICB0aGlzLl9hcHBseU92ZXJsYXlaKGN1cnJlbnRPdmVybGF5LCBtaW5pbXVtWik7XG4gICAgICBpbnNlcnRpb25JbmRleC0tO1xuICAgICAgLy8gVXBkYXRlIG1pbmltdW1aIHRvIG1hdGNoIHByZXZpb3VzIG92ZXJsYXkncyB6LWluZGV4LlxuICAgICAgdmFyIHByZXZpb3VzT3ZlcmxheSA9IHRoaXMuX292ZXJsYXlzW2luc2VydGlvbkluZGV4IC0gMV07XG4gICAgICBtaW5pbXVtWiA9IE1hdGgubWF4KHRoaXMuX2dldFoocHJldmlvdXNPdmVybGF5KSwgdGhpcy5fbWluaW11bVopO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB6LWluZGV4IGFuZCBpbnNlcnQgb3ZlcmxheS5cbiAgICBpZiAobmV3WiA8PSBtaW5pbXVtWikge1xuICAgICAgdGhpcy5fYXBwbHlPdmVybGF5WihvdmVybGF5LCBtaW5pbXVtWik7XG4gICAgfVxuICAgIHRoaXMuX292ZXJsYXlzLnNwbGljZShpbnNlcnRpb25JbmRleCwgMCwgb3ZlcmxheSk7XG5cbiAgICB0aGlzLnRyYWNrQmFja2Ryb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqL1xuICByZW1vdmVPdmVybGF5KG92ZXJsYXkpIHtcbiAgICB2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX292ZXJsYXlzLnNwbGljZShpLCAxKTtcblxuICAgIHRoaXMudHJhY2tCYWNrZHJvcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgb3ZlcmxheS5cbiAgICogQHJldHVybiB7IUVsZW1lbnR8dW5kZWZpbmVkfVxuICAgKi9cbiAgY3VycmVudE92ZXJsYXkoKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9vdmVybGF5cy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5c1tpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG92ZXJsYXkgei1pbmRleC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY3VycmVudE92ZXJsYXlaKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRaKHRoaXMuY3VycmVudE92ZXJsYXkoKSk7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHRoZSBtaW5pbXVtIHotaW5kZXggb2YgbmV3IG92ZXJsYXlzIGlzIGF0IGxlYXN0IGBtaW5pbXVtWmAuXG4gICAqIFRoaXMgZG9lcyBub3QgZWZmZWN0IHRoZSB6LWluZGV4IG9mIGFueSBleGlzdGluZyBvdmVybGF5cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbmltdW1aXG4gICAqL1xuICBlbnN1cmVNaW5pbXVtWihtaW5pbXVtWikge1xuICAgIHRoaXMuX21pbmltdW1aID0gTWF0aC5tYXgodGhpcy5fbWluaW11bVosIG1pbmltdW1aKTtcbiAgfVxuXG4gIGZvY3VzT3ZlcmxheSgpIHtcbiAgICB2YXIgY3VycmVudCA9IC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuY3VycmVudE92ZXJsYXkoKSk7XG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnQuX2FwcGx5Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgYmFja2Ryb3Agei1pbmRleC5cbiAgICovXG4gIHRyYWNrQmFja2Ryb3AoKSB7XG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLl9vdmVybGF5V2l0aEJhY2tkcm9wKCk7XG4gICAgLy8gQXZvaWQgY3JlYXRpbmcgdGhlIGJhY2tkcm9wIGlmIHRoZXJlIGlzIG5vIG92ZXJsYXkgd2l0aCBiYWNrZHJvcC5cbiAgICBpZiAoIW92ZXJsYXkgJiYgIXRoaXMuX2JhY2tkcm9wRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLl9nZXRaKG92ZXJsYXkpIC0gMTtcbiAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5vcGVuZWQgPSAhIW92ZXJsYXk7XG4gICAgLy8gUHJvcGVydHkgb2JzZXJ2ZXJzIGFyZSBub3QgZmlyZWQgdW50aWwgZWxlbWVudCBpcyBhdHRhY2hlZFxuICAgIC8vIGluIFBvbHltZXIgMi54LCBzbyB3ZSBlbnN1cmUgZWxlbWVudCBpcyBhdHRhY2hlZCBpZiBuZWVkZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvcG9seW1lci9pc3N1ZXMvNDUyNlxuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnByZXBhcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0QmFja2Ryb3BzKCkge1xuICAgIHZhciBiYWNrZHJvcHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX292ZXJsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fb3ZlcmxheXNbaV0ud2l0aEJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wcy5wdXNoKHRoaXMuX292ZXJsYXlzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhY2tkcm9wcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB6LWluZGV4IGZvciB0aGUgYmFja2Ryb3AuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGJhY2tkcm9wWigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Wih0aGlzLl9vdmVybGF5V2l0aEJhY2tkcm9wKCkpIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0b3Agb3BlbmVkIG92ZXJsYXkgdGhhdCBoYXMgYSBiYWNrZHJvcC5cbiAgICogQHJldHVybiB7IUVsZW1lbnR8dW5kZWZpbmVkfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX292ZXJsYXlXaXRoQmFja2Ryb3AoKSB7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAodGhpcy5fb3ZlcmxheXNbaV0ud2l0aEJhY2tkcm9wKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgbWluaW11bSB6LWluZGV4IGZvciB0aGUgb3ZlcmxheS5cbiAgICogQHBhcmFtIHtFbGVtZW50PX0gb3ZlcmxheVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldFoob3ZlcmxheSkge1xuICAgIHZhciB6ID0gdGhpcy5fbWluaW11bVo7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIHZhciB6MSA9IE51bWJlcihcbiAgICAgICAgICBvdmVybGF5LnN0eWxlLnpJbmRleCB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvdmVybGF5KS56SW5kZXgpO1xuICAgICAgLy8gQ2hlY2sgaWYgaXMgYSBudW1iZXJcbiAgICAgIC8vIE51bWJlci5pc05hTiBub3Qgc3VwcG9ydGVkIGluIElFIDEwK1xuICAgICAgaWYgKHoxID09PSB6MSkge1xuICAgICAgICB6ID0gejE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB6O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB6XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0WihlbGVtZW50LCB6KSB7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSB6O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IG92ZXJsYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFib3ZlWlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5T3ZlcmxheVoob3ZlcmxheSwgYWJvdmVaKSB7XG4gICAgdGhpcy5fc2V0WihvdmVybGF5LCBhYm92ZVogKyAyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWVwZXN0IG92ZXJsYXkgaW4gdGhlIHBhdGguXG4gICAqIEBwYXJhbSB7IUFycmF5PCFFbGVtZW50Pj19IHBhdGhcbiAgICogQHJldHVybiB7IUVsZW1lbnR8dW5kZWZpbmVkfVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX292ZXJsYXlJblBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBhdGhbaV0uX21hbmFnZXIgPT09IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhlIGNsaWNrIGV2ZW50IGlzIGRlbGVnYXRlZCB0byB0aGUgcmlnaHQgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DYXB0dXJlQ2xpY2soZXZlbnQpIHtcbiAgICB2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7XG4gICAgaWYgKGkgPT09IC0xKVxuICAgICAgcmV0dXJuO1xuICAgIHZhciBwYXRoID0gLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi8gKGRvbShldmVudCkucGF0aCk7XG4gICAgdmFyIG92ZXJsYXk7XG4gICAgLy8gQ2hlY2sgaWYgY2xpY2tlZCBvdXRzaWRlIG9mIG92ZXJsYXkuXG4gICAgd2hpbGUgKChvdmVybGF5ID0gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5fb3ZlcmxheXNbaV0pKSAmJlxuICAgICAgICAgICB0aGlzLl9vdmVybGF5SW5QYXRoKHBhdGgpICE9PSBvdmVybGF5KSB7XG4gICAgICBvdmVybGF5Ll9vbkNhcHR1cmVDbGljayhldmVudCk7XG4gICAgICBpZiAob3ZlcmxheS5hbGxvd0NsaWNrVGhyb3VnaCkge1xuICAgICAgICBpLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGUgZm9jdXMgZXZlbnQgaXMgZGVsZWdhdGVkIHRvIHRoZSByaWdodCBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNhcHR1cmVGb2N1cyhldmVudCkge1xuICAgIHZhciBvdmVybGF5ID0gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5jdXJyZW50T3ZlcmxheSgpKTtcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5fb25DYXB0dXJlRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIFRBQiBhbmQgRVNDIGtleWJvYXJkIGV2ZW50cyBhcmUgZGVsZWdhdGVkIHRvIHRoZSByaWdodCBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNhcHR1cmVLZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIG92ZXJsYXkgPSAvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPdmVybGF5KCkpO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBpZiAoSXJvbkExMXlLZXlzQmVoYXZpb3Iua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGV2ZW50LCAnZXNjJykpIHtcbiAgICAgICAgb3ZlcmxheS5fb25DYXB0dXJlRXNjKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoSXJvbkExMXlLZXlzQmVoYXZpb3Iua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGV2ZW50LCAndGFiJykpIHtcbiAgICAgICAgb3ZlcmxheS5fb25DYXB0dXJlVGFiKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgb3ZlcmxheTEgc2hvdWxkIGJlIGJlaGluZCBvdmVybGF5Mi5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheTFcbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheTJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG91bGRCZUJlaGluZE92ZXJsYXkob3ZlcmxheTEsIG92ZXJsYXkyKSB7XG4gICAgcmV0dXJuICFvdmVybGF5MS5hbHdheXNPblRvcCAmJiBvdmVybGF5Mi5hbHdheXNPblRvcDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IElyb25PdmVybGF5TWFuYWdlciA9IG5ldyBJcm9uT3ZlcmxheU1hbmFnZXJDbGFzcygpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbi8qKlxuICogVXNlZCB0byBjYWxjdWxhdGUgdGhlIHNjcm9sbCBkaXJlY3Rpb24gZHVyaW5nIHRvdWNoIGV2ZW50cy5cbiAqIEB0eXBlIHshT2JqZWN0fVxuICovXG52YXIgbGFzdFRvdWNoUG9zaXRpb24gPSB7cGFnZVg6IDAsIHBhZ2VZOiAwfTtcbi8qKlxuICogVXNlZCB0byBhdm9pZCBjb21wdXRpbmcgZXZlbnQucGF0aCBhbmQgZmlsdGVyIHNjcm9sbGFibGUgbm9kZXMgKGJldHRlciBwZXJmKS5cbiAqIEB0eXBlIHs/RXZlbnRUYXJnZXR9XG4gKi9cbnZhciBsYXN0Um9vdFRhcmdldCA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHshQXJyYXk8IU5vZGU+fVxuICovXG52YXIgbGFzdFNjcm9sbGFibGVOb2RlcyA9IFtdO1xuLyoqXG4gKiBAdHlwZSB7IUFycmF5PHN0cmluZz59XG4gKi9cbnZhciBzY3JvbGxFdmVudHMgPSBbXG4gIC8vIE1vZGVybiBgd2hlZWxgIGV2ZW50IGZvciBtb3VzZSB3aGVlbCBzY3JvbGxpbmc6XG4gICd3aGVlbCcsXG4gIC8vIE9sZGVyLCBub24tc3RhbmRhcmQgYG1vdXNld2hlZWxgIGV2ZW50IGZvciBzb21lIEZGOlxuICAnbW91c2V3aGVlbCcsXG4gIC8vIElFOlxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAvLyBUb3VjaCBlbmFibGVkIGRldmljZXNcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJ1xuXTtcbi8vIG11c3QgYmUgZGVmaW5lZCBmb3IgbW9kdWxpemVyXG52YXIgX2JvdW5kU2Nyb2xsSGFuZGxlcjtcblxuLyoqXG4gKiBUaGUgY3VycmVudCBlbGVtZW50IHRoYXQgZGVmaW5lcyB0aGUgRE9NIGJvdW5kYXJpZXMgb2YgdGhlXG4gKiBzY3JvbGwgbG9jay4gVGhpcyBpcyBhbHdheXMgdGhlIG1vc3QgcmVjZW50bHkgbG9ja2luZyBlbGVtZW50LlxuICpcbiAqIEB0eXBlIHshTm9kZXx1bmRlZmluZWR9XG4gKi9cbnZhciBjdXJyZW50TG9ja2luZ0VsZW1lbnQ7XG5cbmV4cG9ydCB7Y3VycmVudExvY2tpbmdFbGVtZW50fTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgaXMgXCJzY3JvbGwgbG9ja2VkXCIsIHdoaWNoIGlzIHRvXG4gKiBzYXkgdGhhdCBpdCBjYW5ub3QgYmUgc2Nyb2xsZWQgdmlhIHBvaW50ZXIgb3Iga2V5Ym9hcmQgaW50ZXJhY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50IEFuIEhUTUwgZWxlbWVudCBpbnN0YW5jZSB3aGljaCBtYXkgb3IgbWF5XG4gKiBub3QgYmUgc2Nyb2xsIGxvY2tlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRJc1Njcm9sbExvY2tlZChlbGVtZW50KSB7XG4gIHZhciBsb2NraW5nRWxlbWVudCA9IGN1cnJlbnRMb2NraW5nRWxlbWVudDtcblxuICBpZiAobG9ja2luZ0VsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzY3JvbGxMb2NrZWQ7XG5cbiAgaWYgKF9oYXNDYWNoZWRMb2NrZWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoX2hhc0NhY2hlZFVubG9ja2VkRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNjcm9sbExvY2tlZCA9ICEhbG9ja2luZ0VsZW1lbnQgJiYgbG9ja2luZ0VsZW1lbnQgIT09IGVsZW1lbnQgJiZcbiAgICAgICFfY29tcG9zZWRUcmVlQ29udGFpbnMobG9ja2luZ0VsZW1lbnQsIGVsZW1lbnQpO1xuXG4gIGlmIChzY3JvbGxMb2NrZWQpIHtcbiAgICBfbG9ja2VkRWxlbWVudENhY2hlLnB1c2goZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgX3VubG9ja2VkRWxlbWVudENhY2hlLnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gc2Nyb2xsTG9ja2VkO1xufVxuXG4vKipcbiAqIFB1c2ggYW4gZWxlbWVudCBvbnRvIHRoZSBjdXJyZW50IHNjcm9sbCBsb2NrIHN0YWNrLiBUaGUgbW9zdCByZWNlbnRseVxuICogcHVzaGVkIGVsZW1lbnQgYW5kIGl0cyBjaGlsZHJlbiB3aWxsIGJlIGNvbnNpZGVyZWQgc2Nyb2xsYWJsZS4gQWxsXG4gKiBvdGhlciBlbGVtZW50cyB3aWxsIG5vdCBiZSBzY3JvbGxhYmxlLlxuICpcbiAqIFNjcm9sbCBsb2NraW5nIGlzIGltcGxlbWVudGVkIGFzIGEgc3RhY2sgc28gdGhhdCBjYXNlcyBzdWNoIGFzXG4gKiBkcm9wZG93bnMgd2l0aGluIGRyb3Bkb3ducyBhcmUgaGFuZGxlZCB3ZWxsLlxuICpcbiAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGxvY2sgc2Nyb2xsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaFNjcm9sbExvY2soZWxlbWVudCkge1xuICAvLyBQcmV2ZW50IHB1c2hpbmcgdGhlIHNhbWUgZWxlbWVudCB0d2ljZVxuICBpZiAoX2xvY2tpbmdFbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpID49IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoX2xvY2tpbmdFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBfbG9ja1Njcm9sbEludGVyYWN0aW9ucygpO1xuICB9XG5cbiAgX2xvY2tpbmdFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICBjdXJyZW50TG9ja2luZ0VsZW1lbnQgPSBfbG9ja2luZ0VsZW1lbnRzW19sb2NraW5nRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgX2xvY2tlZEVsZW1lbnRDYWNoZSA9IFtdO1xuICBfdW5sb2NrZWRFbGVtZW50Q2FjaGUgPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBzY3JvbGwgbG9jayBzdGFjay4gVGhlIGVsZW1lbnQgYmVpbmdcbiAqIHJlbW92ZWQgZG9lcyBub3QgbmVlZCB0byBiZSB0aGUgbW9zdCByZWNlbnRseSBwdXNoZWQgZWxlbWVudC4gSG93ZXZlcixcbiAqIHRoZSBzY3JvbGwgbG9jayBjb25zdHJhaW50cyBvbmx5IGNoYW5nZSB3aGVuIHRoZSBtb3N0IHJlY2VudGx5IHB1c2hlZFxuICogZWxlbWVudCBpcyByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHJlbW92ZSBmcm9tIHRoZSBzY3JvbGxcbiAqIGxvY2sgc3RhY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGluZGV4ID0gX2xvY2tpbmdFbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfbG9ja2luZ0VsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIGN1cnJlbnRMb2NraW5nRWxlbWVudCA9IF9sb2NraW5nRWxlbWVudHNbX2xvY2tpbmdFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICBfbG9ja2VkRWxlbWVudENhY2hlID0gW107XG4gIF91bmxvY2tlZEVsZW1lbnRDYWNoZSA9IFtdO1xuXG4gIGlmIChfbG9ja2luZ0VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIF91bmxvY2tTY3JvbGxJbnRlcmFjdGlvbnMoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgX2xvY2tpbmdFbGVtZW50cyA9IFtdO1xuZXhwb3J0IGxldCBfbG9ja2VkRWxlbWVudENhY2hlID0gbnVsbDtcbmV4cG9ydCBsZXQgX3VubG9ja2VkRWxlbWVudENhY2hlID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIF9oYXNDYWNoZWRMb2NrZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIF9sb2NrZWRFbGVtZW50Q2FjaGUuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2hhc0NhY2hlZFVubG9ja2VkRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBfdW5sb2NrZWRFbGVtZW50Q2FjaGUuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBvc2VkVHJlZUNvbnRhaW5zKGVsZW1lbnQsIGNoaWxkKSB7XG4gIC8vIE5PVEUoY2RhdGEpOiBUaGlzIG1ldGhvZCBpdGVyYXRlcyBvdmVyIGNvbnRlbnQgZWxlbWVudHMgYW5kIHRoZWlyXG4gIC8vIGNvcnJlc3BvbmRpbmcgZGlzdHJpYnV0ZWQgbm9kZXMgdG8gaW1wbGVtZW50IGEgY29udGFpbnMtbGlrZSBtZXRob2RcbiAgLy8gdGhhdCBwaWVyY2VzIHRocm91Z2ggdGhlIGNvbXBvc2VkIHRyZWUgb2YgdGhlIFNoYWRvd0RPTS4gUmVzdWx0cyBvZlxuICAvLyB0aGlzIG9wZXJhdGlvbiBhcmUgY2FjaGVkIChlbHNld2hlcmUpIG9uIGEgcGVyLXNjcm9sbC1sb2NrIGJhc2lzLCB0b1xuICAvLyBndWFyZCBhZ2FpbnN0IHBvdGVudGlhbGx5IGV4cGVuc2l2ZSBsb29rdXBzIGhhcHBlbmluZyByZXBlYXRlZGx5IGFzXG4gIC8vIGEgdXNlciBzY3JvbGxzIC8gdG91Y2htb3Zlcy5cbiAgdmFyIGNvbnRlbnRFbGVtZW50cztcbiAgdmFyIGRpc3RyaWJ1dGVkTm9kZXM7XG4gIHZhciBjb250ZW50SW5kZXg7XG4gIHZhciBub2RlSW5kZXg7XG5cbiAgaWYgKGVsZW1lbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb250ZW50RWxlbWVudHMgPSBkb20oZWxlbWVudCkucXVlcnlTZWxlY3RvckFsbCgnY29udGVudCxzbG90Jyk7XG5cbiAgZm9yIChjb250ZW50SW5kZXggPSAwOyBjb250ZW50SW5kZXggPCBjb250ZW50RWxlbWVudHMubGVuZ3RoO1xuICAgICAgICsrY29udGVudEluZGV4KSB7XG4gICAgZGlzdHJpYnV0ZWROb2RlcyA9IGRvbShjb250ZW50RWxlbWVudHNbY29udGVudEluZGV4XSkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuXG4gICAgZm9yIChub2RlSW5kZXggPSAwOyBub2RlSW5kZXggPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgKytub2RlSW5kZXgpIHtcbiAgICAgIC8vIFBvbHltZXIgMi54IHJldHVybnMgc2xvdC5hc3NpZ25lZE5vZGVzIHdoaWNoIGNhbiBjb250YWluIHRleHQgbm9kZXMuXG4gICAgICBpZiAoZGlzdHJpYnV0ZWROb2Rlc1tub2RlSW5kZXhdLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChfY29tcG9zZWRUcmVlQ29udGFpbnMoZGlzdHJpYnV0ZWROb2Rlc1tub2RlSW5kZXhdLCBjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Njcm9sbEludGVyYWN0aW9uSGFuZGxlcihldmVudCkge1xuICAvLyBBdm9pZCBjYW5jZWxpbmcgYW4gZXZlbnQgd2l0aCBjYW5jZWxhYmxlPWZhbHNlLCBlLmcuIHNjcm9sbGluZyBpcyBpblxuICAvLyBwcm9ncmVzcyBhbmQgY2Fubm90IGJlIGludGVycnVwdGVkLlxuICBpZiAoZXZlbnQuY2FuY2VsYWJsZSAmJiBfc2hvdWxkUHJldmVudFNjcm9sbGluZyhldmVudCkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIC8vIElmIGV2ZW50IGhhcyB0YXJnZXRUb3VjaGVzICh0b3VjaCBldmVudCksIHVwZGF0ZSBsYXN0IHRvdWNoIHBvc2l0aW9uLlxuICBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG4gICAgbGFzdFRvdWNoUG9zaXRpb24ucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICBsYXN0VG91Y2hQb3NpdGlvbi5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xuICB9XG59XG5cbi8qKlxuICogQHBhY2thZ2VcbiAqL1xuZXhwb3J0IHtfYm91bmRTY3JvbGxIYW5kbGVyfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9sb2NrU2Nyb2xsSW50ZXJhY3Rpb25zKCkge1xuICBfYm91bmRTY3JvbGxIYW5kbGVyID1cbiAgICAgIF9ib3VuZFNjcm9sbEhhbmRsZXIgfHwgX3Njcm9sbEludGVyYWN0aW9uSGFuZGxlci5iaW5kKHVuZGVmaW5lZCk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gc2Nyb2xsRXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIE5PVEU6IGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBvYmplY3RzIGFzIHRoaXJkIGFyZyB3aWxsXG4gICAgLy8gaW50ZXJwcmV0IGl0IGFzIGJvb2xlYW4sIGhlbmNlIHVzZUNhcHR1cmUgPSB0cnVlIGluIHRoaXMgY2FzZS5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBzY3JvbGxFdmVudHNbaV0sIF9ib3VuZFNjcm9sbEhhbmRsZXIsIHtjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZX0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfdW5sb2NrU2Nyb2xsSW50ZXJhY3Rpb25zKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHNjcm9sbEV2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAvLyBOT1RFOiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgb2JqZWN0cyBhcyB0aGlyZCBhcmcgd2lsbFxuICAgIC8vIGludGVycHJldCBpdCBhcyBib29sZWFuLCBoZW5jZSB1c2VDYXB0dXJlID0gdHJ1ZSBpbiB0aGlzIGNhc2UuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgc2Nyb2xsRXZlbnRzW2ldLCBfYm91bmRTY3JvbGxIYW5kbGVyLCB7Y2FwdHVyZTogdHJ1ZSwgcGFzc2l2ZTogZmFsc2V9KTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZXZlbnQgY2F1c2VzIHNjcm9sbCBvdXRzaWRlIHRoZSBjdXJyZW50IGxvY2tpbmdcbiAqIGVsZW1lbnQsIGUuZy4gcG9pbnRlci9rZXlib2FyZCBpbnRlcmFjdGlvbnMsIG9yIHNjcm9sbCBcImxlYWtpbmdcIlxuICogb3V0c2lkZSB0aGUgbG9ja2luZyBlbGVtZW50IHdoZW4gaXQgaXMgYWxyZWFkeSBhdCBpdHMgc2Nyb2xsIGJvdW5kYXJpZXMuXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAcGFja2FnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3Nob3VsZFByZXZlbnRTY3JvbGxpbmcoZXZlbnQpIHtcbiAgLy8gVXBkYXRlIGlmIHJvb3QgdGFyZ2V0IGNoYW5nZWQuIEZvciB0b3VjaCBldmVudHMsIGVuc3VyZSB3ZSBkb24ndFxuICAvLyB1cGRhdGUgZHVyaW5nIHRvdWNobW92ZS5cbiAgdmFyIHRhcmdldCA9IGRvbShldmVudCkucm9vdFRhcmdldDtcbiAgaWYgKGV2ZW50LnR5cGUgIT09ICd0b3VjaG1vdmUnICYmIGxhc3RSb290VGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICBsYXN0Um9vdFRhcmdldCA9IHRhcmdldDtcbiAgICBsYXN0U2Nyb2xsYWJsZU5vZGVzID0gX2dldFNjcm9sbGFibGVOb2Rlcyhkb20oZXZlbnQpLnBhdGgpO1xuICB9XG5cbiAgLy8gUHJldmVudCBldmVudCBpZiBubyBzY3JvbGxhYmxlIG5vZGVzLlxuICBpZiAoIWxhc3RTY3JvbGxhYmxlTm9kZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gRG9uJ3QgcHJldmVudCB0b3VjaHN0YXJ0IGV2ZW50IGluc2lkZSB0aGUgbG9ja2luZyBlbGVtZW50IHdoZW4gaXQgaGFzXG4gIC8vIHNjcm9sbGFibGUgbm9kZXMuXG4gIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gR2V0IGRlbHRhWC9ZLlxuICB2YXIgaW5mbyA9IF9nZXRTY3JvbGxJbmZvKGV2ZW50KTtcbiAgLy8gUHJldmVudCBpZiB0aGVyZSBpcyBubyBjaGlsZCB0aGF0IGNhbiBzY3JvbGwuXG4gIHJldHVybiAhX2dldFNjcm9sbGluZ05vZGUobGFzdFNjcm9sbGFibGVOb2RlcywgaW5mby5kZWx0YVgsIGluZm8uZGVsdGFZKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNjcm9sbGFibGUgbm9kZXMgdXAgdG8gdGhlIGN1cnJlbnQgbG9ja2luZyBlbGVtZW50LFxuICogd2hpY2ggaXMgaW5jbHVkZWQgdG9vIGlmIHNjcm9sbGFibGUuXG4gKiBAcGFyYW0geyFBcnJheTwhTm9kZT59IG5vZGVzXG4gKiBAcmV0dXJuIHshQXJyYXk8IU5vZGU+fSBzY3JvbGxhYmxlc1xuICogQHBhY2thZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTY3JvbGxhYmxlTm9kZXMobm9kZXMpIHtcbiAgdmFyIHNjcm9sbGFibGVzID0gW107XG4gIHZhciBsb2NraW5nSW5kZXggPVxuICAgICAgbm9kZXMuaW5kZXhPZigvKiogQHR5cGUgeyFOb2RlfSAqLyAoY3VycmVudExvY2tpbmdFbGVtZW50KSk7XG4gIC8vIExvb3AgZnJvbSByb290IHRhcmdldCB0byBsb2NraW5nIGVsZW1lbnQgKGluY2x1ZGVkKS5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbG9ja2luZ0luZGV4OyBpKyspIHtcbiAgICAvLyBTa2lwIG5vbi1FbGVtZW50IG5vZGVzLlxuICAgIGlmIChub2Rlc1tpXS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChub2Rlc1tpXSk7XG4gICAgLy8gQ2hlY2sgaW5saW5lIHN0eWxlIGJlZm9yZSBjaGVja2luZyBjb21wdXRlZCBzdHlsZS5cbiAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuICAgIGlmIChzdHlsZS5vdmVyZmxvdyAhPT0gJ3Njcm9sbCcgJiYgc3R5bGUub3ZlcmZsb3cgIT09ICdhdXRvJykge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB9XG4gICAgaWYgKHN0eWxlLm92ZXJmbG93ID09PSAnc2Nyb2xsJyB8fCBzdHlsZS5vdmVyZmxvdyA9PT0gJ2F1dG8nKSB7XG4gICAgICBzY3JvbGxhYmxlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2Nyb2xsYWJsZXM7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbm9kZSB0aGF0IGlzIHNjcm9sbGluZy4gSWYgdGhlcmUgaXMgbm8gc2Nyb2xsaW5nLFxuICogcmV0dXJucyB1bmRlZmluZWQuXG4gKiBAcGFyYW0geyFBcnJheTwhTm9kZT59IG5vZGVzXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsdGFYIFNjcm9sbCBkZWx0YSBvbiB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsdGFZIFNjcm9sbCBkZWx0YSBvbiB0aGUgeS1heGlzXG4gKiBAcmV0dXJuIHshTm9kZXx1bmRlZmluZWR9XG4gKiBAcGFja2FnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFNjcm9sbGluZ05vZGUobm9kZXMsIGRlbHRhWCwgZGVsdGFZKSB7XG4gIC8vIE5vIHNjcm9sbC5cbiAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBDaGVjayBvbmx5IG9uZSBheGlzIGFjY29yZGluZyB0byB3aGVyZSB0aGVyZSBpcyBtb3JlIHNjcm9sbC5cbiAgLy8gUHJlZmVyIHZlcnRpY2FsIHRvIGhvcml6b250YWwuXG4gIHZhciB2ZXJ0aWNhbFNjcm9sbCA9IE1hdGguYWJzKGRlbHRhWSkgPj0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgdmFyIGNhblNjcm9sbCA9IGZhbHNlO1xuICAgIGlmICh2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgLy8gZGVsdGEgPCAwIGlzIHNjcm9sbCB1cCwgZGVsdGEgPiAwIGlzIHNjcm9sbCBkb3duLlxuICAgICAgY2FuU2Nyb2xsID0gZGVsdGFZIDwgMCA/XG4gICAgICAgICAgbm9kZS5zY3JvbGxUb3AgPiAwIDpcbiAgICAgICAgICBub2RlLnNjcm9sbFRvcCA8IG5vZGUuc2Nyb2xsSGVpZ2h0IC0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlbHRhIDwgMCBpcyBzY3JvbGwgbGVmdCwgZGVsdGEgPiAwIGlzIHNjcm9sbCByaWdodC5cbiAgICAgIGNhblNjcm9sbCA9IGRlbHRhWCA8IDAgP1xuICAgICAgICAgIG5vZGUuc2Nyb2xsTGVmdCA+IDAgOlxuICAgICAgICAgIG5vZGUuc2Nyb2xsTGVmdCA8IG5vZGUuc2Nyb2xsV2lkdGggLSBub2RlLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgICBpZiAoY2FuU2Nyb2xsKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHNjcm9sbCBgZGVsdGFYYCBhbmQgYGRlbHRhWWAuXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnQgVGhlIHNjcm9sbCBldmVudFxuICogQHJldHVybiB7e2RlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcn19IE9iamVjdCBjb250YWluaW5nIHRoZVxuICogeC1heGlzIHNjcm9sbCBkZWx0YSAocG9zaXRpdmU6IHNjcm9sbCByaWdodCwgbmVnYXRpdmU6IHNjcm9sbCBsZWZ0LFxuICogMDogbm8gc2Nyb2xsKSwgYW5kIHRoZSB5LWF4aXMgc2Nyb2xsIGRlbHRhIChwb3NpdGl2ZTogc2Nyb2xsIGRvd24sXG4gKiBuZWdhdGl2ZTogc2Nyb2xsIHVwLCAwOiBubyBzY3JvbGwpLlxuICogQHBhY2thZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTY3JvbGxJbmZvKGV2ZW50KSB7XG4gIHZhciBpbmZvID0ge2RlbHRhWDogZXZlbnQuZGVsdGFYLCBkZWx0YVk6IGV2ZW50LmRlbHRhWX07XG4gIC8vIEFscmVhZHkgYXZhaWxhYmxlLlxuICBpZiAoJ2RlbHRhWCcgaW4gZXZlbnQpIHtcbiAgICAvLyBkbyBub3RoaW5nLCB2YWx1ZXMgYXJlIGFscmVhZHkgZ29vZC5cbiAgfVxuICAvLyBTYWZhcmkgaGFzIHNjcm9sbCBpbmZvIGluIGB3aGVlbERlbHRhWC9ZYC5cbiAgZWxzZSBpZiAoJ3doZWVsRGVsdGFYJyBpbiBldmVudCAmJiAnd2hlZWxEZWx0YVknIGluIGV2ZW50KSB7XG4gICAgaW5mby5kZWx0YVggPSAtZXZlbnQud2hlZWxEZWx0YVg7XG4gICAgaW5mby5kZWx0YVkgPSAtZXZlbnQud2hlZWxEZWx0YVk7XG4gIH1cbiAgLy8gSUUxMCBoYXMgb25seSB2ZXJ0aWNhbCBzY3JvbGwgaW5mbyBpbiBgd2hlZWxEZWx0YWAuXG4gIGVsc2UgaWYgKCd3aGVlbERlbHRhJyBpbiBldmVudCkge1xuICAgIGluZm8uZGVsdGFYID0gMDtcbiAgICBpbmZvLmRlbHRhWSA9IC1ldmVudC53aGVlbERlbHRhO1xuICB9XG4gIC8vIEZpcmVmb3ggaGFzIHNjcm9sbCBpbmZvIGluIGBkZXRhaWxgIGFuZCBgYXhpc2AuXG4gIGVsc2UgaWYgKCdheGlzJyBpbiBldmVudCkge1xuICAgIGluZm8uZGVsdGFYID0gZXZlbnQuYXhpcyA9PT0gMSA/IGV2ZW50LmRldGFpbCA6IDA7XG4gICAgaW5mby5kZWx0YVkgPSBldmVudC5heGlzID09PSAyID8gZXZlbnQuZGV0YWlsIDogMDtcbiAgfVxuICAvLyBPbiBtb2JpbGUgZGV2aWNlcywgY2FsY3VsYXRlIHNjcm9sbCBkaXJlY3Rpb24uXG4gIGVsc2UgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMpIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xuICAgIC8vIFRvdWNoIG1vdmVzIGZyb20gcmlnaHQgdG8gbGVmdCA9PiBzY3JvbGxpbmcgZ29lcyByaWdodC5cbiAgICBpbmZvLmRlbHRhWCA9IGxhc3RUb3VjaFBvc2l0aW9uLnBhZ2VYIC0gdG91Y2gucGFnZVg7XG4gICAgLy8gVG91Y2ggbW92ZXMgZnJvbSBkb3duIHRvIHVwID0+IHNjcm9sbGluZyBnb2VzIGRvd24uXG4gICAgaW5mby5kZWx0YVkgPSBsYXN0VG91Y2hQb3NpdGlvbi5wYWdlWSAtIHRvdWNoLnBhZ2VZO1xuICB9XG4gIHJldHVybiBpbmZvO1xufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBpcyBpbXBsZW1lbnRlZCBieSBlbGVtZW50cyBjb250YWluaW5nXG4gKiBhbmltYXRpb25zIGZvciB1c2Ugd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgLlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGFibGVCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gY29uZmlndXJhdGlvbi4gU2VlIFJFQURNRSBmb3IgbW9yZSBpbmZvLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZW50cnknIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZW50cnlgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGVudHJ5QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19lbnRyeUFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZXhpdCcgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5leGl0YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBleGl0QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19leGl0QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICB9LFxuXG4gIF9lbnRyeUFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2VudHJ5J10gPSBbe25hbWU6IHRoaXMuZW50cnlBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfZXhpdEFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2V4aXQnXSA9IFt7bmFtZTogdGhpcy5leGl0QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2NvcHlQcm9wZXJ0aWVzOiBmdW5jdGlvbihjb25maWcxLCBjb25maWcyKSB7XG4gICAgLy8gc2hhbGxvd2x5IGNvcHkgcHJvcGVydGllcyBmcm9tIGNvbmZpZzIgdG8gY29uZmlnMVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZzFbcHJvcGVydHldID0gY29uZmlnMltwcm9wZXJ0eV07XG4gICAgfVxuICB9LFxuXG4gIF9jbG9uZUNvbmZpZzogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIGNsb25lID0ge2lzQ2xvbmU6IHRydWV9O1xuICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNsb25lLCBjb25maWcpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfSxcblxuICBfZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlOiBmdW5jdGlvbih0eXBlLCBtYXAsIGFsbENvbmZpZ3MpIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlICYmXG4gICAgICAgIHR5cGVvZiB0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fd2Fybih0aGlzLl9sb2dmKFxuICAgICAgICAgICdwbGF5QW5pbWF0aW9uJyxcbiAgICAgICAgICAnUGxlYXNlIHB1dCBcXCdhbmltYXRpb25Db25maWdcXCcgaW5zaWRlIG9mIHlvdXIgY29tcG9uZW50cyBcXCdwcm9wZXJ0aWVzXFwnIG9iamVjdCBpbnN0ZWFkIG9mIG91dHNpZGUgb2YgaXQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHR5cGUgaXMgb3B0aW9uYWxcbiAgICB2YXIgdGhpc0NvbmZpZztcbiAgICBpZiAodHlwZSkge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWc7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXNDb25maWcpKSB7XG4gICAgICB0aGlzQ29uZmlnID0gW3RoaXNDb25maWddO1xuICAgIH1cblxuICAgIC8vIGl0ZXJhdGUgYW5pbWF0aW9ucyBhbmQgcmVjdXJzZSB0byBwcm9jZXNzIGNvbmZpZ3VyYXRpb25zIGZyb20gY2hpbGQgbm9kZXNcbiAgICBpZiAodGhpc0NvbmZpZykge1xuICAgICAgZm9yICh2YXIgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IHRoaXNDb25maWdbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChjb25maWcuYW5pbWF0YWJsZSkge1xuICAgICAgICAgIGNvbmZpZy5hbmltYXRhYmxlLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUoXG4gICAgICAgICAgICAgIGNvbmZpZy50eXBlIHx8IHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgaWYgKGNhY2hlZENvbmZpZykge1xuICAgICAgICAgICAgICAvLyBtZXJnZSBjb25maWd1cmF0aW9ucyB3aXRoIHRoZSBzYW1lIGlkLCBtYWtpbmcgYSBjbG9uZSBsYXppbHlcbiAgICAgICAgICAgICAgaWYgKCFjYWNoZWRDb25maWcuaXNDbG9uZSkge1xuICAgICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gdGhpcy5fY2xvbmVDb25maWcoY2FjaGVkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjYWNoZWRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwdXQgYW55IGNvbmZpZ3Mgd2l0aCBhbiBpZCBpbnRvIGEgbWFwXG4gICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxDb25maWdzLnB1c2goY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIGVsZW1lbnQgaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGNhbGxzIHRoaXNcbiAgICogbWV0aG9kIHRvIGNvbmZpZ3VyZSBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCB0eXBlLiBFbGVtZW50c1xuICAgKiBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIHNob3VsZCBkZWZpbmUgdGhlIHByb3BlcnR5XG4gICAqIGBhbmltYXRpb25Db25maWdgLCB3aGljaCBpcyBlaXRoZXIgYSBjb25maWd1cmF0aW9uIG9iamVjdCBvciBhIG1hcCBvZlxuICAgKiBhbmltYXRpb24gdHlwZSB0byBhcnJheSBvZiBjb25maWd1cmF0aW9uIG9iamVjdHMuXG4gICAqL1xuICBnZXRBbmltYXRpb25Db25maWc6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdmFyIGFsbENvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUodHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAvLyBhcHBlbmQgdGhlIGNvbmZpZ3VyYXRpb25zIHNhdmVkIGluIHRoZSBtYXAgdG8gdGhlIGFycmF5XG4gICAgZm9yICh2YXIga2V5IGluIG1hcCkge1xuICAgICAgYWxsQ29uZmlncy5wdXNoKG1hcFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbENvbmZpZ3M7XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yfSBmcm9tICcuL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgYWRkcyBhIG1ldGhvZCB0byBydW4gYW5pbWF0aW9ucy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbCA9IHtcblxuICBfY29uZmlndXJlQW5pbWF0aW9uczogZnVuY3Rpb24oY29uZmlncykge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlc3VsdHNUb1BsYXkgPSBbXTtcblxuICAgIGlmIChjb25maWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSBjb25maWdzW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLm5hbWUpO1xuICAgICAgICAvLyBpcyB0aGlzIGVsZW1lbnQgYWN0dWFsbHkgYSBuZW9uIGFuaW1hdGlvbj9cbiAgICAgICAgaWYgKG5lb25BbmltYXRpb24uaXNOZW9uQW5pbWF0aW9uKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgLy8gQ2xvc3VyZSBjb21waWxlciBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBhIHRyeSAvIGNhdGNoIGhlcmUuXG4gICAgICAgICAgLy8gLmNvbmZpZ3VyZSBuZWVkcyB0byBiZSBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBpZiAoIW5lb25BbmltYXRpb24uY29uZmlndXJlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FuaW1hdGlvbkVmZmVjdFJlYWRPbmx5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQgPSBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZShjb25maWcpO1xuICAgICAgICAgIHJlc3VsdHNUb1BsYXkucHVzaCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5pcyArICc6JywgY29uZmlnLm5hbWUsICdub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHNUb1BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzVG9QbGF5W2ldLnJlc3VsdDtcbiAgICAgIGxldCBjb25maWcgPSByZXN1bHRzVG9QbGF5W2ldLmNvbmZpZztcbiAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gcmVzdWx0c1RvUGxheVtpXS5uZW9uQW5pbWF0aW9uO1xuICAgICAgLy8gY29uZmlndXJhdGlvbiBvciBwbGF5IGNvdWxkIGZhaWwgaWYgcG9seWZpbGxzIGFyZW4ndCBsb2FkZWRcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gRWZmZWN0IHJhdGhlciB0aGFuIGFuIEFuaW1hdGlvblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5jYW5jZWwgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnRpbWVsaW5lLnBsYXkocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkbnQgcGxheScsICcoJywgY29uZmlnLm5hbWUsICcpLicsIGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBhbmltYXRpb246IHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG5cbiAgX3Nob3VsZENvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgdmFyIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5wbGF5U3RhdGUgIT0gJ2ZpbmlzaGVkJykge1xuICAgICAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaGVkO1xuICB9LFxuXG4gIF9jb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5uZW9uQW5pbWF0aW9uLmNvbXBsZXRlKGFjdGl2ZUVudHJpZXNbaV0uY29uZmlnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGB0eXBlYC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSB0eXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdD19IGNvb2tpZVxuICAgKi9cbiAgcGxheUFuaW1hdGlvbjogZnVuY3Rpb24odHlwZSwgY29va2llKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmdldEFuaW1hdGlvbkNvbmZpZyh0eXBlKTtcbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5fYWN0aXZlIHx8IHt9O1xuICAgIGlmICh0aGlzLl9hY3RpdmVbdHlwZV0pIHtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKHRoaXMuX2FjdGl2ZVt0eXBlXSk7XG4gICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbnRyaWVzID0gdGhpcy5fY29uZmlndXJlQW5pbWF0aW9ucyhjb25maWdzKTtcblxuICAgIGlmIChhY3RpdmVFbnRyaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlW3R5cGVdID0gYWN0aXZlRW50cmllcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ub25maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZENvbXBsZXRlKGFjdGl2ZUVudHJpZXMpKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGxldGUoYWN0aXZlRW50cmllcyk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICAgICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAqL1xuICBjYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGsgaW4gdGhpcy5fYWN0aXZlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuX2FjdGl2ZVtrXVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZW50cmllcykge1xuICAgICAgICBlbnRyaWVzW2pdLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSB7fTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3IgPVxuICAgIFtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yLCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=