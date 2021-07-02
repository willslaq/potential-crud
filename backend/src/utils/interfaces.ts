export interface FilterOption {
  name?: string;
  gender?: string;
}

export interface RequestId {
  id: string;
}

export interface RequestDeveloperDTO {
  name: string;
  gender: string;
  age: number;
  hobby: string;
  birthDate: Date;
}

export interface DatabaseDeveloperDTO {
  name: string;
  gender: string;
  age: number;
  hobby: string;
  birthdate: Date;
}
