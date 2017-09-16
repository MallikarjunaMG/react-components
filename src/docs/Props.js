import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </thead>
        <tbody>
          {
            Object.keys(props).map((key, idx) => {
              return (
                <tr key={idx}>
                  <td>{key}</td>
                  <td>{props[key].description}</td>
                  <td>{props[key].type.name}</td>
                  <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
                  <td>{props[key].required && 'X'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

Props.propTypes = {
  props: PropTypes.object.isRequired 
}
export default Props;