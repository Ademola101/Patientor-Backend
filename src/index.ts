import express from 'express';
import diagnosisRouter from './router/diagnosis';
import patientsRouter from './router/Patient';

const app = express();
app.use(express.json());
app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientsRouter);



const PORT = 3002;
app.get('/ping', (_req, res) => {
  console.log('someone pinged me');
  res.send('Hello world');
  
});



app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
  
});