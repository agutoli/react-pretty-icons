import React from 'react';
import iconSvg from '../icons/normalized/pan-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender