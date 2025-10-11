import express from 'express';
import { createRequire } from 'module';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

const require = createRequire(import.meta.url);
const twilio = require('twilio');

const app = express();
app.use(express.json());
app.use(cors());

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Admin WhatsApp number from environment variables
const adminWhatsAppNumber = `whatsapp:+${process.env.ADMIN_WHATSAPP_NUMBER || '919876543210'}`;

app.post('/api/send-whatsapp', async (req, res) => {
  const { firstName, lastName, email, company, phone, details } = req.body;
  
  try {
    // Format the message
    const message = `New Quote Request:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nDetails: ${details}`;
    
    // Send message via Twilio
    const result = await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio sandbox number
      to: adminWhatsAppNumber,
      body: message,
    });

    res.json({ success: true, sid: result.sid });
  } catch (err) {
    console.error('Error sending WhatsApp message:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// For all other requests, serve the index.html
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});