import React from 'react';
import iconSvg from '../icons/normalized/layers-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layers-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender