import React from 'react';
import iconSvg from '../icons/normalized/window-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__window-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender