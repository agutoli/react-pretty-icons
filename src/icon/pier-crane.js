import React from 'react';
import iconSvg from '../icons/normalized/pier-crane.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pier-crane" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender