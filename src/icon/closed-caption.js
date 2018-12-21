import React from 'react';
import iconSvg from '../icons/normalized/closed-caption.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__closed-caption" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender