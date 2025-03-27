
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../store/store';
import './style.scss';

const RootLayout = () => {
  const token = useSelector((store: RootState) => store.user.token);
  console.log(token);

  if (token) return <Navigate to={'/profile/send-article'} />;

  return (
    <div className="login">
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
