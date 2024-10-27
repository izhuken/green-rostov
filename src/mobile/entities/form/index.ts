export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegistrationFormData {
  email: string;
  username: string;
  phone: string;
  password: string;
}

export interface NewProduct {
  title: string;
  carbon: number;
}

export interface NewAuto {
  mark: string;
  model: string;
  distance_value: string;
}
