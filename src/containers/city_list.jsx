import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from '../containers/city';

class CityList extends Component {
  // Map action creators to your container

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.setCities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
