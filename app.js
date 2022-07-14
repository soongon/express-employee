const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectToMongo = require('./dbutils/connect');
const express = require('express');

const employeeRouter = require('./routes/employeeRouter');
const articleRouter = require('./routes/articleRouter');

const logger = require('./middlewares/logger');

// DB 접속 코드
connectToMongo();

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(logger);

app.use('/api/v1/employees', employeeRouter);
app.use('/api/vi/articles', articleRouter);

app.use((req, res, next) => {
  res.send('일치하는 경로가 없습니다.');
});

app.listen(8080, () => {
  console.log('server ready on port 8080');
});