import React, { Component, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const[luz1, setLuz1] = useState(true)
  function onClickInterruptor1(){
    setLuz1(!luz1)
  }
  const[luz2, setLuz2] = useState(true)
  function onClickInterruptor2(){
    setLuz2(!luz2)  
  }
  const[luz3, setLuz3] = useState(true)
  function onClickInterruptor3(){
    setLuz3(!luz3)
  }
  
 return(
   <div>
     <div> 
        <img style={{width:'50px', height:'50px'}} src= {luz1 ? 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg' : 'https://i.pinimg.com/originals/95/49/e2/9549e29575199d1604fae60275b97a9d.jpg'}/>
        <div>
          <button onClick={onClickInterruptor1}>
            {luz1 ? 'Encender' : 'Apagar'}
          </button>  
        </div>
      </div>
      <div> 
        <img style={{width:'50px', height:'50px'}} src= {luz2 ? 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg' : 'https://i.pinimg.com/originals/95/49/e2/9549e29575199d1604fae60275b97a9d.jpg'}/>
        <div>
          <button onClick={onClickInterruptor2}>
            {luz2 ? 'Encender' : 'Apagar'}
          </button>  
        </div>
      </div>
      <div> 
        <img style={{width:'50px', height:'50px'}} src= {luz3 ? 'https://static8.depositphotos.com/1006187/899/i/950/depositphotos_8991916-stock-photo-bulb.jpg' : 'https://i.pinimg.com/originals/95/49/e2/9549e29575199d1604fae60275b97a9d.jpg'}/>
        <div>
          <button onClick={onClickInterruptor3}>
            {luz3 ? 'Encender' : 'Apagar'}
          </button>  
        </div>
      </div>
    </div>
 )
}



render(<App />, document.getElementById('root'));
