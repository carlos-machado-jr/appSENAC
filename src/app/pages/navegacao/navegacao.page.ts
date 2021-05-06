import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {

  constructor(private navegacao: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarResultado(){
    this.presentAlert()
    this.navegacao.navigateForward("resultado");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'A soma de 5 + 5 é 10',
      // message: 'A soma de 5 + 5 é 10',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
}
