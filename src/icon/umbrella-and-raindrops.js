import React from 'react';
import iconSvg from '../icons/normalized/umbrella-and-raindrops.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__umbrella-and-raindrops" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender