"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_lang_lang_module_ts"],{

/***/ 7026:
/*!*************************************!*\
  !*** ./src/app/lang/lang.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangPageModule": () => (/* binding */ LangPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _lang_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.page */ 9214);







const routes = [
    {
        path: '',
        component: _lang_page__WEBPACK_IMPORTED_MODULE_0__.LangPage
    }
];
let LangPageModule = class LangPageModule {
};
LangPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_lang_page__WEBPACK_IMPORTED_MODULE_0__.LangPage]
    })
], LangPageModule);



/***/ }),

/***/ 9214:
/*!***********************************!*\
  !*** ./src/app/lang/lang.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangPage": () => (/* binding */ LangPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _lang_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.page.html?ngResource */ 2450);
/* harmony import */ var _lang_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.page.scss?ngResource */ 5411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);







let LangPage = class LangPage {
    constructor(server, toastController, loadingController, nav, events) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.events = events;
        this.lid = "none";
        if (localStorage.getItem('lid')) {
            this.lid = localStorage.getItem('lid');
        }
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.lang().subscribe((response) => {
                console.log(response);
                this.data = response.data;
                loading.dismiss();
            });
        });
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    search(ev) {
        // set val to the value of the ev target
        var val = ev.target.value;
        if (val && val.length > 0) {
            if (val && val.trim() != '') {
                this.data = this.data.filter((item) => {
                    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
        else {
            return this.loadData();
        }
    }
    setLang(id, type) {
        this.lid = id;
        this.type = type;
    }
    update() {
        if (this.type == undefined) {
            this.type = 0;
        }
        this.events.publish('lang_change', this.type);
        localStorage.setItem('lid', this.lid);
        localStorage.setItem('app_type', this.type);
        this.presentToast("El idioma se ah actualizado con exito.");
        if (localStorage.getItem('city_id')) {
            this.nav.navigateRoot('/home');
        }
        else {
            this.nav.navigateRoot('/city');
        }
    }
};
LangPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
LangPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-lang',
        template: _lang_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lang_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LangPage);



/***/ }),

/***/ 5411:
/*!************************************************!*\
  !*** ./src/app/lang/lang.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2450:
/*!************************************************!*\
  !*** ./src/app/lang/lang.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ text.language }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"true\" *ngIf=\"text\">\n\n<ion-searchbar (ionInput)=\"search($event)\" mode=\"ios\" color=\"light\"></ion-searchbar>\n\n<ion-list>\n<ion-radio-group>\n\n<ion-item *ngFor=\"let l of data\">\n<ion-label><img src=\"{{ l.img }}\" style=\"width: 30px\"> {{ l.name }}</ion-label>\n<ion-radio color=\"primary\" slot=\"start\" value=\"{{ l.id }}\" (ionSelect)=\"setLang(l.id,l.type)\" [checked]=\"l.id == lid\"></ion-radio>\n\n</ion-item>\n</ion-radio-group>\n</ion-list>\n<br>\n<ion-button color=\"primary\" expand=\"block\" size=\"large\" type=\"button\" [disabled]=\"lid == 'none'\" (click)=\"update()\" mode=\"ios\">Cambiar idioma</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_lang_lang_module_ts.js.map