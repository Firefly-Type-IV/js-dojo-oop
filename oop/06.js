/**
 * A BankAccount class with deposit and withdraw methods.
 */
export class BankAccount {
  /**
   * @param {number} initialBalance - The starting balance.
   */
  constructor(initialBalance) {
    // TODO: Store the balance as a property.
    this.balance = initialBalance;
  }

  /**
   * Deposits money into the account.
   * @param {number} amount - The amount to deposit.
   */
  deposit(amount) {
    // TODO: Add the amount to the balance.
    return this.balance += amount;
  }

  /**
   * Withdraws money from the account.
   * @param {number} amount - The amount to withdraw.
   */
  withdraw(amount) {
    // TODO: Subtract the amount from the balance.
    return this.balance -= amount;
  }

  /**
   * Gets the current balance.
   * @returns {number} - The current balance.
   */
  getBalance() {
    // TODO: Return the balance.
    return this.balance;
  }
}
