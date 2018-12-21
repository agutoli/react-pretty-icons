import React from 'react';
import iconSvg from '../icons/normalized/shape-square-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shape-square-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender