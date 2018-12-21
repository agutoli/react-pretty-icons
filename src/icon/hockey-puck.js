import React from 'react';
import iconSvg from '../icons/normalized/hockey-puck.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hockey-puck" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender