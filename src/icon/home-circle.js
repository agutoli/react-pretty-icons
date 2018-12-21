import React from 'react';
import iconSvg from '../icons/normalized/home-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender