const express = require("express");
const router = new express.Router();
const hpuser = require("../models/usersSchema");
const nodemailer = require("nodemailer");

// email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});



// register user details
router.post("/register", async (req, res) => {
    const { fname, lname, email, mobile, message } = req.body;

    if (!fname || !lname || !email || !mobile) {
        res.status.json({ status: 401, error: "this field is require" })
    }

    // console.log(req.body)

    try {
        console.log("yaha")
        const preuser = await hpuser.findOne({ email: email });

        console.log(preuser)

        if(preuser){
            const userMessage = preuser.Messagesave(message);

            console.log(userMessage);

            const mailOptions = {
                from: process.env.EMAIL,
                to: email, // multiple emailsend kriskay email pass krine coma krine
                subject: 'Sending Email Using Node js',
                text: `Your Response Has Been Submitted`,
            };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error hai" + error);
                } else {
                    console.log("Email sent:" + info.response);
                    res.status(201).json({ status: 201, message: "email sent Successfully" })
                }
            })

        }else{
            const finalUser = new hpuser({
                fname, lname, email, mobile, message
            });


            const storeData = await finalUser.save();
    
    
            const mailOptions = {
                from: "harshpathak6247@gmail.com",
                to: email, // multiple emailsend kriskay email pass krine coma krine
                subject: 'Sending Email Using Node js',
                text: `<h1>Your Response Has Been Submitted </h1>`,
            };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error hai" + error);
                } else {
                    console.log("Email sent:" + info.response);
                    res.status(201).json({ status: 201, message: "email sent Successfully" })
                }
            })
    
    
           res.status(201).json({ status: 201, storeData })
        }
    } catch (error) {
        res.status(401).json({ status: 401, error });
        console.log("catch block error");
    }


});

module.exports = router;