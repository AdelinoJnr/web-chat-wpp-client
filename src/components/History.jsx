import React from 'react';
import { grupos } from '../database/data';
import CardHistory from './CardHistory';

function History() {
  return (
    <section className='content-history'>
      {grupos.map((grupo, index) => <CardHistory key={index} grupo={grupo} />)}
    </section>
  );
}

export default History;