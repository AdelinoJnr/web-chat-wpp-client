import React from "react";

function CardHistory({ grupo: { img, name } }) {
  // console.log(img)
  return(
    <section>
      <div>
        <img width="200" src={img} alt="Icone do Grupo" />
      </div>
      <div>
        <p>{name}</p>
        <span>{''}</span>
      </div>
    </section>
  )
}

export default CardHistory;