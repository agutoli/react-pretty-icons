import React from 'react';
import iconSvg from '../icons/normalized/hotel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hotel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender