import {Routes} from '@angular/router';

import {
  TableOfContentsContainerComponent
} from './components/table-of-contents-container/table-of-contents-container.component';

export const tableOfContentsRoutes: Routes = [
  {
    path: 'tableOfContents',
    component: TableOfContentsContainerComponent
  }
];
