const axios = require('axios');

const token = 'EAAWAWkTzl7cBO0VqLxV0bhSitppNkgziMeO1odobeg7EZBZC0bmjPCYUJvGsgKvM1ZB9F1UDTgOjf9ZANAMQgAZANb5nUya33AxcECKISHUy60ZAcQYpFOYZAVALwF6srPDdsqoC9nZANGJBAp6JCRmb9LbZAM5mkj0OXcLd7RZCFrr9M3mZCdBioRyf5kVbCCoqRPHiZA9whSS87hFHugUSIZAH49r5a';
const phoneNumberId = '486534671206976';
const recipient = '17852560817';

async function sendMessage() {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v13.0/${phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'template',
        template: {
          name: 'welcome_message',
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
    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
  }
}

sendMessage();
