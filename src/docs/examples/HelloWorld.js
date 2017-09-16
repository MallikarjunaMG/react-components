import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({message}) => {
  return (
    <div>
      Hello World!
    </div>
  );
};

HelloWorld.propTYpes = {
  message: PropTypes.string.isRequired
}

export default HelloWorld;