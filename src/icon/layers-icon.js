import React from 'react';
import iconSvg from '../icons/normalized/layers-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layers-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender