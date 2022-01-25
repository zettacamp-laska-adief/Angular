import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { MovieListComponent } from '../movie/movie-list/movie-list.component';
import { MovieDetailComponent } from '../movie/movie-detail/movie-detail.component';
import { ActorComponent } from '../actor/actor.component';
import { ActorListComponent } from '../actor/actor-list/actor-list.component';
import { ActorDetailComponent } from '../actor/actor-detail/actor-detail.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  {
    path: 'movie',
    component: MovieComponent,
    children: [
      { path: '', component: MovieListComponent },
      { path: ':id', component: MovieDetailComponent },
    ],
  },
  {
    path: 'actor',
    component: ActorComponent,
    children: [
      { path: '', component: ActorListComponent },
      { path: ':id', component: ActorDetailComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
