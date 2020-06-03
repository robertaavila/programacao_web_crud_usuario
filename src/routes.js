import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { isAuthenticated, isAdmin } from './auth';
import NewUserPage from './components/user/NewUserPage';
import LoginPage from './components/login/LoginPage';
import UserList from './components/user/UserList';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest} render={props => (
        isAuthenticated() ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: "/login", state: {from: props.location} }} />)
    )} />
);
const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest} render={props => (
        isAuthenticated() && isAdmin() ?
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
            <LoginRoute exact path="/login" component={() => <LoginPage />} />
            <PrivateRoute path="/app" component={() => <h1>Você está logado (aqui ficará a funcionalidade de desofuscamento)</h1>} />
            <PrivateAdminRoute path="/admin/" component={() => <UserList />} />
            <Route exact path="/createaccount" component={() => <NewUserPage />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;