import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Connection} from "../../entities/connection";
import {Location} from "../../entities/location";
import {ConnectionService} from "../../services/connection.service";

@Component({
  selector: 'app-saved-connections',
  templateUrl: './saved-connections.component.html',
  styleUrls: ['./saved-connections.component.css']
})
export class SavedConnectionsComponent implements OnInit {

  nameUser = 'ADMINISTRATOR';

  // announces: any[] = [
  //   {title: "Ofer cazare in Cluj-Napoca", noPers: "2",
  //     description: "Ofer 5 locuri cazare intr-o casa in care nu locuieste nimeni momentan, situata in Tg-Jiu, Gorj, Strada 9 mai, nr. 217",
  //     user: {name: "DUTA ANA-MARIA", phone: "0734506218", email: "annamarriad@gmail.com"}},
  //   {title: "Ofer cazare in Targu Jiu", noPers: "5",
  //     description: "Ofer 5 locuri cazare intr-o casa in care nu locuieste nimeni momentan, situata in Tg-Jiu, Gorj, Strada 9 mai, nr. 217",
  //     user: {name: "OLESCU LORENA", phone: "0737583957", email: "loernaolescu@gmail.com"}}
  // ];
  announces: Connection[]=[];

  constructor(private router: Router, private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getConnections().subscribe((data: any) => {
      this.announces = data.body!;
    })
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

  clickViewAnnounce(a : Location): void {
    this.router.navigate(['/view-connection/' + a?.id]);
  }
}
