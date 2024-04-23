

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/webcooking_test');
const Schema = mongoose.Schema;


const account = new Schema({
  username: String,
  password: String
},{
  collection: 'user'
});

module.exports = mongoose.model('user',account);

module.exports = account
