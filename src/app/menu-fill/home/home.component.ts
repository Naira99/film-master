import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo1: boolean = false;
  logo2: boolean = true;
  logo3: boolean = true;
  logoActive1: boolean = true;
  logoActive2: boolean = false;
  logoActive3: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private element: ElementRef) { }

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


  topFilm() {

    this.router.navigate(['topfilm'], { relativeTo: this.route });
  }
  newFilm() {
    this.router.navigate(['newfilm'], { relativeTo: this.route });
  }
  comingFilm() {
    this.router.navigate(['coming'], { relativeTo: this.route });
  }


  logoToggleOne() {
    this.logo1 = false;
    this.logo2 = true;
    this.logo3 = true;
    this.logoActive1 = true;
    this.logoActive2 = false;
    this.logoActive3 = false;
  }
  logoToggleTwo() {
    this.logo1 = true;
    this.logo2 = false;
    this.logo3 = true;
    this.logoActive1 = false;
    this.logoActive2 = true;
    this.logoActive3 = false;
  }
  logoToggleThree() {
    this.logo1 = true;
    this.logo2 = true;
    this.logo3 = false;
    this.logoActive1 = false;
    this.logoActive2 = false;
    this.logoActive3 = true;
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

