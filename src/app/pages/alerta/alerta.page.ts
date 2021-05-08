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
    var num: number;
    const alert = await this.alertController.create({
      
      header: 'Soma automatica',
      subHeader: 'Realize uma soma:',
      inputs: [
        {
          name: 'num1',
          type: 'number',
          placeholder: 'Digite um numero',
          handler:(x)=>{
            
            
          }
          
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
            console.log('botao cancelar pressionado '+ x.num1);
           
          }
        }, {
          text: 'somar',
          handler: (x) => {
            
            var resultado = x.num1 + x.num2

            await alert(resultado);
            
          }
        }
      ]
    });

     alert.present();

   
  }

  async alert() {
    var num: number;
    const alert = await this.alertController.create({
      
      header: 'Soma automatica',
      subHeader: 'Realize uma soma:',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
          handler: (x) => {
            console.log('botao cancelar pressionado '+ x.num1);
           
          }
        }, {
          text: 'somar',
          handler: (x) => {
            
            var resultado = x.num1 + x.num2

            
            
          }
        }
      ]
    });

     alert.present();

   
  }
      

}
