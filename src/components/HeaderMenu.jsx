import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

function HeaderMenu() {
  return (
    <header className='content-header-menu'>
      <section>
        <FaUserCircle className='icon-perfil' />
      </section>

      <div className='content-icons-menu'>
        <div>
          <MdMessage className='icon-message' />
        </div>
        <div>
          <AiOutlineMore className='icon-menu' />
        </div>
      </div>
    </header>
  );
}

export default HeaderMenu;