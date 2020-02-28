import { Component, OnInit } from '@angular/core';

import { Film } from '../model/film';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: boolean = false;
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
        name: "birds of prey",
        link: "birds",
      },
      {
        name: "joker",
        link: "joker",
      },
      {
        name: "malificent",
        link: "maleficent",
      },
      {
        name: "aquaman",
        link: "aquaman",
      },
      {
        name: "skin",
        link: "skin",
      },
      {
        name: "mulan",
        link: "mulan",
      },
      {
        name: "furious",
        link: "furious",
      },
      {
        name: "Game of Thrones",
        link: "gameOfThrones",
      },
      {
        name: "doctor sleep",
        link: "doctorSleep",
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
  searchBtn() {
    this.search = !this.search;
  }


}
