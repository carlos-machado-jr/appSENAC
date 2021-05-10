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
    var resultado: number;
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
            
            var num1 = parseInt(x.num1)
            var num2 = parseInt(x.num2)

            resultado = num1 + num2

            this.alert(resultado);
            
          }
        }
      ]
    });

     alert.present();

   
  }



  async alert(resultado) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Resultado',
      subHeader: resultado,
      // message: 'A soma de 5 + 5 é 10',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
      

}
