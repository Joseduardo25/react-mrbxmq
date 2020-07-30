import React, { Component,useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  var animales = [
    {
      imagen: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
      nombre: 'gato',
    },
    {
      imagen: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
      nombre: 'gato',
    },
    {
      imagen: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
      nombre: 'gato',
    },
    {
      imagen: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
      nombre: 'gato',
    }
  ]
const[luz, setluz] = useState(true)
function onClickInterruptor() {
  setluz(!luz)
}
 return(
   <div>
    <div>
      <img style={{width:'20px', height:'20px'}} src={luz ? 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg' : 'https://i.pinimg.com/originals/95/49/e2/9549e29575199d1604fae60275b97a9d.jpg'} />
      <button onClick={onClickInterruptor} >
        {luz ? 'encender' : 'apagar'}
      </button>
    </div>

    {luz ? '' : <div>
      {animales.map((objeto) => ( 
        <img style={{widht:'20px', height:'20px'}} src={objeto.imagen}/>
      ))}
    </div> }
  </div>
 )
}



render(<App />, document.getElementById('root'));

