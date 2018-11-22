/* This is the database schema definition for the Purchases Collection in Mongo DB */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const networkSchema = new Schema({
    symbol: String,
    name: String,
    usdExchangeRateLink: String,
    explorerLink: String,
    explorerParameter: String,
    publicKeyToDerive: String
});

export default mongoose.model('Network', networkSchema)
