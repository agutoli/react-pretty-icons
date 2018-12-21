import React from 'react';
import iconSvg from '../icons/normalized/house-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__house-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender