"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_order_order_module_ts"],{

/***/ 5242:
/*!***********************************************!*\
  !*** ./src/app/account/order/order.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageModule": () => (/* binding */ OrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page */ 3102);







const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage]
    })
], OrderPageModule);



/***/ }),

/***/ 3102:
/*!*********************************************!*\
  !*** ./src/app/account/order/order.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPage": () => (/* binding */ OrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page.html?ngResource */ 7139);
/* harmony import */ var _order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page.scss?ngResource */ 3179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);







let OrderPage = class OrderPage {
    constructor(route, server, toastController, nav, loadingController, alertController) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
            this.nav.navigateRoot('/login');
            this.presentToast("Inicia sesión para acceder a tu perfil");
        }
        else {
            this.loadData();
        }
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
            });
            yield loading.present();
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            this.server.myOrder(localStorage.getItem('user_id') + "?lid=" + lid).subscribe((response) => {
                console.log(response);
                this.data = response.data;
                loading.dismiss();
            });
        });
    }
    rate() {
        this.nav.navigateForward('/login');
    }
    cancelOrder(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancelar orden!',
                message: '¿Estás seguro? ¿Quieres cancelar este pedido?',
                mode: 'ios',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'SI',
                        handler: () => {
                            this.cnc(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cnc(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
            });
            yield loading.present();
            this.server.cancelOrder(id, localStorage.getItem('user_id') + "?lid=" + localStorage.getItem('lid')).subscribe((response) => {
                this.data = response.data;
                this.presentToast("Pedido cancelado con éxito.");
                loading.dismiss();
            });
        });
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
};
OrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
OrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-order',
        template: _order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderPage);



/***/ }),

/***/ 3179:
/*!**********************************************************!*\
  !*** ./src/app/account/order/order.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  font-size: 12px;\n  border-top: 1px solid #f7f7f7;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBQUQiLCJmaWxlIjoib3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvd1xue1xuXHRmb250LXNpemU6MTJweDtcblx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2Y3ZjdmNztcblx0cGFkZGluZy10b3A6NXB4O1xufSJdfQ== */";

/***/ }),

/***/ 7139:
/*!**********************************************************!*\
  !*** ./src/app/account/order/order.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n<ion-back-button></ion-back-button>\n</ion-buttons>\n    <ion-title>\n      {{ text.history_title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"data\">\n\n<ion-card class=\"welcome-card\" *ngFor=\"let order of data\" mode=\"ios\">\n\n<ion-card-header>\n\n<ion-card-subtitle>{{ order.store.name }} (#{{order.id }}) <ion-badge color=\"primary\" style=\"float:right\">{{ order.total | currency}}</ion-badge></ion-card-subtitle>\n\n<br>\n<ion-row>\n\n<ion-col size=\"5\"><b> {{ text.history_date }}</b></ion-col>\n<ion-col size=\"7\">{{ order.date }}</ion-col>\n\n</ion-row>\n\n<ion-row>\n\n<ion-col size=\"5\"><b> {{ text.history_status }}</b></ion-col>\n<ion-col size=\"7\">{{ order.status }}</ion-col>\n\n</ion-row>\n\n<ion-row>\n\n<ion-col size=\"6\"><b> {{ text.history_item }}</b></ion-col>\n<ion-col size=\"3\"><b> {{ text.history_qty }}</b></ion-col>\n<ion-col size=\"3\"><b> {{ text.history_price }}</b></ion-col>\n\n</ion-row>\n\n<span *ngFor=\"let item of order.items\">\n<ion-row>\n\n<ion-col size=\"6\">{{ item.item }} (<small>{{ item.type }}</small>)</ion-col>\n<ion-col size=\"3\">{{ item.qty }}</ion-col>\n<ion-col size=\"3\">{{ order.currency }}{{ item.price * item.qty }}</ion-col>\n</ion-row>\n\n<ion-row *ngFor=\"let addon of item.addon\">\n\n<ion-col size=\"6\">{{ addon.addon }}</ion-col>\n<ion-col size=\"3\">{{ addon.qty }}</ion-col>\n<ion-col size=\"3\">{{ order.currency }}{{ addon.price  }}</ion-col>\n\n</ion-row>\n</span>\n\n<br>\n<ion-button style=\"font-size: 13px;text-align:center;\" *ngIf=\"order.hasRating == 0 || order.ratStore == 0\" fill=\"outline\" size=\"small\" color=\"primary\" routerLink=\"/rate/{{ order.id }}/store\" routerDirection=\"forward\">\n  {{ text.history_rating }}\n</ion-button>\n<ion-button style=\"font-size: 13px;text-align:center;\" *ngIf=\"order.st == 0 && order.pay == 1\" fill=\"outline\" size=\"small\" style=\"float: right\" (click)=\"cancelOrder(order.id)\">\n  {{ text.history_cancel }}\n</ion-button>\n\n</ion-card-header>\n\n</ion-card>\n\n\n</ion-content>\n\n<ion-footer *ngIf=\"text\">\n  <ion-toolbar mode=\"ios\">\n  \n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      \n     <ion-tab-button routerLink=\"/home\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>{{ text.home_footer_name }}</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button routerLink=\"/home\">\n        <ion-icon name=\"pin\"></ion-icon>\n        <ion-label>{{ text.home_nearest }}</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-label>{{ text.home_cart }}</ion-label>\n        <ion-badge *ngIf=\"count > 0\">{{ count }}</ion-badge>\n      </ion-tab-button>\n  \n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>{{ text.home_profile }}</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  \n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_account_order_order_module_ts.js.map