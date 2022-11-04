import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navaja suiza', url: '/navaja', icon: 'construct' },
    { title: 'Genero', url: '/genero', icon: 'people' },
    { title: 'Edad', url: '/edad', icon: 'time' },
    { title: 'universidades', url: '/universidades', icon: 'book' },
    { title: 'clima', url: '/clima', icon: 'cloudy' },
    { title: 'acerca de', url: '/acercade', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
