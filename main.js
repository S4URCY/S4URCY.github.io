(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    background-color: white;\r\n    width: 300px;\r\n    border: 10px solid blue;\r\n    padding: 500px;\r\n    margin: 30px;\r\n}\r\nimg {\r\n    border-radius: 10px;\r\n}\r\ntable {\r\n    border: 1px solid white;\r\n}\r\n#customers {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n#customers td, #customers th {\r\n    border: 0px solid #ddd;\r\n    padding: 100px;\r\n}\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers tr:hover {background-color: #ddd;}\r\n#customers th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left ;\r\n    background-color: white;\r\n    color: black;\r\n}\r\n#customers2 {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 182%;\r\n}\r\n#customers2 td, #customers2 th {\r\n    border: 0px solid #ddd;\r\n    padding: 100px;\r\n}\r\n#customers2 tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers2 tr:hover {background-color: #ddd;}\r\n#customers2 td {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center ;\r\n    background-color: white;\r\n    color: black\r\n}\r\n#customers3 {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 182%;\r\n}\r\n#customers3 td, #customers3 th {\r\n    border: 0px solid #ddd;\r\n    padding: 100px;\r\n}\r\n#customers3 tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers3 tr:hover {background-color: #ddd;}\r\n#customers3 td {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center ;\r\n    background-color: white;\r\n    color: black\r\n}\r\n            \r\n      \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLDBEQUEwRDtJQUMxRCwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtDQUNsQjtBQUVELDhCQUE4QiwwQkFBMEIsQ0FBQztBQUV6RCxxQkFBcUIsdUJBQXVCLENBQUM7QUFFN0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksMERBQTBEO0lBQzFELDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBRUQsK0JBQStCLDBCQUEwQixDQUFDO0FBRTFELHNCQUFzQix1QkFBdUIsQ0FBQztBQUU5QztJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixZQUFZO0NBQ2Y7QUFDRDtJQUNJLDBEQUEwRDtJQUMxRCwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtDQUNsQjtBQUVELCtCQUErQiwwQkFBMEIsQ0FBQztBQUUxRCxzQkFBc0IsdUJBQXVCLENBQUM7QUFFOUM7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgYmx1ZTtcclxuICAgIHBhZGRpbmc6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbiNjdXN0b21lcnMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4jY3VzdG9tZXJzMiB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTgyJTtcclxufVxyXG5cclxuI2N1c3RvbWVyczIgdGQsICNjdXN0b21lcnMyIHRoIHtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMDBweDtcclxufVxyXG5cclxuI2N1c3RvbWVyczIgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuI2N1c3RvbWVyczIgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuI2N1c3RvbWVyczIgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcbiNjdXN0b21lcnMzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxODIlO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzMyB0ZCwgI2N1c3RvbWVyczMgdGgge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzMyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4jY3VzdG9tZXJzMyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4jY3VzdG9tZXJzMyB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<table id=\"customers\">\n  <tr>\n    <th>\n      <h2 >\n        Welcome to {{ title }}\n      </h2>\n        <img width=\"570\"  height=\"650\" alt=\"Minha foto\" src=\"https://scontent.fbsb11-1.fna.fbcdn.net/v/t1.0-9/40094493_1092355047585396_2257573654185377792_n.jpg?_nc_cat=100&_nc_eui2=AeFw51T0HjfsXY9_0imaxxQYcyfkrNPGgiAgOu49yOTRKBi6jDiA6jNMPKGI_f7qI9KkE99an5mI5imp03c6HSTDW1P4IAq1ZtaQAD52Bsj5Sg&_nc_ht=scontent.fbsb11-1.fna&oh=d2ac058c85c170553b7623980d48eb2a&oe=5CDB8470\">\n    </th>\n    <th>\n     <h3>INFORMAÇÕENS GERAIS </h3>\n    <ul>\n      <li>\n        <h4><a>Nome</a></h4>\n        <h5>André Costa Silva</h5>\n      </li>\n      <li>\n        <h4><a>Data de Nacimento</a></h4>\n        <h5>09/06/1998</h5>\n      </li>\n      <li>\n        <h4><a>Sexo</a></h4>\n        <h5>Masculino</h5>\n      </li>\n      <li>\n        <h4><a>Email</a></h4>\n        <h5><a href=\"andre.append@gmail.com\">andre.append@gmail.com</a></h5>\n      </li>\n      <li>\n        <h4><a>Profissão</a></h4>\n        <h5>Estudante/Estágiario</h5>\n      </li>\n      <li>\n       <h4><a>Estado Civil</a></h4>\n       <h5>Solteiro</h5>\n      </li>\n      <li>\n       <h4><a>Cidade/Estado</a></h4>\n       <h5>Palmas/TO</h5>\n      </li>\n      <li>\n       <h4><a>Interesses</a></h4>\n       <h5>Busco conhecimento para atuar, liderar e desenvolver projetos relacionados a tecnologia da informação.</h5>\n      </li>\n    </ul>\n  </th>\n  </tr>\n  <br>\n  <br>\n  <table id=\"customers2\">\n      <tr>\n          <td>\n            <h4>Biografia</h4>\n            <h5>\n                Nascido em 09/06/1998, na cidade de Paraiso do Tocantins. O garoto filho do casal\n                rosemir da silva e pedro costa silva, ingressa<h4>sua carreira acâdemica na instituição de ensino\n                publica e conveniada denominada Instituto Presibiteriano vale do Tocantins, </h4><h4>onde passou seus terriveis \n                dias do ensino fundamental, pórem após essa longa luta começa finalmente a adquirir conhecimentos\n              </h4><h4> na Área cuja mudaria sua vida, ingressa então no Instituto Federal de educação ciência e tecnologia do Tocantins\n              onde completa</h4><h4> seu ensino médio e também conclui seu Técnico em Informática, também  onde adquire sua primeira\n             expériencia profissional na </h4><h4>área de TI, apartir do setor de Ti da própria instituição de ensino. No ano de 2017/1 ingressa no Centro Univérsitario Luterano </h4><h4>de Palmas onde encontrasse\n            até hoje, cursando o 5° periodo no Curso de Engenharia de Software e morando na cidade de Palmas</h4><h4> onde mudou-se em 2019/1\n             para focar nos estudos, ele trabalha para adquirir conhecimentos e experiências para a sua futura vida profissional.</h4>\n\n          </h5>\n          </td>\n       </tr>\n  </table>\n  <table id=\"customers3\">\n      <tr>\n          <td>\n              <ul>\n                <br>\n                <br>\n                <br>\n                <li>\n                  <h4><a>Curso</a></h4>\n                  <h5>Engenharia de Software</h5>\n                </li>\n                <li>\n                  <h4><a>Instituição de Ensino</a></h4>\n                  <h5>Centro Univérsitario Luterano de Palmas</h5>\n                </li>\n                <li>\n                <h4><a>Lista de disciplinas (Cursando)</a></h4>\n                <h5>Liguagem de programação Web</h5>\n                <h5>Teste de Software</h5>\n                <h5>Analize Organizacional</h5>\n                <h5>Fundamentos de sistemas da informação</h5>\n                <h5>Sistemas de informação II</h5>\n                <h5>Modelagem de sistemas da informação</h5>\n                </li>\n              </ul>\n          </td>\n          <td>\n              <ul>\n                <li>\n                  <h4><a>Profissão Atual</a></h4>\n                  <h5>Estudante</h5>\n                  <h5>Estágiario</h5>\n                </li>\n                <li>\n                  <h4><a>Profissõens provisórias/passadas</a></h4>\n                  <h5>Garçom</h5>\n                  <h5>Repositor</h5>\n                  <h5>Atendente</h5>\n                  <h5>Ensacolador</h5>\n                  <h5>Auxiliar de Depósito</h5>\n                </li>\n              </ul>\n          </td>\n       </tr>\n  </table>\n\n</table>\n\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Perfil';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ISMAEL\Desktop\perfil-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map