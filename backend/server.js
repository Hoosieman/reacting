const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs');
const e = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = 3000;
const ELB_HOST = 'localhost'; // Change this to your ELB's public DNS name



// Create an HTTP server


app.use(bodyParser.json());

app.use(express.static('/public'));


app.use(cors({
  origin: '*'
}));





const drinkButtons = {
    drinkButton1: { clickCount: 0 },
    drinkButton2: { clickCount: 0 },
    drinkButton3: { clickCount: 0 },
    drinkButton4: { clickCount: 0 },
    drinkButton5: { clickCount: 0 },
    drinkButton6: { clickCount: 0 },
    drinkButton7: { clickCount: 0 },
    drinkButton8: { clickCount: 0 },
    drinkButton9: { clickCount: 0 },
    drinkButton10: { clickCount: 0 },
    drinkButton11: { clickCount: 0 },
    drinkButton12: { clickCount: 0 },
    drinkButton13: { clickCount: 0 },
    drinkButton14: { clickCount: 0 },
    drinkButton15: { clickCount: 0 },
  };


 
  

  



const mongoURI = 'mongodb+srv://coleto:1@coleto.mt5dxlu.mongodb.net/?retryWrites=true&w=majority';
let db;

async function connectToMongo() {
  try {
    const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db('coleto');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
}

connectToMongo().then(() => {
  app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    console.log('working')
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required fields.' });
    }

    try {
    // Insert user into the database with hashed password
      
      await db.collection('emails').insertOne({ email, password });
      res.header('Content-Type', 'application/json');
      

      res.json({ success: true, message: 'Sign up successful!' });
    } catch (error) {
      res.header('Content-Type', 'application/json');
      console.error('Error inserting user:', error);

      

      res.status(500).json({ success: false, message: 'Sign up failed. Please try again.' });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required fields.' });
    }
  
    try {
      // Check if the user exists and the password matches
      const user = await db.collection('emails').findOne({ email, password });
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials.' });
      }
  
      // Generate a JWT token (you may want to use a library like jsonwebtoken)
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  
      res.json({ success: true, message: 'Login successful!', token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
    }
  });


  app.post('/click/:drinkName', (req, res) => {
    try {
      const buttonId = req.params.buttonId;
      const button = drinkButtons[buttonId];
  
      if (button) {
        button.clickCount += 1;
        res.json({ success: true, clickCount: button.clickCount });
      } else {
        res.status(404).json({ success: false, message: 'Button not found' });
      }
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
  });


 
  

  app.get('/clicks', (req, res) => {
    res.json(drinkButtons);
  });

  


  app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
  });
  
  


  



  app.listen(PORT, ELB_HOST, () => {
    console.log(`Server is running on https://${ELB_HOST}:${PORT}`);
  
  });

});
