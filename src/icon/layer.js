import React from 'react';
import iconSvg from '../icons/normalized/layer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender