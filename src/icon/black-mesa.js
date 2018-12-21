import React from 'react';
import iconSvg from '../icons/normalized/black-mesa.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__black-mesa" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender