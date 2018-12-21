import React from 'react';
import iconSvg from '../icons/normalized/close-octagon-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__close-octagon-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender