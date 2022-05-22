import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail = '';
  userPassword = '';

  constructor(public formBuilder: FormBuilder,
              private router: Router, public auth: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }
  profileJson?: string;
  clickLogIn(): void {
    console.log(this.userEmail);
    console.log(this.userPassword);
    // this.auth.loginWithRedirect();
    this.userService.getUsersByEmail(this.userEmail).subscribe((data)=>{
      console.log(data.body)
      if(data.body) {
        if(data.body.password === this.userPassword) {
          localStorage.setItem("user", JSON.stringify(data.body));
          if(data.body.name === "admin") {
            this.router.navigate(['/announces']);
          } else {
            this.router.navigate(['/add-announce']);
          }

        }
      }
    })
  }
  check() {
    this.auth.user$.subscribe(
      (profile) => {this.profileJson = JSON.stringify(profile, null, 2), console.log(this.profileJson)},
    );

  }
  clickLogOut():void {

    // this.auth.logout({ returnTo: document.location.origin })
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

  clickRegister(): void {
    this.router.navigate(['/register']);
  }

}
