import { Component, OnInit } from '@angular/core';
import { CountryI } from '../../interfaces/countries.interface';
import { FormControl } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { debounceTime } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-search-countries',
  templateUrl: './search-countries.component.html',
  styleUrl: './search-countries.component.css',
})
export class SearchCountriesComponent implements OnInit {
  countries: CountryI[] | null = null;
  search: FormControl = new FormControl('');
  loading: boolean = false;
  constructor(
    private countriesService: CountriesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.countriesService.countries$.subscribe((data) => {
      console.log(data);
      this.countries = data;
    });

    this.search.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
      this.loading = true;
      this.countriesService.getCountries(value).subscribe(() => {
        this.loading = false;
      });
    });

    this.loading = true;
    this.countriesService.getCountries('').subscribe(() => {
      this.loading = false;
    });
  }

  addFavorite(country: CountryI) {
    this.countriesService.addFavorite(country);
  }

  deleteFavorite(country: CountryI) {
    this.countriesService.deleteFavorite(country);
  }

  verifyFavorite(country: CountryI): boolean {
    return this.countriesService.verifyFavorite(country);
  }
  signOut() {
    this.authService.signOut();
  }
}
