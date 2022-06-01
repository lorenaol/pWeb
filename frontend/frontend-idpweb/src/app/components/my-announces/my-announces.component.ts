import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocationService} from "../../services/location.service";
import {Location} from "../../entities/location";
import {User} from "../../entities/user";

@Component({
  selector: 'app-my-announces',
  templateUrl: './my-announces.component.html',
  styleUrls: ['./my-announces.component.css']
})
export class MyAnnouncesComponent implements OnInit {

  nameUser = 'USER';

  // user: User = {id: 1234, name: "Ana", email: "anna@mail", password: "parola", phone: "0734506218", gender: "female"}
  // announce1: Location = {id: 321, title: "Ofer cazare in Cluj-Napoca", nr: 5,
  // description: "Ofer 5 locuri cazare intr-o casa in care nu locuieste nimeni momentan, situata in Tg-Jiu, Gorj, Strada 9 mai, nr. 217",
  // user: this.user, currNr: 0};
  // announce2: Location = {id: 444, title: "Ofer cazare in TG-jiu", nr: 3,
  //   description: "Ofer 3 locuri cazare intr-o casa in care nu locuieste nimeni momentan, situata in Tg-Jiu, Gorj, Strada 9 mai, nr. 217",
  //   user: this.user, currNr: 3};

  announces: Location[] = []
  announce: Location | undefined;
  //   any[] = [
  //   {title: "Ofer cazare in Cluj-Napoca", noPers: "2",
  //     description: "Ofer 5 locuri cazare intr-o casa in care nu locuieste nimeni momentan, situata in Tg-Jiu, Gorj, Strada 9 mai, nr. 217",
  //     user: {name: "DUTA ANA-MARIA", phone: "0734506218", email: "annamarriad@gmail.com"}},
  //   {title: "Ofer cazare in Targu Jiu", noPers: "5",
  //     description: "Ofer 5 locuri cazare intr-o casa in care nu locuieste nimeni momentan, situata in Tg-Jiu, Gorj, Strada 9 mai, nr. 217",
  //     user: {name: "OLESCU LORENA", phone: "0737583957", email: "loernaolescu@gmail.com"}}
  // ];

  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit(): void {
    this.nameUser = JSON.parse(localStorage.getItem("user")!).name;
    this.locationService.getLocationsByUser(JSON.parse(localStorage.getItem("user")!).id).subscribe((data:any)=> {
      this.announces = data.body;
    })
    // this.announces.push(this.announce1);
    // this.announces.push(this.announce2);
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

  clickViewAnnounce(a:any): void {
    this.router.navigate(['/view-announce/'+ a?.id]);
  }

}
