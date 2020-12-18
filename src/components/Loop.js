import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../utils'

class Loop extends Component {

	render() {
		const { r, cx, cy, width, value, ...props } = this.props
		const x = cx || 0
		const y = cy || 0
		const percentage = value || 0
		const c = 2 * Math.PI * r
		const dashoffset = c - (c * percentage / 100)
		const className = classNames(
			'm1-progress-circle',
			props.className
		)
		const circleStyle = {strokeWidth: width + 'px'}

		return (
			<div className={className}>
        <svg>
          <circle cx={x} cy={y} r={r}
          	strokeWidth={width}
          	style={circleStyle}
          ></circle>
          <circle cx={x} cy={y} r={r} 
          	strokeDasharray={c} 
          	strokeDashoffset={dashoffset}
          	strokeWidth={width}
          	style={circleStyle}
          ></circle>
        </svg>
      </div>
		)
	}
}
Loop.propTypes = {
	r: PropTypes.number.isRequired,
	cx: PropTypes.number,
	cy: PropTypes.number,
	width: PropTypes.number,
	value: PropTypes.number
}

export default Loop
