import React from 'react';
import iconSvg from '../icons/normalized/shield-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shield-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender