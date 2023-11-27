const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'prasad.iresolve@gmail.com',
        pass: 'oezn pmie hejr rywm',
    },
});

module.exports = transporter;