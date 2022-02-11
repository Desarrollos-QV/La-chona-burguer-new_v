(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);



const routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./list/list.module */ 2130)).then(m => m.ListPageModule)
    },
    { path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 3893)).then(m => m.WelcomePageModule)
    },
    { path: 'city',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_city_city_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/city/city.module */ 8285)).then(m => m.CityPageModule)
    },
    { path: 'item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_item_item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item/item.module */ 4672)).then(m => m.ItemPageModule)
    },
    { path: 'option',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./option/option.module */ 3644)).then(m => m.OptionPageModule)
    },
    { path: 'info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_info_info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./info/info.module */ 3056)).then(m => m.InfoPageModule)
    },
    { path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 2943)).then(m => m.CartPageModule)
    },
    { path: 'offer',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./offer/offer.module */ 1357)).then(m => m.OfferPageModule)
    },
    { path: 'checkout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 8400)).then(m => m.CheckoutPageModule)
    },
    { path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/login/login.module */ 5711)).then(m => m.LoginPageModule)
    },
    { path: 'chkphone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_chkphone_chkphone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/chkphone/chkphone.module */ 8187)).then(m => m.ChkphonePageModule)
    },
    { path: 'verfycode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_verfycode_verfycode_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/verfycode/verfycode.module */ 1862)).then(m => m.VerfycodePageModule)
    },
    { path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/signup/signup.module */ 8884)).then(m => m.SignupPageModule)
    },
    { path: 'forgot',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_forgot_forgot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/forgot/forgot.module */ 950)).then(m => m.ForgotPageModule)
    },
    { path: 'address',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_account_address_address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/address/address.module */ 5107)).then(m => m.AddressPageModule)
    },
    { path: 'done',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_done_done_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./done/done.module */ 4410)).then(m => m.DonePageModule)
    },
    { path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/profile/profile.module */ 1295)).then(m => m.ProfilePageModule)
    },
    { path: 'order',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_order_order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/order/order.module */ 5242)).then(m => m.OrderPageModule)
    },
    { path: 'rate/:id/:type',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_rate_rate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/rate/rate.module */ 2479)).then(m => m.RatePageModule)
    },
    { path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/about/about.module */ 3111)).then(m => m.AboutPageModule)
    },
    { path: 'how',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_how_how_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/how/how.module */ 7460)).then(m => m.HowPageModule)
    },
    { path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/faq/faq.module */ 5546)).then(m => m.FaqPageModule)
    },
    { path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/contact/contact.module */ 9138)).then(m => m.ContactPageModule)
    },
    { path: 'lang',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lang_lang_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lang/lang.module */ 7026)).then(m => m.LangPageModule)
    },
    { path: 'categorys',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_categorys_categorys_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./categorys/categorys.module */ 1009)).then(m => m.CategorysPageModule)
    },
    { path: 'locked',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_locked_locked_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./locked/locked.module */ 4010)).then(m => m.LockedPageModule)
    },
    {
        path: 'setaddress',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_address_setaddress_setaddress_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/address/setaddress/setaddress.module */ 6029)).then(m => m.SetaddressPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 2009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 8586);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 6120);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/events.service */ 4665);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 8578);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/server.service */ 6419);











let AppComponent = class AppComponent {
    constructor(server, platform, splashScreen, statusBar, nav, oneSignal, events, renderer, _document) {
        this.server = server;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.events = events;
        this.renderer = renderer;
        this._document = _document;
        this.appType = 0;
        this.dir = "ltr";
        this.appPages = [];
        this.loadData(localStorage.getItem('city_id') + "?ss=ss");
        this.events.subscribe('lang_change', (type) => {
            this.assginAppType(type);
        });
        this.events.subscribe('admin', (type) => {
            this.admin = type;
        });
        if (localStorage.getItem('admin')) {
            this.admin = JSON.parse(localStorage.getItem('admin'));
        }
        if (localStorage.getItem('app_text')) {
            this.text = JSON.parse(localStorage.getItem('app_text'));
            this.appPages = [
                {
                    title: this.text.home,
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: this.text.city,
                    url: '/city',
                    icon: 'pin'
                },
                {
                    title: this.text.account,
                    url: '/profile',
                    icon: 'person'
                },
                {
                    title: this.text.order,
                    url: '/order',
                    icon: 'cart'
                },
            ];
        }
        else {
            var home = "Home";
            var city = "Change City";
            var lang = "Language";
            var profile = "My Account";
            var order = "My Orders";
            this.appPages = [
                {
                    title: home,
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: city,
                    url: '/city',
                    icon: 'pin'
                },
                {
                    title: profile,
                    url: '/profile',
                    icon: 'person'
                },
                {
                    title: order,
                    url: '/order',
                    icon: 'cart'
                },
            ];
        }
        this.events.subscribe('text', (text) => {
            this.text = text;
            this.appPages = [
                {
                    title: text.home,
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: text.city,
                    url: '/city',
                    icon: 'pin'
                },
                // {
                //   title: text.language,
                //   url: '/lang',
                //   icon: 'flag'
                // },
                {
                    title: text.account,
                    url: '/profile',
                    icon: 'person'
                },
                {
                    title: text.order,
                    url: '/order',
                    icon: 'cart'
                },
            ];
        });
        if (localStorage.getItem('app_type')) {
            if (localStorage.getItem('app_type') == "1") {
                this.dir = "rtl";
            }
            else {
                this.dir = "ltr";
            }
        }
        this.initializeApp();
        this.events.subscribe('user_login', (id) => {
            this.subPush(id);
        });
    }
    assginAppType(ty) {
        this.dir = ty == 0 ? "ltr" : "rtl";
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString("#ffffff");
            this.statusBar.styleDefault();
            this.subPush();
        });
    }
    subPush(id = 0) {
        this.oneSignal.startInit('09bb0c59-01ba-4a3d-84b8-ca4d798e39bf', '715568136238');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
        });
        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
            this.oneSignal.sendTags({ user_id: localStorage.getItem('user_id') });
        }
        if (id > 0) {
            this.oneSignal.sendTags({ user_id: id });
        }
        this.oneSignal.endInit();
    }
    logout() {
        localStorage.setItem('user_id', null);
        this.nav.navigateForward('/login');
    }
    loadData(city_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.homepage(city_id + "&lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                this.data = response.data;
                this.text = response.data.text;
                this.events.publish('text', this.text);
                this.events.publish('admin', response.data.admin);
                this.apiKey = response.data.admin.ApiKey_google;
                this.injectSDK().then((res) => {
                    // Obtenemos la Geolocalicacion
                    if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
                        this.server.getGeolocation();
                    }
                });
                localStorage.setItem('app_text', JSON.stringify(response.data.text));
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
            });
        });
    }
    injectSDK() {
        return new Promise((resolve, reject) => {
            window['mapInit'] = () => {
                resolve(true);
            };
            let script = this.renderer.createElement('script');
            script.id = 'googleMaps';
            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places&key=' + this.apiKey;
            }
            else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places';
            }
            this.renderer.appendChild(this._document.body, script);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_6__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__.OneSignal },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,] }] }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 6027);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ 5460);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 495);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 739);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 8586);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 6120);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 4273);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 318);
/* harmony import */ var _option_option_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./option/option.module */ 3644);
/* harmony import */ var _offer_offer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offer/offer.module */ 1357);
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ 5571);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 8578);
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ 5682);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 978);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 3465);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/app */ 9533);





// Material Design


















// Facebook



firebase_app__WEBPACK_IMPORTED_MODULE_14__.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__.environment.firebase);
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _option_option_module__WEBPACK_IMPORTED_MODULE_6__.OptionPageModule,
            _offer_offer_module__WEBPACK_IMPORTED_MODULE_7__.OfferPageModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder,
            _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__.PayPal,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__.OneSignal,
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__.Keyboard,
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_10__.Stripe,
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__.Facebook,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 1357:
/*!***************************************!*\
  !*** ./src/app/offer/offer.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferPageModule": () => (/* binding */ OfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer.page */ 370);







const routes = [
    {
        path: '',
        component: _offer_page__WEBPACK_IMPORTED_MODULE_0__.OfferPage
    }
];
let OfferPageModule = class OfferPageModule {
};
OfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_0__.OfferPage]
    })
], OfferPageModule);



/***/ }),

/***/ 370:
/*!*************************************!*\
  !*** ./src/app/offer/offer.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferPage": () => (/* binding */ OfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _offer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer.page.html?ngResource */ 9164);
/* harmony import */ var _offer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer.page.scss?ngResource */ 7111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);







let OfferPage = class OfferPage {
    constructor(loadingController, server, route, nav, toastController, modalController) {
        this.loadingController = loadingController;
        this.server = server;
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.modalController = modalController;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.getOffer(localStorage.getItem('cart_no')).subscribe((response) => {
                this.data = response.data;
                loading.dismiss();
            });
        });
    }
    applyNow(cdata) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss({ id: cdata });
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss({ id: false });
        });
    }
};
OfferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
OfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-offer',
        template: _offer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_offer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OfferPage);



/***/ }),

/***/ 3644:
/*!*****************************************!*\
  !*** ./src/app/option/option.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPageModule": () => (/* binding */ OptionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ 6027);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 5460);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 495);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 739);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _option_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option.page */ 1355);











const routes = [
    {
        path: '',
        component: _option_page__WEBPACK_IMPORTED_MODULE_0__.OptionPage
    }
];
let OptionPageModule = class OptionPageModule {
};
OptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)
        ],
        declarations: [_option_page__WEBPACK_IMPORTED_MODULE_0__.OptionPage]
    })
], OptionPageModule);



/***/ }),

/***/ 1355:
/*!***************************************!*\
  !*** ./src/app/option/option.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPage": () => (/* binding */ OptionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _option_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option.page.html?ngResource */ 4903);
/* harmony import */ var _option_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option.page.scss?ngResource */ 9248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ 6419);








let OptionPage = class OptionPage {
    constructor(modalController, server, toastController, route, nav, loadingController) {
        this.modalController = modalController;
        this.server = server;
        this.toastController = toastController;
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.addonData = [];
        this.addonPrice = 0;
        this.cart = [];
        this.showToolbar = false;
        this.radio_items = [];
        this.checkActive = false;
        this.max_required = 0;
        this.required_complet = 0;
        this.max_radio = 1;
        this.count_radio = 0;
        this.route.queryParams.subscribe(params => {
            this.item = JSON.parse(params.item);
            this.currency = params.currency;
            this.cart = params.cart;
            this.text = JSON.parse(localStorage.getItem('app_text'));
            this.itemPrice = parseFloat(this.item.s_price);
            this.itPrice = parseFloat(this.item.s_price);
            this.itemID = 1;
            this.qty = 1;
            this.cart_no = localStorage.getItem('cart_no');
            this.data = JSON.parse(params.item);
            // Order Sort_no
            this.item.addon.sort((a, b) => {
                return parseFloat(a.cate_sort_no) - parseFloat(b.cate_sort_no);
            });
            for (let r = 0; r < this.item.addon.length; r++) {
                const element = this.item.addon[r];
                if (element.required == 1) {
                    if (element.max_options > 0) {
                        this.max_required = this.max_required + element.max_options;
                    }
                    else {
                        this.max_required = this.max_required + 1;
                    }
                }
                if (element.single_opcion == 0) {
                    this.radio_items = element.items;
                }
            }
        });
    }
    ngOnInit() {
    }
    ViewCart() {
        var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
        var lat = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
        var lng = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
        this.server.getCart(localStorage.getItem('cart_no') + "?lid=" + lid + "&lat=" + lat + "&lng=" + lng).subscribe((response) => {
            this.cart_total = Number(response.data.total);
        });
    }
    addToCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({});
            yield loading.present();
            var allData = {
                cart_no: this.cart_no,
                id: this.item.id,
                price: this.itPrice,
                qtype: this.itemID,
                type: 0,
                qty: this.qty,
                addon: this.addonData,
                price_comm: this.data.c_value
            };
            this.server.addToCart(allData).subscribe((response) => {
                loading.dismiss();
                this.count = response.data.count;
                this.cart = response.data.cart;
                this.presentToast("Elemento Agregado.");
                this.nav.back();
            });
        });
    }
    Qty(process) {
        if (process == 'sum') {
            this.qty += 1;
        }
        else {
            this.qty -= 1;
        }
        this.itemPrice = (Number(this.itPrice) * this.qty) + (Number(this.addonPrice) * this.qty);
    }
    updateCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss({ proces: 'updateTocart', id: this.item.id, price: this.itemPrice, type: this.itemID, addonData: this.addonData });
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss({ data: true });
        });
    }
    selectItem(type, price) {
        this.itemID = type;
        this.itPrice = price;
        if (this.addonPrice > 0) {
            this.itemPrice = (parseFloat(price) * this.qty) + parseFloat(this.addonPrice);
        }
        else {
            this.itemPrice = parseFloat(price) * this.qty;
        }
    }
    addonSelect(addon, max_options, formu, required, type, event) {
        if (type == 'check') {
            let form = document.getElementsByClassName('cate_' + formu);
            let count = 0;
            for (let i = 0; i < form.length; i++) {
                const element = form[i];
                if (element.checked) {
                    count = count + 1;
                }
            }
            if (count == max_options) {
                if (max_options > 0) {
                    for (let i = 0; i < form.length; i++) {
                        const element = form[i];
                        if (element.checked === false) {
                            element.setAttribute('disabled', 'true');
                        }
                    }
                }
            }
            else {
                for (let i = 0; i < form.length; i++) {
                    const element = form[i];
                    if (element.checked === false) {
                        element.setAttribute('disabled', 'false');
                    }
                }
            }
            if (this.addonData.includes(addon.id)) {
                if (required == true) {
                    if (this.required_complet > 0) {
                        this.required_complet = this.required_complet - 1;
                    }
                }
                var ind = this.addonData.indexOf(addon.id);
                this.itemPrice = Number(this.itemPrice) - Number(addon.price);
                this.addonPrice = Number(this.addonPrice) - Number(addon.price);
                this.addonData.splice(ind, 1);
            }
            else {
                if (required == true) {
                    this.required_complet = this.required_complet + 1;
                    console.log('requiredmax: ' + this.required_complet);
                }
                else {
                    console.log('requiremin: ' + this.required_complet);
                }
                this.addonData.push(addon.id);
                this.itemPrice = Number(this.itemPrice) + Number(addon.price);
                this.addonPrice = Number(this.addonPrice) + Number(addon.price);
            }
        }
        else {
            var ind;
            let includes = false;
            let priceRest = 0;
            if (this.qty > 1) {
                this.itemPrice = (parseFloat(this.item.s_price) * this.qty);
            }
            else {
                this.itemPrice = parseFloat(this.item.s_price);
            }
            for (let r = 0; r < this.item.addon.length; r++) {
                const element = this.item.addon[r];
                if (element.cate_id == formu) {
                    this.radio_items = element.items;
                }
            }
            if (this.radio_items.length > 0) {
                for (let rad = 0; rad < this.radio_items.length; rad++) {
                    const element = this.radio_items[rad];
                    if (this.addonData.includes(element.id)) {
                        includes = true;
                        ind = this.addonData.indexOf(element.id);
                        this.addonData.splice(ind, 1);
                        this.addonPrice = Number(this.addonPrice) - element.price;
                        if (required == true) {
                            this.required_complet = this.required_complet - 1;
                        }
                        break;
                    }
                }
            }
            if (required == true) {
                this.required_complet = this.required_complet + 1;
            }
            this.addonData.push(addon.id);
            let AllAddons = [];
            for (let f = 0; f < this.item.addon.length; f++) {
                const first = this.item.addon[f];
                // Elementos
                for (let s = 0; s < first.items.length; s++) {
                    const element = first.items[s];
                    AllAddons.push(element);
                }
            }
            for (let search = 0; search < AllAddons.length; search++) {
                const element = AllAddons[search];
                let indx = this.addonData.includes(element.id);
                if (indx) {
                    this.addonPrice = Number(this.addonPrice) + Number(element.price);
                    if (this.qty > 1) {
                        this.itemPrice = (Number(this.itPrice) * this.qty) + (Number(this.addonPrice) * this.qty);
                    }
                    else {
                        this.itemPrice = Number(this.itemPrice) + Number(element.price);
                    }
                }
            }
        }
    }
    formVal() {
        if (this.required_complet >= this.max_required) {
            return true;
        }
        return false;
    }
    hasCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].item_id == id) {
                return this.cart[i].qty;
            }
        }
        return 1;
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
};
OptionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_2__.ServerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
OptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-option',
        template: _option_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_option_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OptionPage);



/***/ }),

/***/ 4665:
/*!*******************************************!*\
  !*** ./src/app/service/events.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6671);



let EventsService = class EventsService {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
EventsService.ctorParameters = () => [];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ 6419:
/*!*******************************************!*\
  !*** ./src/app/service/server.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerService": () => (/* binding */ ServerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9258);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 318);





let ServerService = class ServerService {
    constructor(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        this.url = "https://lachonaburger.grupoorus.mx/api/";
        this.geoLatitude = null;
        this.geoLongitude = null;
    }
    get windowRef() {
        return window;
    }
    getGeolocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.geoLatitude = resp.coords.latitude;
            this.geoLongitude = resp.coords.longitude;
            //this.geoAccuracy = resp.coords.accuracy; 
            localStorage.setItem('current_lat', this.geoLatitude);
            localStorage.setItem('current_lng', this.geoLongitude);
        }).catch((error) => {
            //  Fail
            console.log(error);
        });
    }
    GeocodeFromCoords(lat, lng, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + apikey)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    welcome() {
        return this.http.get(this.url + 'welcome')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getDeliveryType($id) {
        return this.http.get(this.url + 'getTypeDelivery/' + $id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    city() {
        return this.http.get(this.url + 'city?lid=' + localStorage.getItem('lid'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    lang() {
        return this.http.get(this.url + 'lang')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    homepage2(city_id, lid) {
        return this.http.get(this.url + 'homepage/' + city_id + '/' + lid)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    homepage(city_id) {
        return this.http.get(this.url + 'homepage/' + city_id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getStore(id) {
        return this.http.get(this.url + 'getStore/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getMoreStores(city_id) {
        return this.http.get(this.url + 'GetInfiniteScroll/' + city_id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    search(query, type, city) {
        return this.http.get(this.url + 'search/' + query + '/' + type + '/' + city)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    SearchCat(data) {
        console.log(this.url + 'SearchCat/' + data);
        return this.http.get(this.url + 'SearchCat/' + data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    addToCart(data) {
        return this.http.post(this.url + 'addToCart', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    updateCart(id, type) {
        return this.http.get(this.url + 'updateCart/' + id + '/' + type)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    cartCount(cartNo) {
        return this.http.get(this.url + 'cartCount/' + cartNo)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getCart(cartNo) {
        console.log(this.url + 'getCart/' + cartNo);
        return this.http.get(this.url + 'getCart/' + cartNo)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getOffer(cartNo) {
        return this.http.get(this.url + 'getOffer/' + cartNo)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    applyCoupen(id, cartNo) {
        return this.http.get(this.url + 'applyCoupen/' + id + '/' + cartNo)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    signup(data) {
        return this.http.post(this.url + 'signup', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    signupWithfb(data) {
        return this.http.get(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    login(data) {
        return this.http.post(this.url + 'login', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    loginfb(data) {
        return this.http.post(this.url + 'loginfb', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    forgot(data) {
        return this.http.post(this.url + 'forgot', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    verify(data) {
        return this.http.post(this.url + 'verify', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    updatePassword(data) {
        return this.http.post(this.url + 'updatePassword', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getAddress(id) {
        return this.http.get(this.url + 'getAddress/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getAllAdress(id) {
        return this.http.get(this.url + 'getAllAdress/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    myOrder(id) {
        return this.http.get(this.url + 'myOrder/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    saveAddress(data) {
        return this.http.post(this.url + 'addAddress', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    trashAddress(data) {
        return this.http.get(this.url + 'removeAddress/' + data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    order(data) {
        return this.http.post(this.url + 'order', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    userInfo(id) {
        return this.http.get(this.url + 'userinfo/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    updateInfo(data, id) {
        return this.http.post(this.url + 'updateInfo/' + id, data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    cancelOrder(id, uid) {
        return this.http.get(this.url + 'cancelOrder/' + id + '/' + uid)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    loginFb(data) {
        return this.http.post(this.url + 'loginFb', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    SignPhone(data) {
        return this.http.post(this.url + 'SignPhone', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    sendChat(data) {
        return this.http.post(this.url + 'sendChat', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    push() {
        return this.http.get(this.url + 'push')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    rating(data) {
        return this.http.post(this.url + 'rate', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    updateCity(data) {
        return this.http.get(this.url + 'updateCity?' + data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    pages() {
        return this.http.get(this.url + 'pages?lid=' + localStorage.getItem('lid')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    makeStripePayment(token) {
        // makeStripePayment
        return this.http.get(this.url + 'makeStripePayment' + token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
    getStatus(id) {
        return this.http.get(this.url + 'getStatus/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results));
    }
};
ServerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation }
];
ServerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ServerService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        apiKey: "AIzaSyABTUPUjXiS2gJiDaZqtL_nE5QihEwbBLg",
        authDomain: "la-chona-burger.firebaseapp.com",
        projectId: "la-chona-burger",
        storageBucket: "la-chona-burger.appspot.com",
        messagingSenderId: "715568136238",
        appId: "1:715568136238:web:d68aafd1a304d7f0051fbf",
        measurementId: "G-5DZDRV89Q3"
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6149,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item {\n  font-size: 14px;\n}\n\nion-item ion-icon {\n  font-size: 16px;\n}\n\n.menu_img {\n  width: 70%;\n  margin-left: 10%;\n  padding: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUVDLGVBQUE7QUFBRDs7QUFHQTtFQUVDLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixrQkFBQTtBQUM3QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcblx0Zm9udC1zaXplOjE0cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uXG57XG5cdGZvbnQtc2l6ZToxNnB4O1xufVxuXG4ubWVudV9pbWdcbntcblx0d2lkdGg6IDcwJTttYXJnaW4tbGVmdDogMTAlO3BhZGRpbmc6IDEwcHggMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 7111:
/*!**************************************************!*\
  !*** ./src/app/offer/offer.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9248:
/*!****************************************************!*\
  !*** ./src/app/option/option.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toolbar {\n  --position:relative;\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --color:#fff;\n}\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: #fff;\n  color: #000;\n  padding-top: 8px;\n}\n\n.show-background .title_header {\n  display: block;\n}\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none;\n}\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n  padding-bottom: 50px;\n}\n\n.footer-line {\n  width: 100%;\n  height: 100px;\n}\n\n.addToCartBtn {\n  width: 100%;\n}\n\n.quantityinput {\n  padding: 13px 10px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fff;\n  width: 48px;\n}\n\n.quantitybtn .sign {\n  padding: 15px 10px;\n  width: 40px;\n  text-align: center;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.quantitybtn .plus {\n  background: #0a0a0a;\n  border: 1px solid #0a0a0a;\n  color: #fff;\n  border-radius: 10px 0px 0px 10px;\n}\n\n.quantitybtn .minus {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.arrow-back {\n  float: left;\n  left: 0;\n  font-size: 22px;\n  padding: 2px 4px;\n  border-radius: 10px;\n  background-color: #f44336;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNHLHlCQUFBO0VBQ0gsd0NBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUEsdUNBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNILGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxjQUFBO0FBQ0Y7O0FBR0EsK0JBQUE7O0FBQ0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBLGdDQUFBOztBQUNBO0VBQ0ksaUJBQUE7QUFBSjs7QUFJQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQUREOztBQUlBO0VBQ0MsV0FBQTtBQUREOztBQU1BO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSEQ7O0FBTUE7RUFDQyxrQkFBQTtFQUFtQixXQUFBO0VBQ25CLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUZEOztBQUtBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUZEOztBQUtBO0VBRUMsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUhEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUpEIiwiZmlsZSI6Im9wdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcblx0LS1wb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHQtLWNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cclxuLnNob3ctYmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuXHQudGl0bGVfaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gbWQgKi9cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDowO1xyXG5cdHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5hZGRUb0NhcnRCdG4ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5xdWFudGl0eWlucHV0e1xyXG5cdHBhZGRpbmc6MTNweCAxMHB4OyBcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjsgXHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjY2NjOyAgXHJcblx0YmFja2dyb3VuZDojZmZmOyBcclxuXHR3aWR0aDo0OHB4O1xyXG59XHJcblxyXG4ucXVhbnRpdHlidG4gLnNpZ257XHJcblx0cGFkZGluZzoxNXB4IDEwcHg7IHdpZHRoOjQwcHg7IFxyXG5cdHRleHQtYWxpZ246Y2VudGVyOyBcclxuXHRjdXJzb3I6cG9pbnRlcjsgXHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDsgXHJcblx0b3V0bGluZTpub25lOyBcclxufVxyXG5cclxuLnF1YW50aXR5YnRuIC5wbHVze1xyXG5cdGJhY2tncm91bmQ6IzBhMGEwYTsgXHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjMGEwYTBhOyBcclxuXHRjb2xvcjojZmZmOyBcclxuXHRib3JkZXItcmFkaXVzOjEwcHggMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4ucXVhbnRpdHlidG4gLm1pbnVze1xyXG5cdFxyXG5cdGJhY2tncm91bmQ6I2Y0NDMzNjsgXHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjZjQ0MzM2OyBcclxuXHRjb2xvcjojZmZmOyBcclxuXHRib3JkZXItcmFkaXVzOjBweCAxMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG5cclxuLmFycm93LWJhY2sge1xyXG5cdGZsb2F0OmxlZnQ7XHJcblx0bGVmdDogMDtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0cGFkZGluZzogMnB4IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app dir=\"{{ dir }}\">\n  <ion-split-pane contentId=\"main-content\" >\n    <ion-menu contentId=\"main-content\" swipe-gesture=\"true\" type=\"push\" side=\"start\" >\n      <ion-header no-border>\n        <ion-toolbar color=\"primary\">\n          <ion-title style=\"font-size:16px;\">Bienvenido(a) a La Chona Burguer</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list lines=\"none\">\n       \n        <ion-list-header>\n          {{ text.menu_title }}\n        </ion-list-header>\n\n           <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'forward'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-list-header>\n          {{ text.menu_page_title }}\n        </ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink=\"/about\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\" ></ion-icon>\n              <ion-label> {{ text.about_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink=\"/how\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\"></ion-icon>\n              <ion-label>{{ text.how_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink=\"/faq\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\"></ion-icon>\n              <ion-label>{{ text.faq_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item routerLink=\"/contact\" routerDirection=\"forward\">\n              <ion-icon slot=\"start\" name=\"arrow-round-forward\"></ion-icon>\n              <ion-label>{{ text.contact_title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"logout()\">\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label>{{ text.profile_logout }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n\n      </ion-content>\n      <ion-footer *ngIf=\"admin\">\n      <a href=\"{{ admin.fb }}\" target=\"_blank\" *ngIf=\"admin.fb\"><ion-icon name=\"logo-facebook\" style=\"font-size: 25px;padding: 10px 10px;color:#3F51B5\"></ion-icon></a>\n\n      <a href=\"{{ admin.insta }}\" target=\"_blank\" *ngIf=\"admin.insta\"><ion-icon name=\"logo-instagram\" style=\"font-size: 25px;padding: 10px 10px;color:#e91e63\"></ion-icon></a>\n\n      <a href=\"{{ admin.youtube }}\" target=\"_blank\" *ngIf=\"admin.youtube\"><ion-icon name=\"logo-youtube\" style=\"font-size: 25px;padding: 10px 10px;color:#f44336\"></ion-icon></a>\n\n      <a href=\"{{ admin.twitter }}\" target=\"_blank\" *ngIf=\"admin.twitter\"><ion-icon name=\"logo-twitter\" style=\"font-size: 25px;padding: 10px 10px;color:#03a9f4\"></ion-icon></a>\n      </ion-footer>\n    </ion-menu>\n\n    \n    <ion-router-outlet id=\"main-content\" main dir=\"{{ dir }}\"></ion-router-outlet>\n  </ion-split-pane>\n\n</ion-app>\n";

/***/ }),

/***/ 9164:
/*!**************************************************!*\
  !*** ./src/app/offer/offer.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n<ion-toolbar>\n<ion-title>{{ text.coupon_title }} <ion-button size=\"small\" fill=\"outline\" style=\"float:right\" (click)=\"closeModal()\"><ion-icon name=\"close\" style=\"font-size: 25px\"></ion-icon></ion-button></ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n\n<ion-list *ngIf=\"data.length > 0\">\n\n<ion-list-header>\n{{ text.coupon_heading }}\n</ion-list-header>\n\n  <ion-item *ngFor=\"let offer of data\">\n    <ion-label>{{ offer.code }}<br><small style=\"font-size: 11px;color: gray\">{{ offer.desc }}</small>\n\n    <ion-button size=\"small\" style=\"float: right;margin-top: -17px\" (click)=\"applyNow(offer.id)\">{{ text.coupon_button }}</ion-button>\n\n    </ion-label>\n  </ion-item>\n  </ion-list>\n\n<p *ngIf=\"data.length == 0\" style=\"text-align: center;padding: 10px 10px;font-size: 11px;color:gray;line-height: 2\">Opps! No Discount Coupen Avilable<br>Right Now For This Store</p>\n\n</ion-content>\n";

/***/ }),

/***/ 4903:
/*!****************************************************!*\
  !*** ./src/app/option/option.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar [class.show-background]=\"showToolbar\" translucent>\n        <ion-buttons slot=\"start\">\n            <ion-back-button class=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\">\n\n    <!-- Descripcion -->\n    <div  mode=\"ios\">\n        <img src=\"{{item.img}}\" alt=\"Portada\" style=\"width: 100%;\" *ngIf=\"item.img\">\n        <ion-card-header>\n        <ion-card-title style=\"font-size: 18px; font-family: 'SF Pro Display';font-weight: 400;\">\n            {{item.name}}\n        </ion-card-title>\n        <ion-card-subtitle style=\"color: rgb(53, 53, 53);\">\n            {{item.description}}\n        </ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-item>\n            <ion-label><span style=\"font-size: 16px;font-family: 'SF Pro Display';font-weight: 500;color:green;\">Total: {{cart_total | currency}}</span></ion-label>\n        </ion-item>\n    </div>\n    <!-- Descripcion -->\n\n    <!-- Precios -->\n    <ion-list>\n        <ion-list-header *ngIf=\"item.s_price > 0\">\n            {{ text.item_size_heading }}\n        </ion-list-header>\n        <ion-radio-group>\n            <ion-item *ngIf=\"item.s_price > 0\">\n                <ion-label>{{ text.item_small }} <span style=\"float: right\">{{ currency }}{{ item.s_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"s\" (ionSelect)=\"selectItem(1,item.s_price)\" checked=\"true\"></ion-radio>\n            </ion-item>\n\n            <ion-item *ngIf=\"item.m_price > 0\">\n                <ion-label>{{ text.item_m }} <span style=\"float: right\">{{ currency }}{{ item.m_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"m\" (ionSelect)=\"selectItem(2,item.m_price)\"></ion-radio>\n            </ion-item>\n\n            <ion-item *ngIf=\"item.l_price > 0\">\n                <ion-label>{{ text.item_large }} <span style=\"float: right\">{{ currency }}{{ item.l_price }}</span></ion-label>\n                <ion-radio slot=\"start\" color=\"primary\" value=\"l\" (ionSelect)=\"selectItem(3,item.l_price)\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n    <!-- Precios -->\n\n    <!-- Complementos -->\n    <ion-list *ngIf=\"item.addon.length > 0\">\n        <!-- hideToggle -->\n        <mat-expansion-panel  [expanded]=\"true\"  *ngFor=\"let category of item.addon\" class=\"{{ category.cate_name }}\">\n            <mat-expansion-panel-header style=\"background-color: #f1f1f1;\">\n              <mat-panel-title style=\"display: block;\">\n                    <span style=\"font-weight: 500;\">{{ category.cate_name }}</span><br />\n                    <small *ngIf=\"category.max_options > 0\">(Elige hasta {{category.max_options}})</small>\n                    &nbsp;<small *ngIf=\"category.required > 0\">(Obligatorio)</small>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <div *ngFor=\"let addon of  category.items\">          \n                    <ion-item *ngIf=\"category.single_opcion == 0\" class=\"content-input\" style=\"position: relative;\">\n                        <mat-radio-group\n                            color=\"primary\"\n                            aria-labelledby=\"example-radio-group-label\"\n                            class=\"cate_{{category.cate_id}}\"\n                            [(ngModel)]=\"category.cate_id\">\n                            <mat-radio-button class=\"example-radio-button\" value=\"addon.id\" [value]=\"addon.id\" (click)=\"addonSelect(addon,category.max_options,category.cate_id,category.required,'radio',$event)\">\n                                {{addon.name}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                        <ion-label slot=\"end\" *ngIf=\"addon.price > 0\" style=\"position: absolute;right: 10px;\">{{addon.price | currency}}</ion-label>\n                    </ion-item>\n                <ion-item *ngIf=\"category.single_opcion == 1\" style=\"position: relative;\">\n                    <ion-label>{{ addon.name }} <span style=\"position: absolute;right: 10px;\" *ngIf=\"addon.price > 0\">{{ currency }}{{ addon.price }}</span></ion-label>\n                    <ion-checkbox color=\"primary\" slot=\"start\" class=\"cate_{{category.cate_id}}\" (ionChange)=\"addonSelect(addon,category.max_options,category.cate_id,category.required,'check',$event)\"></ion-checkbox>\n                </ion-item>\n            </div>\n        </mat-expansion-panel>\n    </ion-list>\n    <!-- Complementos -->\n\n    <!-- Cantidad -->\n    <div class=\"quantitybtn\" style=\"text-align: center;padding: 12px 0;\">\n        <div class=\"quantitybtn\" *ngIf=\"hasCart(item.id)\" style=\"text-align: center;padding: 12px 0;\">\n            <button type=\"button\" class=\"sign plus\" data-quantity=\"plus\" data-field=\"quantity\" *ngIf=\"qty >= 2\" (click)=\"Qty('rest')\"> - </button>\n            <input class=\"quantityinput\" type=\"text\" name=\"qty\" value=\"{{ qty }}\" readonly=\"readonly\">\n            <button type=\"button\" class=\"sign minus\" data-quantity=\"minus\" data-field=\"quantity\" (click)=\"Qty('sum')\">+</button>\n        </div>\n    </div>\n    <div class=\"footer-line\"></div>\n</ion-content>\n \n<ion-footer padding style=\"border:1px solid #e6e6e6;background-color: #ffffff;\">\n    <ion-button class=\"addToCartBtn\" color=\"success\" (click)=\"addToCart()\" [disabled]=\"!formVal()\">\n        {{ text.item_addon_button }} x{{ qty }} al carrito: {{itemPrice | currency}}\n    </ion-button>\n</ion-footer>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map