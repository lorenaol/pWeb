import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../entities/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nameUser = 'USER';

  userName = 'DUTA ANA-MARIA';
  userPhone = '0734506218';
  userEmail = 'annamarriad@gmail.com';
  userNewPassword = '';
  userRepeatPassword = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.nameUser = JSON.parse(localStorage.getItem("user")!).name;

  }

  clickMyAnnounces(): void {
    this.router.navigate(['/my-announces']);
  }

  clickAddAnnounce(): void {
    this.router.navigate(['/add-announce']);
  }

  clickViewProfile(): void {
    this.router.navigate(['/profile']);
  }

  clickLogout(): void {
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
  user = new User();
  clickEditProfile(): void {
    this.userService.getUsersByEmail(JSON.parse(localStorage.getItem("user")!).email).subscribe((data:any)=>{
      this.user = data.body;
      if(this.userName != '') {
        this.user.name = this.userName;
      }
      if(this.userEmail != "") {
        this.user.email = this.userEmail;
      }
      if(this.userPhone != '') {
        this.user.phone = this.userPhone;
      }
      if(this.userNewPassword == this.userRepeatPassword) {
        this.user.password = this.userNewPassword;
      }
      this.userService.updateUser(this.user).subscribe(()=>{
        this.router.navigate(['/add-announce'])
      });
    })
  }

}
