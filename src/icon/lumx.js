import React from 'react';
import iconSvg from '../icons/normalized/lumx.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lumx" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender