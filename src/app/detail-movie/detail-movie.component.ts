import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MovieModel, MoviePeople } from '../core/models/movie.model';
import { MovieService } from '../core/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  movie?: MovieModel;
  moviePeople?: MoviePeople;
  baseUrlActorPath = environment.theMovieApi.baseUrlActorPath;
  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (params: Params) => {
        const idMovie: string = params['idMovie'];
        this.getMovieDetails(idMovie);
      },
    });
  }
  private getMovieDetails(idMovie: string){
    const movieDetail = forkJoin({
      movieInfo: this.movieService.getMovieById(idMovie),
      moviePeople: this.movieService.getMoviePeople(idMovie)
    })
    movieDetail.subscribe({
      next: (response) => {
        this.movie = response.movieInfo;
        this.moviePeople = response.moviePeople
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
}
