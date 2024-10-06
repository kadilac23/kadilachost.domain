/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "./../";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./assets/client-area/js/support-hours.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./assets/client-area/js/components/change-department.js":
        /*!***************************************************************!*\
          !*** ./assets/client-area/js/components/change-department.js ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }

            var changeDeparment = /*#__PURE__*/ function() {
                function changeDeparment(select) {
                    _classCallCheck(this, changeDeparment);

                    this.select = select;
                    this.panels = $('.panel-support-hours');
                    this.body = $('.main-body');
                    this.bindEvents();
                }

                _createClass(changeDeparment, [{
                    key: "bindEvents",
                    value: function bindEvents() {
                        $(this.select).on('change', this.changeDeparment.bind(this));
                    }
                }, {
                    key: "changeDeparment",
                    value: function changeDeparment() {
                        var value = $(event.currentTarget)[0].value,
                            currentDepartmentPanel = $('.panel-support-hours-department-' + value),
                            allDepartmentsPanel = $('.panel-support-hours-department-all');
                        this.panels.each(function() {
                            $(this)[0].classList.add('hidden');
                        });

                        if (currentDepartmentPanel.length) {
                            currentDepartmentPanel.each(function() {
                                $(this)[0].classList.remove('hidden');
                            });
                        }

                        if (allDepartmentsPanel.length) {
                            allDepartmentsPanel.each(function() {
                                $(this)[0].classList.remove('hidden');
                            });
                        }

                        if (this.body[0].classList.contains('toggle-sidebar')) {
                            var canHideSidaber = true;
                            this.panels.each(function() {
                                if (!$(this)[0].classList.contains('hidden')) {
                                    canHideSidaber = false;
                                }
                            });

                            if (canHideSidaber) {
                                this.body[0].classList.add('hidden-sidebar');
                            } else {
                                this.body[0].classList.remove('hidden-sidebar');
                            }
                        }

                        ;
                    }
                }]);

                return changeDeparment;
            }();

            /* harmony default export */
            __webpack_exports__["default"] = ({
                init: function init() {
                    $('#inputDepartment').each(function() {
                        new changeDeparment($(this));
                    });
                }
            });

            /***/
        }),

    /***/
    "./assets/client-area/js/support-hours.js":
        /*!************************************************!*\
          !*** ./assets/client-area/js/support-hours.js ***!
          \************************************************/
        /*! no exports provided */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _components_change_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./components/change-department */ "./assets/client-area/js/components/change-department.js");

            _components_change_department__WEBPACK_IMPORTED_MODULE_0__["default"].init();

            /***/
        })

    /******/
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NsaWVudC1hcmVhL2pzL2NvbXBvbmVudHMvY2hhbmdlLWRlcGFydG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NsaWVudC1hcmVhL2pzL3N1cHBvcnQtaG91cnMuanMiXSwibmFtZXMiOlsiY2hhbmdlRGVwYXJtZW50Iiwic2VsZWN0IiwicGFuZWxzIiwiJCIsImJvZHkiLCJiaW5kRXZlbnRzIiwib24iLCJiaW5kIiwidmFsdWUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50RGVwYXJ0bWVudFBhbmVsIiwiYWxsRGVwYXJ0bWVudHNQYW5lbCIsImVhY2giLCJjbGFzc0xpc3QiLCJhZGQiLCJsZW5ndGgiLCJyZW1vdmUiLCJjb250YWlucyIsImNhbkhpZGVTaWRhYmVyIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLGU7QUFDRiwyQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUNmLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsQ0FBQyxDQUFDLHNCQUFELENBQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlELENBQUMsQ0FBQyxZQUFELENBQWI7QUFDQSxTQUFLRSxVQUFMO0FBQ0g7Ozs7aUNBQ1c7QUFDUkYsT0FBQyxDQUFDLEtBQUtGLE1BQU4sQ0FBRCxDQUFlSyxFQUFmLENBQWtCLFFBQWxCLEVBQTRCLEtBQUtOLGVBQUwsQ0FBcUJPLElBQXJCLENBQTBCLElBQTFCLENBQTVCO0FBQ0g7OztzQ0FDZ0I7QUFDYixVQUFJQyxLQUFLLEdBQUdMLENBQUMsQ0FBQ00sS0FBSyxDQUFDQyxhQUFQLENBQUQsQ0FBdUIsQ0FBdkIsRUFBMEJGLEtBQXRDO0FBQUEsVUFDSUcsc0JBQXNCLEdBQUdSLENBQUMsQ0FBQyxxQ0FBbUNLLEtBQXBDLENBRDlCO0FBQUEsVUFFSUksbUJBQW1CLEdBQUdULENBQUMsQ0FBQyxxQ0FBRCxDQUYzQjtBQUdBLFdBQUtELE1BQUwsQ0FBWVcsSUFBWixDQUFpQixZQUFVO0FBQ3ZCVixTQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXVyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QjtBQUNILE9BRkQ7O0FBR0EsVUFBSUosc0JBQXNCLENBQUNLLE1BQTNCLEVBQWtDO0FBQzlCTCw4QkFBc0IsQ0FBQ0UsSUFBdkIsQ0FBNEIsWUFBVTtBQUNsQ1YsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBV1csU0FBWCxDQUFxQkcsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSCxTQUZEO0FBR0g7O0FBQ0QsVUFBSUwsbUJBQW1CLENBQUNJLE1BQXhCLEVBQStCO0FBQzNCSiwyQkFBbUIsQ0FBQ0MsSUFBcEIsQ0FBeUIsWUFBVTtBQUMvQlYsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBV1csU0FBWCxDQUFxQkcsTUFBckIsQ0FBNEIsUUFBNUI7QUFDSCxTQUZEO0FBR0g7O0FBRUQsVUFBSSxLQUFLYixJQUFMLENBQVUsQ0FBVixFQUFhVSxTQUFiLENBQXVCSSxRQUF2QixDQUFnQyxnQkFBaEMsQ0FBSixFQUFzRDtBQUNsRCxZQUFJQyxjQUFjLEdBQUcsSUFBckI7QUFDQSxhQUFLakIsTUFBTCxDQUFZVyxJQUFaLENBQWlCLFlBQVU7QUFDdkIsY0FBSSxDQUFDVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXVyxTQUFYLENBQXFCSSxRQUFyQixDQUE4QixRQUE5QixDQUFMLEVBQTZDO0FBQ3pDQywwQkFBYyxHQUFHLEtBQWpCO0FBQ0g7QUFDSixTQUpEOztBQUtBLFlBQUlBLGNBQUosRUFBbUI7QUFDZixlQUFLZixJQUFMLENBQVUsQ0FBVixFQUFhVSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixnQkFBM0I7QUFDSCxTQUZELE1BR0k7QUFDQSxlQUFLWCxJQUFMLENBQVUsQ0FBVixFQUFhVSxTQUFiLENBQXVCRyxNQUF2QixDQUE4QixnQkFBOUI7QUFDSDtBQUNKOztBQUFBO0FBQ0o7Ozs7OztBQUdVO0FBQ1hHLE1BRFcsa0JBQ0o7QUFDSGpCLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCVSxJQUF0QixDQUEyQixZQUFZO0FBQ25DLFVBQUliLGVBQUosQ0FBb0JHLENBQUMsQ0FBQyxJQUFELENBQXJCO0FBQ0gsS0FGRDtBQUdIO0FBTFUsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBRUFILHFFQUFlLENBQUNvQixJQUFoQixHIiwiZmlsZSI6InRlbXBsYXRlcy9sYWdvbTIvY29yZS9leHRlbnNpb25zL1N1cHBvcnRIb3Vycy9hc3NldHMvanMvc3VwcG9ydC1ob3Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi8uLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvY2xpZW50LWFyZWEvanMvc3VwcG9ydC1ob3Vycy5qc1wiKTtcbiIsImNsYXNzIGNoYW5nZURlcGFybWVudHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBzZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSAkKCcucGFuZWwtc3VwcG9ydC1ob3VycycpO1xyXG4gICAgICAgIHRoaXMuYm9keSA9ICQoJy5tYWluLWJvZHknKTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuICAgIGJpbmRFdmVudHMoKXtcclxuICAgICAgICAkKHRoaXMuc2VsZWN0KS5vbignY2hhbmdlJywgdGhpcy5jaGFuZ2VEZXBhcm1lbnQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VEZXBhcm1lbnQoKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBjdXJyZW50RGVwYXJ0bWVudFBhbmVsID0gJCgnLnBhbmVsLXN1cHBvcnQtaG91cnMtZGVwYXJ0bWVudC0nK3ZhbHVlKSxcclxuICAgICAgICAgICAgYWxsRGVwYXJ0bWVudHNQYW5lbCA9ICQoJy5wYW5lbC1zdXBwb3J0LWhvdXJzLWRlcGFydG1lbnQtYWxsJyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpWzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjdXJyZW50RGVwYXJ0bWVudFBhbmVsLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGN1cnJlbnREZXBhcnRtZW50UGFuZWwuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFsbERlcGFydG1lbnRzUGFuZWwubGVuZ3RoKXtcclxuICAgICAgICAgICAgYWxsRGVwYXJ0bWVudHNQYW5lbC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5ib2R5WzBdLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlLXNpZGViYXInKSl7XHJcbiAgICAgICAgICAgIGxldCBjYW5IaWRlU2lkYWJlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICBjYW5IaWRlU2lkYWJlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAoY2FuSGlkZVNpZGFiZXIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tc2lkZWJhcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAkKCcjaW5wdXREZXBhcnRtZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBjaGFuZ2VEZXBhcm1lbnQoJCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IGNoYW5nZURlcGFybWVudCBmcm9tICcuL2NvbXBvbmVudHMvY2hhbmdlLWRlcGFydG1lbnQnO1xyXG5cclxuY2hhbmdlRGVwYXJtZW50LmluaXQoKTsiXSwic291cmNlUm9vdCI6IiJ9