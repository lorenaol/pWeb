import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Location} from "../../entities/location";
import {LocationService} from "../../services/location.service";

class DialogData {
}

@Component({
  selector: 'app-edit-announce',
  templateUrl: './edit-announce.component.html',
  styleUrls: ['./edit-announce.component.css']
})
export class EditAnnounceComponent implements OnInit {

  // title = 'titliu';
  // noPers = 2;
  // description = 'fse s vsr vr v  vwe vwe ';
  location: Location={};

  constructor(public dialogRef: MatDialogRef<EditAnnounceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, public locationService: LocationService) { }

  ngOnInit(): void {
    this.location = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.locationService.updateLocation(this.location).subscribe((date:any)=>{
      this.dialogRef.close();
    })

  }
}
