import React from 'react';
import iconSvg from '../icons/normalized/mouse-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mouse-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender