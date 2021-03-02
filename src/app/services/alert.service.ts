
/* Alert Service is responsible for Alert Get, Set, Delete, Update */

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private api_url = environment.api_url;
  constructor(private http: HttpClient) { }

  setAlert(alert){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api_url+'/Users/SetAlerts',alert,httpOptions);
  }

  deleteAlert(alert){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api_url + '/Users/RemoveAlerts', alert, httpOptions);
  }

  getAlert(alert) {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
   return this.http.post(this.api_url + '/Users/GetAlerts', alert, httpOptions);
}
}