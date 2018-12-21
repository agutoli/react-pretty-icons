import React from 'react';
import iconSvg from '../icons/normalized/hearts-outline-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hearts-outline-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender