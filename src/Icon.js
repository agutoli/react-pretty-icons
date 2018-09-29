import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Icon extends React.Component {
  render() {
    const { name, className } = this.props;
    return React.createElement(require(`./icons/${name}.js`), {
      className: classnames('react-pretty-icons', `react-pretty-icons__${name}`, className)
    });
  }
}

Icon.propTypes = {
  className: PropTypes.string
};

export default Icon;
