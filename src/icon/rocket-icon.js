import React from 'react';
import iconSvg from '../icons/normalized/rocket-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rocket-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender