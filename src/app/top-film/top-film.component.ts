import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Photo } from '../model/Phote';
import { Service } from '../service/service';

@Component({
  selector: 'app-top-film',
  templateUrl: './top-film.component.html',
  styleUrls: ['./top-film.component.css']
})
export class TopFilmComponent implements OnInit {
  @ViewChild('contentVideo1', { static: false }) contentVideo1: ElementRef;
  @ViewChild('contentVideo2', { static: false }) contentVideo2: ElementRef;
  @ViewChild('contentVideo3', { static: false }) contentVideo3: ElementRef;
  @ViewChild('contentVideo4', { static: false }) contentVideo4: ElementRef;
  @ViewChild('contentVideo5', { static: false }) contentVideo5: ElementRef;
  @ViewChild('contentVideo6', { static: false }) contentVideo6: ElementRef;


  closeVideo: boolean;



  constructor(private service: Service) { }

  images: Photo[];
  ngOnInit() {
    this.service.getPhoto().subscribe((img) => {
      this.images = img;
    })
  }













  close() {
    this.contentVideo1.nativeElement.style.display = 'none';
    this.contentVideo2.nativeElement.style.display = 'none';
    this.contentVideo3.nativeElement.style.display = 'none';
    this.contentVideo4.nativeElement.style.display = 'none';
    this.contentVideo5.nativeElement.style.display = 'none';
    this.contentVideo6.nativeElement.style.display = 'none';

  }
  openDialog1() {
    this.contentVideo1.nativeElement.style.display = 'block';
    this.closeVideo = true;
  }

  openDialog2() {
    this.contentVideo2.nativeElement.style.display = 'block';
  }
  openDialog3() {
    this.contentVideo3.nativeElement.style.display = 'block';
  }
  openDialog4() {
    this.contentVideo4.nativeElement.style.display = 'block';
  }
  openDialog5() {
    this.contentVideo5.nativeElement.style.display = 'block';
  }
  openDialog6() {
    this.contentVideo6.nativeElement.style.display = 'block';
  }


}
