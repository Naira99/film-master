import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  imageArr = ['testi-1', 'testi-2'];




  images = [
    '../../../assets/img/about-image/1.png',
    '../../../assets/img/about-image/22.png',
    '../../../assets/img/about-image/3.png',
    '../../../assets/img/about-image/44.png',
  ];

  i: number = 0;


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

  imageClick(url) {
    this.elementRef.nativeElement.querySelector('.image').src = url;
  }
  prev() {
    this.goToslide(this.i - 1);
  }
  next() {
    this.goToslide(this.i + 1);
  }
  goToslide(n) {
    this.i = (n + this.imageArr.length) % this.imageArr.length;
  }

}
