import React from 'react';
import iconSvg from '../icons/normalized/new-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__new-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender