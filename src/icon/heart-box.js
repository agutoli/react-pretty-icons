import React from 'react';
import iconSvg from '../icons/normalized/heart-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender