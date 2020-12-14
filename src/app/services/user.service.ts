import { Injectable } from '@angular/core';
import { User, UserView, UserPass } from '../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url = environment.api_url;
  private tok: string;
  private uname: string;

  constructor(private http: HttpClient, private storage: Storage) { 
    this.storage.get('currentUser').then(res => {
      if(res!= null){
        let users = JSON.parse(res);
        this.uname = users.username;
        this.tok = users.token;
      }
    });
  }

  register(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<string>(this.api_url + `/users/register`, user, httpOptions);
  }

  forgotPassword(data) {
    let users: User = {
      FirstName: "",
      LastName: data.LastName,
      Username: data.Email,
      Company: "",
      Password: "",
      InvestorType: "",
      Email: data.Email,
      IsPolicyAccepted: 'Y',
      Token: ""
    }

    return this.http.post<string>(this.api_url + `/Users/ForgotPassword`, users);
  }

  UpdatePass(pass: string) {
    console.log(this.tok);
      var user = {
      Username: this.uname,
      Password: pass
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tok}`
      })
    };
    return this.http.put(this.api_url+`/users/UpdatePass`,user,httpOptions);
  }
}