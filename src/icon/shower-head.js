import React from 'react';
import iconSvg from '../icons/normalized/shower-head.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shower-head" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender