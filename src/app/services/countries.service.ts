import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../shared/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(public http: HttpClient) { }

  logsArr = JSON.parse(localStorage.getItem("logs") as any)

  allCountriesArrMoke: Country[] = [];

  allCountriesArr = [] as any;

  cloneArray() {
    this.allCountriesArrMoke = this.allCountriesArr.map((country: any) => {
      let clonedCountry: Country = {
        countryName: country.name.common,
        countrySrc: country.flag
      };
      return clonedCountry
    });
  }
  getAll() {
    this.getAllCountries().subscribe(data => {
      this.allCountriesArr = data
      this.cloneArray()
    })
  }
  getAllCountries(): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/subregion/europe`)
  }

}
