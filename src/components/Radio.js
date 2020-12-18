import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputTypes } from '../enums'
import { classNames, removeProps } from '../utils'

let currentId = 0

export default class Radio extends Component {

  render() {
    const {name,text, ...props} = this.props 
    const className = classNames(
      'm1-tgl',
      props.className
    )
    const radioId = props.id || `radio${currentId++}`
    const passProps = removeProps(props, ['id','name','onChange'])
    return (
      <span {...passProps} className={className} >
        <RadioInput {...passProps} name={name} id={radioId}/>
        <RadioPaddle className={className} htmlFor={radioId} />
        {' '}
        {text ? <label htmlFor={radioId}>{text}</label> : null}
      </span>
    )
  }
}
Radio.propTypes = {
  id: PropTypes.string
}


export const RadioInput = props => {
  const className = classNames(
    props.className
  )

  const passProps = removeProps(props, ['type'])

  return (
    <input {...passProps} className={className} type={props.type || InputTypes.RADIO} />
  )
}
RadioInput.propTypes = {
  type: PropTypes.string
}

export const RadioPaddle = props => {
  const className = classNames(
    'm1-tgl-radio',
    props.className
  )
  return (
    <label {...props} className={className} />
  )
}