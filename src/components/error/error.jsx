import { ReactComponent as ErrorAttention } from './img/error_attention.svg';
import { ReactComponent as ErrorClose } from './img/error_close.svg';

import './error.scss';

export const Error = () => (
  <div className='error' data-test-id='error'>
    <div className='message'>
      <ErrorAttention />
      <h2>Что-то пошло не так. Обновите страницу через некоторое время.</h2>
    </div>
    <button type='button' className='error-close-btn'>
      <ErrorClose />
    </button>
  </div>
);
