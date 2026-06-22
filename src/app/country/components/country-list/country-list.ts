import { Component, input } from '@angular/core';
import { RESTCountriesResponse, RestCountry } from '../../interfaces/Rest-countries-response.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryList {

  countryList = input<Country[]>([])
}
