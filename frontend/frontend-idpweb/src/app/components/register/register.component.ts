import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../entities/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName = '';
  userEmail = '';
  userPhone = '';
  userSex = '';
  userPassword = '';
  userRepeatPassword = '';

  sex : string[] = ["feminin", "masculin"];
  user= new User();

  constructor(public formBuilder: FormBuilder,
              private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  clickRegister(): void {
    console.log(this.userName);
    console.log(this.userEmail);
    console.log(this.userPhone);
    console.log(this.userSex);
    console.log(this.userPassword);
    console.log(this.userRepeatPassword);
    this.user.email = this.userEmail;
    this.user.name = this.userName;
    this.user.phone = this.userPhone;
    this.user.gender = this.userSex;
    this.user.password = this.userPassword;
    this.userService.addUser(this.user).subscribe(()=> { this.router.navigate(['/']);});
  }
}
