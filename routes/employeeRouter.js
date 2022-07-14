const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
router.get('/:empId', (req, res) => {
  // empId 를 확보해서 몽고디비에 조회한 후 데이터를 반환
  console.log(req.params.empId);
  res.json({empId: req.params.empId});
});
router.post('/', (req, res) => {
  // 1. 직원데이터를 클라이언트에서 전달해주면..
  // 2. 그 데이터를 받아서 몽고디비에 인서트..
  console.log(typeof req.body);
  res.json(req.body);
});
router.put('/', (req, res) => {
  res.json('직원수정..');
});
router.delete('/:empId', (req, res) => {
  res.json('직원 삭제');
});

module.exports = router;