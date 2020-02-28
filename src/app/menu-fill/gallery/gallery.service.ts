import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  constructor() { }
  opendialog: boolean = true;

  showGallery() {
    this.opendialog = !this.opendialog;
  }


}
