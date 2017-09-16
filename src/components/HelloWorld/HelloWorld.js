import React from 'react';
import PropTypes from 'prop-types';
/**
 * A Sample component Helloworld
 * that takes {message} param0
 */
const HelloWorld = ({message}) => {
  return (
    <div>
      Hello World!
    </div>
  );
};

HelloWorld.propTypes = {
  /**
   * Message to display
   */
  message: PropTypes.string.isRequired
}

HelloWorld.defaultProps = {
  message: 'Default Message'
}

export default HelloWorld;