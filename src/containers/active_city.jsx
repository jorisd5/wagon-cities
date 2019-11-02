import React from 'react';

const ActiveCity = (props) => {
  return (
    <div className="active-city">
      <h1>{props.city.name}</h1>
      <p>{props.city.address}</p>
    </div>
  );
};

export default ActiveCity;

