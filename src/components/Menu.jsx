import React from 'react';
import HeaderMenu from './HeaderMenu';
import History from './History';
import SearchMenu from './SearchMenu';

function Menu() {
  return (
    <article className='content-menu'>
      <HeaderMenu />
      <SearchMenu />
      <History />
    </article>
  );
}

export default Menu;