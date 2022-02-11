import { Component, OnInit, NgZone } from '@angular/core';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { ServerService } from '../../../service/server.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NavigationExtras } from '@angular/router';
declare var google;
 


@Component({
  selector: 'app-setaddress',
  templateUrl: './setaddress.page.html',
  styleUrls: ['./setaddress.page.scss'],
})
export class SetaddressPage implements OnInit {
  
  data:any;
  searchQuery: any;
  hasSearch:any;
  address:any;
  LocationNow:any;
  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  lat:any = localStorage.getItem('current_lat') ? localStorage.getItem('current_lat') : 0;
  lng:any = localStorage.getItem('current_lng') ? localStorage.getItem('current_lng') : 0;
  
  constructor(
    public server: ServerService,
    public toastController: ToastController,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    public nav: NavController,
    public loadingController: LoadingController,
    public platform: Platform
  ) { 
    
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {   
     
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
      
      this.platform.ready().then( () => {
        if (google) {
          this.loadData();     
        }
      });
  }

  loadData()
  {
    this.server.getAllAdress(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.address = response.data;
    });

    this.getAddressFromCoords(this.lat, this.lng);
    // // Obtenemos la ubicación actual
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.lat = resp.coords.latitude;
    //   this.lng = resp.coords.longitude;
      
    // }).catch((error) => {
    //   console.log('Error al obtener la ubicación', error);
    // });
  }

  getAddressFromCoords(lattitude, longitude) {
    var geocoder = new google.maps.Geocoder;
    let $this = this;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 2
    };
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      this.LocationNow = "";

      let responseAddress = [];
      for (let [key, value] of Object.entries(result[0])) {

        if(value.length > 0)
        responseAddress.push(value);

      }

      responseAddress.reverse();
      for (let value of responseAddress) {
        this.LocationNow += value+", ";
      }
      this.LocationNow = this.LocationNow.slice(0, -2);
    })
    .catch((error: any) =>{ 
      console.log("error =>",error);
      var latlng = {lat: parseFloat(lattitude), lng: parseFloat(longitude)};
      let responseAddress = [];
      geocoder.geocode({'location': latlng}, function(result, status) {
        if (status === 'OK') {
        
          $this.LocationNow = "";

          for (let [key, value] of Object.entries(result[0])) {
            responseAddress.push(value); 
          }
          
          responseAddress.reverse();
          
          for (let value of responseAddress) {
            $this.LocationNow += value+", ";
          }
          
          $this.LocationNow = responseAddress[4];
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
    });
  }

  search(ev)
  {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();

    var val = ev.target.value;
    if(val && val.length > 0)
    {
      this.data      = null;
      this.hasSearch = val;
      if (this.autocomplete.input == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
    }
    else
    {
      this.ngOnInit();
      this.hasSearch = false;
    }
  }
  
  clearSearch() {
    this.searchQuery = null;
    this.hasSearch   = false;
    this.autocompleteItems = [];
  }

  SelectSearchResult(item)
  {
    var geocoder = new google.maps.Geocoder;
    let $this = this;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 2
    };

    geocoder.geocode({'placeId': item.place_id}, function(results, status) {
      if (status !== 'OK') {
        window.alert('Geocoder failed due to: ' + status);
        return;
      }
      let navigationExtras: NavigationExtras = {
        queryParams: {
          location: JSON.stringify(results[0].geometry.location),
          address: item.description
        }
      };
  
      $this.nav.navigateForward(['/address'], navigationExtras);
      
    });
  }
  
  removeAddress(id) {
    this.server.trashAddress(id).subscribe(data => {
        if (data) {
          this.presentToast("La dirección se ha eliminado...",'success');
          this.ionViewWillEnter();
        }else {
          this.presentToast(data,'danger');
        }
    });
  }

  async saveAddress(item)
  {
    const loading = await this.loadingController.create({
      message: 'Guardando Dirección...',
    });
    await loading.present();

    if (item == 'LocationNow') {
      var allData = {
        address : this.LocationNow,
        lat : this.lat,
        lng : this.lng,
        user_id : localStorage.getItem('user_id')
      }  

      this.server.saveAddress(allData).subscribe((response:any) => {
        if (response.msg == 'done') {
          localStorage.setItem("address",this.LocationNow);
          localStorage.setItem('address_id',response.id);
          localStorage.setItem("current_lat",this.lat);
          localStorage.setItem('current_lng',this.lng);
        
          this.nav.navigateForward('home');
          this.presentToast("Dirección guardada con éxito.",'success');  
        }else {
          this.presentToast(JSON.stringify(response.data),'danger');  
        }
        
        loading.dismiss();
      });
    }else{
      localStorage.setItem("address",item.address);
      localStorage.setItem('address_id',item.id);
      localStorage.setItem("current_lat",item.lat);
      localStorage.setItem('current_lng',item.lng);
        
      this.nav.navigateForward('home');
      this.presentToast("Dirección guardada con éxito.",'success');
      loading.dismiss();
    }
    
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top',
      color:color
    });
    toast.present();
  }

  

}
