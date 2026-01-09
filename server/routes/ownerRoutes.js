import express from 'express'
import { protect } from '../middleware/auth.js';
import { addCar, changeRoleToOwner, deleteCar, getOwnerCars, toggleCarAvailability } from '../controllers/ownerController.js';
import upload from '../middleware/multer.js'

const ownerRouter = express();

ownerRouter.post('/change-role', protect, changeRoleToOwner)
ownerRouter.post('/add-car', protect, upload.single("image"), addCar)
ownerRouter.get('/cars', protect, getOwnerCars)
ownerRouter.post('/toggle-car', protect, toggleCarAvailability)
ownerRouter.post('/delete-car', protect, deleteCar)

export default ownerRouter;