import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {

  routeRoute = inject(ActivatedRoute);

  gender = toSignal<string>(this.routeRoute().params['gender']);

 }
