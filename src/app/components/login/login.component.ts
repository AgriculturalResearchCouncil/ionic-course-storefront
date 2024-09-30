import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { setUserId } from '../../actions/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = 'mor_2314';
  password: string = '83r5^_';
  error: string = '';

  constructor(private auth: AuthService, private store: Store<AppState>, private router: Router) {}

  // ngOnInit() { }


  // This method handles the login functionality by sending a POST request with the provided username and password
  // If the login is successful, it dispatches the user ID to the store and navigates to the home page
  // If there is an error, it displays the error message and opens a dialog to show the details
  login() {
    if (!this.username || !this.password) return;
    this.auth.login(this.username, this.password).subscribe((response: any) => {
      this.store.dispatch(setUserId({ userId: 2314 }));
      this.router.navigate(['/home']);
    }, (error) => {
      console.log('error')
      console.log(error)
      this.error = error.error;
      const cartDetailsDialog = document.querySelector('#cartDetailsDialog') as HTMLDialogElement;
      cartDetailsDialog?.showModal();
    });
  }

  closeDialog() {
    const cartDetailsDialog = document.querySelector('#cartDetailsDialog') as HTMLDialogElement;
    cartDetailsDialog?.close();
  }
}
