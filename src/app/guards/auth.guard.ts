import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectUserId } from '../selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  // This method checks if the user is authenticated before allowing route activation
  // It retrieves the userId from the store and navigates to the login page if not authenticated
  // Returns true if the user is authenticated, false otherwise
  async canActivate(): Promise<boolean> {
    const userId = await firstValueFrom(this.store.pipe(select(selectUserId)));
    if (userId) {
      return true; // User is authenticated, allow route activation
    } else {
      this.router.navigate(['/auth/login']); // Navigate to login if userId is not set
      return false; // Prevent route activation
    }
  }
}
