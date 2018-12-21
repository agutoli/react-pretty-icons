import React from 'react';
import iconSvg from '../icons/normalized/square-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender