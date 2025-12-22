### Problem Statement

Create a BankAccount class.

### Requirements
Properties

owner: string

balance: number (initially 0)

### Methods

deposit(amount: number): void

Adds the amount to the balance

withdraw(amount: number): void

Subtracts the amount only if balance is sufficient

If not enough balance, log "Insufficient funds"

getBalance(): number

Returns the current balance