const express = require('express');
require('dotenv').config();
const userRoute = require('../server/routes/users');

/**
 * Server that will create the user route
 * If another port is desired, create a .env file and add PORT=<desired port>
 */

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
