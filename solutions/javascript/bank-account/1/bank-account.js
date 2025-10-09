//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance = 0;
  isClosed = true;
  
  constructor() {
  }

  open() {
    if (!this.isClosed) throw new ValueError();
    this.isClosed = false;
    this.#balance = 0;
  }

  close() {
    if (this.isClosed) throw new ValueError(); // already closed
    this.isClosed = true;
  }

  deposit(amount) {
    if (this.isClosed || amount <= 0) throw new ValueError();
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.isClosed || amount <= 0 || amount > this.#balance) throw new ValueError();
    this.#balance -= amount;
  }

  get balance() {
    if (this.isClosed) throw new ValueError();
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
