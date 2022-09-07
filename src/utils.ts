import {Gender, newPatientEntry} from '../types';

const isString = (text:unknown): text is string => {

  return typeof text === 'string' || text instanceof String;

};

const parseValue  = (value:unknown, field:string) => {
  if (!value || !isString(value)) {

    throw new Error(`Incorrect of missing ${field} : ${value}`);
    

  }

  return value;

};

const isDate = (date:string):boolean => {
  
    return Boolean(Date.parse(date));
  

};

// const parseName = (name:unknown):string => {

//   if(!name || !isString(name)) {
//     throw new Error("Incorrect of missing name");
    
//   }

//   return name;

// };

const isGender = (params:any): params is Gender => {

  return Object.values(Gender).includes(params);

};

const parseGender = (gender:unknown):Gender => {

  if(!gender || !isGender(gender)) {
    throw new Error("Incorrector missing gender");
    
  }
  return gender;

};

const parseDate = (date:unknown):string => {
  
    if(!date || !isString(date) || !isDate(date) )  {
      throw new Error("Incorrect or missing date");
    }
  
    return date;
};

// const parseSsn = (ssn:unknown):string => {
//   if(!ssn || isString(ssn)) {
//     throw new Error("Missing or incorrect ssn");
    
  
//   }

//   return ssn;
// };

// type Field = {name:unknown, dateOfBirth:unknown, ssn:unknown, occupation:unknown, gender:unknown};

export const toNewPatient = (object:any):newPatientEntry => {

  const newEntry:newPatientEntry = {
    name: parseValue(object.name, 'value'),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn:parseValue(object.ssn, 'ssn'),
    occupation: parseValue(object.occupation, 'occupation'),
    gender: parseGender(object.gender)
    

  };

  return newEntry;

};