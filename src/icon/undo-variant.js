import React from 'react';
import iconSvg from '../icons/normalized/undo-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__undo-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender