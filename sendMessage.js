const express = require('express');
const sendMessage = require('./sendMessage'); // Import the sendMessage function we created in sendMessage.js
const app = express();

const PHONE_NUMBER_ID = '486534671206976'; // Your WhatsApp phone number ID
const TOKEN = 'EAAWAWkTzl7cBOZBAyR9UVaG2Dft2NzODgZB55AoPJyXURtpZAHJA2nlxhVjCud0VgcVP8zi4SaEjZCRzvoRLzdfa5uDhaGAixhfOdQIhofvZCxcKPcZCLxcOhZAciUeyaPJmlLLhqeRKUnSX4gNmmtU616NbNCaP6hPGTyIZBp25o4dW0fKsd8elVYgxFVNXZAFmCtUHWJ27II4BFMjbPfJ9BZBknQ'; // Your WhatsApp API access token

// Endpoint to send a WhatsApp message
app.get('/send-message', (req, res) => {
  const recipientPhone = '17852560817'; // The test recipient number
  sendMessage(PHONE_NUMBER_ID, recipientPhone, TOKEN); // Call the sendMessage function
  res.send('Message send initiated');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
