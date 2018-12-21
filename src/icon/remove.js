import React from 'react';
import iconSvg from '../icons/normalized/remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender