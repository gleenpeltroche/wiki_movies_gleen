import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RickMortyResponse } from '../models/rick-morty.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  constructor(private httpClient: HttpClient) {}
  
  getCharacters(page: string = '1'): Observable<RickMortyResponse> {
    const params = new HttpParams()
      .set('page', page)
    return this.httpClient.get<RickMortyResponse>(
      `${environment.rickMortyApi.baseUrl}${environment.rickMortyApi.characters}`,
      { params: params }
    );
  }
}
