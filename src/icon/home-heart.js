import React from 'react';
import iconSvg from '../icons/normalized/home-heart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-heart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender