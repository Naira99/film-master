import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  imageArr = ['testi-1', 'testi-2'];
  i: number = 0;



  images = [
    '../../../assets/img/about-image/1.png',
    '../../../assets/img/about-image/22.png',
    '../../../assets/img/about-image/3.png',
    '../../../assets/img/about-image/44.png',
  ];



  aweards: number = 0;
  years: number = 0;
  com: number = 0
  client: number = 0;



  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {

  }


  ngOnInit() {
    setInterval(() => {
      if (this.aweards !== 122) {
        this.aweards++;
        this.years += 2;
        this.com += 3;
        this.client++;
      }
    }, 20);
  }



  next() {
    for (var i = 1; i < this.imageArr.length; i++) {
      this.i = i;
    }
  }

  prev() {
    for (var i = 1; i < this.imageArr.length; i++) {
      this.i = i;
    }
  }
}
