import React from 'react';
import iconSvg from '../icons/normalized/radiator-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__radiator-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender