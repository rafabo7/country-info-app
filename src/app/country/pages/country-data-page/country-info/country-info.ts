import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-info',
  imports: [DecimalPipe],
  templateUrl: './country-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfo {
  country = input.required<Country>()
}
