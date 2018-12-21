import React from 'react';
import iconSvg from '../icons/normalized/pin-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pin-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender