import React from 'react';
import iconSvg from '../icons/normalized/verified.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__verified" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender