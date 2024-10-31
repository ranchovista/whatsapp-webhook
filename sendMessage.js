const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const token = 'EAAWAWkTzl7cBOZBAyR9UVaG2Dft2NzODgZB55AoPJyXURtpZAHJA2nlxhVjCud0VgcVP8zi4SaEjZCRzvoRLzdfa5uDhaGAixhfOdQIhofvZCxcKPcZCLxcOhZAciUeyaPJmlLLhqeRKUnSX4gNmmtU616NbNCaP6hPGTyIZBp25o4dW0fKsd8elVYgxFVNXZAFmCtUHWJ27II4BFMjbPfJ9BZBknQ';
const phoneNumberId = '486534671206976';
const recipient = '17852560817';

app.get('/send-message', async (req, res) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v13.0/${phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'template',
        template: {
          name: 'hello_world',
          language: { code: 'en_US' }
        }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.send('Message sent successfully: ' + JSON.stringify(response.data));
  } catch (error) {
    res.send('Error sending message: ' + JSON.stringify(error.response.data));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
