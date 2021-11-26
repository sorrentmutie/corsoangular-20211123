import { TestBed } from '@angular/core/testing';

import { MySecondInterceptor } from './my-second.interceptor';

describe('MySecondInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MySecondInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MySecondInterceptor = TestBed.inject(MySecondInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
