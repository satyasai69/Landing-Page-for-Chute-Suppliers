
# Landing Page for Chute Suppliers

This is a code bundle for Landing Page for Chute Suppliers. The original project is available at https://www.figma.com/design/FTYWI7VCM9L5wKinEL4MMS/Landing-Page-for-Chute-Suppliers.

## Features

- Responsive landing page for a chute supplier company
- Contact form with WhatsApp integration
- Backend API that sends form submissions to admin's WhatsApp using Twilio

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory based on `.env.example`:
   ```
   cp .env.example .env
   ```

3. Sign up for a Twilio account at https://www.twilio.com/ and get your Account SID and Auth Token

4. Enable WhatsApp in your Twilio account and follow their instructions to set up a WhatsApp sandbox

5. Update the `.env` file with your Twilio credentials and admin WhatsApp number

## Development

Run the development server:
```
npm run dev
```

This will start the Vite development server on http://localhost:3000.

## Production

Build and start the production server:
```
npm run start
```

This will build the frontend and start the Express server that handles both serving the static files and the WhatsApp API.

## WhatsApp Integration

The application has two ways to use WhatsApp:

1. **Direct WhatsApp Contact**: Users can click the "WhatsApp Us" button to open WhatsApp with a pre-filled message.

2. **Form Submission to WhatsApp**: When users fill out the quote request form and submit it, the data is sent to the backend API, which then uses Twilio to send a formatted message to the admin's WhatsApp number.
  