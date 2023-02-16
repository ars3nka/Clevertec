import { ReactComponent as CloseIcon } from '../img/input-close.svg';
import { ReactComponent as SearchIcon } from '../img/search-icon.svg';

export const NavInput = () => {
  const hanldeFocusInput = (event) => {
    event.target.parentElement.classList.add('search-active');
    document.getElementsByClassName('close-input').item(0).classList.remove('hide');

    // console.log('window.visualViewport.width', window.visualViewport.width);
    if (window.visualViewport.width <= 480) {
      document.getElementsByClassName('search').item(0).style.display = 'inline-block';
      document.getElementsByClassName('sort').item(0).classList.add('hide');
      document.getElementsByClassName('navigation-list-right').item(0).classList.add('hide');
    }
    document.getElementById('search').focus();
  };

  const hanldeCloseInput = (event) => {
    event.target.parentElement.classList.remove('search-active');
    document.getElementsByClassName('close-input').item(0).classList.add('hide');
    if (window.visualViewport.width <= 480) {
      document.getElementsByClassName('search').item(0).style.display = 'none';
      document.getElementsByClassName('sort').item(0).classList.remove('hide');
      document.getElementsByClassName('navigation-list-right').item(0).classList.remove('hide');
    }
  };

  return (
    <div className='button-style search-input' data-test-id='button-search-open'>
      <SearchIcon className='input-search-icon' onClick={(event) => hanldeFocusInput(event)} />
      <input
        type='text'
        placeholder='Поиск книги или автора…'
        className='search'
        id='search'
        data-test-id='input-search'
        onFocus={(event) => hanldeFocusInput(event)}
        onBlur={(event) => hanldeCloseInput(event)}
      />
      <CloseIcon
        className='close-input hide'
        data-test-id='button-search-close'
        onClick={(event) => hanldeCloseInput(event)}
      />
    </div>
  );
};
