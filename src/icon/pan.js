import React from 'react';
import iconSvg from '../icons/normalized/pan.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pan" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender