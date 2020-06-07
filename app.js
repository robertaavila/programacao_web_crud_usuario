const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/user.js');
const Task = require('./models/user.js');

const app = express();

const port = 3001;

app.use(express.json());
app.use(cors());
app.use(`/user`, taskRouter);

app.listen(port, () => console.log('TODO app running on port ' + port));
