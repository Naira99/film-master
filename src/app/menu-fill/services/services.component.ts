import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor(private element: ElementRef) { }
  ngAfterViewInit(): void {
  }
  current: number = 0;
  prev() {
    this.goToSlide(this.current - 1);
  }
  next() {
    this.goToSlide(this.current + 1);
    console.log(this.current);
  }
  goToSlide(n) {
    let slides = this.element.nativeElement.querySelectorAll('#slides .slide');
    slides[this.current].className = 'slide';
    this.current = (n + slides.length) % slides.length;
    slides[this.current].className = 'slide showing';

  }

  dialog: boolean = false;
  close() {
    this.dialog = !this.dialog;
  }
  open() {
    this.dialog = !this.dialog;
  }
  ngOnInit() {
    this.next();
  }

}
