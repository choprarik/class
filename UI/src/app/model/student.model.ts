export class Guardian {
    name!: string;
    contact!: string;
}

enum PAYMENT_MODE {
    monthly = 'monthly',
    quarterly = 'quarterly',
    halfyearly = 'halfyearly',
    annually = 'annually'
};

export class Fees {
    payment_mode: PAYMENT_MODE = PAYMENT_MODE.monthly;
    fee_amount: number = 0;
    concession: number = 0;
}

export class PaymentRecord {
    amount: number = 0;
    paid_on!: Date;
    remarks!: string;
    paid_by: string = '';
    paid_to: string = '';
}

export class Student {
    _id: string = '';
    name: string = '';
    class: string = '';
    batch: string = '';
    joined_from!: Date;
    guardians: Guardian[] = [];
    fees: Fees = {
        payment_mode: PAYMENT_MODE.monthly,
        fee_amount: 0,
        concession: 0
    };
    payment_history: PaymentRecord[] = [];
}