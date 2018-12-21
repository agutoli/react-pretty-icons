import React from 'react';
import iconSvg from '../icons/normalized/heart-pulse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-pulse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender