import React from 'react';
import iconSvg from '../icons/normalized/layers.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layers" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender