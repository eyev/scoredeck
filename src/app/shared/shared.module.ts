import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
    MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { MatRippleModule } from '@angular/material/core';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgSubscribeDirective } from './ng-subscribe.directive';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    LoadingSpinnerComponent,
    NgSubscribeDirective,
  ],
  declarations: [LoadingSpinnerComponent, NgSubscribeDirective],
})
export class SharedModule {}
