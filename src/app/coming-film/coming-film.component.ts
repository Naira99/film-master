import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-coming-film',
  templateUrl: './coming-film.component.html',
  styleUrls: ['./coming-film.component.css']
})
export class ComingFilmComponent implements OnInit {

  @ViewChild('contentVideo1', { static: false }) contentVideo1: ElementRef;
  @ViewChild('contentVideo2', { static: false }) contentVideo2: ElementRef;
  @ViewChild('contentVideo3', { static: false }) contentVideo3: ElementRef;



  constructor() { }

  close() {
    this.contentVideo1.nativeElement.style.display = 'none';
    this.contentVideo2.nativeElement.style.display = 'none';
    this.contentVideo3.nativeElement.style.display = 'none';

  }
  openDialog1() {
    this.contentVideo1.nativeElement.style.display = 'block';
  }

  openDialog2() {
    this.contentVideo2.nativeElement.style.display = 'block';
  }
  openDialog3() {
    this.contentVideo3.nativeElement.style.display = 'block';
  }
  ngOnInit() {
  }
}
