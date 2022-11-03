import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component }) {
  const { isAuth } = useSelector(state => state.login);

  return (
    isAuth ? component : <Navigate to={'/login'}/>
  )
}

export default PrivateRoute;