(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<jih-header></jih-header>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/colors/color.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colors/color.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 100px;\"></div>\r\n<div class=\"container\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-6 row no-gutters\">\r\n      <div class=\"col-12 row no-gutters\">\r\n        <div class=\"col-1 my-auto\">\r\n          Reytt:\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <mat-slider tabIndex=\"-1\" min=\"0\" max=\"255\" step=\"1\" [(ngModel)]=\"red\"></mat-slider>\r\n        </div>\r\n        <div class=\"input-group mb-3 col\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"redHex\">Hex:</span>\r\n          </div>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 aria-label=\"Reyð hexkota\"\r\n                 placeholder=\"Reyð hexkota\"\r\n                 aria-describedby=\"redHex\"\r\n                 (input)=\"onChangeRed($event.target.value)\"\r\n                 [value]=\"hex(red)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 row no-gutters\">\r\n        <div class=\"col-1 my-auto\">\r\n          Grønt:\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <mat-slider tabIndex=\"-1\" min=\"0\" max=\"255\" step=\"1\" [(ngModel)]=\"green\"></mat-slider>\r\n        </div>\r\n        <div class=\"input-group mb-3 col\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"greenHex\">Hex:</span>\r\n          </div>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 aria-label=\"Grøn hexkota\"\r\n                 placeholder=\"Grøn hexkota\"\r\n                 aria-describedby=\"greenHex\"\r\n                 (input)=\"onChangeGreen($event.target.value)\"\r\n                 [value]=\"hex(green)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 row no-gutters\">\r\n        <div class=\"col-1 my-auto\">\r\n          Blátt:\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <mat-slider tabIndex=\"-1\" min=\"0\" max=\"255\" step=\"1\" [(ngModel)]=\"blue\"></mat-slider>\r\n        </div>\r\n        <div class=\"input-group mb-3 col\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"blueHex\">Hex:</span>\r\n          </div>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 aria-label=\"Blá hexkota\"\r\n                 placeholder=\"Blá hexkota\"\r\n                 aria-describedby=\"blueHex\"\r\n                 (input)=\"onChangeBlue($event.target.value)\"\r\n                 [value]=\"hex(blue)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div style=\"width: 100px; height: 100px;\" [style.background-color]=\"bgColor\"></div>\r\n        Farvukota: {{ bgColor }}\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-2 row no-gutters\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"card col-4\">\r\n        <div class=\"card-header\"><a href=\"../../assets/files/some.zip\">Some.zip</a></div>\r\n        <div class=\"card-body\">Bara ein tóm fíla</div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"jih-navbar navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['']\">Farvur</button>\r\n        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['snake']\">Snake</button>\r\n        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['sandbox']\">Sandbox</button>\r\n<!--        <button class=\"btn btn-outline-light mx-1\" [routerLink]=\"['files']\">Fílur</button>-->\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/snake/snake.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snake/snake.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"game-container\">\r\n  <div class=\"game-header\">\r\n    <h3 class=\"logo\">Snake</h3>\r\n    <div class=\"score-block\">\r\n      <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Score: {{score}}</h3>\r\n      <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Besta score: {{best_score}}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\r\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\r\n  </div>\r\n  <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Byrja spælið</div>\r\n  <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\r\n    <span class=\"new-game-menu-label\">Vel slag</span>\r\n    <div class=\"start-button new-game-button\" (click)=\"newGame(mode)\" *ngFor=\"let mode of getKeys(all_modes)\">{{all_modes[mode]}}</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-area/sandbox.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-area/sandbox.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #000; padding-bottom: 100px\">\r\n  <input type=\"button\" value=\"Cycle Rounds\" (click)=\"cycleRounds()\" /><br />\r\n  <span id=\"s_Chat\">\r\n    <ng-container *ngIf=\"!round7b; else round7\"></ng-container>\r\n    <ng-container *ngIf=\"!round6b; else round6\"></ng-container>\r\n    <ng-container *ngIf=\"!round5b; else round5\"></ng-container>\r\n    <ng-container *ngIf=\"!round4b; else round4\"></ng-container>\r\n    <ng-container *ngIf=\"!round3b; else round3\"></ng-container>\r\n    <ng-container *ngIf=\"!round2b; else round2\"></ng-container>\r\n    <ng-container *ngIf=\"!round1b; else round1\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"kill; context: { name: 'Makoolyj', location: '115,Sur,299' }\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"assocSummon; context: { message: 'The ground shakes and the clamoring of chains can be heard in the distance.' }\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"summon; context: { name: 'Turd Collector', location: '117,Sur,299' }\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"kill; context: { name: 'Makoolyj', location: '114,For,196' }\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"summon; context: { name: 'Turd Collector', location: '113,For,197' }\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"kill; context: { name: 'Makoolyj', location: '233,Sky,288' }\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"summon; context: { name: 'Turd Collector', location: '233,Sky,288' }\"></ng-container>\r\n      <font color=\"#CC00CC\">\r\n        <a style=\"color: #C89468;cursor:pointer;\" name=\"pm\"></a>\r\n        Your blessed treasury at 026,For,268 has gained 20,523mil interest in the last 17 hours.  Total: 2,590,525\r\n    </font>\r\n  </span>\r\n</div>\r\n\r\n<ng-template #summon let-name=\"name\" let-location=\"location\">\r\n  <font color=\"#FF6666\">\r\n    <font color=\"#FCFF11\">\r\n      <a style=\"color: #C89468;cursor:pointer;\" name=\"pm{{ htmlName(name) }}\">{{ name }}</a>\r\n      has awoken a beast near {{ location }}!!!\r\n    </font>\r\n  </font>\r\n  <br />\r\n</ng-template>\r\n<ng-template #kill let-name=\"name\" let-location=\"location\">\r\n  <font color=\"#BBBBFF\">\r\n    <font color=\"#FCFF11\">\r\n      <a style=\"color: #C89468;cursor:pointer;\" name=\"pm{{ htmlName(name) }}\">{{ name }}</a>\r\n      has slain the mega beast at {{ location }}!\r\n    </font>\r\n  </font>\r\n  <br />\r\n</ng-template>\r\n<ng-template #assocSummon let-message=\"message\">\r\n  <font color=\"#BBBBFF\">\r\n    <font color=\"#FCFF11\">\r\n      {{ message }}\r\n    </font>\r\n  </font>\r\n  <br />\r\n</ng-template>\r\n<ng-template #round1>\r\n  <p>The Blonde Gamer has ***DEFEATED*** The Slimy Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Squat Gamer has ***DEFEATED*** Gamermouse in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Blonde Gamer (Armsman) and The Slimy Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Squat Gamer (Master of Arms) and Gamermouse (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Gamerfrog has ***DEFEATED*** MindOfJaimi in an official duel winning 3,500 ash!!!</p>\r\n  <p>MindOfMartin has ***DEFEATED*** Jaimi Ruthless Mouse in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Gamerfrog (Master of Arms) and MindOfJaimi (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>MindOfMartin (Master of Arms) and Jaimi Ruthless Mouse (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Martin Generous Frog has ***DEFEATED*** MouseMilk in an official duel winning 3,500 ash!!!</p>\r\n  <p>FrogMilk has ***DEFEATED*** IamJaimi in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Martin Generous Frog (Master of Arms) and MouseMilk (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>FrogMilk (Master of Arms) and IamJaimi (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>IamMartin has ***DEFEATED*** Iamruthless in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamgenerous has ***DEFEATED*** Iamgiving in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>IamMartin (Master of Arms) and Iamruthless (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamgenerous (Master of Arms) and Iamgiving (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Iamblonde has ***DEFEATED*** Iamslimy in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamsquat has ***DEFEATED*** RuthlessNipplesLMAO in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Iamblonde (Master of Arms) and Iamslimy (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamsquat (Master of Arms) and RuthlessNipplesLMAO (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>GenerousNipplesLMAO has ***DEFEATED*** GivingNipplesOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p>BlondeNipplesOMG has ***DEFEATED*** SlimyNipplesLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>GenerousNipplesLMAO (Master of Arms) and GivingNipplesOMG (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>BlondeNipplesOMG (Master of Arms) and SlimyNipplesLOL (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>SquatNipplesLOL has ***DEFEATED*** RuthlessShouldersOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p>GenerousLegsOMG has ***DEFEATED*** GivingShouldersLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>SquatNipplesLOL (Master of Arms) and RuthlessShouldersOMG (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>GenerousLegsOMG (Master of Arms) and GivingShouldersLOL (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>BlondeLegsLOL has ***DEFEATED*** SlimyShouldersOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p>SquatLegsOMG has ***DEFEATED*** Disguised Mouse in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>BlondeLegsLOL (Master of Arms) and SlimyShouldersOMG (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>SquatLegsOMG (Master of Arms) and Disguised Mouse (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Disguised Frog has ***DEFEATED*** Uber Slimy Mouse in an official duel winning 3,500 ash!!!</p>\r\n  <p>Uber Squat Frog has ***DEFEATED*** Jaimi Mexican in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Disguised Frog (Master of Arms) and Uber Slimy Mouse (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Uber Squat Frog (Master of Arms) and Jaimi Mexican (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Martin English has ***DEFEATED*** Jaimi Giving Nipples in an official duel winning 3,500 ash!!!</p>\r\n  <p>Martin Blonde Nipples has ***DEFEATED*** Jaimiasaurus Rex in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Martin English (Master of Arms) and Jaimi Giving Nipples (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Martin Blonde Nipples (Master of Arms) and Jaimiasaurus Rex (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Martinasaurus Rex has ***DEFEATED*** Jaimi Slimy Shoulders in an official duel winning 3,500 ash!!!</p>\r\n  <p>Martin Squat Legs has ***DEFEATED*** IHasShoulders in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Martinasaurus Rex (Master of Arms) and Jaimi Slimy Shoulders (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Martin Squat Legs (Master of Arms) and IHasShoulders (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>IHasLegs has ***DEFEATED*** Jaimirex in an official duel winning 3,500 ash!!!</p>\r\n  <p>Martinrex has ***DEFEATED*** Ms Game Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>IHasLegs (Master of Arms) and Jaimirex (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Martinrex (Master of Arms) and Ms Game Toad (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Ms Game Fox has ***DEFEATED*** Mr Game Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p>Mr Game Fox has ***DEFEATED*** Gaming With Anton in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Ms Game Fox (Master of Arms) and Mr Game Toad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Mr Game Fox (Master of Arms) and Gaming With Anton (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Gaming With Ryana has ***DEFEATED*** The Gaming Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Gaming Fox has ***DEFEATED*** The Moist English Dude in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Gaming With Ryana (Master of Arms) and The Gaming Toad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Gaming Fox (Master of Arms) and The Moist English Dude (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>The Hilarious Russsian Dude has ***DEFEATED*** Total Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p>Total Fox has ***DEFEATED*** IHasAnkles in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Hilarious Russsian Dude (Master of Arms) and Total Toad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Total Fox (Master of Arms) and IHasAnkles (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Captain Hilarious has ***DEFEATED*** Captain Moist in an official duel winning 3,500 ash!!!</p>\r\n  <p>Fox Person has ***DEFEATED*** Toad Person in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Captain Hilarious (Master of Arms) and Captain Moist (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Fox Person (Master of Arms) and Toad Person (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Fox Girl has ***DEFEATED*** Toad Girl in an official duel winning 3,500 ash!!!</p>\r\n  <p>Fox Boy has ***DEFEATED*** Toad Boy in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Fox Girl (Master of Arms) and Toad Girl (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Fox Boy (Master of Arms) and Toad Boy (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Ry4n4 has ***DEFEATED*** Ant0n in an official duel winning 3,500 ash!!!</p>\r\n  <p>ItIsYeFox has ***DEFEATED*** ItIsYeToad in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Ry4n4 (Master of Arms) and Ant0n (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>ItIsYeFox (Master of Arms) and ItIsYeToad (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>BigHilariousFox has ***DEFEATED*** BigMoistToad in an official duel winning 3,500 ash!!!</p>\r\n  <p>RyanaEyespopper has ***DEFEATED*** AntonBrainspopper in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>BigHilariousFox (Master of Arms) and BigMoistToad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>RyanaEyespopper (Master of Arms) and AntonBrainspopper (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>DrHilarious has ***DEFEATED*** DrMoist in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Fluffy Gamer has ***DEFEATED*** The Pretty Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>DrHilarious (Master of Arms) and DrMoist (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Fluffy Gamer (Master of Arms) and The Pretty Gamer (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>The Loving Gamer has ***DEFEATED*** The Daring Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Hilarious Gamer has ***DEFEATED*** The Moist Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Loving Gamer (Master of Arms) and The Daring Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Hilarious Gamer (Master of Arms) and The Moist Gamer (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Gamerfox has ***DEFEATED*** Gamertoad in an official duel winning 3,500 ash!!!</p>\r\n  <p>MindOfRyana has ***DEFEATED*** MindOfAnton in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Gamerfox (Master of Arms) and Gamertoad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>MindOfRyana (Master of Arms) and MindOfAnton (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Ryana Fluffy Fox has ***DEFEATED*** Anton Pretty Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p>FoxMilk has ***DEFEATED*** ToadMilk in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Ryana Fluffy Fox (Master of Arms) and Anton Pretty Toad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>FoxMilk (Master of Arms) and ToadMilk (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>IamRyana has ***DEFEATED*** IamAnton in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamfluffy has ***DEFEATED*** Iampretty in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>IamRyana (Master of Arms) and IamAnton (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamfluffy (Master of Arms) and Iampretty (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Iamloving has ***DEFEATED*** Iamdaring in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamhilarious has ***DEFEATED*** Iammoist in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Iamloving (Master of Arms) and Iamdaring (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamhilarious (Master of Arms) and Iammoist (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>FluffyEyesLMAO has ***DEFEATED*** PrettyAnklesLMAO in an official duel winning 3,500 ash!!!</p>\r\n  <p>LovingEyesOMG has ***DEFEATED*** DaringAnklesOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>FluffyEyesLMAO (Master of Arms) and PrettyAnklesLMAO (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>LovingEyesOMG (Master of Arms) and DaringAnklesOMG (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>HilariousEyesLOL has ***DEFEATED*** MoistAnklesLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p>FluffyEyesOMG has ***DEFEATED*** PrettyBrainsOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>HilariousEyesLOL (Master of Arms) and MoistAnklesLOL (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>FluffyEyesOMG (Master of Arms) and PrettyBrainsOMG (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>LovingEyesLOL has ***DEFEATED*** DaringBrainsLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p>HilariousEyesOMG has ***DEFEATED*** MoistBrainsOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>LovingEyesLOL (Master of Arms) and DaringBrainsLOL (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>HilariousEyesOMG (Master of Arms) and MoistBrainsOMG (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Ryanaasaurus Rex has ***DEFEATED*** Antonasaurus Rex in an official duel winning 3,500 ash!!!</p>\r\n  <p>Zhey has ***DEFEATED*** Ryana Hilarious Eyes in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Ryanaasaurus Rex (Master of Arms) and Antonasaurus Rex (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Zhey (Master of Arms) and Ryana Hilarious Eyes (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Ryana Russsian has ***DEFEATED*** Anton English in an official duel winning 3,500 ash!!!</p>\r\n  <p>Ryana Loving Eyes has ***DEFEATED*** Anton Daring Ankles in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Ryana Russsian (Master of Arms) and Anton English (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Ryana Loving Eyes (Master of Arms) and Anton Daring Ankles (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Disguised Fox has ***DEFEATED*** Disguised Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p>Uber Hilarious Fox has ***DEFEATED*** Uber Moist Toad in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Disguised Fox (Master of Arms) and Disguised Toad (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Uber Hilarious Fox (Master of Arms) and Uber Moist Toad (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>IHasBrains has ***DEFEATED*** IHasEyes in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey has ***DEFEATED*** Antonrex in an official duel winning 3,500 ash!!!</p>\r\n  <p>Antonrex: 000% Whey: 100% Whey fires relics!</p>\r\n  <p>Antonrex has ACUMEN NEGATED his foe's void or devoid resist!</p>\r\n  <p>Antonrex has resisted a possible void or devoid!</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex is too tired to counter attack.</p>\r\n  <p>Antonrex: 001% Whey: 100% Whey attempts to attack but is blocked by a shield.</p>\r\n  <p>Antonrex revived by the Tears of an Angel!</p>\r\n  <p>Antonrex: 000% Whey: 100% Whey attacks successfully.</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex's relics fail to fire.</p>\r\n  <p>Antonrex revived by the Sanction of Serenity!</p>\r\n  <p>Antonrex: 000% Whey: 100% Whey fires relics!</p>\r\n  <p>Whey has devoided the foe while attacking!</p>\r\n  <p>Whey has resisted a possible void or devoid!</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex is too tired to counter attack.</p>\r\n  <p>Antonrex: 001% Whey: 100% Whey attempts to shoot but the enemy BURNS THEIR ARROWS midflight.</p>\r\n  <p>Antonrex: 001% Whey: 100% Whey attempts to shoot but the enemy BURNS THEIR ARROWS midflight.</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex's relics fail to fire.</p>\r\n  <p>Antonrex revived by the Tears of an Angel!</p>\r\n  <p>Antonrex: 000% Whey: 100% Whey fires relics!</p>\r\n  <p>Whey has voided the foe while attacking!</p>\r\n  <p>Whey has resisted a possible void or devoid!</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex fizzles cast.</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex fizzles cast.</p>\r\n  <p>Antonrex: 001% Whey: 100% Whey attempts to attack but is mesmerized.</p>\r\n  <p>Antonrex: 001% Whey: 100% Whey attempts to shoot but the enemy BURNS THEIR ARROWS midflight.</p>\r\n  <p>Antonrex: 001% Whey: 100% Antonrex's relics fail to fire.</p>\r\n  <p>Antonrex revived by the Tears of an Angel!</p>\r\n  <p>Antonrex: 000% Whey: 100% Whey fires relics!</p>\r\n  <p>Whey has devoided the foe while attacking!</p>\r\n  <p>Whey has resisted a possible void or devoid!</p>\r\n  <p>Antonrex has resisted a possible mesmerize!</p>\r\n  <p>IHasBrains (Master of Fists) and IHasEyes (Master of Arms) have begun their battle in arena 2!</p>\r\n  <p>Whey (Master of Fists) and Antonrex (Master of Arms) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n<ng-template #round2>\r\n  <p>The Squat Gamer has ***DEFEATED*** The Blonde Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>MindOfMartin has ***DEFEATED*** Gamerfrog in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Squat Gamer (Master of Arms) and The Blonde Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>MindOfMartin (Master of Arms) and Gamerfrog (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>FrogMilk has ***DEFEATED*** Martin Generous Frog in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamgenerous has ***DEFEATED*** IamMartin in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>FrogMilk (Master of Arms) and Martin Generous Frog (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamgenerous (Master of Arms) and IamMartin (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Iamsquat has ***DEFEATED*** Iamblonde in an official duel winning 3,500 ash!!!</p>\r\n  <p>BlondeNipplesOMG has ***DEFEATED*** GenerousNipplesLMAO in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Iamsquat (Master of Arms) and Iamblonde (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>BlondeNipplesOMG (Master of Arms) and GenerousNipplesLMAO (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>GenerousLegsOMG has ***DEFEATED*** SquatNipplesLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p>SquatLegsOMG has ***DEFEATED*** BlondeLegsLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>GenerousLegsOMG (Master of Arms) and SquatNipplesLOL (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>SquatLegsOMG (Master of Arms) and BlondeLegsLOL (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Uber Squat Frog has ***DEFEATED*** Disguised Frog in an official duel winning 3,500 ash!!!</p>\r\n  <p>Martin Blonde Nipples has ***DEFEATED*** Martin English in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Uber Squat Frog (Master of Arms) and Disguised Frog (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Martin Blonde Nipples (Master of Arms) and Martin English (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Martin Squat Legs has ***DEFEATED*** Martinasaurus Rex in an official duel winning 3,500 ash!!!</p>\r\n  <p>Martinrex has ***DEFEATED*** IHasLegs in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Martin Squat Legs (Master of Arms) and Martinasaurus Rex (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Martinrex (Master of Arms) and IHasLegs (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Mr Game Fox has ***DEFEATED*** Ms Game Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Gaming Fox has ***DEFEATED*** Gaming With Ryana in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Mr Game Fox (Master of Arms) and Ms Game Fox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Gaming Fox (Master of Arms) and Gaming With Ryana (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Total Fox has ***DEFEATED*** The Hilarious Russsian Dude in an official duel winning 3,500 ash!!!</p>\r\n  <p>Fox Person has ***DEFEATED*** Captain Hilarious in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Total Fox (Master of Arms) and The Hilarious Russsian Dude (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Fox Person (Master of Arms) and Captain Hilarious (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Fox Boy has ***DEFEATED*** Fox Girl in an official duel winning 3,500 ash!!!</p>\r\n  <p>ItIsYeFox has ***DEFEATED*** Ry4n4 in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Fox Boy (Master of Arms) and Fox Girl (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>ItIsYeFox (Master of Arms) and Ry4n4 (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>RyanaEyespopper has ***DEFEATED*** BigHilariousFox in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Fluffy Gamer has ***DEFEATED*** DrHilarious in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>RyanaEyespopper (Master of Arms) and BigHilariousFox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Fluffy Gamer (Master of Arms) and DrHilarious (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>The Hilarious Gamer has ***DEFEATED*** The Loving Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>MindOfRyana has ***DEFEATED*** Gamerfox in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Hilarious Gamer (Master of Arms) and The Loving Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>MindOfRyana (Master of Arms) and Gamerfox (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>FoxMilk has ***DEFEATED*** Ryana Fluffy Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamfluffy has ***DEFEATED*** IamRyana in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>FoxMilk (Master of Arms) and Ryana Fluffy Fox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamfluffy (Master of Arms) and IamRyana (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Iamhilarious has ***DEFEATED*** Iamloving in an official duel winning 3,500 ash!!!</p>\r\n  <p>LovingEyesOMG has ***DEFEATED*** FluffyEyesLMAO in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Iamhilarious (Master of Arms) and Iamloving (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>LovingEyesOMG (Master of Arms) and FluffyEyesLMAO (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>FluffyEyesOMG has ***DEFEATED*** HilariousEyesLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p>HilariousEyesOMG has ***DEFEATED*** LovingEyesLOL in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>FluffyEyesOMG (Master of Arms) and HilariousEyesLOL (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>HilariousEyesOMG (Master of Arms) and LovingEyesLOL (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Uber Hilarious Fox has ***DEFEATED*** Disguised Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p>Ryana Loving Eyes has ***DEFEATED*** Ryana Russsian in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Uber Hilarious Fox (Master of Arms) and Disguised Fox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Ryana Loving Eyes (Master of Arms) and Ryana Russsian (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Zhey has ***DEFEATED*** Ryanaasaurus Rex in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey has ***DEFEATED*** IHasBrains in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Zhey (Master of Arms) and Ryanaasaurus Rex (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Whey (Master of Arms) and IHasBrains (Master Magician) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n<ng-template #round3>\r\n  <p>MindOfMartin has ***DEFEATED*** The Squat Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamgenerous has ***DEFEATED*** FrogMilk in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>MindOfMartin (Master of Arms) and The Squat Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamgenerous (Master of Arms) and FrogMilk (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>BlondeNipplesOMG has ***DEFEATED*** Iamsquat in an official duel winning 3,500 ash!!!</p>\r\n  <p>SquatLegsOMG has ***DEFEATED*** GenerousLegsOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>BlondeNipplesOMG (Master of Arms) and Iamsquat (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>SquatLegsOMG (Master of Arms) and GenerousLegsOMG (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Martin Blonde Nipples has ***DEFEATED*** Uber Squat Frog in an official duel winning 3,500 ash!!!</p>\r\n  <p>Martinrex has ***DEFEATED*** Martin Squat Legs in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Martin Blonde Nipples (Master of Arms) and Uber Squat Frog (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Martinrex (Master of Arms) and Martin Squat Legs (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>The Gaming Fox has ***DEFEATED*** Mr Game Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p>Fox Person has ***DEFEATED*** Total Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Gaming Fox (Master of Arms) and Mr Game Fox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Fox Person (Master of Arms) and Total Fox (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>ItIsYeFox has ***DEFEATED*** Fox Boy in an official duel winning 3,500 ash!!!</p>\r\n  <p>The Fluffy Gamer has ***DEFEATED*** RyanaEyespopper in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>ItIsYeFox (Master of Arms) and Fox Boy (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>The Fluffy Gamer (Master of Arms) and RyanaEyespopper (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>MindOfRyana has ***DEFEATED*** The Hilarious Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamfluffy has ***DEFEATED*** FoxMilk in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>MindOfRyana (Master of Arms) and The Hilarious Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamfluffy (Master of Arms) and FoxMilk (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>LovingEyesOMG has ***DEFEATED*** Iamhilarious in an official duel winning 3,500 ash!!!</p>\r\n  <p>HilariousEyesOMG has ***DEFEATED*** FluffyEyesOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>LovingEyesOMG (Master of Arms) and Iamhilarious (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>HilariousEyesOMG (Master of Arms) and FluffyEyesOMG (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Ryana Loving Eyes has ***DEFEATED*** Uber Hilarious Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey has ***DEFEATED*** Zhey in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Ryana Loving Eyes (Master of Arms) and Uber Hilarious Fox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Whey (Master of Arms) and Zhey (Master Magician) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n<ng-template #round4>\r\n  <p>Iamgenerous has ***DEFEATED*** MindOfMartin in an official duel winning 3,500 ash!!!</p>\r\n  <p>SquatLegsOMG has ***DEFEATED*** BlondeNipplesOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Iamgenerous (Master of Arms) and MindOfMartin (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>SquatLegsOMG (Master of Arms) and BlondeNipplesOMG (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Martinrex has ***DEFEATED*** Martin Blonde Nipples in an official duel winning 3,500 ash!!!</p>\r\n  <p>Fox Person has ***DEFEATED*** The Gaming Fox in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Martinrex (Master of Arms) and Martin Blonde Nipples (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Fox Person (Master of Arms) and The Gaming Fox (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>The Fluffy Gamer has ***DEFEATED*** ItIsYeFox in an official duel winning 3,500 ash!!!</p>\r\n  <p>Iamfluffy has ***DEFEATED*** MindOfRyana in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>The Fluffy Gamer (Master of Arms) and ItIsYeFox (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Iamfluffy (Master of Arms) and MindOfRyana (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>HilariousEyesOMG has ***DEFEATED*** LovingEyesOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey has ***DEFEATED*** Ryana Loving Eyes in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>HilariousEyesOMG (Master of Arms) and LovingEyesOMG (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Whey (Master of Arms) and Ryana Loving Eyes (Master Magician) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n<ng-template #round5>\r\n  <p>SquatLegsOMG has ***DEFEATED*** Iamgenerous in an official duel winning 3,500 ash!!!</p>\r\n  <p>Fox Person has ***DEFEATED*** Martinrex in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>SquatLegsOMG (Master of Arms) and Iamgenerous (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Fox Person (Master of Arms) and Martinrex (Master Magician) have begun their battle in arena 1!</p>\r\n  <p></p>\r\n  <p>Iamfluffy has ***DEFEATED*** The Fluffy Gamer in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey has ***DEFEATED*** HilariousEyesOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Iamfluffy (Master of Arms) and The Fluffy Gamer (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Whey (Master of Arms) and HilariousEyesOMG (Master Magician) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n<ng-template #round6>\r\n  <p>Fox Person has ***DEFEATED*** SquatLegsOMG in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey has ***DEFEATED*** Iamfluffy in an official duel winning 3,500 ash!!!</p>\r\n  <p></p>\r\n  <p>Fox Person (Master of Arms) and SquatLegsOMG (Master Magician) have begun their battle in arena 2!</p>\r\n  <p>Whey (Master of Arms) and Iamfluffy (Master Magician) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n<ng-template #round7>\r\n  <p>Whey has ***DEFEATED*** Fox Person in an official duel winning 3,500 ash!!!</p>\r\n  <p>Whey (Master of Arms) and Fox Person (Master Magician) have begun their battle in arena 1!</p>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _files_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/files.component */ "./src/app/files/files.component.ts");
/* harmony import */ var _colors_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors/color.component */ "./src/app/colors/color.component.ts");
/* harmony import */ var _snake_snake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snake/snake.component */ "./src/app/snake/snake.component.ts");
/* harmony import */ var _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-area/sandbox.component */ "./src/app/test-area/sandbox.component.ts");







