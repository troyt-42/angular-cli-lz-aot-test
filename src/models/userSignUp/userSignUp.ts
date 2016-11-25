export interface UserSignUp {
  readonly user: any;
  readonly error: string;
  readonly isLoading: boolean;
  readonly consentForEmailNotification: boolean;
}

export function createDefaultUserSignUp(): UserSignUp {
  return {
    user: null,
    error: null,
    isLoading: false,
    consentForEmailNotification: false
  };
}