import React from 'react';
import iconSvg from '../icons/normalized/heart-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender