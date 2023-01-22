import React from 'react';
import '../stylesheets/Pantalla.css'

// Alternativa de usar los componentes como función flecha

const Pantalla = ({ input }) => (

  <div className='input'>
    {input}
  </div>
    
);

export default Pantalla;