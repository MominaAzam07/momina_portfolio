# My Personal Portfolio

This is my personal portfolio built with **React**, **Framer Motion**, and **Three.js**. It showcases my projects, skills, and a 3D interactive experience.

## 🛠️ Technologies Used

- **React.js** for building the frontend
- **Framer Motion** for smooth animations
- **Three.js** for 3D modeling and visual effects

## 🚀 Getting Started

First, clone the repository:

```bash
git clone https://github.com/MominaAzam07/3d-animated-portfolio-completed.git
cd 3d-animated-portfolio-completed
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will run on `http://localhost:5173` by default.

## ✉️ Setting Up Contact Form

This portfolio uses [EmailJS](https://www.emailjs.com/) to handle the contact form. Follow these steps to set it up:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create an account.
2. Create a new service and email template.
3. Get your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard.
4. In the root of your project, create a `.env` file and add the following:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

5. Make sure your environment variables are loaded correctly when running the project.

## 🌐 Deployment

You can deploy this portfolio to any static hosting service like Vercel, Netlify, or GitHub Pages.



