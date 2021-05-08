import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  exibirBotao(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Soma automatica',
      subHeader: 'Realize uma soma:',
      inputs: [
        {
          name: 'num1',
          type: 'number',
          placeholder: 'Digite um numero'
        },
        {
          name: 'num2',
          type: 'number',
          placeholder: 'Digite um numero'
        }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
          handler: (x) => {
            console.log('botao cancelar pressionado '+ x);
          }
        }, {
          text: 'somar',
          handler: () => {
            console.log('Botao ok pressionado');
          }
        }
      ]
    });

     alert.present();

   
  }

}
