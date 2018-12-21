import React from 'react';
import iconSvg from '../icons/normalized/home-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender