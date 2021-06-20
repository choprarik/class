'use strict';


const mongoose = require('mongoose'),
Student = mongoose.model('Students');

exports.list_all_students = function (req, res) {
    Student.find({}, function (err, student) {
        if (err)
            res.status(500).send(err);
        res.json(student);
    });
};

exports.add_a_student = function (req, res) {
    let new_student = new Student(req.body);
    new_student.save(function (err, student) {
        if (err)
            res.status(500).send(err);
        res.json(student);
    });
};

exports.get_a_student = function (req, res) {
    Student.findById(req.params.studentId, function (err, student) {
        if (err)
            res.status(500).send(err);
        res.json(student);
    });
};


exports.update_a_student = function (req, res) {
    Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, function (err, student) {
        if (err)
            res.status(500).send(err);
        res.json(student);
    });
};


exports.remove_a_student = function (req, res) {
    Student.remove({
        _id: req.params.studentId
    }, function (err, student) {
        if (err)
            res.status(500).send(err);
        res.json({ message: 'Student successfully removed' });
    });
};

/* exports.getTotalFees = function(fees) {
    let totalFee = 0;
    switch(fees.payment_mode) {
        case 'monthly':
            totalFee = fees.fee_amount*12;
        break;
        case 'quarterly':
            totalFee = fees.fee_amount*4;
        break;
        case 'half-yearly':
            totalFee = fees.fee_amount*2;
        break;
        case 'annually':
            totalFee = fees.fee_amount;
        break;
    }
    return totalFee - fees.concession;
};

exports.get_remaining_fees = function (req, res) {
    Student.findById(req.params.studentId, function (err, student) {
        if (err)
            res.status(500).send(err);
        let fees = student.fees;
        let paid_amount = 0;
        if (fees && fees.fee_amount > 0) {
            if (fees.payment_history && fees.payment_history.length > 0) {
                for (let record of fees.payment_history) {
                    paid_amount += record.amount; 
                }
            }
        }
        let remaining_amount = this.getTotalFees(student.fees) - paid_amount;
        res.json({remaining_amount: remaining_amount});
    });
}; */

