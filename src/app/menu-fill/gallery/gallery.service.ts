import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  show = new Subject<boolean>();
  constructor() { }
  opendialog: boolean = true;

  showGallery() {
    this.opendialog = !this.opendialog;
    this.show.next(this.opendialog);
  }


}
