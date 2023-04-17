import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          Find contacts by name
          <input
            type="text"
            name="name"
            onChange={this.props.onChange}
            value={this.props.value}
          />
        </label>
      </div>
    );
  }
}
export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
