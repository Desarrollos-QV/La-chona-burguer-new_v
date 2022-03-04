"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 3893:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 3297);







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 3297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 7030);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 1201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);






let WelcomePage = class WelcomePage {
    constructor(server, loadingController, nav, menu) {
        this.server = server;
        this.loadingController = loadingController;
        this.nav = nav;
        this.menu = menu;
        this.slideOptsTwo = {
            slidesPerView: 1,
            loop: true,
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
            }
        };
        this.getStart = false;
        this.menu.enable(false);
    }
    ngOnInit() {
        this.loaingData();
    }
    loaingData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Bienvenido(a)...',
                mode: 'md'
            });
            yield loading.present();
            if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                this.nav.navigateRoot('/home');
            }
            this.server.welcome().subscribe((response) => {
                console.log(response);
                this.data = response.data;
                this.chargePage = 'sliderIni';
                this.loadpage = 'EmailIn';
                this.IniSes = false;
                loading.dismiss();
            });
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
WelcomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['slides', { static: false },] }]
};
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 1201:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"SF Pro Display\";\n}\n\n.login {\n  text-align: center;\n}\n\n.welcome .swiper-slide {\n  display: block;\n  padding: 0 13px;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 100%;\n  margin: 40px 0;\n}\n\nion-slide > p {\n  margin-top: 25px;\n  color: #444;\n  font-size: 12.5px;\n}\n\n.slideNext {\n  position: relative;\n  font-size: 14px;\n  color: #444;\n  padding: 6px 0;\n  border-radius: 25px;\n  font-family: \"Open Sans\", sans-serif;\n  cursor: pointer;\n}\n\n.slideNext > b {\n  position: absolute;\n  width: 50%;\n  top: 6px;\n  animation: swing 0.9s ease-in-out;\n  animation-iteration-count: infinite;\n}\n\n.logcast > ion-label {\n  font-size: 14px;\n  margin: 10px;\n  position: relative;\n}\n\n.logcast > ion-label:nth-child(1)::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  width: 1px;\n  height: 100%;\n  margin-left: 8px;\n  background-color: #7c7c7c;\n}\n\n@keyframes swing {\n  10% {\n    transform: translateX(3px);\n  }\n  25% {\n    transform: translateX(-1.5px);\n  }\n  50% {\n    transform: translateX(1px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBMEJBO0VBRUU7SUFHQSwwQkFBQTtFQVBBO0VBU0E7SUFHQSw2QkFBQTtFQVJBO0VBVUE7SUFHQSwwQkFBQTtFQVRBO0VBV0E7SUFHQSwwQkFBQTtFQVZBO0FBQ0YiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XG59XG5cbi5sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUgLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIFxufVxuXG5pb24tc2xpZGUgPiBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cbmlvbi1zbGlkZSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDQwcHggMDtcbn1cblxuaW9uLXNsaWRlID4gcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDEyLjVweDtcbn1cblxuLnNsaWRlTmV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ0NDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVOZXh0ID4gYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgdG9wOiA2cHg7XG4gIGFuaW1hdGlvbjogc3dpbmcgMC45cyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5sb2djYXN0ID4gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4ubG9nY2FzdCA+IGlvbi1sYWJlbDpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzdjN2M7XG59ICAgXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZ1xue1xuICAxMCVcbiAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgfVxuICAyNSVcbiAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbiAgfVxuICA1MCVcbiAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbiAgfVxuICAxMDAlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dpbmdcbntcbiAgMTAlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIH1cbiAgMjUlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVweCk7XG4gIH1cbiAgNTAlXG4gIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gIH1cbiAgMTAwJVxuICB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 7030:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content >\n<!-- Slide Ini -->\n    <ion-slides class=\"welcome\" *ngIf=\"chargePage == 'sliderIni'\">\n        <ion-slide *ngFor=\"let welcome of data;let i = index\">\n            <img src=\"{{ welcome.img }}\"/>\n            <div [innerHTML]=\"welcome.title\"></div>\n            <span slot=\"end\" class=\"slideNext\"><i>Desliza</i> <b>> ></b></span>\n        </ion-slide>\n    </ion-slides>\n<!-- Slide Ini -->\n\n</ion-content>\n\n<ion-footer *ngIf=\"chargePage == 'sliderIni'\">\n    <div class=\"logcast\" style=\"padding: 25px;text-align: center;\">\n        <ion-label color=\"medium\"  routerLink=\"/login\">Iniciar Sesión</ion-label>\n    \n        <ion-label color=\"medium\" routerLink=\"/signup\">Registrarse</ion-label>\n    </div>   \n</ion-footer>\n    \n    ";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map