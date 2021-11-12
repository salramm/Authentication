import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import CreateLeague from './components/league-form/CreateLeague';
import EditProfile from './components/profile-form/EditProfile';
import League from './components/leagues/League';
import EditLeague from './components/league-form/EditLeague';
import EditTeam from './components/team-form/EditTeam';
// import Profiles from './components/profiles/Profiles';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
import setAuthToken from './utils/setAuthToken';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import CreateTeam from './components/team-form/CreateTeam';

if (localStorage.token) {
    setAuthToken(localStorage.token);
};


const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [] ); // [] to keep it from running forever, just run once when it is mounted  -  like having component did mount

    return(
    <Provider store={store}>
    <Router>
        <Fragment>
            <Navbar />
            <Route exact path="/" component={ Landing } />
            <section className="container">
                <Alert />
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/create-league" component={CreateLeague} />
                    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                    <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                    <PrivateRoute exact path="/league" component={League} /> 
                    <PrivateRoute exact path="/edit-team" component={EditTeam}  />
                    <PrivateRoute exact path="/edit-league" component={EditLeague} />
                    <PrivateRoute exact path="/create-team" component={CreateTeam} />
                </Switch>
            </section>
        </Fragment>
    </Router>
    </Provider>
)};

export default App;
