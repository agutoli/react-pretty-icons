import React from 'react';
import iconSvg from '../icons/normalized/vine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender