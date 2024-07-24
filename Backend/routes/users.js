const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
const JWT_SECRET = '123';

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ message: 'Login successful', userFound: true, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/cart/add', authMiddleware, async (req, res) => {
  const { productId, qty } = req.body;
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const productIdNumber = Number(productId);

    const existingItem = user.cart.find(item => item.productId === productIdNumber);

    if (existingItem) {
      existingItem.qty += qty;
    } else {
      user.cart.push({productId: productIdNumber, qty });
    }

    await user.save();
    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/cart', authMiddleware, async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ cart: user.cart });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/cart/sync', authMiddleware, async (req, res) => {
  const { cart } = req.body;
  const userId = req.user.userId;
  // console.log('Received cart data:', cart); 
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!Array.isArray(cart)) {
      return res.status(400).json({ message: 'Invalid cart format' });
    }

    for (const item of cart) {
      if (!item.productId || !item.qty) {
        return res.status(400).json({ message: 'Invalid cart item' });
      }
    }

    user.cart = cart;  
    await user.save();
    res.status(200).json({ message: 'Cart synced successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error syncing cart with database' });
  }
});



module.exports = router;
