import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';


import {
  User
} from './user.model';
import {
  UserService
} from '../services/user.service';


@Component({
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  user: User;
  isLoggingIn: boolean = true;
  errorMessage: string;
  isError: boolean = true;
  listView: boolean = false;
  signUpSuccessful: string;
  signUpsuccess: boolean;
  latitude: number;
  longitude: number;

  ngOnInit() {
    this.user = new User('user@nativescript.org', 'password');

  }

  constructor(private _userService: UserService, private _router: Router) {}


  onSubmit() {
    if (this.isLoggingIn) {
      this.login();

    } else {
      this.signUp();
    }
  }

  login() {

    this._userService.login(this.user )
      .subscribe(
        (data: any)  => {
          this.isError = true;
          if (sessionStorage.getItem('access_token') != null) {
            this._router.navigate(['/list']);
          } else {
            return this._router.navigate(['/login']);
          };
        },
        err => this.errorMessage = JSON.stringify(err.json().message).replace(/^"(.*)"$/, '$1')
      );
  }

  signUp() {
    this._userService.register(this.user)
      .subscribe(
        data => {
          this.signUpSuccessful = 'Your account was successfully created.';
          this.signUpsuccess = true;
          this.toggleDisplay();
        },
        err => this.errorMessage = JSON.stringify(err.json().message).replace(/^"(.*)"$/, '$1')
      );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}
