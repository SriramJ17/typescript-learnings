var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        return this.balance + amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        }
        return this.balance - amount;
    };
    return BankAccount;
}());
var account1 = new BankAccount("Sriram", 100);
console.log(account1.deposit(50));
console.log(account1.withdraw(80));
