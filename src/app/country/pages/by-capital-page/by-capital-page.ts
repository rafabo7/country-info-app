import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RestCountry, RESTCountriesResponse } from '../../interfaces/Rest-countries-response.interface';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)
  query = signal('')

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream:  ({ params }) => {
      if (!params.query) return of([])

      return this.countryService.searchByCapital(params.query)
    }
  })

}
