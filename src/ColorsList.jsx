import React from "react";

function ColorsList(){

const colores = ['Rojo','Verde','Azul','Amarillo']

return(
    <ul>
    {colores.map((color, index) => (
      <li key={index}>{color}</li>
    ))}
  </ul>
)


}


export default ColorsList