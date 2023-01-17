import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marker',
})
export class MarkerPipe implements PipeTransform {
  public transform<T extends string | string[]>(key: T): T {
    return key;
  }
}
