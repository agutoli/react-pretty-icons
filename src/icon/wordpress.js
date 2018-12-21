import React from 'react';
import iconSvg from '../icons/normalized/wordpress.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wordpress" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender