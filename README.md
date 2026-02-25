# Music Application with CI/CD (React + Jenkins + Vercel)

This is a simple music application built using React and connected to a CI/CD pipeline using Jenkins. The main purpose of this project is to learn how a frontend application can be automatically built and deployed whenever changes are pushed to GitHub.

The application displays a list of songs, allows users to add songs to a playlist, and supports navigation between pages using React Router. Global state is managed using React Context API.

Whenever code is pushed to the repository, Jenkins pulls the latest code, installs dependencies, builds the project, and triggers a Vercel Deploy Hook to deploy the latest version.

---

## Technologies Used

- React  
- React Router DOM  
- Context API  
- HTML, CSS, JavaScript  
- Jenkins  
- Node.js & npm  
- Vercel

---

## How It Works

1. Developer pushes code to GitHub  
2. Jenkins automatically starts the pipeline  
3. Jenkins installs dependencies and builds the app  
4. Jenkins triggers Vercel Deploy Hook  
5. Vercel deploys the new build  
