import React, { Component, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  var imagenes = ['luis']

  const[img, setImg] = useState(imagenes)
  const [inputGato, setInputGato] = useState('')
  
  function agregarGato() {
    var copyImg = [...img]
    copyImg.push(inputGato)
    setImg(copyImg)
    setInputGato('')
  }

  function onChangeGato(e) {
    setInputGato(e.target.value)
  }

 return(
   <div>
    <div>
      {img.map((e) => (
      <div>{e}</div>)
      )}
    </div>
      <div>
        <input value={inputGato} onCShange={onChangeGato}/>
        <button onClick={agregarGato}>Agregar</button>
      </div>
    </div>
 )
}



render(<App />, document.getElementById('root'));

