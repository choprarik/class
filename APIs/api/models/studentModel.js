'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the student'
    },
    class: {
        type: String,
        required: 'Kindly enter the class of the student'
    },
    batch: {
        type: String,
        required: 'Kindly specify the batch of the student'
    },
    joined_from : {
        type: Date,
        required: 'Joining date is mandatory'
    },
    guardians: {
        type: [{name: String, contact: Number}]
    },
    fees: {
        type: {
            payment_mode : {
                type: [{
                    type: String,
                    enum: ['monthly', 'quarterly', 'halfyearly', 'annually'],
                    default: 'monthly'
                }]
            },
            fee_amount: {
                type: Number,
                default: 0
            },
            concession: {
                type: Number,
                default: 0
            }
        }
    },
    payment_history: {
        type: [{
            amount: {
                type: Number,
                default: 0
            },
            paid_on: Date,
            remarks: String,
            paid_by: {
                type: String,
                required: 'Please fill in the payer name'
            },
            paid_to: {
                type: String,
                required: 'Please specify a name'
            }
        }]
    }
});

module.exports = mongoose.model('Students', StudentSchema);