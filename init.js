import app from "./app";
const PORT = 4000;

const onListening = () => {
  console.log(`✅ ` + `Listening on: http://localhost${PORT}`);
};

app.listen(PORT, onListening);
