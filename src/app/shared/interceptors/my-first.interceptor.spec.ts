import { TestBed } from '@angular/core/testing';

import { MyFirstInterceptor } from './my-first.interceptor';

describe('MyFirstInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyFirstInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyFirstInterceptor = TestBed.inject(MyFirstInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
