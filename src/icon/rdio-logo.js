import React from 'react';
import iconSvg from '../icons/normalized/rdio-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rdio-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender