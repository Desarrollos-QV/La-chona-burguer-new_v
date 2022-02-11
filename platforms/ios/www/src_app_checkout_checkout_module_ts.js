"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 8400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageModule": () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 5247);







const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
    }
];
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage]
    })
], CheckoutPageModule);



/***/ }),

/***/ 5247:
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page.html?ngResource */ 8964);
/* harmony import */ var _checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss?ngResource */ 989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ 5571);
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ 5682);








let CheckoutPage = class CheckoutPage {
    constructor(server, toastController, loadingController, alertController, nav, payPal, stripe) {
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nav = nav;
        this.payPal = payPal;
        this.stripe = stripe;
        this.stripeView = false;
        this.otype = 1;
        this.text = JSON.parse(localStorage.getItem('app_text'));
        this.address = localStorage.getItem('address_id');
        this.admin = JSON.parse(localStorage.getItem('admin'));
        this.send_terminal = this.admin.send_terminal;
        this.comm_stripe = this.admin.comm_stripe;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
            this.nav.navigateRoot('/login');
            this.presentToast("Please login for continue.");
        }
        else {
            this.loadData();
        }
    }
    setType(data) {
        if (data.detail.value == 2) {
            this.total_amount = Number(this.total_amount) - Number(this.delivery_charges);
            this.delivery_status = false;
        }
        else {
            if (this.delivery_status == false) {
                this.total_amount = Number(this.total_amount) + Number(this.delivery_charges);
            }
        }
        this.otype = data.detail.value;
        this.payment = false;
        this.stripeView = false;
    }
    formVal() {
        if (this.otype == 1) {
            if (!this.address || !this.payment) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (!this.payment) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    setPayment(data) {
        this.payment = data.detail.value;
        if (data.detail.value == 3) {
            if (this.send_terminal == true) {
                this.ConfirmPayStripe();
            }
            else {
                this.stripeView = true;
            }
        }
        else {
            if (this.stripeView == true) {
                this.total_amount = Number(this.total_amount) - Number(this.iva_stripe);
                this.stripeView = false;
            }
        }
    }
    ConfirmPayStripe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Advertencia!!',
                message: 'El pago via tarjeta de Crédito/Débito genera una comisión de ' + this.comm_stripe + " %",
                mode: 'ios',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.stripeView = false;
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.total_amount = Number(this.total_amount) + Number(this.getComm(this.total_amount, this.comm_stripe));
                            this.stripeView = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getComm(total, comm) {
        this.iva_stripe = Math.round((total * comm) / 100);
        return Math.round(this.iva_stripe);
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Espere porfavor...',
                mode: 'ios'
            });
            yield loading.present();
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                console.log(response);
                this.store_id = response.data.data[0].store_id;
                this.server.getDeliveryType(this.store_id).subscribe(data => {
                    this.delivery_type = data[0][0].service_del;
                    this.pickup = data[0][0].pickup;
                    if (this.delivery_type == 0) {
                        this.otype = 2;
                    }
                });
                // localStorage.getItem('user_id')
                this.server.getAddress(localStorage.getItem('user_id') + "?cart_no=" + localStorage.getItem('cart_no') + "&store=" + this.store_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                    this.data = response.data;
                    console.log(this.data);
                    if (response.data.address.length > 0) {
                        // this.address      = response.data.address[0].id; // Marcamos la primer opcion que tenga
                    }
                    else {
                        this.nav.navigateRoot('/address');
                    }
                    this.total_amount = (response.data.total);
                    this.delivery_charges = response.data.Comercio.delivery_charges_value;
                    if (response.data.Comercio.Cuenta_clave) {
                        this.Cuenta_clave = response.data.Comercio.Cuenta_clave;
                        this.banco_name = response.data.Comercio.banco_name;
                    }
                    if (this.admin.paypal_client_id) {
                        this.paypal_id = this.admin.paypal_client_id;
                    }
                    if (this.admin.stripe_client_id) {
                        this.stripe_id = this.admin.stripe_client_id;
                    }
                });
                loading.dismiss();
            });
        });
    }
    makeOrder() {
        if (this.payment == 2) {
            this.payPaypal();
        }
        else if (this.payment == 3) {
            this.payWithStripe();
        }
        else {
            this.order();
        }
    }
    order() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor espere...',
                mode: 'ios'
            });
            yield loading.present();
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            var allData = {
                user_id: localStorage.getItem('user_id'),
                payment: this.payment,
                address: this.address,
                cart_no: localStorage.getItem('cart_no'),
                payment_id: this.payment_id,
                otype: this.otype,
                notes: this.notes,
                lat: lat,
                lng: lng
            };
            this.server.order(allData).subscribe((response) => {
                if (response.data == 'Not_service') {
                    loading.dismiss();
                    this.presentToast('Sin servicio en la ubicación Seleccionada');
                }
                else {
                    let dataLS = [];
                    if (localStorage.getItem('LastStore')) {
                        dataLS = JSON.parse(localStorage.getItem('LastStore'));
                        let has = dataLS.find(id => id = this.store_id);
                        if (has.store_id != this.store_id) {
                            dataLS.push({
                                store_id: this.store_id
                            });
                        }
                    }
                    else {
                        dataLS.push({
                            store_id: this.store_id
                        });
                    }
                    localStorage.setItem('LastStore', JSON.stringify(dataLS));
                    localStorage.setItem('order_data', JSON.stringify(response.data));
                    // Agregamos a ultimas ordenes
                    this.nav.navigateRoot('/done');
                    loading.dismiss();
                }
            });
        });
    }
    payPaypal() {
        this.payPal.init({
            PayPalEnvironmentProduction: this.paypal_id,
            PayPalEnvironmentSandbox: this.paypal_id
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentProduction', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_3__.PayPalConfiguration({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_3__.PayPalPayment(this.total_amount, 'MXN', 'Description', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then((res) => {
                    this.payment_id = res.response.id;
                    if (this.payment_id) {
                        this.order();
                    }
                }, () => {
                    this.presentToast("Paypal Transaction Cancelled");
                });
            }, () => {
                this.presentToast("Error in configuration");
            });
        }, () => {
            // 
            this.presentToast("Error in initialization, maybe PayPal isn't supported");
        });
    }
    payWithStripe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({});
            yield loading.present();
            if (this.card_no.length > 10 && this.exp_month && this.exp_year && this.cvv) {
                loading.dismiss();
                this.stripe.setPublishableKey(this.stripe_id);
                let card = {
                    number: this.card_no,
                    expMonth: this.exp_month,
                    expYear: this.exp_year,
                    cvc: this.cvv
                };
                this.stripe.createCardToken(card)
                    .then(token => {
                    this.makePayment(token.id);
                })
                    .catch(error => {
                    this.presentToast("Por favor ingrese detalles de pago válidos");
                });
            }
            else {
                loading.dismiss();
                this.presentToast("Por favor ingrese detalles de pago válidos");
            }
        });
    }
    payWithTransfer() {
        this.presentToast("Una vez realizada la transferencia no te olvides de enviarle el ticket al comercio.");
        this.payment_id = 0;
        this.order();
    }
    makePayment(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Enviando Informacion...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.makeStripePayment("?token=" + token + "&amount=" + this.total_amount).subscribe((response) => {
                if (response.data == "done") {
                    this.payment_id = response.id;
                    if (this.payment_id) {
                        this.order();
                    }
                }
                else {
                    this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.");
                }
                loading.dismiss();
            });
        });
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_3__.PayPal },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__.Stripe }
];
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-checkout',
        template: _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckoutPage);



