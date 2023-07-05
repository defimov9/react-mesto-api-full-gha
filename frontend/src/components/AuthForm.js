import React, { useState } from 'react';

const AuthForm = ({ title, name, buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(password, email);
  }

  return (
    <form className='form' action='#' name={name} onSubmit={handleSubmit}>
      <p className='form__title'>{title}</p>
      <div className='form__inputs-wrapper'>
        <input
          type='email'
          name='email'
          id='email'
          className='form__input'
          placeholder='Email'
          minLength='2'
          maxLength='40'
          required
          value={email || ''}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          name='password'
          id='password'
          className='form__input'
          placeholder='Пароль'
          minLength='2'
          maxLength='40'
          required
          value={password || ''}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button type='submit' className='form__submit'>
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
