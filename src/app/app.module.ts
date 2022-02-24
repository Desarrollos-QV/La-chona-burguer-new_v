import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

// Material Design
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'; 
import { MatRadioModule } from '@angular/material/radio'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OptionPageModule } from './option/option.module';
import { OfferPageModule } from './offer/offer.module';
import { PayPal } from '@ionic-native/paypal/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx'; 

import { Keyboard } from '@ionic-native/keyboard/ngx';

// Facebook
import { Facebook } from '@ionic-native/facebook/ngx';

// AppleSigning
import { SignInWithApple } from '@ionic-native/sign-in-with-apple/ngx';

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app'; 

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(), // {_forceStatusbarPadding: true}
    AppRoutingModule,
    HttpClientModule,
    OptionPageModule,
    OfferPageModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRadioModule, 
  ],
  
  providers: [
    Geolocation,
    NativeGeocoder, 
    PayPal,
    StatusBar,
    SplashScreen,
    OneSignal,
    Keyboard,
    Stripe,
    Facebook, 
    SignInWithApple,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
