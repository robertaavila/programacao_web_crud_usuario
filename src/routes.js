import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';
import UserForm from './UserForm';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest} render={props => (
        isAuthenticated() ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: "/login", state: {from: props.location} }} />)
    )} />
);

const LoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ?
        (<Redirect to={{ pathname: "/app", state: {from: props.location} }} />) : 
        (<Component {...props} />)
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Link to="/app">Abrir desofuscador</Link>} />
            <LoginRoute exact path="/login" component={() => <LoginForm />} />
            <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
            <Route exact path="/createaccount" component={() => <UserForm />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;