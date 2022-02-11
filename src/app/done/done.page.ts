import { Component, OnInit,ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../service/server.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';
import { mapStyle } from '../service/mapStyle.js';
declare var google;

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

@ViewChild('map',{static:false}) mapElement: ElementRef;
@ViewChild('directionsPanel',{static:false}) directionsPanel: ElementRef;

 data:any;
 text:any;
 currency:any;
 status:number = 0; 
 type: any;
 map: any;
 progress:number = 0.016;
 address:any;
 Interval_1:any;
 Intervarl_2:any;
 chargeMap: boolean = false;
 marker: any;
 km_h = 50;
  constructor(
    public toastController: ToastController,
    private nav: NavController,
    public server : ServerService,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public renderer: Renderer2,
    @Inject(DOCUMENT) private _document
    ) { }

  ngOnInit() 
  {

   
   this.data   = JSON.parse(localStorage.getItem('order_data'));
   this.text   = JSON.parse(localStorage.getItem('app_text'));
   this.currency = this.data.currency;
   this.data   = this.data.data;
   

   this.getStatus();
  this.Interval_1 = setInterval(() => {      
  
    this.progress = 0.016;
    this.getStatus();
  
  },4000);

  this.Intervarl_2 = setInterval(() => {      
  
    this.progress = (this.progress*1) + 0.016;

  },6000);

  }

  getStatus()
  {
    this.server.getStatus(this.data.id).subscribe((response:any) => {
    this.status = response.data.status;
    this.type   = response.data.type;

    if(this.status == 4)
    {
      localStorage.setItem("lat_dboy",response.dboy.lat);
      localStorage.setItem('lng_dboy',response.dboy.lng);
      if (this.chargeMap == false) {
        this.chargeMap = true;
        this.loadMap();
      }else {
        this.ViewdBoy();
      }
    }

    if(this.status == 2)
    {
      this.presentToast("¡Lo siento! Su pedido ha sido cancelado.");
      this.nav.navigateRoot('order');  
      clearInterval(this.Interval_1);
      clearInterval(this.Intervarl_2);
    }

    if(this.status == 5)
    {
      this.presentToast("Pedido entregado con éxito");
      localStorage.removeItem('menu_item');
      localStorage.removeItem('order_data');
      clearInterval(this.Interval_1);
      clearInterval(this.Intervarl_2);
      if (this.type == 1) {
        this.nav.navigateRoot('rate/'+this.data.id+'/staff');  
      }else {
        this.nav.navigateRoot('rate/'+this.data.id+'/store');
      }
      
    }

    });
  }

  getColor(id)
  {
    if(id == 1)
    {
      if(this.status < 1)
      {
        return "medium";
      }
    }
    if(id == 1.5)
    {
      if(this.status < 1.5)
      {
        return "medium";
      }
    }
    else if(id == 3)
    {
      if(this.status < 3)
      {
        return "medium";
      }
    }
    else if(id == 4)
    {
      if(this.status < 4)
      {
        return "medium";
      }
    }
    else if(id == 7)
    {
      if(this.type < 7)
      {
        return "medium";
      }
    }

    return "primary";
  }

  async loadMap() {
    console.log(this.status);
    let lat = localStorage.getItem('lat_dboy');
    let lng = localStorage.getItem('lng_dboy');
    this.getAddressFromCoords(lat,lng);
    
    const icon = {
      url: 'assets/d.png', // image url
      scaledSize: new google.maps.Size(50, 50), // scaled size
    };
    
    let latLng = new google.maps.LatLng(lat, lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyle
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: icon,
        title: this.address
      });
    });
  
  }

  async ViewdBoy() {
    let lat = localStorage.getItem('lat_dboy');
    let lng = localStorage.getItem('lng_dboy');
    this.getAddressFromCoords(lat,lng);
    let latLng = new google.maps.LatLng(lat, lng);
    this.map.setCenter(latLng);
    this.marker.setPosition(latLng);

  }

  async getAddressFromCoords(lattitude, longitude) {
    let $this = this;
    var geocoder = new google.maps.Geocoder;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";

        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
  
          if(value.length > 0)
          responseAddress.push(value);
 
        }

        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        var latlng = {lat: parseFloat(lattitude), lng: parseFloat(longitude)};
        let responseAddress = [];
        geocoder.geocode({'location': latlng}, function(result, status) {
          if (status === 'OK') {
            
            for (let [key, value] of Object.entries(result[0])) {
              responseAddress.push(value); 
            }
            responseAddress.reverse();
            $this.address = responseAddress[4];
          } else {
           console.log(status);
          }
        });
      });
 
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }
}
