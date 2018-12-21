import React from 'react';
import iconSvg from '../icons/normalized/angle-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__angle-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender