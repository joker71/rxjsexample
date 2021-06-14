import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(protected http: HttpClient) { }
  options: any = {
    "port": null,
    "headers": {
      "x-rapidapi-key": "8aa901b30cmshe84f48ca933c87fp1aec66jsn2aaa9d4b4342",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "useQueryString": true
    }
  }
  url: any = "api-football-v1.p.rapidapi.com";
  getApi(): Observable<any> {
    return this.http.get<any>(this.url + "/v3/timezone", {
      "headers": {
        "x-rapidapi-key": "8aa901b30cmshe84f48ca933c87fp1aec66jsn2aaa9d4b4342",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    
      }
    })
  }



}
