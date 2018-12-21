import React from 'react';
import iconSvg from '../icons/normalized/layers-off-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layers-off-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender