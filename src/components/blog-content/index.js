import React, { PropTypes } from 'react'

import StyledText from '../styled-text'

const propTypes = {
  body: PropTypes.string.isRequired,
}

export default class BlogContent extends React.Component {

  render() {
    return (
      <div>
        <br />
        <StyledText
          text={this.props.body}
          size="regular"
          color="white"
        />
      </div>
    )
  }
}

BlogContent.PropTypes = propTypes