// import mongoose from 'mongoose'; //  ES6(ES2015) 에 추가된 모듈 사용방식 (ESM)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: {
    type: Number,
    required: true,
  }, // String is shorthand for {type: String}
  name: {
    type: Number,
    required: true,
    default: 'noname'
  },
  addr: {
    city: {
      type: String,
      required: true
    },
    detail: String
  },
  position: String
});

module.exports = mongoose.model('Employee', employeeSchema);