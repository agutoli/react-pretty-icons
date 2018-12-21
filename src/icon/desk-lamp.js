import React from 'react';
import iconSvg from '../icons/normalized/desk-lamp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__desk-lamp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender