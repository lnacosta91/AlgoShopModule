/* This is the database schema definition for the Purchases Collection in Mongo DB */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const administrationSchema = new Schema({
    usdAlgoExchangeRateLink: String,
    usdAlgoFixedRate: Number,
    explorerLink: String,
    algoBankReference: String
});

export default mongoose.model('Administration', administrationSchema)
