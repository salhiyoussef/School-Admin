import React from "react";
import { Switch, withRouter } from "react-router-dom";

import AuthLayoutRouter from "../layouts/authLayout";
import GuestLayoutRouter from "../layouts/guestLayout";

import Dashboard from "../pages/dashboard";
import AddStudents from "../pages/students/addStudents";
import DetailsStudents from "../pages/students/detailsStudents";
import ListStudents from "../pages/students";
import Login from "../pages/login";
import Register from './../pages/register';
import Profile from '../pages/profile';
import Users from "../pages/users";
import Drivers from './../pages/drivers';
import Transport from './../pages/transport';
import Paiement from './../pages/paiement';


import FormikApp from "../pages/formik";

import Error500 from './../components/errorPage/500';
import Error404 from './../components/errorPage/404';
import Error401 from './../components/errorPage/401';


function RoutesApp() {
  return (
    <Switch>
      <GuestLayoutRouter exact path="/" component={Login} />
      <GuestLayoutRouter  path="/register" component={Register} />
      {/* <GuestLayoutRouter path="/" component={Dashboard} /> */}
      
      <AuthLayoutRouter path="/my-profile" component={Profile} />
      <AuthLayoutRouter path="/users" component={Users} />
      <AuthLayoutRouter path="/students-add" component={AddStudents} />
      <AuthLayoutRouter path="/students-detail" component={DetailsStudents} />
      <AuthLayoutRouter path="/students-list" component={ListStudents} />
      <AuthLayoutRouter path="/driver" component={Drivers} />
      <AuthLayoutRouter path="/transport" component={Transport} />
      <AuthLayoutRouter path="/paiement" component={Paiement} />
      <AuthLayoutRouter path="/dashboard" component={Dashboard} />

      <AuthLayoutRouter path="/formik" component={FormikApp} />

      <GuestLayoutRouter path="/500" component={Error500} />
      <GuestLayoutRouter path="/401" component={Error401} />
      <GuestLayoutRouter path="/404" component={Error404} />
      <GuestLayoutRouter path="*" component={Error404} />
    </Switch>
  );
}

export default withRouter(RoutesApp);
