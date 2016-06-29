import React, { PropTypes } from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const TEXT_SIZES = ['regular', 'large', 'small']
const TEXT_COLORS = ['white', 'gray', 'blue', 'black']

const propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(TEXT_SIZES),
  color: PropTypes.oneOf(TEXT_COLORS),
}

const defaultProps = {
  color: TEXT_COLORS[0],
  size: TEXT_SIZES[0],
}

export default class StyledText extends React.Component {

  render() {
    const classes = classnames(
      styles[this.props.color],
      styles[this.props.size],
      styles.font
    )

    return (
      <span className={classes}>
        {this.props.text}
      </span>
    )
  }
}

StyledText.PropTypes = propTypes
StyledText.DefaultProps = defaultProps
