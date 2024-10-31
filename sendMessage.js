const axios = require('axios');

const sendMessage = async (phoneNumberId, recipientPhone, token) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v13.0/${phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        to: recipientPhone,
        type: "template",
        template: {
          name: "hello_world", // or "welcome_message" if that's what you're testing
          language: { code: "en_US" },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.response ? error.response.data : error.message);
  }
};

module.exports = sendMessage;
