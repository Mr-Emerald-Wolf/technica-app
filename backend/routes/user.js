const { join } = require('path')
const router = require('express').Router();
const jwt = require('jsonwebtoken')
const User = require(join(__dirname, '..', 'models', 'Person'))
const bcrypt = require('bcryptjs')
const { authorise } = require(join(__dirname, '..', 'middleware', 'authorise'))
const jwtsecret = process.env.SECRET_JWT || 'secret123'
const expiresIn = process.env.JWT_EXPIRES_IN || '7d'

const createToken = (id, email, name) => {
    return jwt.sign(
      {
        id,
        email,
        name
      },
      jwtsecret,
      {
        expiresIn
      }
    )
}

router.post('/signup', async (req, res) => {
    const { email, password, name } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        const newUser = new User({
            email,
            password,
            name
        })
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)
        newUser.password = hash
        await newUser.save()
        const token = createToken(newUser._id, newUser.email, newUser.name)
        return res.status(201).json({
            message: 'User created successfully',
            token
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid password'
            })
        }
        const token = createToken(user._id, user.email, user.name)
        return res.status(200).json({
            message: 'User logged in successfully',
            token
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.get('/', authorise, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        return res.status(200).json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

module.exports = router;
