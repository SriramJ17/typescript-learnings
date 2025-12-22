class BankAccount {
    owner:string;
    balance:number=0;

    constructor(owner:string) {
        this.owner=owner
    }

    deposit(amount: number): void {
        this.balance=this.balance+amount;
    }

    withdraw(amount: number): void {
        if (amount>this.balance) {console.log("Insufficient Balance")} else { this.balance=this.balance-amount}
    }

    getBalance():number {
        return this.balance
    }

}

const account = new BankAccount("Alice");

account.deposit(100);
account.withdraw(30);

console.log(account.getBalance());
