import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MerchantsClass } from './merchants/merchants.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  url: string = 'https://selinafinance-assets.azureedge.net/source/';
  headers: any
  merchantId: string;

  constructor(private http: HttpClient) { 
  }

  getMerchants(): Observable<MerchantsClass> {
    return this.http.get<MerchantsClass>(this.url + 'merchants.json');
  }

  getMerchantByID(id: string): Observable<any> {
    return this.http.get<any>(this.url + id + '.json');
  }
}
