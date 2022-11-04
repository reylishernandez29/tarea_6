import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import{Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  public climaTemperaturaDetalles: any; //Contiene todos los detalles que tenga que ver con la Temperatura
  public ciudad: any;

  public climaDetalles: any; //Contiene todos los detalles que tenga que ver con el Clima
  public climaIcono: any;

  public lat;
  public lng;
  public fechaActual = new Date();
  public climaBool = false;
  public boton = true;

  constructor(
    private http: HttpClient,
    private geo: Geolocation
  ) {}
  ngOnInit() {
  }

  getLocation(){
    this.geo.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then( (res)=>{
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      // console.log(this.lat);
      // console.log(this.lng);
      if (this.lat && this.lng != null) {
        this.getData(this.lat, this.lng);
      }else{
        console.log('No tenemos su geolocalización');
      }
    }).catch((e)=>{
      console.log(e);
    });
  }

  getData(lat: number, lng: number){
    this.http.get<any>(`${API_URL}/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .subscribe(res =>{
      // console.log(res);
      this.climaTemperaturaDetalles = res.main;
      // console.log(this.climaTemperaturaDetalles);
      this.ciudad = res.name;
      this.climaDetalles = res.weather[0];
      // console.log(this.climaDetalles);
      this.climaIcono = `http://openweathermap.org/img/wn/${this.climaDetalles.icon}@4x.png`;
    });
    this.climaBool = true;
    this.boton = false;
  }
}
