import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expfilm',
  templateUrl: './expfilm.component.html',
  styleUrls: ['./expfilm.component.css']
})
export class ExpfilmComponent implements OnInit {
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
