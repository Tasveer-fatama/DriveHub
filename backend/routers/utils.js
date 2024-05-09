const multer = require("multer");
const router = require("express").Router();
const nodemailer = require("nodemailer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

const mailConfig = {
  service : 'gmail',
  auth: {
      user: "hdrive349@gmail.com",
      pass: "xjjvngempjvardba",
  }
};
const transporter = nodemailer.createTransport(mailConfig);

const generateOTP = () => {
  const otp = Math.floor(Math.random() * 1000000);
  console.log(otp);
  return otp;
}

router.post('/uploadfile', myStorage.single('myfile'), (req, res) => {
  res.json({status : 'success'});
})

router.post('/sendotp', (req, res) => {
  const otp = generateOTP();
  generateOTP[req.body.email] = otp;
  console.log(generateOTP);
  transporter.sendMail({
      from : "hdrive349@gmail.com",
      to : req.body.email,
      subject : 'OTP for Password Reset',
      html: ` <p> OTP for password reset is <b>${otp}</b> </p>`
  })
  .then((info) => {
      return res.status(201).json(
          {
              msg: "OTP Sent",
              info: info.messageId,
              preview: nodemailer.getTestMessageUrl(info)
          }
      )
  }).catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: err });
  });
})


router.get('/verifyotp/:email/:otp', (req, res) => {
  const oldOTP = generateOTP[req.params.email];
  if(oldOTP == req.params.otp){
      return res.status(200).json({msg : 'OTP Verified'});
  }else{
      return res.status(401).json({msg : 'OTP Not Verified'});
  }
})

module.exports = router;