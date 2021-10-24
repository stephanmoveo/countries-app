import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  constructor(public countriesService: CountriesService) { }

  searchText: string = '';

  resetPage() {
    this.countriesService.allCountriesArrMoke = [];
    this.countriesService.cloneArray()
  }
  removeCountry(name: any) {
    this.countriesService.allCountriesArrMoke.splice(this.countriesService.allCountriesArrMoke.findIndex(item => item.countryName === name), 1)
  }

  ngOnInit(): void {
    if(this.countriesService.allCountriesArr.length === 0)
    this.countriesService.getAll()
  }
}
