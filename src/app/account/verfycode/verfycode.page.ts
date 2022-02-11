import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { EventsService } from '../../service/events.service';
import { ToastController,NavController,LoadingController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx'; 

@Component({
  selector: 'app-verfycode',
  templateUrl: './verfycode.page.html',
  styleUrls: ['./verfycode.page.scss'],
})
export class VerfycodePage implements OnInit {

  user_id:any;
  Code: String;
  phone: any = '';
  stateVerify;
  windowsRef:any;
  confirmationResult: any;
  txtbnt: any = 'Verificar';

  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public keyboard:Keyboard,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService, 
  ) { 
    if (!localStorage.getItem('confirmationResult')) {
      this.nav.navigateForward('/home');
    }
  }

  ngOnInit() {
    // this.windowsRef = this.server.windowRef;
    this.confirmationResult = localStorage.getItem('confirmationResult');
    this.phone = localStorage.getItem('phone');
    this.user_id = localStorage.getItem('user_id');
  }

  async verfyCode()
  {
    const loading = await this.loadingController.create({
      message: 'Validando...',
    });
    await loading.present();
    if (this.Code && this.Code.toString().length >= 4 && this.Code.toString().length <= 8) {
      let verificationCode: string = this.Code.toString();

      // this.windowsRef.confirmationResult.confirm(verificationCode).then(result => {
      // this.firebaseAuthentication.signInWithVerificationId(this.confirmationResult,verificationCode).then((data:any) => {
      //   // User Signed
      //   var allData = {
      //     phone : this.phone,
      //     user_id : this.user_id
      //   }
        
      //   this.server.SignPhone(allData).subscribe(res => {
      //     if (res) {
      //       loading.dismiss();
      //       this.presentToast('Registro completo...','success');
      //       this.nav.navigateForward('/city');
      //     }
      //   });
      // }).catch(fail => {
      //   // Fail
      //   this.presentToast('Algo ha ocurrido.'+fail, 'danger');
      // });
    }else {
      loading.dismiss();
      this.presentToast('Porfavor Ingresa un Codigo valido!','danger');
    }
  }

  async presentToast(txt, color) {
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
