const mongoose =require('mongoose');

const url="mongodb+srv://tasveerfatema135:YH5rpzYeb4v5KYQq@cluster0.8stkqdk.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Cluster0";
// asynchronous functions - return promise
mongoose.connect(url)
.then((result) => {
 console.log('database connected');   
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
