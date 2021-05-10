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

  async operacao(op) {
    var resultado;
    const alert = await this.alertController.create({
      
      header: op,
      subHeader: 'Realize uma operação:',
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
          text: op,
          handler: (x) => {
            
            var num1 = parseInt(x.num1)
            var num2 = parseInt(x.num2)

            if(num1 || num2){
            
              switch (op){
                case "somar": 
                    resultado = num1 + num2
                    this.alert(resultado);
                    break;
                case "subtrair":
                    resultado = num1 - num2
                    this.alert(resultado);
                    break;   
                case "multiplicacao":
                    resultado = num1 * num2
                    this.alert(resultado);
                    break;  
                case "divisao":
                    resultado = num1 / num2
                    this.alert(resultado);
                    break;                       
              
              }
              
              
            } else{

              resultado = "nenhum dado informado"
              this.operacao(op)
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

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Escolha uma operação',
      inputs: [
        {
          name: 'soma',
          type: 'radio',
          label: 'Somar',
          value: 'somar',
          checked: true
        },
        {
          name: 'subtrair',
          type: 'radio',
          label: 'Subtrair',
          value: 'subtrair'
        },
        {
          name: 'multiplicacao',
          type: 'radio',
          label: 'Multiplicação',
          value: 'multiplicacao'
        },
        {
          name: 'divisao',
          type: 'radio',
          label: 'Divisão',
          value: 'divisao'
        }],
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Avançar',
          handler: (x) => {
            this.operacao(x);
          }
        }
      ]
    });

    alert.present();

 
  }
  
      

}
