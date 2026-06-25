import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading-msg',
  imports: [],
  templateUrl: './loading-msg.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingMsg {}
