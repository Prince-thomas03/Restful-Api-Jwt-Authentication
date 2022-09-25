const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')




//@desc registerUser
//@route post /api/users
//access public 
const registerUser = asyncHandler(async (req, res) => {
    console.log("(((((((((((((((((((");
    const { name, email, password } = req.body
    console.log(name);
    console.log(email);
    console.log(password);

    //checking req body is empty or not
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("please add all required fields")
    }

    //checking user already exsist or not
    const userExsist = await User.findOne({ email })
    console.log("yes user exsist ", userExsist);

    if (userExsist) {
        res.status(400)
        throw new Error("user already exsist")
    }

    //password hashing

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //user creation

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("invalid user data")
    }






})
//@desc loginUser
//@route post /api/users/login
//access public 
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    console.log("i have find the usesr", user);

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error("invalid user or user not found or invalid creditionals")
    }


})

//jwt token generator
const generateToken = (id) => {
    return jwt.sign(
        { id }, process.env.JWT_SECRET, { expiresIn: '30d' }
    )
}


//@desc Get user data
//@route get /api/users/me
//access private 
const getme = asyncHandler(async (req, res) => {

    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })

    res.json({ message: ' user data display' })
})




module.exports = {
    registerUser, loginUser, generateToken, getme
}