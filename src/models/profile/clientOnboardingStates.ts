import {ClientOnboardingState} from './clientOnboardingState';

export class ClientOnboardingStates {

  static readonly Discovery: ClientOnboardingState = new ClientOnboardingState(
    'discovery', 1
  );

  static readonly CreateAPlan: ClientOnboardingState = new ClientOnboardingState(
    'createAPlan', 2
  );

  static readonly OpenAnAccount: ClientOnboardingState = new ClientOnboardingState(
    'openAnAccount', 3
  );

}

export function getClientOnboardingStateByUrl(url: string): ClientOnboardingState {
  if (!url) {
    return ClientOnboardingStates.Discovery;
  }

  const foundStateProperty = Object.keys(ClientOnboardingStates).find(key => {
    return url.indexOf(ClientOnboardingStates[key].url) >= 0;
  });

  return foundStateProperty ?
    ClientOnboardingStates[foundStateProperty] :
    ClientOnboardingStates.Discovery;
}