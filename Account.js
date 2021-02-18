// Export your class here as module.exports = MyClass
// module.exports = 70; opdracht 1

// 2
class BankAccount{
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.dailyLimit = 5000;
    };
    makeDeposit(depositAmount) {
        if(depositAmount > 0) {
            this.balance = this.balance + depositAmount;
        }
        // console.log("DEPOSIT", depositAmount, depositAmount < 0);
    };
    makeWithdrawal(withdrawalAmount) {
        const totalCreditLimit = this.balance + this.creditLimit;
        const dayLimit = this.dailyLimit;

        if(withdrawalAmount > totalCreditLimit){
            console.log("Sorry, you can not overdraw your account, YOU need more money sucker");
        }
        else if(withdrawalAmount > dayLimit) {
            console.log(`Sorry, not allowed more than your day limit of €${this.dailyLimit},-`);

        } else {
            this.balance = this.balance - withdrawalAmount;
        }
        // console.log("WithDrawal", withdrawalAmount, totalCredit, withdrawalAmount > totalCredit, withdrawalAmount > dayLimit);
    };
}

module.exports = BankAccount;
