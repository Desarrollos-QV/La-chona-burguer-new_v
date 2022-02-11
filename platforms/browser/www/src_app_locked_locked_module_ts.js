"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_locked_locked_module_ts"],{

/***/ 4010:
/*!*****************************************!*\
  !*** ./src/app/locked/locked.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockedPageModule": () => (/* binding */ LockedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _locked_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locked.page */ 1194);







const routes = [
    {
        path: '',
        component: _locked_page__WEBPACK_IMPORTED_MODULE_0__.LockedPage
    }
];
let LockedPageModule = class LockedPageModule {
};
LockedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_locked_page__WEBPACK_IMPORTED_MODULE_0__.LockedPage]
    })
], LockedPageModule);



/***/ }),

/***/ 1194:
/*!***************************************!*\
  !*** ./src/app/locked/locked.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockedPage": () => (/* binding */ LockedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _locked_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locked.page.html?ngResource */ 5491);
/* harmony import */ var _locked_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locked.page.scss?ngResource */ 1481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let LockedPage = class LockedPage {
    constructor() { }
    ngOnInit() {
    }
};
LockedPage.ctorParameters = () => [];
LockedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-locked',
        template: _locked_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_locked_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LockedPage);



/***/ }),

/***/ 1481:
/*!****************************************************!*\
  !*** ./src/app/locked/locked.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n  font-size: 22px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJsb2NrZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWVfdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5491:
/*!****************************************************!*\
  !*** ./src/app/locked/locked.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <div style=\"margin-top: 25px;\">\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"7\">\n          <img src=\"../../assets/locked.jpg\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <h1 class=\"welcome_text\">\n            !Oops<br />\n            Cuenta Bloqueada\n          </h1>\n        </ion-col>\n      </ion-row>\n      <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\n        Tu cuenta está bloqueada, por favor comunícate con soporte en: \n      </p>\n    </ion-card-header>\n      \n    <p align=\"center\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal\"><a href=\"https://lachonaburger.grupoorus.mx/soporte\">Soporte Tecnico</a></p>\n  \n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_locked_locked_module_ts.js.map