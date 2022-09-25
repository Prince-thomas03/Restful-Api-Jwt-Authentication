// const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')
// const User = require('../models/userModels')
// const dotenv = require('dotenv').config()


// const protect = asyncHandler(async (req, res, next) => {

//     let token
//     if (req.headers.authorization && req.headers.authorizatio.startsWith('Bearer')) {
//         try {

//             //ge token from header
//             token = req.headers.authorization.split(' ')[1]

//             //verifyToken

//             const decoded = jwt.verify(token, process.env.JWT_SECRET)

//             //GET USER FROM TOKE BECAUE THE PAYLOAD CONTAIN THE USER ID

//             req.user = await User.findById(decoded.id).select('-password')

//             next()
//         } catch (error) {

//             console.log(error);
//             res.json(401)
//             throw new Error('not authorized')

//         }
//     }

//     if (!token) {
//         res.status(401)
//         throw new Error('Not authorized no token')
//     }

// })

// module.exports = {protect}

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }