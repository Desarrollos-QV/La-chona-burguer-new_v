"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_verfycode_verfycode_module_ts"],{

/***/ 1862:
/*!*******************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerfycodePageModule": () => (/* binding */ VerfycodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _verfycode_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verfycode.page */ 6775);







const routes = [
    {
        path: '',
        component: _verfycode_page__WEBPACK_IMPORTED_MODULE_0__.VerfycodePage
    }
];
let VerfycodePageModule = class VerfycodePageModule {
};
VerfycodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_verfycode_page__WEBPACK_IMPORTED_MODULE_0__.VerfycodePage]
    })
], VerfycodePageModule);



/***/ }),

/***/ 6775:
/*!*****************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerfycodePage": () => (/* binding */ VerfycodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _verfycode_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verfycode.page.html?ngResource */ 2322);
/* harmony import */ var _verfycode_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verfycode.page.scss?ngResource */ 6543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 978);









let VerfycodePage = class VerfycodePage {
    constructor(route, server, toastController, keyboard, nav, loadingController, events) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.phone = '';
        this.txtbnt = 'Verificar';
        if (!localStorage.getItem('confirmationResult')) {
            this.nav.navigateForward('/home');
        }
    }
    ngOnInit() {
        // this.windowsRef = this.server.windowRef;
        this.confirmationResult = localStorage.getItem('confirmationResult');
        this.phone = localStorage.getItem('phone');
        this.user_id = localStorage.getItem('user_id');
    }
    verfyCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Validando...',
            });
            yield loading.present();
            if (this.Code && this.Code.toString().length >= 4 && this.Code.toString().length <= 8) {
                let verificationCode = this.Code.toString();
                // this.windowsRef.confirmationResult.confirm(verificationCode).then(result => {
                // this.firebaseAuthentication.signInWithVerificationId(this.confirmationResult,verificationCode).then((data:any) => {
                //   // User Signed
                //   var allData = {
                //     phone : this.phone,
                //     user_id : this.user_id
                //   }
                //   this.server.SignPhone(allData).subscribe(res => {
                //     if (res) {
                //       loading.dismiss();
                //       this.presentToast('Registro completo...','success');
                //       this.nav.navigateForward('/city');
                //     }
                //   });
                // }).catch(fail => {
                //   // Fail
                //   this.presentToast('Algo ha ocurrido.'+fail, 'danger');
                // });
            }
            else {
                loading.dismiss();
                this.presentToast('Porfavor Ingresa un Codigo valido!', 'danger');
            }
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
};
VerfycodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
VerfycodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-verfycode',
        template: _verfycode_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verfycode_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerfycodePage);



/***/ }),

/***/ 6543:
/*!******************************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJmeWNvZGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2322:
/*!******************************************************************!*\
  !*** ./src/app/account/verfycode/verfycode.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n<!--Verify OTP code-->\n<div>\n  <ion-card-header>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"welcome_text\">\n          Verifique su<br />\n          bandeja de SMS\n        </h1>\n      </ion-col>\n    </ion-row>\n    <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\n      Se ha enviado un codigo al Telefono <b>{{ phone }}</b> Verifica tu bandeja.\n    </p>\n  </ion-card-header>\n  \n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 12px\">Ingresa el codigo</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"Code\" required></ion-input>\n  </ion-item>\n  \n  <p align=\"center\" style=\"font-family: 'SF Pro Display';font-weight: 400;font-style: normal\">No obtuviste el codigo? <a routerLink=\"/home\" routerDirection=\"forward\">Reenviar</a></p>\n\n</div>\n</ion-content>\n<ion-footer style=\"text-align: center;\">\n  <ion-button expand=\"block\" (click)=\"verfyCode()\" style=\"font-family: 'SF Pro Display';font-weight: 500;font-size: 16px;\">{{txtbnt}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_account_verfycode_verfycode_module_ts.js.map