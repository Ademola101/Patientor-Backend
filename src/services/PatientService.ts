import {v1 as uuid } from  'uuid';
import PatientData from "../../data/patients";
import { Patient, nonSensitiveData, newPatientEntry } from "../../types";

const patientsdata:Array<Patient> = PatientData;
const getAllPatients = ():Array<Patient> => {
  return patientsdata;
};

const getPatientsNonSensitiveData = ():Array<nonSensitiveData> => {

  return patientsdata.map(({id, name, dateOfBirth,gender, occupation}) => {

    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    };

  });

};


const addPatient = (patient:newPatientEntry) => {

  const newPatient = {
    id: uuid(),
    ...patient
  };
  PatientData.push(newPatient);
  return newPatient;
};


export default {
  getAllPatients,
  getPatientsNonSensitiveData,
  addPatient
};