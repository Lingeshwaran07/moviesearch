import React from "react";
import "./card.css";

const Card = (value) => {
  console.log(value)
  return (
    <>

    {value.Title}
      <div className="card card-bod-rad">
        <img src= {value.value.Poster}  className="card-img-top" alt="No image available" />
        <div className="card-body">
          <span className="card-text">MOVIE</span>
          <h6 className="card-title">{value.value.Title}</h6>
        </div>
      </div>
    </>
  );
};

export default Card;
