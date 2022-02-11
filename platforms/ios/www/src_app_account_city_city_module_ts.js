"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_city_city_module_ts"],{

/***/ 8285:
/*!*********************************************!*\
  !*** ./src/app/account/city/city.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityPageModule": () => (/* binding */ CityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _city_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.page */ 5163);







const routes = [
    {
        path: '',
        component: _city_page__WEBPACK_IMPORTED_MODULE_0__.CityPage
    }
];
let CityPageModule = class CityPageModule {
};
CityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_city_page__WEBPACK_IMPORTED_MODULE_0__.CityPage]
    })
], CityPageModule);



/***/ }),

/***/ 5163:
/*!*******************************************!*\
  !*** ./src/app/account/city/city.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityPage": () => (/* binding */ CityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _city_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.page.html?ngResource */ 2062);
/* harmony import */ var _city_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.page.scss?ngResource */ 9155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/server.service */ 6419);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);






let CityPage = class CityPage {
    constructor(server, toastController, loadingController, nav) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this.heading = 'Porfavor selecciona tu ciudad para continuar.';
        if (localStorage.getItem('city_id')) {
            this.cityID = localStorage.getItem('city_id');
            this.cityName = localStorage.getItem('city_name');
            this.heading = "Want to change your city? Select & continue.";
        }
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando Ciudades Disponibles...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.city().subscribe((response) => {
                this.data = response.data;
                this.text = response.text;
                this.OrderAz(this.data);
                loading.dismiss();
            });
        });
    }
    OrderAz(data) {
        data.sort(function (a, b) { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); });
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
    setCity(data, name) {
        this.cityID = data.detail.value;
        this.cityName = name;
    }
    city() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cityID) {
                if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                    localStorage.setItem('city_id', this.cityID);
                    localStorage.setItem('city_name', this.cityName);
                    const loading = yield this.loadingController.create({
                        message: 'Porfavor espere...',
                        duration: 3000
                    });
                    yield loading.present();
                    this.presentToast('Ciudad actualizada exitosamente.');
                    this.nav.navigateRoot('/home');
                    loading.dismiss();
                    // Lo dejamos pendiente
                    this.server.updateCity("id=" + localStorage.getItem('user_id') + "&city_id=" + this.cityID).subscribe((response) => { });
                }
                else {
                    localStorage.setItem('city_id', this.cityID);
                    localStorage.setItem('city_name', this.cityName);
                    this.presentToast('City Updated Successfully.');
                    this.nav.navigateRoot('/home');
                }
            }
            else {
                this.presentToast('Por favor seleccione ciudad para continuar.');
            }
        });
    }
};
CityPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
CityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-city',
        template: _city_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_city_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CityPage);



/***/ }),

/***/ 9155:
/*!********************************************************!*\
  !*** ./src/app/account/city/city.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXR5LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2062:
/*!********************************************************!*\
  !*** ./src/app/account/city/city.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n  <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"text\">{{text.city_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"true\" *ngIf=\"text\">\n\n<ion-searchbar (ionInput)=\"search($event)\" mode=\"ios\" color=\"light\" placeholder=\"{{ text.city_search }}\"></ion-searchbar>\n\n<ion-list>\n  <ion-list-header>\n    <ion-label>{{text.city_heading}}</ion-label>\n  </ion-list-header>\n  <ion-radio-group *ngFor=\"let city of data\" value=\"{{cityID}}\" (ionChange)=\"setCity($event,city.name)\">\n    <ion-item>\n      <ion-label>{{ city.name }}</ion-label>\n      <ion-radio slot=\"start\" color=\"primary\" value=\"{{ city.id }}\" ></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n<br>\n<ion-button expand=\"block\" size=\"large\" type=\"button\" [disabled]=\"!cityID\" (click)=\"city()\" mode=\"ios\" color=\"primary\">{{text.city_button}}</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_account_city_city_module_ts.js.map