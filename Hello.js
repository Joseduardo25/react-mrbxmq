import React, { Component,useState } from 'react';
import { render } from 'react-dom';

const App = () => {
const[luz, setluz] = useState(false)
function onClickInterruptor() {
  setluz(!luz)
}
 return(
<div>
<img style={{width:'20px', height:'20px'}} src={luz ? 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg' : 'https://i.pinimg.com/originals/95/49/e2/9549e29575199d1604fae60275b97a9d.jpg'} />
<button onClick={onClickInterruptor} >
  {luz ? 'encendido' : 'apagado'}
</button>
</div>
 )
}



render(<App />, document.getElementById('root'));

