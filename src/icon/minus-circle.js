import React from 'react';
import iconSvg from '../icons/normalized/minus-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__minus-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender