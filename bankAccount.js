class BankAccount {
    constructor(accountNumber, holderName, sortCode, balance = 0) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.sortCode = sortCode;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited £${amount}. New balance: £${this.balance}`);
    }

    withdraw(amount) {
        if (amount>this.balance) {
            console.log('insufficient funds.');
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew £${amount}. New balance: £${this.balance}`);
    }   
    }
    
    checkBalance() {
        console.log(`Balance for ${this.holderName}: £${this.balance}`);
    }
    

    showDetails() {
        console.log(`Account Holder: ${this.holderName}`);
        console.log(`Sort Code: ${this.sortCode}`);
        console.log(`Balance: £${this.balance}`);
    
    }
}
export default BankAccount;
