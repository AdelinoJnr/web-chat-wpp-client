import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

function SearchMenu() {
  const [valueInput, setValueInput] = useState('');

  return (
    <div className='content-search-menu'>
      <button>
        <HiSearch className='icon-search' />
      </button>
      <input
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
        type="text"
        name="searchMenu"
        placeholder='Pesquisar ou começar nova conversar'
      />
    </div>
  );
}

export default SearchMenu;