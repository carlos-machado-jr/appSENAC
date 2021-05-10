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

  async exibirAlerta() {
    var resultado;
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
        }, {
          text: 'somar',
          handler: (x) => {
            
            var num1 = parseInt(x.num1)
            var num2 = parseInt(x.num2)

            if(num1 || num2){
              resultado = num1 + num2
              this.alert(resultado);
              
            } else{

              resultado = "nenhum dado informado"
              this.exibirAlerta()
              this.alert(resultado);
              
              
            }

            
            
          }
        }
      ]
    });

     alert.present();

   
  }



  async alert(resultado) {
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: resultado,
      buttons: ['OK']
    });

    alert.present();

 
  }
  
      

}
