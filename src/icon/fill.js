import React from 'react';
import iconSvg from '../icons/normalized/fill.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fill" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender