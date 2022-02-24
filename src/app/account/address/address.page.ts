import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { ToastController,NavController,LoadingController  } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { mapStyle } from '../../service/mapStyle.js';

declare var google:any;


@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})

export class AddressPage implements OnInit {

@ViewChild('map',{static:false}) mapElement: ElementRef;
  
  map: any;
  lat: any;
  lng: any;
  location:any;
  address:string;
  type_add:any;
  text:any;
  marker: any;
  constructor(

    public route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public nav: NavController,
    public loadingController: LoadingController,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder
    ){
    this.text = JSON.parse(localStorage.getItem('app_text'));
    this.route.queryParams.subscribe( params => {
      this.location = JSON.parse(params.location);
      this.lat      = this.location.lat;
      this.lng      = this.location.lng;
      this.address = params.address;
    }); 
  }

  ngOnInit()
  {
    setTimeout(() => {
      this.loadMap();
    }, 800);
   
  }

 
  async loadMap() {
    const loading = await this.loadingController.create({});
    await loading.present();

    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyle
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      map: this.map,
      draggable:true,
      position:latLng
    });
    this.marker.setVisible(true);

    this.getAddressFromCoords(this.lat,this.lng);
 
    google.maps.event.addListener(this.marker, 'dragend', (evt) => {
      this.getAddressFromCoords(evt.latLng.lat(),evt.latLng.lng());
    });
    loading.dismiss();
  }
 
  async getAddressFromCoords(lattitude, longitude) {
    var geocoder = new google.maps.Geocoder;
    let $this = this;
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
        let add = document.getElementById('addressPWA');
        var latlng = {lat: parseFloat(lattitude), lng: parseFloat(longitude)};
        let responseAddress = [];
        geocoder.geocode({'location': latlng}, function(result, status) {
          if (status === 'OK') {
          
            $this.address = "";

            for (let [key, value] of Object.entries(result[0])) {
              responseAddress.push(value); 
            }
            
            responseAddress.reverse();
            
            for (let value of responseAddress) {
              $this.address += value+", ";
            }
            
            $this.address = responseAddress[4];
          } else {
            console.log('Geocoder failed due to: ' + status);
          }
        });
      });
 
  }

  async saveAddress(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
    });
    await loading.present();
 
    if (localStorage.getItem('user_id')) {
      var allData = {
        address : this.address,
        type    : this.type_add,
        lat     : this.map.center.lat(),
        lng     : this.map.center.lng(),
        user_id : localStorage.getItem('user_id')
      }

      this.server.saveAddress(allData).subscribe((response:any) => {
        if (response.msg == 'done') {
          localStorage.setItem("address",this.address);
          localStorage.setItem('address_id',response.id);
          localStorage.setItem("current_lat",this.map.center.lat());
          localStorage.setItem('current_lng',this.map.center.lng());
          
          this.nav.navigateForward('home');
          this.presentToast("Dirección guardada con éxito.",'success');  
        }else {
          this.presentToast(JSON.stringify(response.data),'danger');  
        }
        
        loading.dismiss();
        
      });
    }else {
      localStorage.setItem("address",this.address);
      localStorage.setItem('address_id',"0");
      localStorage.setItem("current_lat",this.map.center.lat());
      localStorage.setItem('current_lng',this.map.center.lng());
        
      this.nav.navigateForward('home');
      this.presentToast("Dirección guardada con éxito.",'success');
      loading.dismiss();
    }
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:color
    });
    toast.present();
  }
}
