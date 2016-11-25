import {Router} from '@angular/router';
import {inject} from '@angular/core/testing';

import {TestComponentSupport} from '../../../../test/testComponentSupport';
import {SelectedInvestingGoalComponent} from './selected-investing-goal';
import {configureTestModule} from '../../../../test/testComponentModule';
import {createDefaultProfile} from '../../../../models/profile/profile';
import {LocaleModule} from '../../../../components/locale/locale.module';
import {LocaleService} from '../../../../services/locale/locale.service';
import {updateObject} from '../../../../state/util';
import {createInvestingGoal} from '../../../../models/investingGoals/investingGoal';
import {ClientOnboardingStates} from '../../../../models/profile/clientOnboardingStates';
import {createTestLocalizationStrings} from '../../../../test/createTestLocalizationStrings';

export class MockRouter {
  url: string;
}

describe('Component: SelectedInvestingGoalComponent', () => {

  let support: TestComponentSupport<SelectedInvestingGoalComponent>;

  beforeEach(configureTestModule(
    {
      imports: [LocaleModule],
      declarations: [SelectedInvestingGoalComponent],
      providers: [
        {provide: Router, useClass: MockRouter},
        LocaleService
      ]
    },
    createTestLocalizationStrings({
      'clientOnboarding': {
        'heading': 'Define your goal',
        'discoveryHeading': 'Define your {0} goal',
        'createAPlanHeading': 'Plan your {0} goal',
        'openAnAccountHeading': 'Invest in your {0} goal'
      }
    })
  ));

  beforeEach(() => {
    support = new TestComponentSupport<SelectedInvestingGoalComponent>(
      SelectedInvestingGoalComponent
    );
    support.component.profile = createDefaultProfile();
    support.update();
  });

  describe('when the url is not null', () => {
    it('should have the discovery heading', () => {
      expect(support.component.heading).toEqual(ClientOnboardingStates.Discovery.heading);
    });
  });

  describe('when the url matches another client onboarding state', () => {
    beforeEach(inject([Router], (router: Router) => {
      router.url = '/clientOnboarding/openAnAccount';
      support.update();
    }));

    it('should have the state\'s heading', () => {
      expect(support.component.heading).toEqual(ClientOnboardingStates.OpenAnAccount.heading);
    });
  });

  describe('when no investing goal is selected', () => {
    it('should not have a goal selected', () => {
      expect(support.component.hasSelectedInvestingGoal).toEqual(false);
    });

    it('should not have a goal name', () => {
      expect(support.component.selectedInvestingGoalName).toEqual('');
    });

    it('should have an empty heading', () => {
      const heading = support.getInnerHtml('.heading');
      expect(heading).toEqual('Define your goal');
    });
  });

  describe('when an investing goal is selected', () => {
    beforeEach(() => {
      support.component.profile = updateObject(createDefaultProfile(), {
        selectedInvestingGoal: updateObject(createInvestingGoal(), {
          name: 'Wedding'
        })
      });
      support.update();
    });

    it('should have a goal selected', () => {
      expect(support.component.hasSelectedInvestingGoal).toEqual(true);
    });

    it('should have a goal name defined', () => {
      expect(support.component.selectedInvestingGoalName).toEqual('Wedding');
    });

    describe('when in the discovery section', () => {
      beforeEach(inject([Router], (router: Router) => {
        router.url = '/clientOnboarding/discovery';
        support.update();
      }));

      it('should have a heading with the lowercase selected goal name', () => {
        const heading = support.getInnerHtml('.heading');
        expect(heading).toEqual('Define your wedding goal');
      });
    });

    describe('when in the createAPlan section', () => {
      beforeEach(inject([Router], (router: Router) => {
        router.url = '/clientOnboarding/createAPlan';
        support.update();
      }));

      it('should have a heading with the lowercase selected goal name', () => {
        const heading = support.getInnerHtml('.heading');
        expect(heading).toEqual('Plan your wedding goal');
      });
    });

    describe('when in the openAnAccount section', () => {
      beforeEach(inject([Router], (router: Router) => {
        router.url = '/clientOnboarding/openAnAccount';
        support.update();
      }));

      it('should have a heading with the lowercase selected goal name', () => {
        const heading = support.getInnerHtml('.heading');
        expect(heading).toEqual('Invest in your wedding goal');
      });
    });
  });

});