import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { isRegion, Region, REGIONS } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {

  public regions = REGIONS

  private activatedRoute = inject(ActivatedRoute)

  private router = inject(Router)

  private queryParam = this.activatedRoute.snapshot.queryParamMap.get('query')

  public selectedRegion = linkedSignal<Region | null>(() => {
    return this.queryParam && isRegion(this.queryParam)
      ? this.queryParam
      : null
    }
  )

  private countryService = inject(CountryService)

  countryResource = rxResource({
    params: () => ({ query: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.query) return of([])
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          query: params.query
        }
      })
      return this.countryService.searchByRegion(params.query)
    }
  })

}
