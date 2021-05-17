// starts our server on an appropriate port
const app = require('../src/app');
const { PORT } = require('./config');

// sets the PORT value for app.listen and changes it to respect an environmental variable (Heroku)
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})

