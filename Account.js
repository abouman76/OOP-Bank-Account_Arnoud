// Export your class here as module.exports = MyClass
// module.exports = 70; opdracht 1

// 2
class BankAccount{
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    };
    makeDeposit(depositAmount) {
        if(depositAmount > 0) {
            this.balance = this.balance + depositAmount;
        }
        // console.log("DEPOSIT", depositAmount, depositAmount < 0);
    };
    makeWithdrawal(withdrawalAmount) {
        const totalCreditLimit = this.balance + this.creditLimit;
        const dayLimit = 5000;

        if(withdrawalAmount > totalCreditLimit){
            console.log("Sorry, you can not overdraw your account, YOU need more money sucker");
        }
        else if(withdrawalAmount > dayLimit) {
            console.log("Sorry, not allowed more than your day limit of €5000,-");

        } else {
            this.balance = this.balance - withdrawalAmount;
        }
        // console.log("WithDrawal", withdrawalAmount, totalCredit, withdrawalAmount > totalCredit, withdrawalAmount > dayLimit);
    };
}

module.exports = BankAccount;
