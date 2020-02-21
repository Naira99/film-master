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

  /*button click*/
  btn1: boolean;
  btn2: boolean;
  btn3: boolean;


  constructor(private router: Router, private route: ActivatedRoute, private elementRef: ElementRef) { }

  topFilm() {

    this.router.navigate(['topfilm'], { relativeTo: this.route });
    this.btn1 = true;
    this.btn2 = false;
    this.btn3 = false;
  }
  newFilm() {
    this.router.navigate(['newfilm'], { relativeTo: this.route });
    this.btn2 = true;
    this.btn3 = false;
    this.btn1 = false;

  }
  comingFilm() {
    this.router.navigate(['coming'], { relativeTo: this.route });
    this.btn3 = true;
    this.btn1 = false;
    this.btn2 = false;
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
  }


}

