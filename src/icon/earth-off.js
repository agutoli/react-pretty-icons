import React from 'react';
import iconSvg from '../icons/normalized/earth-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__earth-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender