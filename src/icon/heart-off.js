import React from 'react';
import iconSvg from '../icons/normalized/heart-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender