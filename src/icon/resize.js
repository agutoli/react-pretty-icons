import React from 'react';
import iconSvg from '../icons/normalized/resize.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__resize" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender