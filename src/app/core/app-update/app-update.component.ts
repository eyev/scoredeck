import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sd-app-update',
  templateUrl: './app-update.component.html',
  styleUrls: ['./app-update.component.scss'],
})
export class AppUpdateComponent {
  isUpdateAvailable = of<boolean>();
  constructor(private swUpdate: SwUpdate) {
    this.isUpdateAvailable = this.swUpdate.available.pipe(
      map(event => event.available.hash !== event.current.hash),
    );
  }

  click() {
    window.location.reload();
  }
}
