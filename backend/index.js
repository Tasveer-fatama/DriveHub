// import
const express = require('express');
const cors = require('cors');
// initialize
const app = express();
const userRouter = require('./routers/userRouter');
const carRouter = require('./routers/CarRouter');
const BookingRouter = require('./routers/BookingRouter');
const utilRouter = require('./routers/utils');
require('dotenv').config();

//middleware
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use('/user', userRouter);
app.use('/car', carRouter);
app.use('/booking', BookingRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      description: 'Payment Description',
      customer: customer.id
    });
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  })
  
  app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
  });

const port = 5000;
//start express server
app.get('/', (req, res) => {
    res.send('response from express');
});
app.get('/add', (req, res) => {
    res.send(' add response from express');
});

app.listen(port, () => { console.log('express server started') });
