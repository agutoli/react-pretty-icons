import React from 'react';
import iconSvg from '../icons/normalized/ladybug.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ladybug" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender