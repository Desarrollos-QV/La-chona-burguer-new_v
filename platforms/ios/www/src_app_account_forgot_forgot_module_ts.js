"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_forgot_forgot_module_ts"],{

/***/ 950:
/*!*************************************************!*\
  !*** ./src/app/account/forgot/forgot.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 1586);







const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage]
    })
], ForgotPageModule);



/***/ }),

/***/ 1586:
/*!***********************************************!*\
  !*** ./src/app/account/forgot/forgot.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page.html?ngResource */ 4525);
/* harmony import */ var _forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss?ngResource */ 2932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);






let ForgotPage = class ForgotPage {
    constructor(server, toastController, nav, loadingController) {
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.newPassword = false;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    forgot(data, type = "new") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (type == "new" && data.email.length == 0) {
                this.presentToast('Porfavor Ingresa un Correo electronico', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Porfavor espere...',
                    mode: 'ios'
                });
                yield loading.present();
                this.server.forgot(data).subscribe((response) => {
                    if (response.msg == "error") {
                        this.presentToast(response.error, 'danger');
                    }
                    else {
                        this.presentToast("El codigo de recuperación ha sido enviado", 'primary');
                        this.user_id = response.user_id;
                        this.email = data.email;
                    }
                    loading.dismiss();
                });
            }
        });
    }
    verify(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (data.otp.length == 0) {
                this.presentToast('Porfavor ingresa el codigo.', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Porfavor espera...',
                    duration: 3000,
                    mode: 'ios'
                });
                yield loading.present();
                var allData = { otp: data.otp, user_id: this.user_id };
                this.server.verify(allData).subscribe((response) => {
                    if (response.msg == "error") {
                        this.presentToast(response.error, 'danger');
                    }
                    else {
                        this.user_id = response.user_id;
                        this.newPassword = true;
                        this.presentToast("Correo verificado con exito.", 'success');
                    }
                    loading.dismiss();
                });
            }
        });
    }
    new_password(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (data.password.length == 0) {
                this.presentToast('Porfavor ingresa tu nueva contraseña', 'warning');
            }
            else if (data.password != data.new_password) {
                this.presentToast('Confirme que las contraseñas coincidan.', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 3000,
                    mode: 'ios'
                });
                yield loading.present();
                var allData = { password: data.password, user_id: this.user_id };
                this.server.updatePassword(allData).subscribe((response) => {
                    if (response.msg == "error") {
                        this.presentToast(response.error, 'danger');
                    }
                    else {
                        this.nav.navigateForward('/city');
                        this.presentToast("Nueva contraseña actualizada con éxito.", 'success');
                    }
                    loading.dismiss();
                });
            }
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    resend() {
        this.forgot({ email: this.email });
    }
};
ForgotPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forgot',
        template: _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPage);



/***/ }),

/***/ 2932:
/*!************************************************************!*\
  !*** ./src/app/account/forgot/forgot.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4525:
/*!************************************************************!*\
  !*** ./src/app/account/forgot/forgot.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>¿Olvidaste tu contraseña?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<!--Send email for otp-->\n<form *ngIf=\"!user_id && !newPassword\" #form=\"ngForm\" (ngSubmit)=\"forgot(form.value)\">\n\n  <p style=\"color: rgb(82, 82, 82);font-family: 'SF Pro Display';font-weight: 400;text-align: center;\">\n    ingrese su correo electrónico y le enviaremos instrucciones sobre cómo restablecerlo\n  </p>\n  <br />\n  <ion-row>\n    <ion-col size=\"3\" style=\"margin-top: 10.5px !important;\">\n     <span>Email</span>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input type=\"email\" ngModel clearInput required name=\"email\" placeholder=\"Ingresa tu Email\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n<br>\n\n<ion-button expand=\"block\" mode=\"ios\" type=\"submit\">Enviar</ion-button>\n<br>\n</form>\n\n<!--Verify OTP code-->\n<div *ngIf=\"user_id && !newPassword\">\n\n  <ion-card-header>\n  <ion-card-title>Verifique su correo electrónico</ion-card-title>\n  <ion-card-subtitle>Se ha enviado un codigo a su correo electrónico {{ this.email }}</ion-card-subtitle>\n\n  </ion-card-header>\n  <br><br>\n  <form #form=\"ngForm\" (ngSubmit)=\"verify(form.value)\">\n\n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: 12px\">Ingresa el codigo</ion-label>\n    <ion-input type=\"email\" ngModel required name=\"otp\"></ion-input>\n  </ion-item>\n\n  <br>\n\n  <ion-button expand=\"block\" mode=\"ios\" type=\"submit\">Verificar</ion-button>\n\n  </form>\n  <p align=\"center\">No obtuviste el codigo? <a (click)=\"resend()\">Reenviar</a></p>\n\n</div>\n\n<!--Set New Password-->\n<div *ngIf=\"user_id && newPassword\">\n\n<ion-card-header>\n<ion-card-title>Establecer nueva contraseña</ion-card-title>\n\n</ion-card-header>\n<br><br>\n<form #form=\"ngForm\" (ngSubmit)=\"new_password(form.value)\">\n\n<ion-item>\n  <ion-label position=\"floating\" style=\"font-size: 12px\">Nueva contraseña\n  </ion-label>\n  <ion-input type=\"password\" ngModel required name=\"password\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\" style=\"font-size: 12px\">Confirmar contraseña</ion-label>\n  <ion-input type=\"password\" ngModel required name=\"new_password\"></ion-input>\n</ion-item>\n\n<br>\n\n<ion-button expand=\"block\" mode=\"ios\" type=\"submit\">Actualizar</ion-button>\n\n</form>\n<p align=\"center\">No obtuviste el codigo? <a (click)=\"resend()\">Reenviar</a></p>\n\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_account_forgot_forgot_module_ts.js.map