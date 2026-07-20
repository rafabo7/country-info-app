import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)

  activatedRoute = inject(ActivatedRoute)

  router = inject(Router)
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? ''

  query = linkedSignal(() => this.queryParam)

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream:  ({ params }) => {
      if (!params.query) return of([])
      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: params.query
        }
      })
      return this.countryService.searchByCapital(params.query)
    }
  })

}
