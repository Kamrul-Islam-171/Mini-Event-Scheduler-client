# 📅 Mini Event Scheduler - Frontend

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</div>

<div align="center">
  <h3>🔗 <a href="https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-client">Front-End Repository</a> | 🔗 <a href="https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-backend">Backend Repository</a></h3> | 🚀 <a href="https://mini-event-scheduler-alpha.vercel.app">Live Demo</a></h3>
</div>


## 🎯 About The Project

The Mini Event Scheduler Frontend is a modern, responsive React application built with TypeScript and styled with Tailwind CSS. It provides an intuitive interface for managing events with intelligent AI-powered categorization, allowing users to create, view, update, and delete events seamlessly.

### 🌟 Key Highlights

- **Modern React with TypeScript**: Full type safety and modern development experience
- **Responsive Design**: Optimized for both desktop and mobile devices
- **AI-Powered Categorization**: Visual display of automatically categorized events
- **Real-time Updates**: Instant UI updates with backend synchronization
- **Clean UI/UX**: Intuitive and visually appealing interface with Tailwind CSS

## ✨ Features

### 🔧 Core Functionality

- **Event Management**: Create, view, and delete events with ease
- **Smart Categorization**: Visual display of AI-categorized events (Work, Personal, Other)
- **Archive System**: Mark events as archived with status toggle
- **Date & Time Management**: Comprehensive date and time handling
- **Responsive Layout**: Seamless experience across all devices

### 🎨 UI/UX Features

- **Modern Design**: Clean, minimalist interface with Tailwind CSS
- **Interactive Forms**: User-friendly form validation and feedback
- **Event Cards**: Beautiful event display with category indicators
- **Loading States**: Smooth loading indicators for better UX
- **Error Handling**: Graceful error handling with user feedback

### 📱 Responsive Features

- **Mobile-First Design**: Optimized for mobile devices
- **Tablet Compatibility**: Perfect layout for tablet screens
- **Desktop Experience**: Enhanced desktop interface
- **Cross-Browser Support**: Works seamlessly across modern browsers

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Fetch API
- **Date Handling**: date-fns
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have:

- Node.js (v18.0.0 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-client.git
   cd Mini-Event-Scheduler-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, update the API URL to your deployed backend:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

## 📁 Project Structure

```
src/
├── assets/                     # Static assets
├── components/                 # Reusable React components
│   ├── Button.tsx             # Custom button component
│   ├── Loader.tsx             # Loading spinner component
│   ├── Modal.tsx              # Modal dialog component
│   ├── NotFound.tsx           # 404 page component
│   └── Table.tsx              # Events table component
├── Interface/                  # TypeScript interfaces
│   └── EventInterface.ts      # Event-related type definitions
├── pages/                     # Page components
│   └── [page-components]      # Individual page components
├── utils/                     # Utility functions
│   ├── getDate.ts            # Date formatting utilities
│   └── getTime.ts            # Time formatting utilities
├── App.css                   # Global styles
├── App.tsx                   # Main application component
├── index.css                 # Tailwind CSS imports
├── main.tsx                  # Application entry point
└── vite-env.d.ts            # Vite environment types
```


## 💡 Usage

### Creating an Event

1. Click the "Add Event" button
2. Fill in the required fields:
   - **Title**: Event name (required)
   - **Date**: Event date (required)
   - **Time**: Event time in HH:MM format (required)
   - **Notes**: Optional additional information
3. Submit the form
4. The event will be automatically categorized by the AI system

### Managing Events

- **View Events**: All events are displayed in a responsive table/card layout
- **Archive Event**: Click the archive button to mark an event as archived
- **Delete Event**: Click the delete button to permanently remove an event
- **Category Display**: Each event shows its AI-determined category with color coding

### Category System

Events are automatically categorized with visual indicators:

- 🏢 **Work**: Blue color scheme (meetings, projects, deadlines)
- 👨‍👩‍👧‍👦 **Personal**: Green color scheme (family, birthdays, appointments)
- 📋 **Other**: Gray color scheme (general events)

## 🔗 API Integration

### API Endpoints Used

The frontend integrates with the following backend endpoints:

```typescript
// Get all events
GET /api/events

// Create new event
POST /api/events

// Archive event
PUT /api/events/:id

// Delete event
DELETE /api/events/:id
```

### Error Handling

The application includes comprehensive error handling:

- Network errors with user-friendly messages
- Form validation


## 🚀 Deployment

### Vercel Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

**Live URL**: [https://mini-event-scheduler-alpha.vercel.app](https://mini-event-scheduler-alpha.vercel.app)



**Project Maintainer**: Kamrul Islam

- **GitHub**: [@Kamrul-Islam-171](https://github.com/Kamrul-Islam-171)
- **Repository**: [Mini Event Scheduler Client](https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-client)
- **Live Demo**: [https://mini-event-scheduler-alpha.vercel.app](https://mini-event-scheduler-alpha.vercel.app)

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ using React, TypeScript, and Tailwind CSS</p>
</div>
