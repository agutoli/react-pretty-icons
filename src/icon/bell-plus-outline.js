import React from 'react';
import iconSvg from '../icons/normalized/bell-plus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-plus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender