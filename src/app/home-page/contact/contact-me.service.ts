import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(data: any, api_url:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const stringFieldData = JSON.stringify(data);

    return this.http.post(`${api_url}/Messages`, stringFieldData, httpOptions)
  }

  sendEmailWithMessage(body: any, api_url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`${api_url}/Email`,body, httpOptions)
  }
}