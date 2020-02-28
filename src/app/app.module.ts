import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import { NgImageSliderModule } from 'ng-image-slider';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddCommentComponent } from './add-comment/add-comment.component';
import { ComingFilmComponent } from './coming-film/coming-film.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IconStarComponent } from './icon-star/icon-star.component';
import { NewFilmComponent } from './new-film/new-film.component';
import { SearchComponent } from './search/search.component';
import { TopFilmComponent } from './top-film/top-film.component';
import { LoginComponent } from './login-registr/login/login.component';
import { RegistrComponent } from './login-registr/registr/registr.component';
import { AboutComponent } from './menu-fill/about/about.component';
import { ContactComponent } from './menu-fill/contact/contact.component';
import { GalleryComponent } from './menu-fill/gallery/gallery.component';
import { HomeComponent } from './menu-fill/home/home.component';
import { MenuComponent } from './menu-fill/menu/menu.component';
import { NewsComponent } from './menu-fill/news/news.component';
import { ServicesComponent } from './menu-fill/services/services.component';
import { BirdsComponent } from './movie-details/birds/birds.component';
import { FuriousComponent } from './movie-details/furious/furious.component';
import { MovieFiveComponent } from './movie-details/movie-five/movie-five.component';
import { MovieFourComponent } from './movie-details/movie-four/movie-four.component';
import { MovieHeaderComponent } from './movie-details/movie-header/movie-header.component';
import { MovieOneComponent } from './movie-details/movie-one/movie-one.component';
import { MovieSixComponent } from './movie-details/movie-six/movie-six.component';
import { MovieThreeComponent } from './movie-details/movie-three/movie-three.component';
import { MovieTwoComponent } from './movie-details/movie-two/movie-two.component';
import { MulanComponent } from './movie-details/mulan/mulan.component';
import { SliderComponent } from './movie-details/slider/slider.component';
import { AnimfilmComponent } from './menu-fill/category/animfilm/animfilm.component';
import { ComedyfilmComponent } from './menu-fill/category/comedyfilm/comedyfilm.component';
import { ExpfilmComponent } from './menu-fill/category/expfilm/expfilm.component';
import { FantasyfilmComponent } from './menu-fill/category/fantasyfilm/fantasyfilm.component';
import { HistorifilmComponent } from './menu-fill/category/historifilm/historifilm.component';
import { SlidervideoComponent } from './menu-fill/category/slidervideo/slidervideo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    NewsComponent,
    ContactComponent,

    NewFilmComponent,
    ComingFilmComponent,
    FooterComponent,
    MovieOneComponent,
    MovieTwoComponent,
    MovieThreeComponent,
    MovieFourComponent,
    MovieFiveComponent,

    MovieSixComponent,

    IconStarComponent,

    TopFilmComponent,

    AddCommentComponent,

    BirdsComponent,

    FuriousComponent,

    MulanComponent,

    HeaderComponent,

    SliderComponent,

    LoginComponent,

    RegistrComponent,

    MovieHeaderComponent,

    SearchComponent,

    AnimfilmComponent,

    HistorifilmComponent,

    ExpfilmComponent,

    ComedyfilmComponent,

    FantasyfilmComponent,

    SlidervideoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule,
    AnimateOnScrollModule.forRoot(),
    MatInputModule,
    HttpClientModule,
    NgImageSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
