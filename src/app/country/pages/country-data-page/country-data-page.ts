import { CountryService } from './../../services/country.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ErrorMsg } from '../../../shared/components/error-msg/error-msg';
import { LoadingMsg } from "../../../shared/components/loading-msg/loading-msg";
import { CountryInfo } from "./country-info/country-info";

@Component({
  selector: 'app-country-data-page',
  imports: [ErrorMsg, LoadingMsg, CountryInfo],
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
