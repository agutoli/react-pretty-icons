import React from 'react';
import iconSvg from '../icons/normalized/omega.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__omega" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender