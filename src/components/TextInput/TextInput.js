import React from 'react';
import PropTypes from 'prop-types';
import Label from './../Label'
/**
 * 
 * TextInput Optional with Label - Molecule type of composite component 
 */
const TextInput = ({htmlId, label, required=false, name, type='text', onChange, 
placeholder, value, error, children, ...props}) => {
  return (
    <div style={{marginBottom: 16}}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input 
      id={htmlId}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={error && {border: '1px solid red'}}
      {...props} />
      {children}
      {error && <div className='error' style={{color: 'red'}}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /** Unique Html ID */
  htmlId: PropTypes.string.isRequired,
  /** Input label */
  label: PropTypes.string.isRequired,
  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,
  /** Input name */
  name: PropTypes.string.isRequired,
  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,
  /** placeholder to display */
  placeholder: PropTypes.string,
  /** Value */
  value: PropTypes.any,
  /** string to display when error occurs */
  error: PropTypes.string,
  /** Child component to display next to input */
  children: PropTypes.node
}

export default TextInput;