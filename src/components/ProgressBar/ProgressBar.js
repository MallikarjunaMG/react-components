import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  getColor = (percent) => {
    if(this.props.percent === 100) return 'green'
    return this.props.percent > 50 ? 'lightgreen' : 'red'
  }

  getWidthAsTotalPercent = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  }

  render() {
    const {percent, width, height} = this.props
    return(
      <div style={{border: '1px solid lightgray',width: width}}>
        <div style={{
          width: this.getWidthAsTotalPercent(),
          height: height,
          backgroundColor: this.getColor(percent)
        }}></div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number
}

ProgressBar.defaultProps = {
  height: 5
}

export default ProgressBar