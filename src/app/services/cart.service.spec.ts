import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartService } from './cart.service';
import { Cart } from '../interfaces/cart';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
