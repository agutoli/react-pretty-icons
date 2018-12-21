import React from 'react';
import iconSvg from '../icons/normalized/ping-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ping-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender