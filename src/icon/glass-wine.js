import React from 'react';
import iconSvg from '../icons/normalized/glass-wine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__glass-wine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender