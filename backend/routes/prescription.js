const { join } = require('path')
const router = require('express').Router();
const Prescription = require(join(__dirname, '..', 'models', 'Prescription'))
const { authorise } = require(join(__dirname, '..', 'middleware', 'authorise'))

router.post('/new', authorise, async (req, res) => {
    const { medicineName, dosage, time } = req.body
    try {
        const person = req.user.id
        const prescription = new Prescription({
            medicineName,
            dosage,
            time,
            person
        })
        await prescription.save()
        res.status(201).json({
            message: 'Prescription created successfully',
            prescription
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.put('/:id', authorise, async (req, res) => {
    const { id } = req.params
    const { medicineName, dosage, time } = req.body
    try {
        const prescription = await Prescription.findById(id)
        if (!prescription) {
            return res.status(404).json({
                message: 'Prescription not found'
            })
        }
        if (prescription.person.toString() !== req.user.id) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }
        if (medicineName) prescription.medicineName = medicineName
        if (dosage) prescription.dosage = dosage
        if (time) prescription.time = time
        await prescription.save()
        res.status(200).json({
            message: 'Prescription updated successfully',
            prescription
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.delete('/:id', authorise, async (req, res) => {
    const { id } = req.params
    try {
        const prescription = await Prescription.findById(id)
        if (!prescription) {
            return res.status(404).json({
                message: 'Prescription not found'
            })
        }
        if (prescription.person.toString() !== req.user.id) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }
        await prescription.remove()
        res.status(200).json({
            message: 'Prescription deleted successfully'
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

module.exports = router;