import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "../../entities/location";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.css']
})
export class AddAnnounceComponent implements OnInit {

  nameUser = 'USER';

  title = '';
  noPers = '';
  description = '';

  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit(): void {
   this.nameUser = JSON.parse(localStorage.getItem("user")!).name;
  }

  clickMyAnnounces(): void {
    this.router.navigate(['/my-announces']);
  }

  clickAddAnnounce(): void {
    this.router.navigate(['/add-announce']);
  }

  clickLogout(): void {
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

  clickViewProfile(): void {
    this.router.navigate(['/profile']);
  }
  location = new Location();

  clickAdd(): void {
    console.log(this.title);
    console.log(this.noPers);
    console.log(this.description);
    this.location.title = this.title;
    this.location.nr = parseInt(this.noPers);
    this.location.description = this.description;
    this.location.user = JSON.parse(localStorage.getItem("user")!);
    this.locationService.addLocation(this.location).subscribe((data)=>{
      this.router.navigate(['/my-announces'])
    });
  }
}
