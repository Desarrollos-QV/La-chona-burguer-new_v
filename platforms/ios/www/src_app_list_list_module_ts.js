"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list_list_module_ts"],{

/***/ 2130:
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 4777);







let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
                }
            ])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage]
    })
], ListPageModule);



/***/ }),

/***/ 4777:
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page.html?ngResource */ 3403);
/* harmony import */ var _list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss?ngResource */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let ListPage = class ListPage {
    constructor() {
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ngOnInit() {
    }
};
ListPage.ctorParameters = () => [];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-list',
        template: _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPage);



/***/ }),

/***/ 3755:
/*!************************************************!*\
  !*** ./src/app/list/list.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3403:
/*!************************************************!*\
  !*** ./src/app/list/list.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-icon [name]=\"item.icon\" slot=\"start\"></ion-icon>\n      {{item.title}}\n      <div class=\"item-note\" slot=\"end\">\n        {{item.note}}\n      </div>\n    </ion-item>\n  </ion-list>\n  <!--\n    <div *ngIf=\"selectedItem\" padding>\n      You navigated here from <b>{{selectedItem.title }}</b>\n    </div>\n  -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_list_list_module_ts.js.map