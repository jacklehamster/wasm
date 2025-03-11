import express from 'express';
import { addFromFile } from "@dobuki/wasm";
import path from 'path';

const app = express();
const port = 3000;

//console.log(await add(10, 15, "hello-world.wasm"));

addFromFile(12, 13, "hello-world.wasm").then(result => console.log(result));

// Middleware to set Content-Type for .wasm files
app.use((req, res, next) => {
  if (req.path.endsWith('.wasm')) {
    res.setHeader('Content-Type', 'application/wasm');
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '')));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
