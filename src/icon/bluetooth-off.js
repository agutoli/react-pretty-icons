import React from 'react';
import iconSvg from '../icons/normalized/bluetooth-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bluetooth-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender