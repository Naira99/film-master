import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animfilm',
  templateUrl: './animfilm.component.html',
  styleUrls: ['./animfilm.component.css']
})
export class AnimfilmComponent implements OnInit {

  constructor() { }
  dialog: boolean = false;

  openDialog() {
    this.dialog = !this.dialog;
  }

  close() {
    this.dialog=false;
  }

  ngOnInit() {
  }

}
