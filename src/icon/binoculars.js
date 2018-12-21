import React from 'react';
import iconSvg from '../icons/normalized/binoculars.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__binoculars" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender