import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const Registration = () => (
  <div className="Registration">
    <TextField floatingLabelText="Email" type="email" /><br/>
    <TextField floatingLabelText="Senha" type="password"/><br/>
    <RaisedButton label="Criar Usuário" primary={true} />
  </div>
);

export default Registration;
