import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { CountryList } from "../../components/country-list/country-list";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService = inject(CountryService)

  activatedRoute = inject(ActivatedRoute)

  router = inject(Router)
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? ''

  query = signal(this.queryParam)

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([])
      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query
        }
      })
      return this.countryService.searchByCountryName(params.query)
    }
  })

}
