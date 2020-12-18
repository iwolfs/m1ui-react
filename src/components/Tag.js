	import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TagColors, TagSizes } from '../enums'
import { classNames } from '../utils'



class Tag extends Component {

	randerClose = (props) => {
		return (
			<i className="m1-tag-close"></i>
		)
	}

	randerCheck = (props) => {
		return (
			<i className="m1-tag-check"></i>
		)
	}

	render() {
		const { color, size, removeable, checkable, ...props } = this.props
		const profix = 'm1-tag'
		const className = classNames(
			profix,
			color ? profix + '-' + color : null,
			size ? profix + '-' + size: null
		)
		return (
			<span
				{...props}
				className={className}
			>
			{props.children}
			{removeable && this.randerClose()}
			{checkable && this.randerCheck()}
			</span>
		)
	}
}

Tag.propTypes = {
	color: PropTypes.oneOf(Object.values(TagColors)),
	size: PropTypes.oneOf(Object.values(TagSizes)),
	removeable: PropTypes.bool
}


export default Tag
