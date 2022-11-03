import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validToken } from '../../store/login/loginActions';

function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const accessToken = Cookies.get('access_token');

    if (accessToken && location.pathname !== '/login') {
      dispatch(validToken(Cookies.get('access_token')));
    }
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
          <Outlet />
      </main> 
      <Footer />
    </>
  )
}

export default Layout