import { Directive } from '@angular/core';

@Directive({
  selector: '[marker]',
})
export class MarkerDirective {}

@Directive({
  selector: '[marker]',
  standalone: true,
})
export class MarkerDirectiveStandalone {}
