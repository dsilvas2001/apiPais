import { Injectable } from '@angular/core';
import { CountryI } from '../interfaces/countries.interface';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _countries = new BehaviorSubject<CountryI[] | null>(null);

  get countries$(): Observable<CountryI[] | null> {
    return this._countries.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  getCountries(search: string) {
    console.log(search);
    return this.httpClient
      .get<CountryI[]>(
        'https://restcountries.com/v3.1/all?fields=name,flags,cca3'
      )
      .pipe(
        map((data) => {
          return data.filter((country) => {
            return country.name.common
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          });
        }),
        tap((data) => {
          this._countries.next(data);
        })
      );
  }

  addFavorite(country: CountryI) {
    const favorites = localStorage.getItem('favorites') || '[]';
    const parsed = JSON.parse(favorites) as CountryI[];
    parsed.push(country);

    localStorage.setItem('favorites', JSON.stringify(parsed));
  }

  deleteFavorite(country: CountryI) {
    const favorites = localStorage.getItem('favorites') || '[]';
    const parsed = JSON.parse(favorites) as CountryI[];
    const filtered = parsed.filter((c) => c.cca3 !== country.cca3);
    localStorage.setItem('favorites', JSON.stringify(filtered));
  }

  verifyFavorite(country: CountryI): boolean {
    if (!country) {
      return false;
    }
    const favorites = localStorage.getItem('favorites') || '[]';
    const parsed = JSON.parse(favorites) as CountryI[];
    return parsed.find((c) => c.cca3 === country.cca3) ? true : false;
  }

  getCountriesFavorites() {
    const favorites = localStorage.getItem('favorites') || '[]';
    return JSON.parse(favorites) as CountryI[];
  }
}
