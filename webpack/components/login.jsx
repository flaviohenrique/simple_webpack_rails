import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const Login = () => (
  <div className="Login">
    <TextField floatingLabelText="Login"/><br/>
    <TextField floatingLabelText="Senha" type="password"/><br/>
    <RaisedButton label="Logar" primary={true} />
  </div>
);

export default Login;
