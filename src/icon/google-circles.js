import React from 'react';
import iconSvg from '../icons/normalized/google-circles.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-circles" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender