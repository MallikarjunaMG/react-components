import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, type='button'}) => {
  return (
    <button type={type}>{label}</button>
  )
}

Button.propTypes = {
  /** Button label text to display */
  label: PropTypes.string.isRequired,
    /** Button type */
  type: PropTypes.string.isRequired
}

export default Button;