import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EdadInterfaces} from '../interfaces/mi_edad';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  public nombre: string;
  public seccion;
  public leyes;
  public show;
  public boton = true;
  data2: EdadInterfaces;

  constructor(private http: HttpClient) { }

  ngOnInit() {}
      predecir() {
    if (this.nombre != null) {
      this.http
        .get<EdadInterfaces>('https://api.agify.io?name=' + this.nombre)
        .subscribe((res) => {
          // console.log(res);
          this.data2 = res;
          this.ley(this.data2);
        });
      this.nombre = '';
      this.seccion = true;
      this.boton = false;
    } else {
      console.log('Debe introducir un nombre!!!');
    }
  }

  ley(edad: any) {
    this.leyes = edad;

    if (this.leyes.age >= 15 && this.leyes.age <= 30) {
      this.show = 'Joven';
    } else if (this.leyes.age >= 31 && this.leyes.age <= 64) {
      this.show = 'Adulto/@';
    } else if (this.leyes.age >= 65) {
      this.show = 'Anciano/@';
    }
  }

}
