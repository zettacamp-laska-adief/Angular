import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/actor';
import { ActorService } from 'src/app/shared/actor.service';
import { Movie } from 'src/app/shared/movie';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css'],
})
export class InfoMovieComponent implements OnInit {
  @Input('movieInfo') movie!: Movie;
  listActor!: Actor[];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {}
}
