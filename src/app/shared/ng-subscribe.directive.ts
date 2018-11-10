import {
    ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';

export interface NgSubscribeContext {
  $implicit: any | undefined;
  ngSubscribe: any | undefined;
}

/**
 * From https://netbasal.com/diy-subscription-handling-directive-in-angular-c8f6e762697f
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngSubscribe]',
})
export class NgSubscribeDirective implements OnInit, OnDestroy {
  private currentObservable: Observable<any> | undefined;
  private context: NgSubscribeContext = {
    $implicit: undefined,
    ngSubscribe: undefined,
  };
  private currentSubscription: Subscription | undefined;

  @Input()
  set ngSubscribe(inputObservable: Observable<any>) {
    if (this.currentObservable === inputObservable) {
      return;
    }

    this.handleNewObservable(inputObservable);
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private templateRef: TemplateRef<any>,
  ) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  ngOnDestroy() {
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }
  }

  private handleNewObservable(inputObservable: Observable<any>) {
    this.currentObservable = inputObservable;

    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }

    this.currentSubscription = this.currentObservable.subscribe(value => {
      this.context.ngSubscribe = value;
      this.cdr.markForCheck();
    });
  }
}
