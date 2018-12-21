import React from 'react';
import iconSvg from '../icons/normalized/magnet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__magnet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender