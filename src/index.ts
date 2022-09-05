import express from 'express';
import diagnosisRouter from './router/diagnosis';
import patientsRouter from './router/Patient';
import cors from 'cors';

const app = express();
app.use(cors());
// dowload and use the typed version
app.use(express.json());
app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientsRouter);



const PORT = 3001;
app.get('/ping', (_req, res) => {
  console.log('someone pinged me');
  res.send('Hello world');
  
});



app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
  
});