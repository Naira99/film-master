import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historifilm',
  templateUrl: './historifilm.component.html',
  styleUrls: ['./historifilm.component.css']
})
export class HistorifilmComponent implements OnInit {

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
