
export interface User {
  readonly contactSysId: string;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly language: string;
  readonly lastName: string;
  readonly status: string;
  readonly username: string;
}

export function createDefaultUser(): User {
  return {
    contactSysId: null,
    email: null,
    firstName: null,
    id: null,
    language: null,
    lastName: null,
    status: null,
    username: null
  };
}
