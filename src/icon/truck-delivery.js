import React from 'react';
import iconSvg from '../icons/normalized/truck-delivery.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__truck-delivery" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender