// Creating a simple fund management concept to check the deposit, withdrawal in a particular account using class concept
class BankAccount {
    accountHolder: string;
    balance: number;

    constructor (accountHolder:string,balance:number) {
        this.accountHolder=accountHolder;
        this.balance=balance;
    }

    deposit(amount: number) {
        return this.balance+amount;
    }

    withdraw(amount: number) {
        if (amount>this.balance) {
            console.log("Insufficient balance")
            return this.balance;
        }
        return this.balance-amount;
    }

}

let account1 = new BankAccount("Sriram", 100);
console.log(account1.deposit(50))
console.log(account1.withdraw(80))

