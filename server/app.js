const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/user');

const app = express();

require('dotenv').config();

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(`/user`, taskRouter);

app.listen(port, () => console.log('TODO app running on port ' + port));
