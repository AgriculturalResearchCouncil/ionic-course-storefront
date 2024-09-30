import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  PRODUCT_API_BASE_URL: string = environment.PRODUCT_API_BASE_URL;

  constructor(private http: HttpClient) { }

  /**
   * Creates a new cart for a user with specified products on a given date.
   * @param userId The unique identifier of the user.
   * @param date The date when the cart is created.
   * @param products An array of products to be added to the cart.
   * @returns An Observable that resolves to the server's response.
   */
  createCart(userId: number, date: string, products: Product[]): Observable<any> {
    return this.http.post(`${this.PRODUCT_API_BASE_URL}carts`, {
      userId,
      date,
      products
    });
  }

  /**
   * Retrieves all carts for a specific user.
   * @param userId The unique identifier of the user.
   * @returns An Observable that resolves to the list of carts for the user.
   */
  getUserCarts(userId: Number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.PRODUCT_API_BASE_URL}carts/user/${userId}`);
  }

  /**
   * Retrieves a single cart by its unique identifier.
   * @param cartId The unique identifier of the cart.
   * @returns An Observable that resolves to the cart details.
   */
  getSingleCart(cartId: Number): Observable<Cart> {
    return this.http.get<Cart>(`${this.PRODUCT_API_BASE_URL}carts/5`);
  }

  /**
   * Updates an existing cart with new information.
   * @param cartId The unique identifier of the cart to be updated.
   * @param date The updated date when the cart is modified.
   * @param products An array of products to update in the cart.
   * @param userId The unique identifier of the user who owns the cart.
   * @returns An Observable that resolves to the server's response after updating the cart.
   */
  updateCart(cartId: Number, date: string, products: Product[], userId: Number): Observable<any> {
    return this.http.patch(`${this.PRODUCT_API_BASE_URL}carts/${cartId}`, {
      userId: userId,
      date: date,
      products: products
    });
  }
}
