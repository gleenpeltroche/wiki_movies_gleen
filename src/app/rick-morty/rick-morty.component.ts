import { Component, OnInit } from '@angular/core';
import { RickMortyResult } from '../core/models/rick-morty.model';
import { RickMortyService } from '../core/services/rick-morty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss']
})
export class RickMortyComponent implements OnInit {

  constructor(private rickMortyService: RickMortyService) {}
  currentPage: number = 1;
  characters: RickMortyResult[] = [];
  disabledPreviusPage: boolean = true;
  disabledNextPage: boolean = true;

  getPopularMovies(direction: string = '') {
    if (this.currentPage > 1 && direction === 'back') {
      this.currentPage = this.currentPage - 1;
    }
    if (this.currentPage < 500 && direction === 'forward') {
      this.currentPage = this.currentPage + 1;
    }
    this.rickMortyService.getCharacters(this.currentPage.toString()).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.disabledPreviusPage = response.info.prev ? false : true;
        this.disabledNextPage = response.info.next ? false : true;
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
