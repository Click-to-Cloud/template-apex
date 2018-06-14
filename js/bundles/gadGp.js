var pageComponent =
webpackJsonppageComponent([10],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _indexSoy = __webpack_require__(277);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gadGp = function (_Component) {
  _inherits(gadGp, _Component);

  function gadGp() {
    _classCallCheck(this, gadGp);

    return _possibleConstructorReturn(this, (gadGp.__proto__ || Object.getPrototypeOf(gadGp)).apply(this, arguments));
  }

  return gadGp;
}(_metalComponent2.default);

;

_metalSoy2.default.register(gadGp, _indexSoy2.default);

exports.default = gadGp;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.gadGp = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace gadGp.
   * @public
   */

  goog.module('gadGp.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param909 = function param909() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Unary Operators');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('-');
      ie_close('td');
      ie_open('td');
      itext('Negate the number');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!');
      ie_close('td');
      ie_open('td');
      itext('Negate the boolean');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Binary Operators');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('==');
      ie_close('td');
      ie_open('td');
      itext('Equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('=');
      ie_close('td');
      ie_open('td');
      itext('Equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!=');
      ie_close('td');
      ie_open('td');
      itext('Not Equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<>');
      ie_close('td');
      ie_open('td');
      itext('Not Equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<');
      ie_close('td');
      ie_open('td');
      itext('Less than');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('>');
      ie_close('td');
      ie_open('td');
      itext('Greater than');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<=');
      ie_close('td');
      ie_open('td');
      itext('Less than or equal');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('>=');
      ie_close('td');
      ie_open('td');
      itext('Greater than or equal');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('+');
      ie_close('td');
      ie_open('td');
      itext('Add');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-');
      ie_close('td');
      ie_open('td');
      itext('Minute');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('*');
      ie_close('td');
      ie_open('td');
      itext('Multiply');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('/');
      ie_close('td');
      ie_open('td');
      itext('Divide');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('^');
      ie_close('td');
      ie_open('td');
      itext('Power');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('&');
      ie_close('td');
      ie_open('td');
      itext('String concatenation');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Logical Operators');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('&&');
      ie_close('td');
      ie_open('td');
      itext('Logical AND');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('\\');
      ie_close('td');
      ie_open('td');
      itext('\\');
      ie_close('td');
      ie_void('td');
      ie_open('td');
      itext('Logical OR');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Other Operators');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('? :');
      ie_close('td');
      ie_open('td');
      itext('If ... then ... else ...');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('()');
      ie_close('td');
      ie_open('td');
      itext('Grouping');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Date/Time Functions');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Function');
      ie_close('th');
      ie_open('th');
      itext('Support');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('ADDMONTHS');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DATE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DATEVALUE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DATETIMEVALUE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DAY');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MONTH');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('NOW');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('TODAY');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('WEEKDAY');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('YEAR');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Logical Functions');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Function');
      ie_close('th');
      ie_open('th');
      itext('Support');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('AND');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('BLANKVALUE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CASE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('IF');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISBLANK');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISCLONE');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISNEW');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISNULL');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISNUMBER');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('NOT');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('NULLVALUE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('OR');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('PRIORVALUE');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Math Functions');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Function');
      ie_close('th');
      ie_open('th');
      itext('Support');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('ABS');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CEILING');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('EXP');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('FLOOR');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LN');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LOG');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MAX');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MCEILING');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MFLOOR');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MIN');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MOD');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ROUND');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SQRT');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Text Functions');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Function');
      ie_close('th');
      ie_open('th');
      itext('Support');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('BEGINS');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('BR');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CASESAFEID');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CONTAINS');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('FIND');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('GETSESSIONID');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('HTMLENCODE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISPICKVAL');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('JSENCODE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('JSINHTMLENCODE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LEFT');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LEN');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LOWER');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LPAD');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MID');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RIGHT');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RPAD');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SUBSTITUTE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('TEXT');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('TRIM');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('UPPER');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('URLENCODE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('VALUE');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('Advanced Functions');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Function');
      ie_close('th');
      ie_open('th');
      itext('Support');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('CURRENCYRATE');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('GETRECORDIDS');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('INCLUDE');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ISCHANGED');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('JUNCTIONIDLIST');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('LINKTO');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('REGEX');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('REQUIRESCRIPT');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('URLFOR');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('VLOOKUP');
      ie_close('td');
      ie_open('td');
      itext('No');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param909 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'gadGp.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var gadGp = function (_Component) {
  _inherits(gadGp, _Component);

  function gadGp() {
    _classCallCheck(this, gadGp);

    return _possibleConstructorReturn(this, (gadGp.__proto__ || Object.getPrototypeOf(gadGp)).apply(this, arguments));
  }

  return gadGp;
}(_metalComponent2.default);

_metalSoy2.default.register(gadGp, templates);
exports.gadGp = gadGp;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);