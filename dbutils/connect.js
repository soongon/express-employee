const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster1.2bvmrhi.mongodb.net/?retryWrites=true&w=majority';
// 주석

/*
멀티라인 주석
입니다.
*/


const connectToMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log('connection ok with async~await');
  } catch (err) {
    console.log('error with async.. ' + err);
  }
};

module.exports = connectToMongo;
