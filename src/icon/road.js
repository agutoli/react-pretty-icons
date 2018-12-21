import React from 'react';
import iconSvg from '../icons/normalized/road.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__road" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender