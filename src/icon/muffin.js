import React from 'react';
import iconSvg from '../icons/normalized/muffin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__muffin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender