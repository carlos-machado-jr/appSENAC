import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

let buttons = [
  {
  text: "apagar",
  icon: "trash",
  handler: () => {
    console.log("clicou em apagar")
  }},
  {
    text: "Compartilhar",
    icon: "share",
    handler: () => {
      console.log("clicou em compartilhar")
  }},
    {
      text: "Exibir",
      icon: "eye",
      handler: () => {
        console.log("clicou em exibir")
  }},
  {
    text: "Favoritar",
    icon: "heart",
    handler: () => {
      console.log("clicou em Favoritar")
  }},
  {
    text: "Cancelar",
    icon: "close",
    handler: () => {
      console.log("clicou em Cancelar")
  }}


]

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {
  
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  

  async exibir(){
    const actionSheet = await this.actionSheetController.create({
      header: "fotos",
      buttons: buttons
    })
    actionSheet.present();
  }

}
