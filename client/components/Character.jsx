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
        <span> {birthYear.toUpperCase()} </span>
      </div>
      <div className="card-text">
        <span>Gender:</span>
        <span> {gender.toUpperCase()} </span>
      </div>
      <div className="card-text">
        <span>Height:</span>
        <span> {height.toUpperCase()} </span>
      </div>
      <div className="card-text">
        <span>Mass:</span>
        <span> {mass.toUpperCase()} </span>
      </div>
      <div className="card-text">
        <span>Hair Color:</span>
        <span> {hairColor.toUpperCase()} </span>
      </div>
      <div className="card-text">
        <span>Skin Color:</span>
        <span> {skinColor.toUpperCase()} </span>
      </div>
      <div className="card-text">
        <span>Eye Color:</span>
        <span> {eyeColor.toUpperCase()} </span>
      </div>
    </div>
  );
};

export default Character;
