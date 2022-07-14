const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

router.get('/', async (req, res) => {
  // 1. 직원 데이터가 있는 몽고디비에서 직원 데이터를 가져온다.
  // 2. 직원데이터를 응답한다.
  //    json 데이터를 응답한다.
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    res.json(err);
  }
});
router.get('/:empId', (req, res) => {
  // empId 를 확보해서 몽고디비에 조회한 후 데이터를 반환
  //Employee.findOne({id: req.params.empId})
  console.log(req.params.empId);
  res.json({empId: req.params.empId});
});
router.post('/', async (req, res) => {
  // 1. 직원데이터를 클라이언트에서 전달해주면..
  // 2. 그 데이터를 받아서 몽고디비에 인서트..
  try {
    const saved = await Employee.create(req.body);
    res.json(saved);
  } catch (err) {
    res.json(err);
  }
});
router.put('/', (req, res) => {
  res.json('직원수정..');
});
router.delete('/:empId', (req, res) => {
  res.json('직원 삭제');
});

module.exports = router;