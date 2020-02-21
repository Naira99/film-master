import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

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
