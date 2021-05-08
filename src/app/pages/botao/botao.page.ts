import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }


  exemplo(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'alert-class',
      header: 'Alert',
      subHeader: 'A soma de 5 + 5 é 10',
      // message: 'A soma de 5 + 5 é 10',
      buttons: ['OK']
    });

     alert.present();

    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

}
