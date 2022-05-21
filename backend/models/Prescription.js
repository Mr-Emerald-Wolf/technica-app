const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
    medicineName: { type: String, required: true },
    dosage: { type: String, required: true },
    time: { type: String, required: true },
    person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' }
})

module.exports = mongoose.model('Prescription', PrescriptionSchema);