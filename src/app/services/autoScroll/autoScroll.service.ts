import {Injectable} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs';

const doc = (<any>window.document);

@Injectable()
export class AutoScrollService {

  subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  registerWithRouter(router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        doc.body.scrollIntoView();
      }
    });
  }
}