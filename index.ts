import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3002;
app.get('/ping', (_req, res) => {
  console.log('someone pinged me');
  res.send('Hello world');
  
});

app.listen(PORT, () => {
  console.log('server running');
  
});