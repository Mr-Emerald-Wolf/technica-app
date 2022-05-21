require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB Connection Successfull!')).catch((err) => {console.log(err); });

app.use(express.json());

app.use('/api/user', require('./routes/user'));
app.use('/api/prescription', require('./routes/prescription'));

app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Page not found'
    })
});

app.listen(Port, () => {
    console.log('Listening on Port' + Port);
});