const routes = [
    {
        path: '',
        component: _colors_color_component__WEBPACK_IMPORTED_MODULE_4__["ColorComponent"]
    },
    {
        path: 'files',
        component: _files_files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"]
    },
    {
        path: 'snake',
        component: _snake_snake_component__WEBPACK_IMPORTED_MODULE_5__["SnakeComponent"]
    },
    {
        path: 'sandbox',
        component: _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_6__["SandboxComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jih-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slider.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _files_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files/files.component */ "./src/app/files/files.component.ts");
/* harmony import */ var _colors_color_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colors/color.component */ "./src/app/colors/color.component.ts");
/* harmony import */ var _snake_snake_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./snake/snake.component */ "./src/app/snake/snake.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _snake_snake_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./snake/snake.storage.service */ "./src/app/snake/snake.storage.service.ts");
/* harmony import */ var _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test-area/sandbox.component */ "./src/app/test-area/sandbox.component.ts");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _snake_snake_component__WEBPACK_IMPORTED_MODULE_10__["SnakeComponent"],
            _colors_color_component__WEBPACK_IMPORTED_MODULE_9__["ColorComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _files_files_component__WEBPACK_IMPORTED_MODULE_8__["FilesComponent"],
            _test_area_sandbox_component__WEBPACK_IMPORTED_MODULE_14__["SandboxComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"]
        ],
        providers: [
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                useClass: _angular_material__WEBPACK_IMPORTED_MODULE_4__["GestureConfig"]
            },
            _snake_snake_storage_service__WEBPACK_IMPORTED_MODULE_13__["BestScoreManager"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/colors/color.component.ts":
/*!*******************************************!*\
  !*** ./src/app/colors/color.component.ts ***!
  \*******************************************/
/*! exports provided: ColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorComponent", function() { return ColorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ColorComponent = class ColorComponent {
    constructor() {
        this.red = 255;
        this.green = 255;
        this.blue = 255;
        this.hex = (num) => num.toString(16).length === 1 ? '0' + num.toString(16) : num.toString(16);
        this.onChangeRed = (value) => {
            const newValue = parseInt(value, 16);
            if (isNaN(newValue) || value.length < 2) {
                return this.red;
            }
            return this.red = newValue;
        };
        this.onChangeGreen = (value) => {
            const newValue = parseInt(value, 16);
            if (isNaN(newValue) || value.length < 2) {
                return this.green;
            }
            return this.green = newValue;
        };
        this.onChangeBlue = (value) => {
            const newValue = parseInt(value, 16);
            if (isNaN(newValue) || value.length < 2) {
                return this.blue;
            }
            return this.blue = newValue;
        };
    }
    get bgColor() {
        return '#' + this.hex(this.red) + this.hex(this.green) + this.hex(this.blue);
    }
};
ColorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jih-colors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./color.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/colors/color.component.html")).default
    })
], ColorComponent);



/***/ }),

