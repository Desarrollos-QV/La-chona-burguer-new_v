import { Component, Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform,NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EventsService } from './service/events.service';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ServerService } from './service/server.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  appType:number = 0;
  dir:any = "ltr";
  text:any;
  apiKey: any;
  public appPages:any = [];

  
  admin:any;
  data:any;
  constructor(
    public server : ServerService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav : NavController,
    private oneSignal: OneSignal,
    public events: EventsService,
    public renderer: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {

    
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
  
    this.events.subscribe('lang_change', (type) => {
      this.assginAppType(type);
    });

    this.events.subscribe('admin', (type) => {  
      this.admin = type;
    });


    if(localStorage.getItem('admin'))
    {
      this.admin = JSON.parse(localStorage.getItem('admin'));
    }

    if(localStorage.getItem('app_text'))
    {
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
    else
    {
      var home:any      = "Home";
      var city:any      = "Change City";
      var lang:any      = "Language";
      var profile:any   = "My Account";
      var order:any     = "My Orders";

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
    
    if(localStorage.getItem('app_type'))
    {
      if(localStorage.getItem('app_type') == "1")
      {
        this.dir = "rtl";
      }
      else
      {
         this.dir = "ltr";
      }
      
    }




    this.initializeApp();

    this.events.subscribe('user_login', (id) => {

    this.subPush(id);

    });

  }

  assginAppType(ty)
  {
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

  subPush(id = 0)
  {
    this.oneSignal.startInit('09bb0c59-01ba-4a3d-84b8-ca4d798e39bf', '715568136238');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
  });
    
  if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
  {
      this.oneSignal.sendTags({user_id: localStorage.getItem('user_id')});
  }

  if(id > 0)
  {
      this.oneSignal.sendTags({user_id: id});
  }

  this.oneSignal.endInit();
  }

  
  logout()
  {
    localStorage.setItem('user_id',null);

    this.nav.navigateForward('/login');
  }
    
  async loadData(city_id)
  {
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      
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
  }

  private injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

        window['mapInit'] = () => {
            resolve(true);
        }

        let script = this.renderer.createElement('script');
        script.id = 'googleMaps';

        if(this.apiKey){
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places&key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places';       
        }

        this.renderer.appendChild(this._document.body, script);

    });
  }
}
