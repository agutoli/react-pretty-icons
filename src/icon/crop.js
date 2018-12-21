import React from 'react';
import iconSvg from '../icons/normalized/crop.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crop" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender