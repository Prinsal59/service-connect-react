import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Reviews from './pages/Reviews.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import CustomerDashboard from './pages/CustomerDashboard.jsx'
import AdminCustomers from './pages/AdminCustomers.jsx'
import AdminProviders from './pages/AdminProviders.jsx'
import BookService from './pages/BookService.jsx'
import CustomerBooking from './pages/CustomerBooking.jsx'
import CustomerProfile from './pages/CustomerProfile.jsx'
import ProviderJobs from './pages/ProviderJobs.jsx'
import ProviderProfile from './pages/ProviderProfile.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'
import ProviderDashboard from './pages/ProviderDashboard.jsx'
import Settings from './pages/Settings.jsx'
import ChangePassword from './pages/ChangePassword.jsx'
import RequestSuccess from './pages/RequestSuccess.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="customer-dashboard" element={<CustomerDashboard />} />
        <Route path="admin-customers" element={<AdminCustomers />} />
        <Route path="admin-providers" element={<AdminProviders />} />
        <Route path="provider-dashboard" element={<ProviderDashboard />} />
        <Route path="provider-jobs" element={<ProviderJobs />} />
        <Route path="provider-profile" element={<ProviderProfile />} />
        <Route path="customer-booking" element={<CustomerBooking />} />
        <Route path="customer-profile" element={<CustomerProfile />} />
        <Route path="book-service" element={<BookService />} />
        <Route path="settings" element={<Settings />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        <Route path="request-success" element={<RequestSuccess />} />
      </Route>
    </Routes>
  )
}
