import express from 'express';
import diagnosisRouter from './router/diagnosis';

const app = express();
app.use(express.json());
app.use('/api/diagnosis', diagnosisRouter);



const PORT = 3002;
app.get('/ping', (_req, res) => {
  console.log('someone pinged me');
  res.send('Hello world');
  
});



app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
  
});