/***/ "./src/app/files/files.component.ts":
/*!******************************************!*\
  !*** ./src/app/files/files.component.ts ***!
  \******************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilesComponent = class FilesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jih-files',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.component.html")).default
    })
], FilesComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jih-navbar {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 9999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmppaC1uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jih-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/snake/snake.component.css":
/*!*******************************************!*\
  !*** ./src/app/snake/snake.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game-header {\r\n  color: #fff;\r\n  padding: 5px 15px 5px 0px;\r\n  position: relative;\r\n}\r\n\r\n.game-header>.score-block {\r\n  display: inline-block;\r\n}\r\n\r\n.score-block>.score {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: -5px;\r\n}\r\n\r\n.score-block>.best-score {\r\n  position: absolute;\r\n  right: 8px;\r\n  margin-top: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.game-header>.logo {\r\n  display: inline-block;\r\n  padding-left: 15px;\r\n}\r\n\r\n.game-container {\r\n  width: 468px;\r\n  position: relative;\r\n  display: block;\r\n  margin: auto;\r\n  background-color: #47565A;\r\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  border-radius: 5px;\r\n}\r\n\r\n.row {\r\n  margin-left: 15px !important;\r\n  height: 26px;\r\n}\r\n\r\n.column {\r\n  border: 1px solid rgba(97, 131, 138, .1);\r\n  width: 24px;\r\n  height: 24px;\r\n  display: inline-block;\r\n}\r\n\r\n.start-button {\r\n  padding: 15px;\r\n  text-align: center;\r\n  background-color: #47565A;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n\r\n.start-button:hover {\r\n  opacity: 0.65;\r\n  cursor: pointer;\r\n}\r\n\r\n.start-button.new-game-button {\r\n  margin: 0 105px 4px 105px;\r\n}\r\n\r\n.disable-clicks {\r\n  pointer-events: none;\r\n}\r\n\r\n.new-game-menu {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  bottom: 0;\r\n  padding: 40% 0;\r\n  text-align: center;\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.new-game-menu-label {\r\n  font-size: 1.17em;\r\n  margin-bottom: 13px;\r\n  display: block;\r\n  color: #fff;\r\n}\r\n\r\n.new-best-score {\r\n  -webkit-animation: glow .5s infinite alternate;\r\n          animation: glow .5s infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .game-container {\r\n    width: 100%;\r\n  }\r\n  .column {\r\n    width: 5.55%;\r\n    height: 0;\r\n    padding-bottom: 5.06%;\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: flex;\r\n    height: 0;\r\n    padding-bottom: 5.5%;\r\n  }\r\n  .new-game-menu {\r\n    width: 100%;\r\n    top: 8px;\r\n    padding-top: 30%;\r\n    font-size: 80%;\r\n  }\r\n  .start-button.new-game-button {\r\n    margin: 0 15% 1% 15%;\r\n  }\r\n  @-moz-document url-prefix() {\r\n    .column {\r\n      min-height: 5.5vw;\r\n    }\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25ha2Uvc25ha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEVBQTRFO0VBQzVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFLRSxhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zbmFrZS9zbmFrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtaGVhZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdhbWUtaGVhZGVyPi5zY29yZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2NvcmUtYmxvY2s+LnNjb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDhweDtcclxuICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5zY29yZS1ibG9jaz4uYmVzdC1zY29yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmdhbWUtaGVhZGVyPi5sb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZ2FtZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NjhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU2NUE7XHJcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk3LCAxMzEsIDEzOCwgLjEpO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU2NUE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC42NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24ubmV3LWdhbWUtYnV0dG9uIHtcclxuICBtYXJnaW46IDAgMTA1cHggNHB4IDEwNXB4O1xyXG59XHJcblxyXG4uZGlzYWJsZS1jbGlja3Mge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubmV3LWdhbWUtbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogNDAlIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5uZXctZ2FtZS1tZW51LWxhYmVsIHtcclxuICBmb250LXNpemU6IDEuMTdlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmV3LWJlc3Qtc2NvcmUge1xyXG4gIGFuaW1hdGlvbjogZ2xvdyAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsb3cge1xyXG4gIHRvIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCAjZmZmZjAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuZ2FtZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDUuNTUlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUuMDYlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUuNSU7XHJcbiAgfVxyXG4gIC5uZXctZ2FtZS1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgfVxyXG4gIC5zdGFydC1idXR0b24ubmV3LWdhbWUtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAxNSUgMSUgMTUlO1xyXG4gIH1cclxuICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUuNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/snake/snake.component.ts":
/*!******************************************!*\
  !*** ./src/app/snake/snake.component.ts ***!
  \******************************************/
/*! exports provided: SnakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeComponent", function() { return SnakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _snake_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake.storage.service */ "./src/app/snake/snake.storage.service.ts");
/* harmony import */ var _snake_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snake.constants */ "./src/app/snake/snake.constants.ts");




let SnakeComponent = class SnakeComponent {
    constructor(bestScoreService) {
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
            parts: [
                {
                    x: -1,
                    y: -1
                }
            ]
        };
        this.fruit = {
            x: -1,
            y: -1
        };
        this.setBoard();
    }
    handleKeyboardEvents(e) {
        if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT;
        }
        else if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP;
        }
        else if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT;
        }
        else if (e.key === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN && this.snake.direction !== _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP) {
            this.tempDirection = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN;
        }
    }
    setColors(col, row) {
        if (this.isGameOver) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].GAME_OVER;
        }
        else if (this.fruit.x === row && this.fruit.y === col) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].FRUIT;
        }
        else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].HEAD;
        }
        else if (this.board[col][row] === true) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].BODY;
        }
        else if (this.default_mode === 'obstacles' && this.checkObstacles(row, col)) {
            return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].OBSTACLE;
        }
        return _snake_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].BOARD;
    }
    ;
    updatePositions() {
        let newHead = this.repositionHead();
        let me = this;
        if (this.default_mode === 'classic' && this.boardCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.default_mode === 'no_walls') {
            this.noWallsTransition(newHead);
        }
        else if (this.default_mode === 'obstacles') {
            this.noWallsTransition(newHead);
            if (this.obstacleCollision(newHead)) {
                return this.gameOver();
            }
        }
        if (this.selfCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        let oldTail = this.snake.parts.pop();
        this.board[oldTail.y][oldTail.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        setTimeout(() => {
            me.updatePositions();
        }, this.interval);
    }
    repositionHead() {
        let newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS"].DOWN) {
            newHead.y += 1;
        }
        return newHead;
    }
    noWallsTransition(part) {
        if (part.x === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]) {
            part.x = 0;
        }
        else if (part.x === -1) {
            part.x = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] - 1;
        }
        if (part.y === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]) {
            part.y = 0;
        }
        else if (part.y === -1) {
            part.y = _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] - 1;
        }
    }
    addObstacles() {
        let x = this.randomNumber();
        let y = this.randomNumber();
        if (this.board[y][x] === true || y === 8) {
            return this.addObstacles();
        }
        this.obstacles.push({
            x: x,
            y: y
        });
    }
    checkObstacles(x, y) {
        let res = false;
        this.obstacles.forEach((val) => {
            if (val.x === x && val.y === y) {
                res = true;
            }
        });
        return res;
    }
    obstacleCollision(part) {
        return this.checkObstacles(part.x, part.y);
    }
    boardCollision(part) {
        return part.x === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] || part.x === -1 || part.y === _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"] || part.y === -1;
    }
    selfCollision(part) {
        return this.board[part.y][part.x] === true;
    }
    fruitCollision(part) {
        return part.x === this.fruit.x && part.y === this.fruit.y;
    }
    resetFruit() {
        let x = this.randomNumber();
        let y = this.randomNumber();
        if (this.board[y][x] === true || this.checkObstacles(x, y)) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    }
    eatFruit() {
        this.score++;
        let tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(tail);
        this.resetFruit();
        if (this.score % 5 === 0) {
            this.interval -= 15;
        }
    }
    gameOver() {
        this.isGameOver = true;
        this.gameStarted = false;
        let me = this;
        if (this.score > this.best_score) {
            this.bestScoreService.store(this.score);
            this.best_score = this.score;
            this.newBestScore = true;
        }
        setTimeout(() => {
            me.isGameOver = false;
        }, 500);
        this.setBoard();
    }
    randomNumber() {
        return Math.floor(Math.random() * _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]);
    }
    setBoard() {
        this.board = [];
        for (let i = 0; i < _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]; i++) {
            this.board[i] = [];
            for (let j = 0; j < _snake_constants__WEBPACK_IMPORTED_MODULE_3__["BOARD_SIZE"]; j++) {
                this.board[i][j] = false;
            }
        }
    }
    showMenu() {
        this.showMenuChecker = !this.showMenuChecker;
    }
    newGame(mode) {
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
        for (let i = 0; i < 3; i++) {
            this.snake.parts.push({ x: 8 + i, y: 8 });
        }
        if (mode === 'obstacles') {
            this.obstacles = [];
            let j = 1;
            do {
                this.addObstacles();
            } while (j++ < 9);
        }
        this.resetFruit();
        this.updatePositions();
    }
};
SnakeComponent.ctorParameters = () => [
    { type: _snake_storage_service__WEBPACK_IMPORTED_MODULE_2__["BestScoreManager"] }
];
SnakeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jih-snake',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./snake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/snake/snake.component.html")).default,
        host: {
            '(document:keydown)': 'handleKeyboardEvents($event)'
        },
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./snake.component.css */ "./src/app/snake/snake.component.css")).default]
    })
], SnakeComponent);



/***/ }),

/***/ "./src/app/snake/snake.constants.ts":
/*!******************************************!*\
  !*** ./src/app/snake/snake.constants.ts ***!
  \******************************************/
/*! exports provided: BOARD_SIZE, CONTROLS, COLORS, GAME_MODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_SIZE", function() { return BOARD_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS", function() { return CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_MODES", function() { return GAME_MODES; });
const BOARD_SIZE = 18;
const CONTROLS = {
    LEFT: 'ArrowLeft',
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown'
};
const COLORS = {
    GAME_OVER: '#D24D57',
    FRUIT: '#EC644B',
    HEAD: '#336E7B',
    BODY: '#C8F7C5',
    BOARD: '#86B5BD',
    OBSTACLE: '#383522'
};
const GAME_MODES = {
    classic: 'Classic',
    no_walls: 'No Walls',
    obstacles: 'Obstacles'
};


/***/ }),

/***/ "./src/app/snake/snake.storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/snake/snake.storage.service.ts ***!
  \************************************************/
/*! exports provided: BestScoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestScoreManager", function() { return BestScoreManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BestScoreManager = class BestScoreManager {
    constructor() {
        this.ngxSnake = 'ngx_snake';
    }
    store(score) {
        localStorage.setItem(this.ngxSnake, JSON.stringify({ 'best_score': score }));
    }
    retrieve() {
        let storage = this.parse();
        if (!storage) {
            this.store(0);
            storage = this.parse();
        }
        return storage.best_score;
    }
    parse() {
        return JSON.parse(localStorage.getItem(this.ngxSnake));
    }
};
BestScoreManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BestScoreManager);



/***/ }),

/***/ "./src/app/test-area/sandbox.component.ts":
/*!************************************************!*\
  !*** ./src/app/test-area/sandbox.component.ts ***!
  \************************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SandboxComponent = class SandboxComponent {
    constructor() {
        this.lastRound = 0;
    }
    htmlName(name) {
        return name.replace(/\s/g, '+');
    }
    cycleRounds() {
        switch (this.lastRound) {
            case 0:
                this.round1b = true;
                break;
            case 1:
                this.round2b = true;
                break;
            case 2:
                this.round3b = true;
                break;
            case 3:
                this.round4b = true;
                break;
            case 4:
                this.round5b = true;
                break;
            case 5:
                this.round6b = true;
                break;
            case 6:
                this.round7b = true;
                break;
            case 7:
                this.round1b = this.round2b = this.round3b = this.round4b = this.round5b = this.round6b = this.round7b = false;
                break;
            default:
                break;
        }
        console.log(this.lastRound);
        this.lastRound = ++this.lastRound % 8;
    }
};
SandboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jih-sandbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sandbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-area/sandbox.component.html")).default,
        styles: ["p { color: #ffff00 }"]
    })
], SandboxComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Sandbox\pages-source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map