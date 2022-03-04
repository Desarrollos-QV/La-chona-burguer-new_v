"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_chkphone_chkphone_module_ts"],{

/***/ 8187:
/*!*****************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChkphonePageModule": () => (/* binding */ ChkphonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _chkphone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chkphone.page */ 1133);







const routes = [
    {
        path: '',
        component: _chkphone_page__WEBPACK_IMPORTED_MODULE_0__.ChkphonePage
    }
];
let ChkphonePageModule = class ChkphonePageModule {
};
ChkphonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_chkphone_page__WEBPACK_IMPORTED_MODULE_0__.ChkphonePage]
    })
], ChkphonePageModule);



/***/ }),

/***/ 1133:
/*!***************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChkphonePage": () => (/* binding */ ChkphonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _chkphone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chkphone.page.html?ngResource */ 6137);
/* harmony import */ var _chkphone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chkphone.page.scss?ngResource */ 7321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 978);









let ChkphonePage = class ChkphonePage {
    // public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    constructor(route, server, toastController, keyboard, nav, loadingController, events) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.phone = '';
        this.btnDisabled = true;
    }
    ngOnInit() {
        this.windowsRef = this.server.windowRef;
        this.stateVerify = 'inputPhone';
        this.txtbnt = 'Siguiente';
        this.user_id = localStorage.getItem('user_id');
    }
    ionViewWillEnter() {
        // this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
        //   size: "invisible",
        //   callback: function(response) {
        //     this.verify();
        //   }
        // });
    }
    verify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.btnDisabled = false;
            const loading = yield this.loadingController.create({
                message: 'Validando...',
            });
            yield loading.present();
            if (this.phone.length == 10) {
                let phone = '+521' + this.phone;
                // firebase.auth().signInWithPhoneNumber(phone,this.windowsRef.recaptchaVerifier).then(confirmationResult => {
                // this.firebaseAuthentication.verifyPhoneNumber(phone,3000).then((confirmationResult:any) => {
                //   // this.windowsRef.confirmationResult = confirmationResult;
                //   localStorage.setItem('confirmationResult',confirmationResult);
                //   localStorage.setItem('phone',this.phone);
                //   setTimeout(() => {
                //     loading.dismiss();
                //     this.nav.navigateForward('/verfycode');
                //   }, 700);
                // }).catch(fail => {
                //   this.btnDisabled = true;
                //   this.presentToast('Error: '+fail,'danger');
                //   console.log('fail: '+fail);
                //   loading.dismiss();
                // });
            }
            else {
                loading.dismiss();
                this.btnDisabled = true;
                this.presentToast('Verifica tu Número Telefonico.', 'danger');
            }
        });
    }
    resend() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Volviendo a intentar...',
            });
            yield loading.present();
            this.stateVerify = 'inputPhone';
            this.txtbnt = 'Siguiente';
            setTimeout(() => {
                this.windowsRef = this.server.windowRef;
                // this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
                loading.dismiss();
            }, 800);
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'bottom',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
};
ChkphonePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
ChkphonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chkphone',
        template: _chkphone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chkphone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChkphonePage);



/***/ }),

/***/ 7321:
/*!****************************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoa3Bob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImNoa3Bob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lX3RleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cblxuIl19 */";

/***/ }),

/***/ 6137:
/*!****************************************************************!*\
  !*** ./src/app/account/chkphone/chkphone.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-family: 'SF Pro Display';font-weight: 500;\">Verifica tu numero telefonico</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"ion-padding\">\n  <!--Send SMS for otp-->\n  <div *ngIf=\"stateVerify == 'inputPhone'\">\n    <ion-row>\n      <ion-col>\n        <h1 class=\"welcome_text\">\n          Cuál es tu número<br />\n          de teléfono?\n        </h1>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row>\n      <ion-col size=\"2\" style=\"margin-top: 10.5px !important;\">\n       <span>+52</span>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-input type=\"tel\" inputmode=\"tel\" pattern=\"[0-9]{3}[0-9]{3}[0-9]{4}\" [(ngModel)]=\"phone\" maxlength=\"10\" clearInput required name=\"phone\" placeholder=\"Ej.- 6361054599\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <hr />\n    <p style=\"color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;\">\n      Toque \"Siguiente\" para obtener un codigo de confirmación via SMS, con esto podremos verificar su Número Telefonico.\n    </p>\n\n    <ion-row>\n      <ion-col class=\"inner-recap\">\n        <div id=\"recaptcha-container\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!--Send SMS for otp-->\n</ion-content>\n<ion-footer style=\"text-align: center;\">\n  <ion-button expand=\"block\" [disabled]=\"!btnDisabled\" (click)=\"verify()\" style=\"font-family: 'SF Pro Display';font-weight: 500;font-size: 16px;\">{{txtbnt}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_account_chkphone_chkphone_module_ts.js.map