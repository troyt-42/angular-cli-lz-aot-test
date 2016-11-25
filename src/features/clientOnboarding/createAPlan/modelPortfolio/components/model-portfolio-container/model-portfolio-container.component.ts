import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {ModelPortfolioActions} from '../../../../../../state/modelPortfolio/modelPortfolio.actions';
import {ModelPortfolio} from '../../../../../../models/modelPortfolio/modelPortfolio';
import {Colors} from '../../../../../../models/customization/colors';
import {AppStateService} from '../../../../../../services/appStateService/appState.service';

@Component({
  templateUrl: './model-portfolio-container.component.html'
})
export class ModelPortfolioContainerComponent {

  private modelPortfolio$: Observable<ModelPortfolio>;
  private colors$: Observable<Colors>;

  constructor(
    private appStateService: AppStateService,
    private modelPortfolioActions: ModelPortfolioActions
  ) {
    this.modelPortfolio$ = this.appStateService.getModelPortfolio();
    this.colors$ = this.appStateService.getColors();

    this.modelPortfolioActions.loadModelPortfolio('1');
  }

}