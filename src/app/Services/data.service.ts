import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudent():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/1dd79b2c-67b6-11eb-9c90-f18f0bc9509e')
  }
  
  GetWeather():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=6a66416403ed8e5e6e762cb8c261f303')
  }
}
