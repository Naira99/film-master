import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidervideo',
  templateUrl: './slidervideo.component.html',
  styleUrls: ['./slidervideo.component.css']
})
export class SlidervideoComponent implements OnInit {

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
