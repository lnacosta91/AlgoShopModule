/* This is the database schema definition for the Purchases Collection in Mongo DB */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyingSchema = new Schema({
    authId: String,
    creationDate: Date,
    monitorTime: Date,
    paymentNetwork: String,
    usdPerToken: Number,
    usdPerPaymentCoin: Number,
    tokenAmount: Number,
    amountToPay: Number,
    generatedAddress: String,
    transactionData:{
        reference: String,
        amountReceived: Number,
        date: Date
    },
    history: {
        order: Number,
        modifierAuthId: String,
        status: String,
        comment: String,
        date: Date
    }
});

export default mongoose.model('Buying', buyingSchema)
