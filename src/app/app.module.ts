import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieItemComponent } from './movie/movie-list/movie-item/movie-item.component';
import { MovieInputComponent } from './movie/movie-input/movie-input.component';
import { ActorComponent } from './actor/actor.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorItemComponent } from './actor/actor-list/actor-item/actor-item.component';
import { ActorInputComponent } from './actor/actor-input/actor-input.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { InfoMovieComponent } from './movie/movie-detail/info-movie/info-movie.component';
import { InfoActorComponent } from './movie/movie-detail/info-actor/info-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieInputComponent,
    ActorComponent,
    MovieDetailComponent,
    ActorListComponent,
    ActorItemComponent,
    ActorInputComponent,
    ActorDetailComponent,
    AboutComponent,
    InfoMovieComponent,
    InfoActorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
