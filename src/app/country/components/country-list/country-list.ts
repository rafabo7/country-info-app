import { Component, input } from '@angular/core';
import { RESTCountriesResponse, RestCountry } from '../../interfaces/Rest-countries-response.interface';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
})
export class CountryList {

  countryList = input<Country[]>([])

  errorMessage = input<string|unknown|null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)
}
