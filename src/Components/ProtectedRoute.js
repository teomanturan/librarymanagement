import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
  if (!user) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }
  
  // If user exists, render the protected component
  return children;
}

export default ProtectedRoute;