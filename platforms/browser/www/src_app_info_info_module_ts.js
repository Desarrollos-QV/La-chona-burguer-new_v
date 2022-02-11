"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_info_info_module_ts"],{

/***/ 3056:
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 5726);







const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage
    }
];
let InfoPageModule = class InfoPageModule {
};
InfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage]
    })
], InfoPageModule);



/***/ }),

/***/ 5726:
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page.html?ngResource */ 1091);
/* harmony import */ var _info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss?ngResource */ 8358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);







let InfoPage = class InfoPage {
    constructor(server, route, nav) {
        this.server = server;
        this.route = route;
        this.nav = nav;
        this.ViewPic = false;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.route.queryParams.subscribe(params => {
            if (params.id) {
                var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
                var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
                var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
                this.server.getStore(params.id + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((data) => {
                    if (data.data) {
                        this.data = data.data[0];
                    }
                    else {
                        this.nav.navigateRoot('home');
                    }
                });
            }
            else {
                this.nav.navigateRoot('home');
            }
        });
    }
    ngOnInit() {
    }
    Viewpic(Pic) {
        this.Pic = Pic;
        this.ViewPic = true;
    }
    closevp() {
        this.ViewPic = false;
    }
};
InfoPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-info',
        template: _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoPage);



/***/ }),

/***/ 8358:
/*!************************************************!*\
  !*** ./src/app/info/info.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  font-size: 14px !important;\n}\n\n.viewPic {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n}\n\n.viewPic ion-label {\n  margin: 10px;\n  padding: 8px 12px;\n  border: 1px solid #fff;\n  float: right;\n  color: #fff;\n}\n\n.viewPic img {\n  position: absolute;\n  top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsMEJBQUE7QUFBRDs7QUFJQTtFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQU8sT0FBQTtFQUNQLFdBQUE7RUFBWSxhQUFBO0VBQ1osb0NBQUE7RUFDQSxhQUFBO0FBQ0Q7O0FBRUM7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7QUFERiIsImZpbGUiOiJpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGlvbi1sYWJlbFxue1xuXHRmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xufVxuXG5cbi52aWV3UGljIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDB2aDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KTtcblx0ei1pbmRleDogMTAwMDtcblxuXG5cdGlvbi1sYWJlbCB7XG5cdFx0bWFyZ2luOiAxMHB4O1xuXHRcdHBhZGRpbmc6IDhweCAxMnB4O1xuXHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuXHRpbWcge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDc1cHg7XG5cdFx0XG5cdH1cbn0iXX0= */";

/***/ }),

/***/ 1091:
/*!************************************************!*\
  !*** ./src/app/info/info.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title style=\"font-size:18px;\">Menú</ion-title>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  mode=\"ios\" *ngIf=\"data\">\n\n\n<div mode=\"ios\">\n  <ion-slides pager=\"true\" autoplay=\"3000\">\n    <ion-slide *ngFor=\"let pics of data.images\">\n      <img src=\"{{ pics.img }}\" style=\"height: 200px;\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card-header>\n    <ion-card-title>{{ data.title }} <ion-badge color=\"primary\" style=\"float: right\">{{ data.rating }}<br></ion-badge></ion-card-title>\n    <ion-card-subtitle>{{ data.type }}</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-list lines=\"none\">\n      <ion-item text-wrap>\n        <ion-label>{{ data.address }}</ion-label>\n        <ion-icon name=\"pin\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item text-wrap>\n        <ion-label><a href=\"tel:{{ data.phone }}\">{{ data.phone }}</a></ion-label>\n        <ion-icon name=\"call\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Costo por persona : {{ data.currency }}{{ data.person_cost }}</ion-label>\n        <ion-icon name=\"cash\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Giro : {{ data.type }}</ion-label>\n        <ion-icon name=\"time\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n      <!-- \n      <ion-item>\n        <ion-label>{{ text.info_person }} : {{ data.currency }}{{ data.person_cost }}</ion-label>\n        <ion-icon name=\"cash\" slot=\"start\" color=\"danger\"></ion-icon>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label>{{ text.info_d_time }} : {{ data.delivery_time }}</ion-label>\n        <ion-icon name=\"cube\" slot=\"start\" color=\"dark\"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n  </ion-card-content>\n\n</div>\n\n<span *ngIf=\"data.ratings.length > 0\">\n  <h3 style=\"padding: 0px 18px\">{{ text.info_rating_title }}</h3>\n\n  <ion-card mode=\"ios\" *ngFor=\"let rate of data.ratings\">\n\n    <ion-card-header>\n      <ion-card-subtitle>{{ rate.user }} <small style=\"float: right\">{{ rate.date }}</small>\n        <ion-row *ngIf=\"rate.star == 1\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 2\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 3\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 4\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"rate.star == 5\">\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n          <ion-col size=\"1\"><ion-icon name=\"star\" color=\"danger\"></ion-icon></ion-col>\n        </ion-row>\n\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ rate.comment }}\n    </ion-card-content>\n  </ion-card>\n\n</span>\n\n<div class=\"viewPic\" *ngIf=\"ViewPic == true\">\n  <ion-label (click)=\"closevp()\">\n      close\n  </ion-label>\n  <img src=\"{{Pic}}\">\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_info_info_module_ts.js.map