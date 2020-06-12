import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsComponent } from './merchants.component';
import { MerchantsService } from '../merchants.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('MerchantsComponent', () => {
  let component: MerchantsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ MerchantsComponent ]
    })
    component = TestBed.get(MerchantsService);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MerchantsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
