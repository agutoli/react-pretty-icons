import React from 'react';
import iconSvg from '../icons/normalized/earth-box-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__earth-box-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender