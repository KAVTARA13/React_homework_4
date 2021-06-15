import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loader } from './components/loader/Loader';
import * as routes from './utils/routePaths';
import Users from './pages/users'

const LoginPage = React.lazy(() => import('./pages/auth/login'));
const Resources = React.lazy(() => import('./pages/resource'));
const RegisterPage = React.lazy(() => import('./pages/auth/register'));

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route path={routes.USERS_PATH}>
                    <Users />
                </Route>
                <Route path={routes.RESOURCE_PATH}>
                    <Resources />
                </Route>
                <Route path={routes.REGISTER_PATH}>
                    <RegisterPage />
                </Route>
                <Route path={routes.LOGIN_PATH}>
                    <LoginPage />
                </Route>
                <Route path={routes.HOME}>
                    <Users />
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;