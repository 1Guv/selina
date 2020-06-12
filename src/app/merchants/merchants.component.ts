import { Component, OnInit, Output } from '@angular/core';
import { MerchantsService } from '../merchants.service';
import { EventEmitter } from 'protractor';

export class MerchantsClass {
  merchant_id: string;
  name: string;
  _links: {
    self: {
      href: string;
    }
  }
}

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {

  merchants: MerchantsClass;
  merchant: any;

  constructor(private merchantService: MerchantsService) { }

  ngOnInit() {
    this.getAllMerchants();
  }

  getAllMerchants() {
    this.merchantService.getMerchants()
      .subscribe((data: MerchantsClass) => {
        console.log('data', data);
        this.merchants = data;
      })
  }

  showTransactions(id: string) {
    console.group('id', id);
    this.merchantService.getMerchantByID(id)
      .subscribe((data: any) => {
        console.log('merchant by id', data);
        this.merchant = data;
      })
  }

}
