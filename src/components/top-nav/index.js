import React, { PropTypes } from 'react'

import TopNavTab from '../top-nav-tab'

const propTypes = {
  currentPage: PropTypes.string.isRequired,
}

export default class TopNav extends React.Component {

  render() {
    return (
      <div>
        <TopNavTab
          text="about"
          linkTo="/about"
          active={this.props.currentPage === '/about'}
        />
        <TopNavTab
          text="read"
          linkTo="/"
          active={this.props.currentPage === '/'}
        />
      </div>
    )
  }
}

TopNav.propTypes = propTypes
