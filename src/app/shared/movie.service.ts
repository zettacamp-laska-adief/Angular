import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [
    {
      idMovie: 1,
      title: 'Spider-Man: No Way Home',
      year: 2021,
      actor: [1, 2, 3, 4],
      rating: 8.7,
      synopsis:
        "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man",
      poster:
        'https://cdn0-production-images-kly.akamaized.net/Yy0SVhQK_omfhAmyoM1Qz7Kq6Ew=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3687377/original/038531300_1639456223-MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM_._V1_FMjpg_UY720_.jpg',
    },
    {
      idMovie: 2,
      title: 'Spider-Man: Homecoming',
      year: 2017,
      actor: [1, 5, 6, 7],
      rating: 7.4,
      synopsis:
        'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City',
      poster:
        'https://cdn-production-thumbor-vidio.akamaized.net/irDwXK9PGrtqDMraN07EOXKbNww=/filters:quality(70)/vidio-web-prod-film/uploads/film/image_portrait/3426/spider-man-homecoming-c94fd8.jpg',
    },
    {
      idMovie: 3,
      title: 'The Avengers',
      year: 2012,
      actor: [6, 8, 9, 10, 11],
      rating: 8.0,
      synopsis:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity",
      poster: 'http://www.movienewsletters.net/photos/067625R1.jpg',
    },
    {
      idMovie: 4,
      title: 'Captain America: Civil War',
      year: 2016,
      actor: [6, 8, 1],
      rating: 8.1,
      synopsis:
        "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man",
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg',
    },
    {
      idMovie: 5,
      title: 'Avengers: Infinity War',
      year: 2018,
      actor: [6, 8, 9],
      rating: 8.4,
      synopsis:
        'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
    },
    {
      idMovie: 6,
      title: 'Avengers: Age of Ultron',
      year: 2015,
      actor: [6, 8, 9],
      rating: 7.3,
      synopsis:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan",
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    const movie = this.movies.find((m) => {
      return m.idMovie == id;
    });
    return movie;
  }
}
