const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster1.2bvmrhi.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log('connection ok with async~await');
  } catch (err) {
    console.log('error with async.. ' + err);
  }
};

module.exports = connectToMongo;
