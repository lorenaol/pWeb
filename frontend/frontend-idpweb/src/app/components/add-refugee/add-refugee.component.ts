import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Refugee} from "../../entities/refugee";
import {RefugeeService} from "../../services/refugee.service";

@Component({
  selector: 'app-add-refugee',
  templateUrl: './add-refugee.component.html',
  styleUrls: ['./add-refugee.component.css']
})
export class AddRefugeeComponent implements OnInit {

  refugeeName = '';
  refugeeNoPeople?: number;
  refugeePhone = '';
  refugee?: Refugee={};


  nameUser = 'ADMINISTRATOR';

  constructor(private router: Router, private refugeeService: RefugeeService) { }

  ngOnInit(): void {
  }

  clickAnnounces(): void {
    this.router.navigate(['/announces']);
  }

  clickAddRefugee(): void {
    this.router.navigate(['/add-refugee']);
  }

  clickListRefugee(): void {
    this.router.navigate(['/refugee-list']);
  }

  clickSavedConnections(): void {
    this.router.navigate(['/saved-connections']);
  }

  clickViewProfile(): void {
    this.router.navigate(['/profile']);
  }

  clickLogout(): void {
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

  clickAdd(): void {

    this.refugee!.name = this.refugeeName;
    this.refugee!.nr = this.refugeeNoPeople;
    this.refugee!.phone = this.refugeePhone;
    this.refugeeService.addRefugee(
      this.refugee!
    ).subscribe(()=>{
      this.router.navigate(['/refugee-list']);
    })
    {
      console.log(this.refugeeName);
      console.log(this.refugeePhone);
      console.log(this.refugeeNoPeople);

    }
  }
}
