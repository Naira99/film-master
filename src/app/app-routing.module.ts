import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComingFilmComponent } from './coming-film/coming-film.component';
import { HeaderComponent } from './header/header.component';
import { NewFilmComponent } from './new-film/new-film.component';
import { SearchComponent } from './search/search.component';
import { TopFilmComponent } from './top-film/top-film.component';
import { LoginComponent } from './login-registr/login/login.component';
import { RegistrComponent } from './login-registr/registr/registr.component';
import { AboutComponent } from './menu-fill/about/about.component';
import { ContactComponent } from './menu-fill/contact/contact.component';
import { GalleryComponent } from './menu-fill/gallery/gallery.component';
import { HomeComponent } from './menu-fill/home/home.component';
import { NewsComponent } from './menu-fill/news/news.component';
import { BirdsComponent } from './movie-details/birds/birds.component';
import { FuriousComponent } from './movie-details/furious/furious.component';
import { MovieFiveComponent } from './movie-details/movie-five/movie-five.component';
import { MovieFourComponent } from './movie-details/movie-four/movie-four.component';
import { MovieOneComponent } from './movie-details/movie-one/movie-one.component';
import { MovieSixComponent } from './movie-details/movie-six/movie-six.component';
import { MovieThreeComponent } from './movie-details/movie-three/movie-three.component';
import { MovieTwoComponent } from './movie-details/movie-two/movie-two.component';
import { MulanComponent } from './movie-details/mulan/mulan.component';
import { AnimfilmComponent } from './menu-fill/category/animfilm/animfilm.component';
import { ComedyfilmComponent } from './menu-fill/category/comedyfilm/comedyfilm.component';
import { ExpfilmComponent } from './menu-fill/category/expfilm/expfilm.component';
import { FantasyfilmComponent } from './menu-fill/category/fantasyfilm/fantasyfilm.component';
import { HistorifilmComponent } from './menu-fill/category/historifilm/historifilm.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'topfilm',
        pathMatch: 'full',

      },
      {
        path: 'topfilm',
        component: TopFilmComponent
      },
      {
        path: 'newfilm',
        component: NewFilmComponent
      },
      {
        path: 'coming',
        component: ComingFilmComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'topfilm',
        pathMatch: 'full',

      },
      {
        path: 'topfilm',
        component: TopFilmComponent
      },
      {
        path: 'newfilm',
        component: NewFilmComponent
      },
      {
        path: 'coming',
        component: ComingFilmComponent
      }
    ]
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'gameOfThrones',
    component: MovieOneComponent
  },
  {
    path: 'joker',
    component: MovieTwoComponent
  },
  {
    path: 'maleficent',
    component: MovieThreeComponent
  },
  {
    path: 'skin',
    component: MovieFourComponent
  },
  {
    path: 'aquaman',
    component: MovieFiveComponent,
  },

  {
    path: 'doctorSleep',
    component: MovieSixComponent
  },
  {
    path: 'furious',
    component: FuriousComponent
  },
  {
    path: 'birds',
    component: BirdsComponent
  },
  {
    path: 'mulan',
    component: MulanComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrComponent
  },

  {
    path: 'animatedfilms',
    component: AnimfilmComponent
  },
  {
    path: 'historifilm',
    component: HistorifilmComponent
  },
  {
    path: 'dramafilm',
    component: ExpfilmComponent
  },
  {
    path: 'comedyfilm',
    component: ComedyfilmComponent
  },
  {
    path: 'fantasyfilm',
    component: FantasyfilmComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    redirectTo: '/home/topfilm',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
