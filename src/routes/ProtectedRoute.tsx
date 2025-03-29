import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    const user = useSelector((store: RootState) => store.user);
    const isAuthenticated = user.token;
    return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;