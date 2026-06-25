import { CountryService } from './../../services/country.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-data-page',
  imports: [],
  templateUrl: './country-data-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDataPage {

  countryCode = inject(ActivatedRoute).snapshot.params['code']

  countryService = inject(CountryService)

  countryResource = rxResource({
    params: () => ({code: this.countryCode}),
    stream: ({params}) => {
      const data = this.countryService.searchByAlphaCode(params.code)
      console.log(data);

      return data

    }
  })

}
