import React from 'react';
import iconSvg from '../icons/normalized/usb.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__usb" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender