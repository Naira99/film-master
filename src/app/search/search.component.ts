import { Component, OnInit } from '@angular/core';

import { Film } from '../model/film';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films: Film[] = [];
  searchClass: boolean = false;
  constructor(private searchService: SearchService) { }
  fname: string = '';

  ngOnInit() {
    this.loadfilms();
  }
  loadfilms() {
    this.films = [
      {
        "name": "birds of prey",
        "link": "joker",
      },
      {
        "name": "joker",
        "link": "maleficent",
      },
      {
        "name": "malificent",
        "link": "maleficent",
      },
      {
        "name": "aquaman",
        "link": "maleficent",
      },
      {
        "name": "skin",
        "link": "maleficent",
      },
      {
        "name": "mulan",
        "link": "maleficent",
      },
      {
        "name": "furious",
        "link": "maleficent",
      }
      ,
      {
        "name": "Game of Thrones",
        "link": "maleficent",
      },
      {
        "name": "doctor sleep",
        "link": "maleficent",
      },
    ];
  }

  Search() {
    if (this.fname != "") {
      this.films = this.films.filter(res => {
        return res.name.toLocaleLowerCase()
          .match(this.fname.toLocaleLowerCase());
      });

      if (this.films.length > 0) {
        this.searchClass = true;
      } else {
        this.searchClass = false;
      }

    }
    else {
      this.searchClass = false;
      this.loadfilms();
    }

  }




}
