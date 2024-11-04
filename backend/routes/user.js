const express=require('express');
const router = express.Router();

const {EnquiryForm}=require('../controllers/user');
router.post('/EnquiryForm',EnquiryForm)