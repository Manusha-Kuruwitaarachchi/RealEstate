import express from 'express';
import { bookVisit, cancleBookings, createUser, getAllBookings, getAllFavourites, toFav } from '../controllers/userController.js';
const router = express.Router();

router.post("/register",createUser);
router.post("/bookVisit/:id",bookVisit);
router.post("/getAllBookings",getAllBookings);
router.post("/cancelBooking/:id",cancleBookings);
router.post("/toFav/:rid", toFav); 
router.post("/allFav/",getAllFavourites)
export {router as userRouter};