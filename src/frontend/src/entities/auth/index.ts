export type EntityId = number | string;

export interface BaseEntity {
  id: EntityId;
}

export interface RefreshToken {
  refresh: string;
}

export interface AccessToken {
  access: string;
}

export type TokenPair = {
  access_token: string;
  refresh_token: string;
};

export type ISignIn = {
  email: string;
  password: string;
};

export type ISignUp = {
  email: string;
  password: string;
};
