import React from 'react';
import iconSvg from '../icons/normalized/close-circle-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__close-circle-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender