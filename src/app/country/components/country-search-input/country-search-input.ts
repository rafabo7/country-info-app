import { Component, input, output } from '@angular/core';
import countryRoutes from '../../country.routes';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {

  query = output<string>()

  placeholder = input('Buscar...')

  // onSearch(value: string) {
  // validacion
  //   this.query.emit(value)
  // }

}
