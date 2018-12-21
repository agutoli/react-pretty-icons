import React from 'react';
import iconSvg from '../icons/normalized/shape-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shape-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender