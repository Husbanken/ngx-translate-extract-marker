import { NgModule } from '@angular/core';
import { MarkerDirective } from './ngx-translate-extract-marker.directive';
import { MarkerPipe } from './ngx-translate-extract-marker.pipe';


@NgModule({
  declarations: [
    MarkerDirective,
    MarkerPipe
  ],
  imports: [],
  exports: [
    MarkerDirective,
    MarkerPipe
  ]
})
export class MarkerModule {}
