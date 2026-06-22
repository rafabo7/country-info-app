import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RestCountry, RESTCountriesResponse } from '../../interfaces/Rest-countries-response.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)

  isLoading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<Country[]>([])

  onSearch( query: string ) {

    if ( this.isLoading() ) return

    this.isLoading.set(true)

    const response = this.countryService.searchByCapital(query)
      .subscribe( countries => {
        this.isLoading.set(false)
        this.countries.set(countries)

        console.log(countries);
      } )




  }


}
