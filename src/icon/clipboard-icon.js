import React from 'react';
import iconSvg from '../icons/normalized/clipboard-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender