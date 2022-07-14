const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');

const logger = require('./middlewares/logger');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(logger);

app.get('/employees', (req, res) => {
  // 1. 직원 데이터가 있는 몽고디비에서 직원 데이터를 가져온다.
  // 2. 직원데이터를 응답한다.
  //    json 데이터를 응답한다.
  res.json([
    {
      id: 1,
      name: 'kim',
      addr: 'seoul',
      position: '과장'
    },
    {
      id: 2,
      name: 'lee',
      addr: 'seoul',
      position: '부장'
    },
    {
      id: 3,
      name: 'park',
      addr: 'seoul',
      position: '차장'
    }
  ]);
});
app.get('/employees/:empId', (req, res) => {
  // empId 를 확보해서 몽고디비에 조회한 후 데이터를 반환
  console.log(req.params.empId);
  res.json({empId: req.params.empId});
});
app.post('/employees', (req, res) => {
  // 1. 직원데이터를 클라이언트에서 전달해주면..
  // 2. 그 데이터를 받아서 몽고디비에 인서트..
  console.log(typeof req.body);
  res.json(req.body);
});
app.put('/employees', (req, res) => {
  res.json('직원수정..');
});
app.delete('/employees/:empId', (req, res) => {
  res.json('직원 삭제');
});



app.listen(8080, () => {
  console.log('server ready on port 8080');
});