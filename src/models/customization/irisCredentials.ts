export interface IrisCredentials {
  readonly username: string;
  readonly password: string;
  readonly userType: string;
}

export function createDefaultIrisCredentials(): IrisCredentials {
  return {
    username: null,
    password: null,
    userType: null,
  };
}

export function createInvestorIrisCredentials(username: string, password: string): IrisCredentials {
  return {
    username,
    password,
    userType: 'INVESTOR'
  };
}