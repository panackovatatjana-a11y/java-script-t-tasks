import BankAccount from './bankAccount.js';

// Create bank accounts
const tanaAccount = new BankAccount('123545678', 'Tana', 500, 0);
const johnAccount = new BankAccount('87654321', 'John', 200, 0);

// Demonstration
tanaAccount.deposit(128);
tanaAccount.withdraw(30);
tanaAccount.checkBalance();

johnAccount.deposit(50);
johnAccount.withdraw(280); // Insufficient balance
johnAccount.checkBalance();

// Make accounts accessible in browser console
window.tana = tanaAccount;
window.john = johnAccount;