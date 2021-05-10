import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'home', icon: 'home' },
    { title: 'Botões', url: 'botao', icon: 'construct' },
    { title: 'alerta', url: 'alerta', icon: 'construct' },    
    { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
