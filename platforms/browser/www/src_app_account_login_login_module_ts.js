"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_login_login_module_ts"],{

/***/ 5711:
/*!***********************************************!*\
  !*** ./src/app/account/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3606);







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3606:
/*!*********************************************!*\
  !*** ./src/app/account/login/login.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1070);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 978);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 3465);









// Facebook

let LoginPage = class LoginPage {
    constructor(route, server, toastController, keyboard, nav, loadingController, events, fb) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.fb = fb;
        this.email = "";
        this.password = "";
        this.isLoggedIn = false;
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        this.isKeyboardHide = true;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
            // console.log('SHOWK');
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
            // console.log('HIDEK');
        });
    }
    login(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.login(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg);
                    // this.nav.navigateRoot('signup');  
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.nav.navigateRoot('city');
                }
                loading.dismiss();
            });
        });
    }
    loginfb(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.loginfb(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg);
                    // this.nav.navigateRoot('signup');  
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.nav.navigateRoot('city');
                }
                loading.dismiss();
            });
        });
    }
    fbLogin() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            if (res.status == 'connected') {
                // Usuarios Logeado...
                let url = "https://graph.facebook.com/me?fields=id,email&access_token=" + res.authResponse.accessToken;
                this.server.signupWithfb(url).subscribe(data => {
                    this.loginfb({
                        email: data['email'],
                        password: data['id']
                    });
                });
            }
        }).catch(e => {
            alert("Error logging into Facebook " + e);
        });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: 'dark'
            });
            toast.present();
        });
    }
    goBck() {
        this.nav.navigateRoot('welcome');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7455:
/*!**********************************************************!*\
  !*** ./src/app/account/login/login.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 900;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi53ZWxjb21lX3RleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 1070:
/*!**********************************************************!*\
  !*** ./src/app/account/login/login.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\" transparent>\n\n<form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\" style=\"margin-top: 15px;\">\n\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <h1 class=\"welcome_text\" style=\"font-family: 'SF Pro Display';\">\n       {{text.login_title}}\n      </h1>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <p style=\"color: rgb(82, 82, 82);font-family: 'SF Pro Display';;font-weight: 400;\">Inicia Sesión para continuar</p>    \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\n     <span>Email</span>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-input type=\"email\" clearInput  [(ngModel)]=\"email\" required name=\"email\" placeholder=\"example@example.com\"></ion-input>\n    </ion-col>\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\n     <span>Password</span>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-input type=\"password\" clearInput [(ngModel)]=\"password\" required name=\"password\" placeholder=\"*********\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <br />\n  <ion-row>\n    <ion-col size=\"12\" >\n      <a routerLink=\"/forgot\" routerDirection=\"forward\" style=\"color: rgb(160, 23, 23) !important;font-family: 'SF Pro Display';;font-weight: 400;float: right;\">\n        {{text.login_forgot_password}}\n      </a>\n    </ion-col>\n  </ion-row>\n  <br />\n  <div class=\"row\">\n    <ion-button color=\"primary\" expand=\"block\" type=\"submit\" style=\"font-family: 'SF Pro Display';position: relative;text-align: center;\">\n      <ion-icon name=\"log-in\" \n        style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> \n        <span class=\"capitalize\" style=\"font-size: 14x;\">{{text.login_button}}</span>\n    </ion-button>\n  </div>\n</form>\n\n\n<br />\n<ion-row>\n  <ion-col>\n    <div style=\"text-align: center;\">\n      <small style=\"color: rgb(31, 31, 31);font-family: 'SF Pro Display', 'normal';font-weight: 100;\">\n        Conéctate con\n      </small>\n    </div>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n    <div class=\"row\" style=\"border-top: 1px solid #cecece;padding-top: 12px;\">\n      <ion-button expand=\"block\" (click)=\"fbLogin()\" style=\"--background: #3b5998 !important;font-family: 'SF Pro Display';position: relative;text-align: center;\">\n        <ion-icon name=\"logo-facebook\" \n          style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> \n          <span class=\"capitalize\" style=\"font-size: 14px;\">Facebook</span>\n      </ion-button>\n    </div>\n  </ion-col>  \n</ion-row>\n\n</ion-content>\n\n<ion-footer style=\"padding: 15px;text-align: center;\" *ngIf=\"isKeyboardHide\">\n  <ion-label color=\"medium\"  mode=\"ios\" routerLink=\"/signup\" routerDirection=\"forward\">No tienes una cuenta? <b>Registrate</b></ion-label> \n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_account_login_login_module_ts.js.map