/***/ }),

/***/ 989:
/*!********************************************************!*\
  !*** ./src/app/checkout/checkout.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8964:
/*!********************************************************!*\
  !*** ./src/app/checkout/checkout.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n    &nbsp;<ion-icon slot=\"start\" name=\"arrow-back\" routerLink=\"/cart\" routerDirection=\"back\"></ion-icon> \n  </ion-buttons>\n    <ion-title>  \n      Pagar\n    </ion-title>\n      \n    <ion-buttons slot=\"end\" *ngIf=\"data\">{{ total_amount | currency }} &nbsp;</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n\n<ion-card>\n\n<ion-card-header>\n  <ion-card-title>Seleccionar tipo de orden</ion-card-title>\n</ion-card-header>\n\n<ion-card-content>\n  <ion-list>\n    <ion-radio-group value=\"{{otype}}\" (ionChange)=\"setType($event)\">\n      <ion-item *ngIf=\"delivery_type == 0\">\n          <ion-label>Este comercio no tiene servicio a domicilio</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"delivery_type == 1\">\n        <ion-label>Entrega a domicilio</ion-label>\n        <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n      </ion-item>\n        \n      <ion-item *ngIf=\"pickup == 1\">\n        <ion-label>Recoger en tienda (No se cobrará envío)</ion-label>\n        <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-header>\n    <ion-card-title>\n      Metodo de pago\n    </ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-radio-group value=\"{{payment}}\" (ionChange)=\"setPayment($event)\">\n      <ion-item style=\"font-size: 13px\">\n        <ion-label><img src=\"assets/cash.png\" style=\"width:30px\"> Pagar en efectivo</ion-label>\n        <ion-radio slot=\"start\" value=\"1\" (ionSelect)=\"setPayment(1)\" ></ion-radio>\n      </ion-item>\n\n\n      <ion-item style=\"font-size: 13px\" *ngIf=\"paypal_id\">\n      <ion-label><img src=\"assets/paypal.png\" style=\"width: 90px\"> <span style=\"margin-top: -40px\">Pay Via Paypal</span></ion-label>\n      <ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setPayment(2)\" ></ion-radio>\n      </ion-item>\n\n\n      <ion-item style=\"font-size: 13px\" *ngIf=\"stripe_id\">\n        <ion-label><img src=\"assets/stripe.png\" style=\"width: 150px\"> <span style=\"margin-top: -40px\">Pay Via Stripe</span></ion-label>\n        <ion-radio slot=\"start\" value=\"2\" (ionSelect)=\"setPayment(3)\" ></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <div *ngIf=\"stripeView\">\n\n      <p>Proporcione los siguientes detalles</p>\n      \n      <ion-row>\n      \n      <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\">Card Number</ion-label>\n        <ion-input type=\"tel\" [(ngModel)]=\"card_no\" name=\"card_no\"></ion-input>\n      </ion-item>\n      </ion-col>\n      \n      <ion-col size=\"6\">\n      <ion-item>\n        <ion-label position=\"floating\">Exp Month</ion-label>\n        <ion-input type=\"tel\" [(ngModel)]=\"exp_month\" name=\"exp_month\"></ion-input>\n      </ion-item>\n      </ion-col>\n      \n      <ion-col size=\"6\">\n      <ion-item>\n        <ion-label position=\"floating\">Exp Year</ion-label>\n        <ion-input type=\"tel\" [(ngModel)]=\"exp_year\" name=\"exp_year\"></ion-input>\n      </ion-item>\n      </ion-col>\n      \n      <ion-col size=\"12\">\n      <ion-item>\n        <ion-label position=\"floating\">CVV</ion-label>\n        <ion-input type=\"tel\" [(ngModel)]=\"cvv\" name=\"cvv\"></ion-input>\n      </ion-item>\n      </ion-col>\n      \n      </ion-row>\n      \n    </div>\n  </ion-card-content>\n\n</ion-card>\n\n\n<div class=\"ion-padding\">\n  <ion-item>\n    <ion-textarea placeholder=\"Agrega Cualquier instrucción para la comida ... por ejemplo, extra picante\" [(ngModel)]=\"notes\" name=\"notes\"></ion-textarea>\n  </ion-item>\n  <br>\n  <ion-button expand=\"block\" mode=\"ios\" type=\"button\" [disabled]=\"!formVal()\" (click)=\"makeOrder()\">Confirmar orden</ion-button>\n</div>\n\n<br>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map