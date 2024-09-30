import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  PRODUCT_API_BASE_URL: string = environment.PRODUCT_API_BASE_URL;

  constructor(private http: HttpClient) { }

  /**
   * Initiates the login process for a user.
   * @param username The username of the user trying to log in.
   * @param password The password of the user trying to log in.
   * @returns An Observable containing the login response.
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.PRODUCT_API_BASE_URL}auth/login`, {
      username: username,
      password: password
    });
  }
}
