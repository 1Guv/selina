import { TestBed, async } from '@angular/core/testing';
import { MerchantsService } from './merchants.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MerchantsService', () => {

  let service: MerchantsService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ MerchantsService ]
    })
    service = TestBed.get(MerchantsService);
    httpTestingController = TestBed.get(HttpTestingController);
  }));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
