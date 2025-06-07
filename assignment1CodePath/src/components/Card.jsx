import React from "react";

const Card = (props) => {
  return (
    <div class="card">
    <img src={props.imgLink} alt={props.imgDescription} class="cardImage"></img>
    <div class="container">
    <p>{props.description}</p>
    <div class="buttonContainer">
    <a class="button" href={props.webLink}>Learn More</a>
    </div>
    </div>
    </div>
  )
}

export default Card;