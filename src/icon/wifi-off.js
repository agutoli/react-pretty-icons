import React from 'react';
import iconSvg from '../icons/normalized/wifi-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wifi-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender