import React from 'react';
import iconSvg from '../icons/normalized/bluetooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bluetooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender