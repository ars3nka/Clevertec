import Facebook from './img/facebook.png';
import Instagram from './img/inst.png';
import LinkedIn from './img/linkedin.png';
import VK from './img/vk.png';

import './footer.css';

export const Footer = () => (
  <section className='footer-section'>
    <footer>
      <div className='footer'>
        <div className='footer-left'>
          <div className='rights'>© 2020-2023 Cleverland. Все права защищены.</div>
        </div>
        <div className='footer-right'>
          <a href='https://www.facebook.com/clevertec.ru/'>
            <img src={Facebook} alt='Facebook' />
          </a>
          <a href='https://www.facebook.com/clevertec.ru/'>
            <img src={Instagram} alt='Instagram' />
          </a>
          <a href='https://www.facebook.com/clevertec.ru/'>
            <img src={VK} alt='VK' />
          </a>
          <a href='https://www.facebook.com/clevertec.ru/'>
            <img src={LinkedIn} alt='LinkedIn' />
          </a>
        </div>
      </div>
    </footer>
  </section>
);
