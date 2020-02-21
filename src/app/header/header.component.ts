import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.animation').ripples({
        dropRadius: 20,
        perturbance: 0.05,
      });
    });
  }

}
