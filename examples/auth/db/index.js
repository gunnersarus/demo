const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/webcooking_test');
        console.log('connect succesfully!!!!!')
    } catch (error) {
        console.log('Failllll!!!')
    }


}

module.exports = { connect  }
