import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {
  public pais;
  public lista = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  bucarFun() {
    if (this.pais != null) {
      this.http
        .get<any>(
          'http://universities.hipolabs.com/search?country=' + this.pais
        )
        .subscribe((res) => {
          // console.log(res);
          this.lista = res;
        });
    }else{
      console.log('Debe introducir un pais!!!');
    }
  }
}
