import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  constructor(private element: ElementRef) { }
  all = true;
  shoot = false;
  prod = false;

  ngOnInit() { }

  ngAfterViewInit() {
    let slides = this.element.nativeElement.querySelectorAll('#slides .slide');
    let current: number = 0;
    setInterval(() => {
      slides[current].className = 'slide';
      current = (current + 1) % slides.length;
      slides[current].className = 'slide showing';
    }, 2000);
  }

  showShoot() {
    this.all = false;
    this.prod = false;
    this.shoot = true;
  }
  showProd() {
    this.all = false;
    this.prod = true;
    this.shoot = false;
  }
  showAll() {
    this.all = true;
    this.prod = false;
    this.shoot = false;
  }


}
