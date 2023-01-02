import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    private url = "http://localhost:8080/api/v1/contact/1";
  
    constructor(private http: HttpClient) { }
  
    getAContactByNumberAPI(): Observable<any> {
      return this.http.get<any>(this.url);


}
}
