import {TestBed, TestModuleMetadata, async} from '@angular/core/testing';
import {platformBrowserDynamicTesting, BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {StoreModule} from '@ngrx/store';

import {AppState} from '../models/appState';
import {rootReducer} from '../state/rootReducer';
import {AppStateService} from '../services/appStateService';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

export function configureTestModule(moduleMetadata: TestModuleMetadata, appState: AppState = {}): any {
  return async(() => {
    TestBed.configureTestingModule(
      addImportsAndProvidersToModuleMetadata(moduleMetadata, appState)
    ).compileComponents();
  });
}

function addImportsAndProvidersToModuleMetadata(
  moduleMetadata: TestModuleMetadata, appState: AppState
): TestModuleMetadata {
  if (!moduleMetadata.imports) {
    moduleMetadata.imports = [];
  }

  moduleMetadata.imports.push(StoreModule.provideStore(rootReducer, appState));

  if (!moduleMetadata.providers) {
    moduleMetadata.providers = [];
  }

  moduleMetadata.providers.push(AppStateService);

  return moduleMetadata;
}