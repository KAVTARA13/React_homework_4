import { useDispatch, useSelector } from 'react-redux';
import { setAuthGuestAction } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import * as routes from '../../utils/routePaths';
import { AUTH_TOKEN } from '../../utils/constants';
import { authSelector } from '../../redux/selectors/auth-selectors';

const Navigation = () => {
    const dispatch = useDispatch();

  const authorized = useSelector(authSelector);

  const onLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(setAuthGuestAction());
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink to={routes.USERS_PATH} className="nav-link" activeClassName="active">
                        Users
                    </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={routes.RESOURCE_PATH} className="nav-link" activeClassName="active">
                        Resource
                    </NavLink>
        </li>
      </ul>
      <div className="d-flex">
      {authorized ? (
            <button className="btn btn-outline-danger" onClick={onLogOut} type="button">
            Log Out
          </button>
          ) : null}
        {!authorized ? (
            <NavLink to={routes.LOGIN_PATH} className="btn btn-outline-success">
            Sign in
          </NavLink>
          ) : null}
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;