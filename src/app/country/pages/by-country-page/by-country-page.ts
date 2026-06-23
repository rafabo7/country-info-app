import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService = inject(CountryService)
  query = signal('')

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if ( !params.query ) return of([])
      return this.countryService.searchByCountryName(params.query)
    }
  })

}
