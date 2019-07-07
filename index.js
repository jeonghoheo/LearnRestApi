import express from "express";
const app = express();
const PORT = 4000;

const onListening = () => {
  console.log(`✅ ` + `Listening on: http://localhost${PORT}`);
};

app.listen(PORT, onListening);
