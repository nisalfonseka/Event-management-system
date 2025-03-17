import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './User/Login';
import Register from './User/Register';
import UserDashboard from './User/UserDashboard';
import AdminDashboard from './User/AdminDashboard';
import AdminUsers from './User/AdminUsers';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';

const App = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/admin-dashboard';

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        {!hideHeader && <Header />}
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            {/* User routes */}
            <Route element={<ProtectedRoute />}>
              <Route path='/dashboard' element={<UserDashboard />} />
            </Route>
            
            {/* Admin routes */}
            <Route element={<ProtectedRoute adminOnly={true} />}>
              <Route path='/admin-dashboard' element={<AdminDashboard />} />
              <Route path='/admin/users' element={<AdminUsers />} />
            </Route>
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
