import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h1>{props.activeCity.name}</h1>
      <p>{props.activeCity.address}</p>
      <img src={url} alt="selected city" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

