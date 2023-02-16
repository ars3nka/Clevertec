import { ReactDOM } from 'react';

import { ReactComponent as ErrorAttention } from './img/error_attention.svg';
import { ReactComponent as ErrorClose } from './img/error_close.svg';

import './error.scss';

export const Error = () => {
  const handleClose = () => {
    document.getElementById('error-message').style.display = 'none';
  };

  return (
    <div className='error' data-test-id='error' id='error-message'>
      <div className='message'>
        <ErrorAttention />
        <h2>Что-то пошло не так. Обновите страницу через некоторое время.</h2>
      </div>
      <button type='button' className='error-close-btn' onClick={handleClose}>
        <ErrorClose />
      </button>
    </div>
  );
};
