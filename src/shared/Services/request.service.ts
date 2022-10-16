import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public API = 'http://localhost:3000'
  private header = new HttpHeaders({
    "Content-type": "application/json"
  })

  constructor(public http: HttpClient) {
  }

  postUserData(body: any) {
    return this.http.post(`${this.API}/user`, JSON.stringify(body), {headers: this.header})
  }
  getUserData(){
    return this.http.get(`${this.API}/user`);
  }

  createData(url: string, body: any) {
    return this.http.post(url, JSON.stringify(body), {headers: this.header})
  }
}
