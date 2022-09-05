import PatientData from "../../data/patients";
import { Patient, nonSensitiveData } from "../../types";

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

export default {
  getAllPatients,
  getPatientsNonSensitiveData
};