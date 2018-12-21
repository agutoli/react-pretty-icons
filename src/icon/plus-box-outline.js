import React from 'react';
import iconSvg from '../icons/normalized/plus-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender