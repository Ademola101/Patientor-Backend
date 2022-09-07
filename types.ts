export interface Diagnose {
  code: string,
  name:string,
  latin? : string
}

// export type gender  = 'male' | 'female';

export enum Gender {
  male = 'male',
  female = 'female'
}

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string
}

export type nonSensitiveData = Omit<Patient, 'ssn'>;

export type newPatientEntry = Omit<Patient, 'id'>;
