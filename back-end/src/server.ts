import express, { Request, Response } from 'express';
import multer from 'multer';

const app = express();
const upload = multer();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/api/upload', upload.single('file'), (req: Request, res: Response) => {
  console.log(req.file?.buffer.toString());
  res.send('Arquivo recebido com sucesso!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
