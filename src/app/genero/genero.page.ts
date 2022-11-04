import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import{PersonasInterfaces} from '../interfaces/my_people';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  public nombre;
  public seccion = false;
  public data: PersonasInterfaces;

  public boton = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  predecir() {
    if (this.nombre != null) {
      this.http
        .get<PersonasInterfaces>('https://api.genderize.io?name=' + this.nombre)
        .subscribe((res) => {
          console.log(res);
          this.data = res;
        });
      this.nombre = '';
      this.seccion = true;
      this.boton = false;
    } else {
      console.log('Debe introducir un nombre!!!');
    }
  }
}


