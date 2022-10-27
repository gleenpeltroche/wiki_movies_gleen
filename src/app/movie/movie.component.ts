import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../core/models/movie.model';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(private movieServie: MovieService) {}
  currentPage: number = 1;
  movies: MovieModel[] = [];
  getPopularMovies(direction: string = '') {
    if (this.currentPage > 1 && direction === 'back') {
      this.currentPage = this.currentPage - 1;
    }
    if (this.currentPage < 500 && direction === 'forward') {
      this.currentPage = this.currentPage + 1;
    }
    this.movieServie.getPopularMovies(this.currentPage.toString()).subscribe({
      next: (response) => {
        this.movies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getPopularMovies();
  }
}
