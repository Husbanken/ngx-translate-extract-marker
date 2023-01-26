import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marker'
})
export class MarkerPipe implements PipeTransform {
  transform(key: unknown): unknown {
    return key;
  }
}
