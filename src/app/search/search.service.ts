import { Injectable } from "@angular/core";
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Film } from '../model/film';



@Injectable({ providedIn: 'root' })
export class SearchService {
  // url = "../../assets/film.json";
  constructor(private http: HttpClient) {

  }



}
