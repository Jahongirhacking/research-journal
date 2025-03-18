import { Header } from '@/components/Header/Header';
import { paths } from '@/router/paths';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import './style.scss';

const RootLayout = () => {
  const access = useSelector((store: RootState) => store.authSlice.access);

  if (access) return <Navigate to={paths.profile} />;

  return (
    <div className="login">
      <div className="login__header">
        <Header isLogin />
      </div>

      <div className="login__main">
        <div
          className="login-card flex-center direction-column gap24"
          style={{ width: '100%' }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
