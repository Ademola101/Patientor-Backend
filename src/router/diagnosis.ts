import express from 'express';
import PatientServices from '../services/DiagnoseServices';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(PatientServices.getAllDiagnose());

});


export default router;