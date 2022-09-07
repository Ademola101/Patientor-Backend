import express from 'express';
import PatientService from '../services/PatientService';
import { toNewPatient } from '../utils';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {

  res.send(PatientService.getPatientsNonSensitiveData());
  
});

patientsRouter.post('/', (req, res) => {
  
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient  = PatientService.addPatient(newPatient);
    res.json(addedPatient);
}

catch(error: unknown) {

  let errorMessage = 'Something went wrong';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  res.status(400).send(errorMessage);
}}
);

export default patientsRouter;