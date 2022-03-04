"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_signup_signup_module_ts"],{

/***/ 8884:
/*!*************************************************!*\
  !*** ./src/app/account/signup/signup.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 7125);







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 7125:
/*!***********************************************!*\
  !*** ./src/app/account/signup/signup.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 8194);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 4907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 3465);








// Facebook

let SignupPage = class SignupPage {
    // public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    constructor(route, server, toastController, nav, loadingController, events, fb) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.fb = fb;
        this.dating = [];
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    signup(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.signup(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg, 'danger');
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');
                    this.nav.navigateRoot('/home');
                }
                loading.dismiss();
            });
        });
    }
    fbSignup() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            if (res.status == 'connected') {
                // Usuarios Logeado...
                let url = "https://graph.facebook.com/me?fields=id,name,email&access_token=" + res.authResponse.accessToken;
                this.server.signupWithfb(url).subscribe(data => {
                    this.signup({ name: data['name'],
                        email: data['email'],
                        phone: 'null',
                        password: data['id'],
                        pswfb: data['id'] });
                });
            }
        }).catch(e => {
            this.presentToast("Error logging into Facebook " + e, 'danger');
        });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
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
    goBck() {
        this.nav.navigateRoot('welcome');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__.Facebook }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 4907:
/*!************************************************************!*\
  !*** ./src/app/account/signup/signup.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 900;\n  font-style: normal;\n  letter-spacing: 0.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLndlbGNvbWVfdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4XG59Il19 */";

/***/ }),

/***/ 8194:
/*!************************************************************!*\
  !*** ./src/app/account/signup/signup.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n<form #form=\"ngForm\" (ngSubmit)=\"signup(form.value)\">\n  <div class=\"content\"></div>\n  <ion-row>\n    <ion-col>\n      <h1 class=\"welcome_text\">\n        {{text.signup_title}}\n      </h1>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <p style=\"color: rgb(82, 82, 82);font-family: 'SF Pro Display';font-weight: 400;\">Unete a la familia <b>La Chona Burger</b></p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\n    <span>Tu Nombre</span>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-input type=\"text\" clearInput name=\"name\" ngModel required placeholder=\"Tu nombre completo\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\n    <span>Email</span>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-input type=\"email\" clearInput name=\"email\" ngModel required placeholder=\"Ej.- example@hotmail.com\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\n    <span>Password</span>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-input type=\"password\" clearInput name=\"password\" ngModel required placeholder=\"*******\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br />\n  <div class=\"row\">\n    <ion-button expand=\"block\" [disabled]=\"!form.valid\" type=\"submit\" color=\"primary\" style=\"font-family: 'SF Pro Display';font-weight: 400;position: relative;text-align: center;\">\n      <ion-icon name=\"person-add\" style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> \n        <span class=\"capitalize\" style=\"font-size: 14px;\">{{ text.signup_button }}</span>\n    </ion-button>\n  </div>\n</form>\n\n\n<br />\n<ion-row>\n  <ion-col>\n    <div style=\"text-align: center;\">\n      <small style=\"color: rgb(31, 31, 31);font-family: 'SF Pro Display', 'normal';font-weight: 100;\">\n        Al hacer clic en Registrarse, creará una cuenta y aceptará nuestros <b>términos de servicio</b> y <b>política de privacidad</b>\n      </small>\n    </div>\n  </ion-col>\n</ion-row>\n</ion-content>\n\n<ion-footer style=\"padding: 15px;text-align: center;\">\n  <ion-label color=\"medium\"  mode=\"ios\" routerLink=\"/login\" routerDirection=\"back\">Ya tienes una cuenta? <b>Inicia Sesión</b></ion-label> \n</ion-footer>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_account_signup_signup_module_ts.js.map