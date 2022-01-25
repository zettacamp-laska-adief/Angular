import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
