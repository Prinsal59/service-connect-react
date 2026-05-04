# ServiceConnect React App

ServiceConnect is a modern React-based web application built to connect service providers with customers. This project is the frontend part of a MERN (MongoDB, Express, React, Node.js) stack application.

## 🚀 Features

- **User Authentication**: Secure Login and Registration.
- **Role-Based Dashboards**:
  - **Customer Dashboard**: Book services, manage bookings, and view profiles.
  - **Provider Dashboard**: Manage jobs and update professional profiles.
  - **Admin Panel**: Manage customers and providers.
- **Service Management**: Browse and book various services.
- **Reviews**: Read and post reviews for services.
- **Settings**: Update profile, change password, and delete account.
- **Responsive UI**: Built with Tailwind CSS for a modern, mobile-friendly experience.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18.2.0)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6.23.1)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: PostCSS, Autoprefixer

## 📁 Project Structure

```text
src/
├── components/    # Reusable UI components (Navbar, Footer, etc.)
├── layouts/       # Page layouts (MainLayout)
├── pages/         # Full page components (Home, Dashboard, Login, etc.)
├── styles/        # Global styles and Tailwind configuration
├── App.jsx        # Main application component and routing
└── main.jsx       # Entry point
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (installed on your machine)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License.
