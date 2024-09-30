import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  PRODUCT_API_BASE_URL: string = environment.PRODUCT_API_BASE_URL;

  constructor(private http: HttpClient) { }

  /**
   * Fetches a list of all products from the API.
   * @returns An Observable containing the array of products.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.PRODUCT_API_BASE_URL}products`);
  }
}
