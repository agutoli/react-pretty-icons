import React from 'react';
import iconSvg from '../icons/normalized/yin-yang.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yin-yang" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender