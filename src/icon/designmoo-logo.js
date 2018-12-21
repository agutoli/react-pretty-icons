import React from 'react';
import iconSvg from '../icons/normalized/designmoo-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__designmoo-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender