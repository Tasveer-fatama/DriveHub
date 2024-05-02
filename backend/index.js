// import
const express = require('express');
const cors = require('cors');
// initialize
const app = express();
const userRouter = require('./routers/userRouter');
const carRouter = require('./routers/CarRouter');
const BookingRouter = require('./routers/BookingRouter');
const utilRouter = require('./routers/utils');
//middleware
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use('/user', userRouter);
app.use('/car', carRouter);
app.use('/booking', BookingRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'))

const port = 5000;
//start express server
app.get('/', (req, res) => {
    res.send('response from express');
});
app.get('/add', (req, res) => {
    res.send(' add response from express');
});

app.listen(port, () => { console.log('express server started') });
