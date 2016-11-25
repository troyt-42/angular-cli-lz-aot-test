import {Routes} from '@angular/router';
import {EmailSentContainerComponent} from './components/email-sent-container/email-sent-container.component';

export const emailSentRoutes: Routes = [
  {
    path: 'email-sent',
    component: EmailSentContainerComponent
  }
];
