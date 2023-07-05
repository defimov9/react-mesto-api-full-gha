import React from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';

const Register = (props) => {
  return (
    <>
      <AuthForm
        title='Регистрация'
        name='register'
        buttonText='Зарегистрироваться'
        onSubmit={props.onRegister}
      />
      <p className='form__question'>
        Уже зарегистрированы?{' '}
        <Link to='/sign-in' className='form__link'>
          Войти
        </Link>
      </p>
    </>
  );
};

export default Register;
