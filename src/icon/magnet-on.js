import React from 'react';
import iconSvg from '../icons/normalized/magnet-on.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__magnet-on" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender