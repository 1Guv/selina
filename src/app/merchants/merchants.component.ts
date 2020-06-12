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
      .subscribe((merchants: MerchantsClass) => {
        console.log('merchants', merchants);
        this.merchants = merchants;
      })
  }

  showTransactions(id: string) {
    console.group('id', id);
    this.merchantService.getMerchantByID(id)
      .subscribe((merchant: any) => {
        console.log('merchant by id', merchant);
        this.merchant = merchant;
      })
  }

}
