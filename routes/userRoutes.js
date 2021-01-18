const express = require('express');
const router = express.Router()
const {
    authUser,
     getUserProfile,
      registerUser, 
      updateUserProfile, 
      getUsers,
       deleteUser,
       getUserById,
       updateUser
    
    } = require('../controllers/userController');
const  { protect, admin  } = require('../middleware/authMiddleware');

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/profile').put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser) 
.get(protect, admin, getUserById)
.put(protect, admin, updateUser)

module.exports  = router;