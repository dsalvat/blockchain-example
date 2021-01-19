import { v1 as uuidV1 } from 'uuid';

class Transaction {
    constructor() {
        this.id = uuidV1();
        this.input = null;
        this.outputs = [];
    }

    static create(senderWallet, recipientAddress, amount){
        const { balance, publicKey } = senderWallet;

        if(amount > balance) throw Error(`Amount: ${amount} exceeds the balance.`);

        const transaction = new Transaction();
        transaction.outputs.push(...[
            { amount: balance - amount, address: publicKey },
            { amount: amount, address: recipientAddress }
        ])

        transaction.input = {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(transaction.outputs)
        }

        return transaction;
    }
}

export default Transaction;