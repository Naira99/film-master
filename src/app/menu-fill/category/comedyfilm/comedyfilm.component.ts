import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedyfilm',
  templateUrl: './comedyfilm.component.html',
  styleUrls: ['./comedyfilm.component.css']
})
export class ComedyfilmComponent implements OnInit {
  dialog = false;
  constructor() { }

  openDialog() {
    this.dialog = !this.dialog;
  }

  close() {
    this.dialog=false;
  }
  ngOnInit() {
  }

}
