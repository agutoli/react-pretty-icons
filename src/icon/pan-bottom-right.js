import React from 'react';
import iconSvg from '../icons/normalized/pan-bottom-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan-bottom-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender