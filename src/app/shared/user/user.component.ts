import {
  Component
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  Router
} from "@angular/router";


import {
  User
} from './user.model';
import {
  UserService
} from "./user.service";


@Component({
  moduleId: module.id,
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [UserService] 
})
export class UserComponent {

  user: User;
  isLoggingIn: boolean = true;
  errorMessage: string;
  isError: boolean = true;
  listView: boolean = false;
  signUpSuccessful: string;
  signUpsuccess: boolean;
  latitude: number;
  longitude: number;

  constructor(private _userService: UserService,private _router : Router) {
    this.user = new User("user@nativescript.org", "password");
  }


  onSubmit() {
    if (this.isLoggingIn) {
      this.login();

    } else {
      this.signUp();
    }
  }

  login() {

    this._userService.login(this.user)
      .subscribe(
        data => {
          sessionStorage.setItem("access_token", data.Result.access_token);
          this.isError = true;
          if (sessionStorage.getItem("access_token") != null) {
            this._router.navigate(["/list"])
          } else { return this._router.navigate(['']) };
        },
        err => this.errorMessage = JSON.stringify(err.json().message).replace(/^"(.*)"$/, '$1')
      )
  }

  signUp() {
    this._userService.register(this.user)
      .subscribe(
        data => {
          this.signUpSuccessful = "Your account was successfully created.";
          this.signUpsuccess = true;
          this.toggleDisplay();
        },
        err => this.errorMessage = JSON.stringify(err.json().message).replace(/^"(.*)"$/, '$1')
      )
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.user);
  }

}