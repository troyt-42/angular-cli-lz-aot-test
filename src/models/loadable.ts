export interface Loadable {
  readonly isLoading: boolean;
  readonly isReceived: boolean;
  readonly error: Error;
}

function doesErrorExist(loadable: Loadable) {
  return !!loadable && !!loadable.error;
}

export function isErrorAString(loadable: Loadable): boolean {
  return doesErrorExist(loadable) &&
    typeof loadable.error === 'string' ||
    loadable.error instanceof String;
}

export function isErrorAnErrorObject(loadable: Loadable): boolean {
  return doesErrorExist(loadable) && loadable.error instanceof Error;
}