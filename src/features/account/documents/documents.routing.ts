import {Routes} from '@angular/router';

import {DocumentsContainerComponent} from './components';
import {IsLoggedInGuardService} from '../services/isLoggedInGuard.service';

export const documentsRoutes: Routes = [
  {
    path: 'documents',
    component: DocumentsContainerComponent,
    canActivate: [IsLoggedInGuardService]
  }
];