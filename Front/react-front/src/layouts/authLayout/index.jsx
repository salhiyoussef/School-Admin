import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from './layout';

const AuthLayoutRouter = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <AuthLayout {...matchProps} roles={roles || []}>
                <Component {...matchProps} />
            </AuthLayout>
        )}
    />
);

export default AuthLayoutRouter;