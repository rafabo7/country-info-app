import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  imports: [],
  templateUrl: './error-msg.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMsg {
  message = input.required()
  location = inject(Location)

  goBack() {
    this.location.back()
  }
}
