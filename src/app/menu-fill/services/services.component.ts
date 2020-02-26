import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  dialog: boolean = false;
  close() {
    this.dialog = !this.dialog;
  }
  open() {
    this.dialog = !this.dialog;
  }
  ngOnInit() {
  }

}
