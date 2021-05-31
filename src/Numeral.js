import React, { Component } from 'react'
import numeral from 'numeral'

const propTypes = {}

class Numeral extends Component {
  constructor(props) {
	super(props)
  }

  render() {
	const className = this.props.className
	const value = this.props.value
	const format = this.props.format
	const formated = (format)?numeral(value).format(format):numeral(value)
	if(value)
	  return <span className={`${(className)?className:''}`}>{formated}</span>
	else return (null)
  }
}

Numeral.propTypes = propTypes

export default Numeral