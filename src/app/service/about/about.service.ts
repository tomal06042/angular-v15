import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
    private url = "http://localhost:8080/api/v1/about/about";
  
    constructor(private http: HttpClient) { }
  
    getAnAboutByTitleAPI(): Observable<any> {
      return this.http.get<any>(this.url);
    }
}
