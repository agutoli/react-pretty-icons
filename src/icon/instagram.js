import React from 'react';
import iconSvg from '../icons/normalized/instagram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__instagram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender