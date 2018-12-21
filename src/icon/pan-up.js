import React from 'react';
import iconSvg from '../icons/normalized/pan-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender