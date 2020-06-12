import { Component, OnInit } from '@angular/core';
import { MerchantsService } from '../merchants.service';

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

}
