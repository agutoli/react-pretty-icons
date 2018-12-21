import React from 'react';
import iconSvg from '../icons/normalized/pan-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender