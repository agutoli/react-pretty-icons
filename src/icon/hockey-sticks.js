import React from 'react';
import iconSvg from '../icons/normalized/hockey-sticks.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hockey-sticks" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender