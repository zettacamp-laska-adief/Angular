import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  @Input('movieData') movie!: Movie;

  constructor() {}

  ngOnInit(): void {}
}
