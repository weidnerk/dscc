import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { RouterModule } from '@angular/router';

describe('InterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [
        InterceptorService
      ]
    });
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
