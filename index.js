const express = require('express');
const app = express();
app.use(express.json());

const VERIFY_TOKEN = 'RVPAssistant123'; // Replace this with a secure token

// Endpoint for WhatsApp webhook verification
app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

// Endpoint to receive messages
app.post('/webhook', (req, res) => {
    console.log('Received a message webhook');
    const data = req.body;

    if (data.object === 'whatsapp_business_account') {
        data.entry.forEach(entry => {
            entry.changes.forEach(change => {
                console.log(change.value.messages); // Process incoming messages here
            });
        });
    }
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
