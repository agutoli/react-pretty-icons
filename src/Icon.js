import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Icon extends React.Component {
  render() {
    const { name, className } = this.props;
    try {
      const iconFile = require(`./icons/${name}.js`)
    } catch(e) {
      const iconFile = 'invalid-icon'
      console.warn(`invalid icon name ${name}`)
    }
    return React.createElement(iconFile, {
      className: classnames('react-pretty-icons', `react-pretty-icons__${name}`, className)
    });
  }
}

Icon.propTypes = {
  className: PropTypes.string
};

export default Icon;
