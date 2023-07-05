import React from 'react';
import AuthForm from './AuthForm';

const Login = ({ onLogin }) => {
  return (
    <AuthForm title='Вход' name='login' buttonText='Войти' onSubmit={onLogin} />
  );
};

export default Login;
