function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
  /*!********************************************************************************!*\
    !*** ./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCore__ivy_ngcc__Fesm2015LazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jih-header></jih-header>\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/colors/color.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colors/color.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppColorsColorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"margin-top: 100px;\"></div>\r\n<div class=\"container\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6 row no-gutters\">\r\n      <div class=\"col-12 row no-gutters\">\r\n        <div class=\"col-1 my-auto\">\r\n          Reytt:\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <mat-slider tabIndex=\"-1\" min=\"0\" max=\"255\" step=\"1\" [(ngModel)]=\"red\"></mat-slider>\r\n        </div>\r\n        <div class=\"input-group mb-3 col\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"redHex\">Hex:</span>\r\n          </div>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 aria-label=\"Reyð hexkota\"\r\n                 placeholder=\"Reyð hexkota\"\r\n                 aria-describedby=\"redHex\"\r\n                 (input)=\"onChangeRed($event.target.value)\"\r\n                 [value]=\"hex(red)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 row no-gutters\">\r\n        <div class=\"col-1 my-auto\">\r\n          Grønt:\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <mat-slider tabIndex=\"-1\" min=\"0\" max=\"255\" step=\"1\" [(ngModel)]=\"green\"></mat-slider>\r\n        </div>\r\n        <div class=\"input-group mb-3 col\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"greenHex\">Hex:</span>\r\n          </div>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 aria-label=\"Grøn hexkota\"\r\n                 placeholder=\"Grøn hexkota\"\r\n                 aria-describedby=\"greenHex\"\r\n                 (input)=\"onChangeGreen($event.target.value)\"\r\n                 [value]=\"hex(green)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 row no-gutters\">\r\n        <div class=\"col-1 my-auto\">\r\n          Blátt:\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <mat-slider tabIndex=\"-1\" min=\"0\" max=\"255\" step=\"1\" [(ngModel)]=\"blue\"></mat-slider>\r\n        </div>\r\n        <div class=\"input-group mb-3 col\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"blueHex\">Hex:</span>\r\n          </div>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 aria-label=\"Blá hexkota\"\r\n                 placeholder=\"Blá hexkota\"\r\n                 aria-describedby=\"blueHex\"\r\n                 (input)=\"onChangeBlue($event.target.value)\"\r\n                 [value]=\"hex(blue)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div style=\"width: 100px; height: 100px;\" [style.background-color]=\"bgColor\"></div>\r\n        Farvukota: {{ bgColor }}\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mt-2 row no-gutters\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"card col-4\">\r\n        <div class=\"card-header\"><a href=\"../../assets/files/some.zip\">Some.zip</a></div>\r\n        <div class=\"card-body\">Bara ein tóm fíla</div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"jih-navbar navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['']\">Farvur</button>\r\n        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['snake']\">Snake</button>\r\n        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['sandbox']\">Sandbox</button>\r\n<!--        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['files']\">Fílur</button>-->\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/snake/snake.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snake/snake.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSnakeSnakeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"game-container\">\r\n  <div class=\"game-header\">\r\n    <h3 class=\"logo\">Snake</h3>\r\n    <div class=\"score-block\">\r\n      <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Score: {{score}}</h3>\r\n      <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Besta score: {{best_score}}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\r\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\r\n  </div>\r\n  <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Byrja spælið</div>\r\n  <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\r\n    <span class=\"new-game-menu-label\">Vel slag</span>\r\n    <div class=\"start-button new-game-button\" (click)=\"newGame(mode)\" *ngFor=\"let mode of getKeys(all_modes)\">{{all_modes[mode]}}</div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test-area/sandbox.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-area/sandbox.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestAreaSandboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-color: #000; padding-bottom: 100px\">\r\n  <ng-container *ngTemplateOutlet=\"kill; context: { name: 'Makoolyj', location: '115,Sur,299' }\"></ng-container>\r\n  <ng-container *ngTemplateOutlet=\"summon; context: { name: 'Turd Collector', location: '117,Sur,299' }\"></ng-container>\r\n  <ng-container *ngTemplateOutlet=\"kill; context: { name: 'Makoolyj', location: '114,For,196' }\"></ng-container>\r\n  <ng-container *ngTemplateOutlet=\"summon; context: { name: 'Turd Collector', location: '113,For,197' }\"></ng-container>\r\n  <ng-container *ngTemplateOutlet=\"kill; context: { name: 'Makoolyj', location: '233,Sky,288' }\"></ng-container>\r\n  <ng-container *ngTemplateOutlet=\"summon; context: { name: 'Turd Collector', location: '233,Sky,288' }\"></ng-container>\r\n\r\n  <font color=\"#CC00CC\">\r\n    <a style=\"color: #C89468;cursor:pointer;\" name=\"pm\"></a>\r\n    Your blessed treasury at 026,For,268 has gained 20,523mil interest in the last 17 hours.  Total: 2,590,525\r\n  </font>\r\n</div>\r\n\r\n<ng-template #summon let-name=\"name\" let-location=\"location\">\r\n  <font color=\"#FF6666\">\r\n    <font color=\"#FCFF11\">\r\n      <a style=\"color: #C89468;cursor:pointer;\" name=\"pm{{ htmlName(name) }}\">{{ name }}</a>\r\n      has awoken a beast near {{ location }}!!!\r\n    </font>\r\n  </font>\r\n  <br />\r\n</ng-template>\r\n<ng-template #kill let-name=\"name\" let-location=\"location\">\r\n  <font color=\"#BBBBFF\">\r\n    <font color=\"#FCFF11\">\r\n      <a style=\"color: #C89468;cursor:pointer;\" name=\"pm{{ htmlName(name) }}\">{{ name }}</a>\r\n      has slain the mega beast at {{ location }}!\r\n    </font>\r\n  </font>\r\n  <br />\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _files_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./files/files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _colors_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./colors/color.component */
    "./src/app/colors/color.component.ts");
    /* harmony import */


    var _snake_snake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./snake/snake.component */
    "./src/app/snake/snake.component.ts");
    /* harmony import */


    var _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test-area/sandbox.component */
    "./src/app/test-area/sandbox.component.ts");

    var routes = [{
      path: '',
      component: _colors_color_component__WEBPACK_IMPORTED_MODULE_4__["ColorComponent"]
    }, {
      path: 'files',
      component: _files_files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"]
    }, {
      path: 'snake',
      component: _snake_snake_component__WEBPACK_IMPORTED_MODULE_5__["SnakeComponent"]
    }, {
      path: 'sandbox',
      component: _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_6__["SandboxComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jih-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slider.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _files_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./files/files.component */
    "./src/app/files/files.component.ts");
    /* harmony import */


    var _colors_color_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./colors/color.component */
    "./src/app/colors/color.component.ts");
    /* harmony import */


    var _snake_snake_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./snake/snake.component */
    "./src/app/snake/snake.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _snake_snake_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./snake/snake.storage.service */
    "./src/app/snake/snake.storage.service.ts");
    /* harmony import */


    var _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./test-area/sandbox.component */
    "./src/app/test-area/sandbox.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _snake_snake_component__WEBPACK_IMPORTED_MODULE_10__["SnakeComponent"], _colors_color_component__WEBPACK_IMPORTED_MODULE_9__["ColorComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _files_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"], _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_14__["SandboxComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"]],
      providers: [{
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
        useClass: _angular_material__WEBPACK_IMPORTED_MODULE_4__["GestureConfig"]
      }, _snake_snake_storage_service__WEBPACK_IMPORTED_MODULE_13__["BestScoreManager"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/colors/color.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/colors/color.component.ts ***!
    \*******************************************/

  /*! exports provided: ColorComponent */

  /***/
  function srcAppColorsColorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorComponent", function () {
      return ColorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ColorComponent = /*#__PURE__*/function () {
      function ColorComponent() {
        var _this = this;

        _classCallCheck(this, ColorComponent);

        this.red = 255;
        this.green = 255;
        this.blue = 255;

        this.hex = function (num) {
          return num.toString(16).length === 1 ? '0' + num.toString(16) : num.toString(16);
        };

        this.onChangeRed = function (value) {
          var newValue = parseInt(value, 16);

          if (isNaN(newValue) || value.length < 2) {
            return _this.red;
          }

          return _this.red = newValue;
        };

        this.onChangeGreen = function (value) {
          var newValue = parseInt(value, 16);

          if (isNaN(newValue) || value.length < 2) {
            return _this.green;
          }

          return _this.green = newValue;
        };

        this.onChangeBlue = function (value) {
          var newValue = parseInt(value, 16);

          if (isNaN(newValue) || value.length < 2) {
            return _this.blue;
          }

          return _this.blue = newValue;
        };
      }

      _createClass(ColorComponent, [{
        key: "bgColor",
        get: function get() {
          return '#' + this.hex(this.red) + this.hex(this.green) + this.hex(this.blue);
        }
      }]);

      return ColorComponent;
    }();

    ColorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jih-colors',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./color.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/colors/color.component.html"))["default"]
    })], ColorComponent);
    /***/
  },

  /***/
  "./src/app/files/files.component.ts":
  /*!******************************************!*\
    !*** ./src/app/files/files.component.ts ***!
    \******************************************/

  /*! exports provided: FilesComponent */

  /***/
  function srcAppFilesFilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesComponent", function () {
      return FilesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilesComponent = /*#__PURE__*/function () {
      function FilesComponent() {
        _classCallCheck(this, FilesComponent);
      }

      _createClass(FilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FilesComponent;
    }();

    FilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jih-files',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./files.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.component.html"))["default"]
    })], FilesComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jih-navbar {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 9999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmppaC1uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jih-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/snake/snake.component.css":
  /*!*******************************************!*\
    !*** ./src/app/snake/snake.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSnakeSnakeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".game-header {\r\n  color: #fff;\r\n  padding: 5px 15px 5px 0px;\r\n  position: relative;\r\n}\r\n\r\n.game-header>.score-block {\r\n  display: inline-block;\r\n}\r\n\r\n.score-block>.score {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: -5px;\r\n}\r\n\r\n.score-block>.best-score {\r\n  position: absolute;\r\n  right: 8px;\r\n  margin-top: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.game-header>.logo {\r\n  display: inline-block;\r\n  padding-left: 15px;\r\n}\r\n\r\n.game-container {\r\n  width: 468px;\r\n  position: relative;\r\n  display: block;\r\n  margin: auto;\r\n  background-color: #47565A;\r\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  border-radius: 5px;\r\n}\r\n\r\n.row {\r\n  margin-left: 15px !important;\r\n  height: 26px;\r\n}\r\n\r\n.column {\r\n  border: 1px solid rgba(97, 131, 138, .1);\r\n  width: 24px;\r\n  height: 24px;\r\n  display: inline-block;\r\n}\r\n\r\n.start-button {\r\n  padding: 15px;\r\n  text-align: center;\r\n  background-color: #47565A;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n\r\n.start-button:hover {\r\n  opacity: 0.65;\r\n  cursor: pointer;\r\n}\r\n\r\n.start-button.new-game-button {\r\n  margin: 0 105px 4px 105px;\r\n}\r\n\r\n.disable-clicks {\r\n  pointer-events: none;\r\n}\r\n\r\n.new-game-menu {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  bottom: 0;\r\n  padding: 40% 0;\r\n  text-align: center;\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.new-game-menu-label {\r\n  font-size: 1.17em;\r\n  margin-bottom: 13px;\r\n  display: block;\r\n  color: #fff;\r\n}\r\n\r\n.new-best-score {\r\n  -webkit-animation: glow .5s infinite alternate;\r\n          animation: glow .5s infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .game-container {\r\n    width: 100%;\r\n  }\r\n  .column {\r\n    width: 5.55%;\r\n    height: 0;\r\n    padding-bottom: 5.06%;\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: flex;\r\n    height: 0;\r\n    padding-bottom: 5.5%;\r\n  }\r\n  .new-game-menu {\r\n    width: 100%;\r\n    top: 8px;\r\n    padding-top: 30%;\r\n    font-size: 80%;\r\n  }\r\n  .start-button.new-game-button {\r\n    margin: 0 15% 1% 15%;\r\n  }\r\n  @-moz-document url-prefix() {\r\n    .column {\r\n      min-height: 5.5vw;\r\n    }\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25ha2Uvc25ha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEVBQTRFO0VBQzVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFLRSxhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zbmFrZS9zbmFrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtaGVhZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdhbWUtaGVhZGVyPi5zY29yZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2s+LnNjb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDhweDtcclxuICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jaz4uYmVzdC1zY29yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmdhbWUtaGVhZGVyPi5sb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZ2FtZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NjhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU2NUE7XHJcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk3LCAxMzEsIDEzOCwgLjEpO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU2NUE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC42NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24ubmV3LWdhbWUtYnV0dG9uIHtcclxuICBtYXJnaW46IDAgMTA1cHggNHB4IDEwNXB4O1xyXG59XHJcblxyXG4uZGlzYWJsZS1jbGlja3Mge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubmV3LWdhbWUtbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogNDAlIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5uZXctZ2FtZS1tZW51LWxhYmVsIHtcclxuICBmb250LXNpemU6IDEuMTdlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmV3LWJlc3Qtc2NvcmUge1xyXG4gIGFuaW1hdGlvbjogZ2xvdyAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsb3cge1xyXG4gIHRvIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCAjZmZmZjAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuZ2FtZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDUuNTUlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUuMDYlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUuNSU7XHJcbiAgfVxyXG4gIC5uZXctZ2FtZS1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgfVxyXG4gIC5zdGFydC1idXR0b24ubmV3LWdhbWUtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAxNSUgMSUgMTUlO1xyXG4gIH1cclxuICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUuNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/snake/snake.component.ts":
  /*!******************************************!*\
    !*** ./src/app/snake/snake.component.ts ***!
    \******************************************/

  /*! exports provided: SnakeComponent */

  /***/
  function srcAppSnakeSnakeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnakeComponent", function () {
      return SnakeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _snake_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./snake.storage.service */
    "./src/app/snake/snake.storage.service.ts");
    /* harmony import */


    var _snake_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./snake.constants */
    "./src/app/snake/snake.constants.ts");

    var SnakeComponent = /*#__PURE__*/function () {
      function SnakeComponent(bestScoreService) {
        _classCallCheck(this, SnakeComponent);

        this.bestScoreService = bestScoreService;
        this.default_mode = 'classic';
        this.isGameOver = false;
        this.all_modes = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["GAME_MODES"];
        this.getKeys = Object.keys;
        this.board = [];
        this.obstacles = [];
        this.score = 0;
        this.showMenuChecker = false;
        this.gameStarted = false;
        this.newBestScore = false;
        this.best_score = this.bestScoreService.retrieve();
        this.snake = {
          direction: _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT,
          parts: [{
            x: -1,
            y: -1
          }]
        };
        this.fruit = {
          x: -1,
          y: -1
        };
        this.setBoard();
      }

      _createClass(SnakeComponent, [{
        key: "handleKeyboardEvents",
        value: function handleKeyboardEvents(e) {
          if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT;
          } else if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP;
          } else if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT;
          } else if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN;
          }
        }
      }, {
        key: "setColors",
        value: function setColors(col, row) {
          if (this.isGameOver) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].GAME_OVER;
          } else if (this.fruit.x === row && this.fruit.y === col) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].FRUIT;
          } else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].HEAD;
          } else if (this.board[col][row] === true) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].BODY;
          } else if (this.default_mode === 'obstacles' && this.checkObstacles(row, col)) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].OBSTACLE;
          }

          return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].BOARD;
        }
      }, {
        key: "updatePositions",
        value: function updatePositions() {
          var newHead = this.repositionHead();
          var me = this;

          if (this.default_mode === 'classic' && this.boardCollision(newHead)) {
            return this.gameOver();
          } else if (this.default_mode === 'no_walls') {
            this.noWallsTransition(newHead);
          } else if (this.default_mode === 'obstacles') {
            this.noWallsTransition(newHead);

            if (this.obstacleCollision(newHead)) {
              return this.gameOver();
            }
          }

          if (this.selfCollision(newHead)) {
            return this.gameOver();
          } else if (this.fruitCollision(newHead)) {
            this.eatFruit();
          }

          var oldTail = this.snake.parts.pop();
          this.board[oldTail.y][oldTail.x] = false;
          this.snake.parts.unshift(newHead);
          this.board[newHead.y][newHead.x] = true;
          this.snake.direction = this.tempDirection;
          setTimeout(function () {
            me.updatePositions();
          }, this.interval);
        }
      }, {
        key: "repositionHead",
        value: function repositionHead() {
          var newHead = Object.assign({}, this.snake.parts[0]);

          if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT) {
            newHead.x -= 1;
          } else if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT) {
            newHead.x += 1;
          } else if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP) {
            newHead.y -= 1;
          } else if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN) {
            newHead.y += 1;
          }

          return newHead;
        }
      }, {
        key: "noWallsTransition",
        value: function noWallsTransition(part) {
          if (part.x === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]) {
            part.x = 0;
          } else if (part.x === -1) {
            part.x = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] - 1;
          }

          if (part.y === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]) {
            part.y = 0;
          } else if (part.y === -1) {
            part.y = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] - 1;
          }
        }
      }, {
        key: "addObstacles",
        value: function addObstacles() {
          var x = this.randomNumber();
          var y = this.randomNumber();

          if (this.board[y][x] === true || y === 8) {
            return this.addObstacles();
          }

          this.obstacles.push({
            x: x,
            y: y
          });
        }
      }, {
        key: "checkObstacles",
        value: function checkObstacles(x, y) {
          var res = false;
          this.obstacles.forEach(function (val) {
            if (val.x === x && val.y === y) {
              res = true;
            }
          });
          return res;
        }
      }, {
        key: "obstacleCollision",
        value: function obstacleCollision(part) {
          return this.checkObstacles(part.x, part.y);
        }
      }, {
        key: "boardCollision",
        value: function boardCollision(part) {
          return part.x === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] || part.x === -1 || part.y === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] || part.y === -1;
        }
      }, {
        key: "selfCollision",
        value: function selfCollision(part) {
          return this.board[part.y][part.x] === true;
        }
      }, {
        key: "fruitCollision",
        value: function fruitCollision(part) {
          return part.x === this.fruit.x && part.y === this.fruit.y;
        }
      }, {
        key: "resetFruit",
        value: function resetFruit() {
          var x = this.randomNumber();
          var y = this.randomNumber();

          if (this.board[y][x] === true || this.checkObstacles(x, y)) {
            return this.resetFruit();
          }

          this.fruit = {
            x: x,
            y: y
          };
        }
      }, {
        key: "eatFruit",
        value: function eatFruit() {
          this.score++;
          var tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
          this.snake.parts.push(tail);
          this.resetFruit();

          if (this.score % 5 === 0) {
            this.interval -= 15;
          }
        }
      }, {
        key: "gameOver",
        value: function gameOver() {
          this.isGameOver = true;
          this.gameStarted = false;
          var me = this;

          if (this.score > this.best_score) {
            this.bestScoreService.store(this.score);
            this.best_score = this.score;
            this.newBestScore = true;
          }

          setTimeout(function () {
            me.isGameOver = false;
          }, 500);
          this.setBoard();
        }
      }, {
        key: "randomNumber",
        value: function randomNumber() {
          return Math.floor(Math.random() * _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]);
        }
      }, {
        key: "setBoard",
        value: function setBoard() {
          this.board = [];

          for (var i = 0; i < _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]; i++) {
            this.board[i] = [];

            for (var j = 0; j < _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]; j++) {
              this.board[i][j] = false;
            }
          }
        }
      }, {
        key: "showMenu",
        value: function showMenu() {
          this.showMenuChecker = !this.showMenuChecker;
        }
      }, {
        key: "newGame",
        value: function newGame(mode) {
          this.default_mode = mode || 'classic';
          this.showMenuChecker = false;
          this.newBestScore = false;
          this.gameStarted = true;
          this.score = 0;
          this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT;
          this.isGameOver = false;
          this.interval = 150;
          this.snake = {
            direction: _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT,
            parts: []
          };

          for (var i = 0; i < 3; i++) {
            this.snake.parts.push({
              x: 8 + i,
              y: 8
            });
          }

          if (mode === 'obstacles') {
            this.obstacles = [];
            var j = 1;

            do {
              this.addObstacles();
            } while (j++ < 9);
          }

          this.resetFruit();
          this.updatePositions();
        }
      }]);

      return SnakeComponent;
    }();

    SnakeComponent.ctorParameters = function () {
      return [{
        type: _snake_storage_service__WEBPACK_IMPORTED_MODULE_2__["BestScoreManager"]
      }];
    };

    SnakeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jih-snake',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./snake.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/snake/snake.component.html"))["default"],
      host: {
        '(document:keydown)': 'handleKeyboardEvents($event)'
      },
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./snake.component.css */
      "./src/app/snake/snake.component.css"))["default"]]
    })], SnakeComponent);
    /***/
  },

  /***/
  "./src/app/snake/snake.constants.ts":
  /*!******************************************!*\
    !*** ./src/app/snake/snake.constants.ts ***!
    \******************************************/

  /*! exports provided: BOARD_SIZE, CONTROLS, COLORS, GAME_MODES */

  /***/
  function srcAppSnakeSnakeConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BOARD_SIZE", function () {
      return BOARD_SIZE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROLS", function () {
      return CONTROLS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLORS", function () {
      return COLORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAME_MODES", function () {
      return GAME_MODES;
    });

    var BOARD_SIZE = 18;
    var CONTROLS = {
      LEFT: 'ArrowLeft',
      UP: 'ArrowUp',
      RIGHT: 'ArrowRight',
      DOWN: 'ArrowDown'
    };
    var COLORS = {
      GAME_OVER: '#D24D57',
      FRUIT: '#EC644B',
      HEAD: '#336E7B',
      BODY: '#C8F7C5',
      BOARD: '#86B5BD',
      OBSTACLE: '#383522'
    };
    var GAME_MODES = {
      classic: 'Classic',
      no_walls: 'No Walls',
      obstacles: 'Obstacles'
    };
    /***/
  },

  /***/
  "./src/app/snake/snake.storage.service.ts":
  /*!************************************************!*\
    !*** ./src/app/snake/snake.storage.service.ts ***!
    \************************************************/

  /*! exports provided: BestScoreManager */

  /***/
  function srcAppSnakeSnakeStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BestScoreManager", function () {
      return BestScoreManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BestScoreManager = /*#__PURE__*/function () {
      function BestScoreManager() {
        _classCallCheck(this, BestScoreManager);

        this.ngxSnake = 'ngx_snake';
      }

      _createClass(BestScoreManager, [{
        key: "store",
        value: function store(score) {
          localStorage.setItem(this.ngxSnake, JSON.stringify({
            'best_score': score
          }));
        }
      }, {
        key: "retrieve",
        value: function retrieve() {
          var storage = this.parse();

          if (!storage) {
            this.store(0);
            storage = this.parse();
          }

          return storage.best_score;
        }
      }, {
        key: "parse",
        value: function parse() {
          return JSON.parse(localStorage.getItem(this.ngxSnake));
        }
      }]);

      return BestScoreManager;
    }();

    BestScoreManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BestScoreManager);
    /***/
  },

  /***/
  "./src/app/test-area/sandbox.component.ts":
  /*!************************************************!*\
    !*** ./src/app/test-area/sandbox.component.ts ***!
    \************************************************/

  /*! exports provided: SandboxComponent */

  /***/
  function srcAppTestAreaSandboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SandboxComponent", function () {
      return SandboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SandboxComponent = /*#__PURE__*/function () {
      function SandboxComponent() {
        _classCallCheck(this, SandboxComponent);
      }

      _createClass(SandboxComponent, [{
        key: "htmlName",
        value: function htmlName(name) {
          return name.replace(/\s/g, '+');
        }
      }]);

      return SandboxComponent;
    }();

    SandboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jih-sandbox',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sandbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test-area/sandbox.component.html"))["default"]
    })], SandboxComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\Sandbox\pages-source\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map