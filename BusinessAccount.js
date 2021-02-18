// Export your class here as module.exports = MyClass
// module.exports = 70; // opdracht 1 business
const BankAccount = require("./Account");

class Business extends BankAccount {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        // this.name = name;
        // this.balance = balance;
        // this.creditLimit = creditLimit;
        // bovenstaande uitge-comment omdat deze in BankAccount staan en nu aangeroepen worden via de super()
        this.sepaPermission = sepaPermission;
        this.dailyLimit = 20000;
    };
    // makeDeposit(addAmount) {
    //     if(addAmount > 0) {
    //         this.balance = this.balance + addAmount;
    //     };
    //     // console.log("Added Amount", addAmount, this.balance + addAmount);
    // };

    // makeWithdrawal(withdrawal) {
    //     const businessCreditLimit = this.balance + this.creditLimit;
    //     const dailyLimit = 20000;
    //     if(withdrawal > businessCreditLimit) {
    //         console.log("Sorry you can not withdraw more than you limit.")
    //     }
    //     else if(withdrawal > dailyLimit) {
    //         console.log("Sorry, you can not withdraw more than €20000,-");
    //
    //     } else {
    //         this.balance = this.balance - withdrawal;
    //         console.log("Yes you can withdraw from your account")
    //     }
    // console.log("LIMIT", businessCreditLimit, withdrawalAmount);
    // console.log("Number Withdrawal", withdrawal, this.balance - withdrawal);
    //};
    sepaInvoice(invoice) {
        const invoiceMinusCost = invoice * 0.99;

        // console.log("SEPA", invoice, this.sepaPermission, !this.sepaPermission);

        if(!this.sepaPermission) {
            console.log("Sorry, you need sepaPermission for your deposits");
        }
        else if(invoice < 0) {
            console.log("Sorry, can not deposit a negative amount");

        } else {
            this.balance = this.balance + invoiceMinusCost;
            console.log("You balance after invoice cost");
        }

        // console.log("Invoice", invoice, invoiceMinusCost, this.balance + invoiceMinusCost);
    };
}
module.exports = Business;