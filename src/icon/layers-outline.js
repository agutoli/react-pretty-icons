import React from 'react';
import iconSvg from '../icons/normalized/layers-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layers-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender