import React from 'react';
import iconSvg from '../icons/normalized/home-modern.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-modern" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender