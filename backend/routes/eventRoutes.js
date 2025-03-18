import express from 'express';
import { 
  createEvent, 
  getAllEvents,
  getMyEvents,
  getPendingEvents, 
  getEvent, 
  updateEvent, 
  approveEvent, 
  deleteEvent,
  registerForEvent 
} from '../controllers/eventController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';
import Event from '../models/Event.js';

const router = express.Router();

// Public routes
router.get('/public', async (req, res) => {
  try {
    const events = await Event.find({ isApproved: true })
      .sort({ date: 1 })
      .populate('organizer', 'username email')
      .limit(50);
    
    res.status(200).json({
      success: true,
      count: events.length,
      events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch public events',
      error: error.message
    });
  }
});

// Protected routes
router.post('/', protect, upload.single('image'), createEvent);
router.get('/', protect, getAllEvents);
router.get('/myevents', protect, getMyEvents);
router.get('/pending', protect, admin, getPendingEvents);
router.get('/:id', protect, getEvent);
router.put('/:id', protect, updateEvent);
router.put('/:id/approve', protect, admin, approveEvent);
router.delete('/:id', protect, deleteEvent);
router.post('/:id/register', protect, registerForEvent);

export default router;
