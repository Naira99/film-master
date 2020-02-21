import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fantasyfilm',
  templateUrl: './fantasyfilm.component.html',
  styleUrls: ['./fantasyfilm.component.css']
})
export class FantasyfilmComponent implements OnInit {

  constructor() { }
  dialog = false;


  openDialog() {
    this.dialog = !this.dialog;
  }

  close() {
    this.dialog=false;
  }
  ngOnInit() {
  }

}
