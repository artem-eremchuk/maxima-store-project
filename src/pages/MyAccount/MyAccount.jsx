import profile from './MyAccount.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import happy_user from './../../assets/images/happy-user.png';
import logo from './../../assets/images/logo.svg';


function MyAccount() {
  const isAuth = useSelector(state => state.login.isAuth);
  const userName = useSelector(state => state.login.userName);

  return (
    <>
      <div className={profile.wrapper}>
        <div className={profile.container}>
          <div className={profile.top}>
            <div className={profile.img__wrapper}>
              <img 
                className={profile.img__image} 
                src={(isAuth) ? happy_user : logo} 
                alt="profile"
              />
            </div>
          </div>
          {(isAuth) ? <h1 className={profile.title}>
              {`Welcome ${userName}`}
            </h1> 
          : <>
              <Link 
                className={profile.link} 
                to={'/register'}>
                  Register
              </Link>
              <Link 
                className={profile.link} 
                to={'/login'}>
                  Login
              </Link>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default MyAccount;