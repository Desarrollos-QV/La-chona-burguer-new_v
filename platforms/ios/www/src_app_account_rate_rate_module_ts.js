"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_rate_rate_module_ts"],{

/***/ 2479:
/*!*********************************************!*\
  !*** ./src/app/account/rate/rate.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatePageModule": () => (/* binding */ RatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate.page */ 9981);







const routes = [
    {
        path: '',
        component: _rate_page__WEBPACK_IMPORTED_MODULE_0__.RatePage
    }
];
let RatePageModule = class RatePageModule {
};
RatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_0__.RatePage]
    })
], RatePageModule);



/***/ }),

/***/ 9981:
/*!*******************************************!*\
  !*** ./src/app/account/rate/rate.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatePage": () => (/* binding */ RatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _rate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate.page.html?ngResource */ 3620);
/* harmony import */ var _rate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.page.scss?ngResource */ 4171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);







let RatePage = class RatePage {
    constructor(route, server, toastController, nav, loadingController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.star = 0;
        this.oid = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type');
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    setStar(val) {
        this.star = val;
    }
    giveRating(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.star == 0) {
                this.presentToast('Seleccione cualquier calificación para continuar.');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Enviando Calificación',
                    duration: 3000
                });
                yield loading.present();
                var allData = {
                    comment: data.comment,
                    user_id: localStorage.getItem('user_id'),
                    star: this.star,
                    oid: this.oid,
                    type: this.type,
                    sanit_process: data.sanit_process,
                    status_prod: data.status_prod
                };
                this.server.rating(allData).subscribe((response) => {
                    this.presentToast('¡Gracias! Calificación enviada con éxito.');
                    this.nav.navigateBack('/order');
                    loading.dismiss();
                });
            }
        });
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
};
RatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
RatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-rate',
        template: _rate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatePage);



/***/ }),

/***/ 4171:
/*!********************************************************!*\
  !*** ./src/app/account/rate/rate.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3620:
/*!********************************************************!*\
  !*** ./src/app/account/rate/rate.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title *ngIf=\"type == 'store'\">\n      Califica al Comercio\n    </ion-title>\n    \n    <ion-title *ngIf=\"type == 'staff'\">\n      Califica al Repartidor\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n<form #form=\"ngForm\" (ngSubmit)=\"giveRating(form.value)\">\n\n<ion-list>\n\n<small>{{ text.rating_heading }}</small>\n<br><br>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 0\">\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 1\">\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 2\">\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 3\">\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 4\">\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-row style=\"font-size: 25px;color:#ff5722\" *ngIf=\"star == 5\">\n  <ion-col size=\"1\" (click)=\"setStar(1)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(2)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(3)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(4)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n  <ion-col size=\"1\" (click)=\"setStar(5)\"><ion-icon name=\"star\"></ion-icon></ion-col>\n</ion-row>\n\n<ion-item *ngIf=\"type == 'staff'\">\n  <ion-label>¿El repartidor realizó el proceso de sanitización del producto?</ion-label>\n  <ion-select placeholder=\"Select\" ngModel name=\"sanit_process\" required>\n    <ion-select-option value=\"1\">SI</ion-select-option>\n    <ion-select-option value=\"0\">NO</ion-select-option>\n  </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"type == 'staff'\">\n  <ion-label>¿El producto llegó en perfecto estado?</ion-label>\n  <ion-select placeholder=\"Select\" ngModel name=\"status_prod\" required>\n    <ion-select-option value=\"1\">SI</ion-select-option>\n    <ion-select-option value=\"0\">NO</ion-select-option>\n  </ion-select>\n</ion-item>\n\n<br><br>\n<ion-item>\n  <ion-textarea ngModel name=\"comment\" placeholder=\"{{ text.rating_msg }}\"></ion-textarea>\n</ion-item>\n\n\n</ion-list>\n<br>\n<ion-button color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\" mode=\"ios\" size=\"large\">{{ text.rating_button }}</ion-button>\n\n</form>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_account_rate_rate_module_ts.js.map