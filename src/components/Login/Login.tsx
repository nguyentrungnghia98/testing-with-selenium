import React from 'react';
import './Login.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Container from '@material-ui/core/Container';

const Login: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <div id="fundo" className="absolute-center-container">
        <div className="circle-outline"></div>
        <div className="circle-outline"></div>
        <div className="circle-outline"></div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              exact
              render={props => <LoginForm {...props} type={'Sign In'} />}
            ></Route>
            <Route
              path="/register"
              exact
              render={props => <LoginForm {...props} type={'Sign Up'} />}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default Login;
