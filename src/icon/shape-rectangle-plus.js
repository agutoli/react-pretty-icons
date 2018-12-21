import React from 'react';
import iconSvg from '../icons/normalized/shape-rectangle-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shape-rectangle-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender