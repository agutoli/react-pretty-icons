import React from 'react';
import iconSvg from '../icons/normalized/rowing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rowing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender