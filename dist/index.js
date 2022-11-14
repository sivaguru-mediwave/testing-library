'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactLeaflet = require('react-leaflet');
require('leaflet/dist/leaflet.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Button = function (_a) {
    var label = _a.label, style = _a.style, onClick = _a.onClick;
    return (React__namespace.createElement("button", { style: style, onClick: onClick }, label));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var MapWrapper = styled__default["default"](reactLeaflet.MapContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  min-width: ", ";\n  min-height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  min-width: ", ";\n  min-height: ", ";\n"])), function (props) { return (props.width ? props.width : "100vw"); }, function (props) { return (props.height ? props.height : "100vh"); }, function (props) { return (props.minWidth ? props.minWidth : "400px"); }, function (props) { return (props.minHeight ? props.minHeight : "400px"); });
var Map = function (_a) {
    var width = _a.width, height = _a.height, minWidth = _a.minWidth, minHeight = _a.minHeight, children = _a.children, rest = __rest(_a, ["width", "height", "minWidth", "minHeight", "children"]);
    return (React__namespace.createElement(MapWrapper, __assign({ width: width, height: height, minWidth: minWidth, minHeight: minHeight }, rest), children));
};
var templateObject_1;

exports.Button = Button;
exports.Map = Map;
//# sourceMappingURL=index.js.map
