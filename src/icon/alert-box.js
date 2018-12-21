import React from 'react';
import iconSvg from '../icons/normalized/alert-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alert-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender