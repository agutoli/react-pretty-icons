import React from 'react';
import iconSvg from '../icons/normalized/shape-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shape-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender