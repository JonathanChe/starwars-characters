import React from 'react';

const Character = (props) => {
  const { character : {
    name,
    height,
    mass,
    'hair_color': hairColor,
    'skin_color': skinColor,
    'eye_color': eyeColor,
    'birth_year': birthYear,
    gender,
  }} = props;

  return (
    <div id="card">
      <h2>{name}</h2>
      <div className="card-text">
        <span>Birth:</span>
        <span> {birthYear} </span>
      </div>
      <div className="card-text">
        <span>Gender:</span>
        <span> {gender} </span>
      </div>
      <div className="card-text">
        <span>Height:</span>
        <span> {height} </span>
      </div>
      <div className="card-text">
        <span>Mass:</span>
        <span> {mass} </span>
      </div>
      <div className="card-text">
        <span>Hair Color:</span>
        <span> {hairColor} </span>
      </div>
      <div className="card-text">
        <span>Skin Color:</span>
        <span> {skinColor} </span>
      </div>
      <div className="card-text">
        <span>Eye Color:</span>
        <span> {eyeColor} </span>
      </div>
    </div>
  );
};

export default Character;
