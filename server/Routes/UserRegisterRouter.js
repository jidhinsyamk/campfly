const express = require('express');
const UserRegisterRouter = express.Router();
const bcrypt = require('bcryptjs');
const loginDB = require('../Models/LoginModel');
const registerDB = require('../Models/UserRegisterModel');

UserRegisterRouter.post('/userregister', async (req, res) => {
    try {
        const oldUser = await loginDB.findOne({ username: req.body.username });
        if (oldUser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'User already exists',
            });
        }

        const oldPhone = await registerDB.findOne({ contact: req.body.contact });
        if (oldPhone) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Contact number already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        
        let log = {
            username: req.body.username,
            password: hashedPassword,
            role: 1,
        };

        const result = await loginDB(log).save();

        let reg = {
            login_id: result._id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            dob: req.body.dob,
            nationality: req.body.nationality,
            occupation: req.body.occupation,
            address: req.body.address,
            email: req.body.email,
            contact: req.body.contact,
            emergencycontact: req.body.emergencycontact,
        };

        const result2 = await registerDB(reg).save();

        if (result2) {
            return res.status(201).json({
                success: true,
                error: false,
                message: 'Registration completed',
                data: result2,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Something went wrong',
        });
    }
});

module.exports = UserRegisterRouter;
