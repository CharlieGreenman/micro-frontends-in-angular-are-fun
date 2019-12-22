import { async, TestBed } from '@angular/core/testing';
import { ProductCartModule } from './product-cart.module';

describe('ProductCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductCartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductCartModule).toBeDefined();
  });
});
