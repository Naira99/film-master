import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show: boolean = false;
  elem: boolean = false;


  @ViewChild('menuOne', { static: false }) menuOne: ElementRef;
  @ViewChild('menuTwo', { static: false }) menuTwo: ElementRef;
  @ViewChild('menuThree', { static: false }) menuThree: ElementRef;
  @ViewChild('menuFour', { static: false }) menuFour: ElementRef;
  @ViewChild('menuFive', { static: false }) menuFive: ElementRef;

  constructor() {
    }

  ngOnInit() {

  }


btnOne() {
 if (this.menuOne.nativeElement.style.display == 'block') {
    this.menuOne.nativeElement.style.display = 'none';
  } else {
    this.menuOne.nativeElement.style.display = 'block';
  }
}
btnTwo() {
  if (this.menuTwo.nativeElement.style.display == 'block') {
     this.menuTwo.nativeElement.style.display = 'none';
   } else {
     this.menuTwo.nativeElement.style.display = 'block';
   }
 }
 btnThree() {
  if (this.menuThree.nativeElement.style.display == 'block') {
     this.menuThree.nativeElement.style.display = ' none';
   } else {
     this.menuThree.nativeElement.style.display = 'block';
   }
 }
 btnFour() {
  if (this.menuFour.nativeElement.style.display == 'block') {
     this.menuFour.nativeElement.style.display = 'none';
   } else {
     this.menuFour.nativeElement.style.display = 'block';
   }
 }
 btnFive() {
  if (this.menuFive.nativeElement.style.display == 'block') {
     this.menuFive.nativeElement.style.display = 'none';
   } else {
     this.menuFive.nativeElement.style.display = 'block';
   }
 }

open() {
  this.show = !this.show;
}

onResize() {
  if (this.show == true) {
    this.show = !this.show;
  }
}
}


