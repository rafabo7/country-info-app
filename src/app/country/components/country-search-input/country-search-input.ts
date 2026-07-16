import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {

  query = output<string>()
  debounceTime = input(1000)
  placeholder = input('Buscar...')

  initialInputValue = input<string>()
  inputValue = linkedSignal<string>(()=> this.initialInputValue() ?? '')

  debounceEffect = effect( (onCleanup) => {
    const value = this.inputValue()
    const timeout = setTimeout(() => {
      this.query.emit(value)
    }, this.debounceTime());

    onCleanup(() => {clearTimeout(timeout)})
  })
}
