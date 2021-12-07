import React, { useEffect } from 'react';
import Navbar from './navbar/Navbar';
import './app.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './disk/Disk';
import Profile from './profile/Profile';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        {!isAuth ? (
          <Switch>
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Redirect to='/login' />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={Disk} />
            <Route exact path='/profile' component={Profile} />
            <Redirect to='/' />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
