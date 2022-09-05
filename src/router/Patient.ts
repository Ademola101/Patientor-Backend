import express from 'express';
import PatientService from '../services/PatientService';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {

  res.send(PatientService.getPatientsNonSensitiveData());
  
});


export default patientsRouter;