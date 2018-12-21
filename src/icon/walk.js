import React from 'react';
import iconSvg from '../icons/normalized/walk.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__walk" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender