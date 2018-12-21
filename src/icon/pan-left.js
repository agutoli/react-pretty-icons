import React from 'react';
import iconSvg from '../icons/normalized/pan-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender