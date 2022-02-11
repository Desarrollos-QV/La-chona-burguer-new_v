import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  url = "https://lachonaburger.grupoorus.mx/api/";
  
  geoLatitude = null;
  geoLongitude=null;

  constructor(
    private http: HttpClient,
    private geolocation: Geolocation 
    ) { }

  get windowRef() {
    return window
  }

  getGeolocation(){
      
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude; 
      //this.geoAccuracy = resp.coords.accuracy; 
      
     localStorage.setItem('current_lat',this.geoLatitude);
     localStorage.setItem('current_lng',this.geoLongitude);

     }).catch((error) => {
      //  Fail
      console.log(error);
     });
  }

  welcome()
  {
  	return this.http.get(this.url+'welcome')
  	    	   .pipe(map(results => results));
  }

  getDeliveryType($id) {
    return this.http.get(this.url+'getTypeDelivery/'+$id)
  	    	   .pipe(map(results => results));
  }

  city()
  {
  	return this.http.get(this.url+'city?lid='+localStorage.getItem('lid'))
  	    	   .pipe(map(results => results));
  }

  lang()
  {
    return this.http.get(this.url+'lang')
             .pipe(map(results => results));
  }

  homepage2(city_id,lid) {
    return this.http.get(this.url+'homepage/'+city_id+'/'+lid)
             .pipe(map(results => results));
  }

  homepage(city_id)
  {
    return this.http.get(this.url+'homepage/'+city_id)
             .pipe(map(results => results));
  }

  getStore(id)
  {
    return this.http.get(this.url+'getStore/'+id)
             .pipe(map(results => results));
  }

  getMoreStores(city_id)
  {
    return this.http.get(this.url+'GetInfiniteScroll/'+city_id)
             .pipe(map(results => results));
  }

  search(query,type,city)
  {
    return this.http.get(this.url+'search/'+query+'/'+type+'/'+city)
             .pipe(map(results => results));
  }

  SearchCat(data)
  {
    console.log(this.url+'SearchCat/'+data);
    return this.http.get(this.url+'SearchCat/'+data)
    .pipe(map(results => results));
  }

  addToCart(data)
  {
    return this.http.post(this.url+'addToCart',data)
             .pipe(map(results => results));
  }

  updateCart(id,type)
  {
    return this.http.get(this.url+'updateCart/'+id+'/'+type)
             .pipe(map(results => results));
  }

  cartCount(cartNo)
  {
    return this.http.get(this.url+'cartCount/'+cartNo)
             .pipe(map(results => results));
  }

  getCart(cartNo)
  {
    console.log(this.url+'getCart/'+cartNo);
    return this.http.get(this.url+'getCart/'+cartNo)
             .pipe(map(results => results));
  }

  getOffer(cartNo)
  {
    return this.http.get(this.url+'getOffer/'+cartNo)
             .pipe(map(results => results));
  }

  applyCoupen(id,cartNo)
  {
    return this.http.get(this.url+'applyCoupen/'+id+'/'+cartNo)
             .pipe(map(results => results));
  }

  signup(data)
  {
    return this.http.post(this.url+'signup',data)
             .pipe(map(results => results));
  }

  signupWithfb(data)
  {
    return this.http.get(data).pipe(map(results => results));
  }

  login(data)
  {
    return this.http.post(this.url+'login',data)
             .pipe(map(results => results));
  }

  loginfb(data)
  {
    return this.http.post(this.url+'loginfb',data)
             .pipe(map(results => results));
  }

  forgot(data)
  {
    return this.http.post(this.url+'forgot',data)
             .pipe(map(results => results));
  }

  verify(data)
  {
    return this.http.post(this.url+'verify',data)
             .pipe(map(results => results));
  }

  updatePassword(data)
  {
    return this.http.post(this.url+'updatePassword',data)
             .pipe(map(results => results));
  }

  getAddress(id)
  {
    return this.http.get(this.url+'getAddress/'+id)
             .pipe(map(results => results));
  }

  getAllAdress(id)
  {
    return this.http.get(this.url+'getAllAdress/'+id)
             .pipe(map(results => results));
  }

  myOrder(id)
  {
    return this.http.get(this.url+'myOrder/'+id)
             .pipe(map(results => results));
  }

  saveAddress(data)
  {
    return this.http.post(this.url+'addAddress',data)
             .pipe(map(results => results));
  }

  trashAddress(data)
  {
    return this.http.get(this.url+'removeAddress/'+data)
             .pipe(map(results => results));
  }

  order(data)
  {
    return this.http.post(this.url+'order',data)
             .pipe(map(results => results));
  }

  userInfo(id)
  {
    return this.http.get(this.url+'userinfo/'+id)
             .pipe(map(results => results));
  }

  updateInfo(data,id)
  {
    return this.http.post(this.url+'updateInfo/'+id,data)
             .pipe(map(results => results));
  }

  cancelOrder(id,uid)
  {
    return this.http.get(this.url+'cancelOrder/'+id+'/'+uid)
             .pipe(map(results => results));
  }

  loginFb(data)
  {
    return this.http.post(this.url+'loginFb',data)
             .pipe(map(results => results));
  }

  SignPhone(data)
  {
    return this.http.post(this.url+'SignPhone',data)
      .pipe(map(results => results));
  }

  sendChat(data)
  {
    return this.http.post(this.url+'sendChat',data)
             .pipe(map(results => results));
  }

  push()
  {
    return this.http.get(this.url+'push')
             .pipe(map(results => results));
  }

  rating(data)
  {
    return this.http.post(this.url+'rate',data)
             .pipe(map(results => results));
  }

  updateCity(data)
  {
    return this.http.get(this.url+'updateCity?'+data).pipe(
      map(results => results)
    );
  }

  pages()
  {
    return this.http.get(this.url+'pages?lid='+localStorage.getItem('lid')).pipe(
      map(results => results)
    );
  }

  makeStripePayment(token)
  {
    // makeStripePayment
    return this.http.get(this.url+'makeStripePayment'+token).pipe(
      map(results => results)
    );
  }

  getStatus(id)
  {
    return this.http.get(this.url+'getStatus/'+id).pipe(
      map(results => results)
    );
  }
}
