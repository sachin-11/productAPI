const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');


const protect = asyncHandler (async (req, res, next) => {
    let token 
   if(req.headers.authorization){
       try {
           token = req.headers.authorization
           const decoded = jwt.verify(token, process.env.JWT_SECRET);
           req.user = await User.findById(decoded.id)
           next();
       } catch (error) {
           console.error(error)
           res.status(401)
           throw new Error('Not authorized, token failed')
       }
   } else {
       if(!token){
           console.log('not authorized , no Token')
       }
   }

})

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
    }
  }



module.exports = {
    protect,
    admin
}