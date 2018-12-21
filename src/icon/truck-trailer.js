import React from 'react';
import iconSvg from '../icons/normalized/truck-trailer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__truck-trailer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender