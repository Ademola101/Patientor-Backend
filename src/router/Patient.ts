import express from 'express';
import PatientService from '../services/PatientService';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {

  res.send(PatientService.getPatientsNonSensitiveData());
  
});

patientsRouter.post('/', (_req, res) => {
  
    const {name, dateOfBirth, ssn, gender, occupation} = req.body;
    const newPatient = PatientService.addPatient({
      name,
      dateOfBirth,
      ssn,
      gender,
      occupation
    })
}
);

export default patientsRouter;