import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MerchantsClass } from './merchants/merchants.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  url: string = 'https://selinafinance-assets.azureedge.net/source/merchants.json';
  headers: any

  constructor(private http: HttpClient) { 
  }

  getMerchants(): Observable<MerchantsClass> {
    return this.http.get<MerchantsClass>(this.url);
  }
}
