import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }

  // componentWillMount() {
  //   this.props.setCities();
  // }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}

// import { setCities } from '../actions';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setCities: setCities },
//     dispatch
//   );
// }

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateToProps)(CityList);
