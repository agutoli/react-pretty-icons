import React from 'react';
import iconSvg from '../icons/normalized/pin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender