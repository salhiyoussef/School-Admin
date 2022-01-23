import React from 'react';
import { Route } from 'react-router-dom';
import GuestLayout from './layout';

const GuestLayoutRouter = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <GuestLayout {...matchProps} roles={roles || []}>
                <Component {...matchProps} />
            </GuestLayout>
        )}
    />
);

export default GuestLayoutRouter;