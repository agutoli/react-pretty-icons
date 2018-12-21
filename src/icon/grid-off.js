import React from 'react';
import iconSvg from '../icons/normalized/grid-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__grid-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender