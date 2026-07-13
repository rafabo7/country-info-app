import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {

  query = output<string>()

  placeholder = input('Buscar...')

  inputValue = signal<string>('')

  debounceEffect = effect( (onCleanup) => {
    const value = this.inputValue()
    const timeout = setTimeout(() => {
      this.query.emit(value)
    }, 500);

    onCleanup(() => {clearTimeout(timeout)})
  })
}
