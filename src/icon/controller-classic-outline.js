import React from 'react';
import iconSvg from '../icons/normalized/controller-classic-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__controller-classic-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender