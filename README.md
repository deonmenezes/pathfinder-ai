Pathfinder Career Guidance Website
This is a full-stack web application for Pathfinder, a career guidance service. The frontend is built with React, Vite, and Shadcn UI, and the backend is a Node.js/Express server that handles form submissions.

Features
Modern Frontend: Built with React, TypeScript, and Vite for a fast development experience.
Responsive UI: Styled with Tailwind CSS and Shadcn UI for a clean, responsive, and accessible user interface.
Contact Form: A fully functional contact form that sends email notifications using Nodemailer.
reCAPTCHA Protection: The form is secured with Google reCAPTCHA v2 to prevent spam.
Node.js Backend: A simple and efficient Express.js server to handle API requests.
Concurrent Development: The frontend and backend can be run simultaneously with a single command.

Tech Stack:
Category:	Technology
Frontend:	React, TypeScript, Vite, Tailwind CSS, Shadcn UI
Backend:	    Node.js, Express.js
Emailing:	Nodemailer
Security:	Google reCAPTCHA v2, CORS
Utilities:	concurrently, dotenv, axios

Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (v18 or later recommended)
npm (usually comes with Node.js)

🚀 Getting Started
Follow these steps to get the project up and running on your local machine.

1. Clone the Repository

git clone <your-repository-url>
cd pathfinder-ai-shine

2. Install Dependencies
Install all the necessary packages for both the frontend and backend.

npm install

3. Set Up Environment Variables
You need to create a .env file in the root of the project to store your secret keys and configuration.
Create a new file named .env in the project's root directory.
Copy the content from the example below and paste it into your new .env file.
Replace the placeholder values with your actual credentials.

# .env file

# --- Server Configuration ---
PORT=5000

# --- Email Configuration (Get these from your email provider) ---
SMTP_HOST=your-smtp-host.com
SMTP_PORT=465
EMAIL_USER=info@yourdomain.com
EMAIL_PASS=your-email-password
ADMIN_EMAIL=email-to-receive-notifications@example.com

# --- Google reCAPTCHA v2 Keys ---
RECAPTCHA_V2_SECRET_KEY=your-recaptcha-v2-secret-key

Important: You also need to add your reCAPTCHA Site Key to the frontend files where the ReCAPTCHA component is used (Contact.tsx and EmailFormModel.tsx).

🏃‍♀️ Running the Application
To run both the frontend and backend servers at the same time, use the following command:

npm start

This will:
Start the Vite frontend development server (usually on http://localhost:8080).
Start the Node.js backend server (on http://localhost:5000).
Your website should now be running and fully functional on your local machine.

Available Scripts:
npm start: Runs both the frontend and backend concurrently.
npm run dev: Runs only the frontend Vite server.
npm run start:backend: Runs only the backend Node.js server.
npm run build: Builds the React application for production.