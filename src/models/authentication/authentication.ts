import {User, createDefaultUser} from './user';

export interface Authentication {
  readonly isLoggingIn: boolean;
  readonly userToken: string;
  readonly anonymousToken: string;
  readonly error: Error;
  readonly username: string;
  readonly rememberUsername: boolean;
  readonly user: User;
}

export function createDefaultAuthentication(): Authentication {
  return {
    isLoggingIn: false,
    userToken: null,
    anonymousToken: null,
    error: null,
    username: null,
    rememberUsername: false,
    user: createDefaultUser()
  };
}

export function isLoggedIn(authentication: Authentication): boolean {
  return !!authentication.userToken && !!authentication.user.contactSysId;
}