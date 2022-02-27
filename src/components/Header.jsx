import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { AiOutlineMore } from 'react-icons/ai';

function Header() {
  return (
    <header className='content-header'>
      <div>
        <div>img</div>
        <p>name</p>
      </div>
      <div className='content-icons-menu'>
        <div>
          <HiSearch className='icon-search' />
        </div>
        <div>
          <AiOutlineMore className='icon-menu' />
        </div>
      </div>
    </header>
  );
}

export default Header;