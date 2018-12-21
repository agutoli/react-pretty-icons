import React from 'react';
import iconSvg from '../icons/normalized/resize-bottom-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__resize-bottom-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender