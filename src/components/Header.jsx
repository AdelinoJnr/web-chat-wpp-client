import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { AiOutlineMore } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className='content-header'>
      <div className='content-perfil-user'>
        <section>
          <FaUserCircle className='icon-perfil' />
        </section>
        <div>
          <p>Somos nozes</p>
          <span>nomes de quem esta online</span>
        </div>
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