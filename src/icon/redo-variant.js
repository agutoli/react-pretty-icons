import React from 'react';
import iconSvg from '../icons/normalized/redo-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__redo-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender