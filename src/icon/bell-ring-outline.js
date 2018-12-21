import React from 'react';
import iconSvg from '../icons/normalized/bell-ring-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-ring-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender