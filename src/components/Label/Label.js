import React from 'react'
import PropTypes from 'prop-types'
/**
 * label with =>
 * @param {htmlFor, label, required} 
 */
const Label = ({htmlFor, label, required}) => {
  return(
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      {label} {required && <span style={{color: 'red'}}>*</span>}
    </label>
  )
}

Label.propTypes = {
  /** htmlFor */
  htmlFor: PropTypes.string.isRequired,
  /** label string */
  label: PropTypes.string.isRequired,
  /** hightlight with asterisk if set to true */
  required: PropTypes.bool
}
export default Label