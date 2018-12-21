import React from 'react';
import iconSvg from '../icons/normalized/pig.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pig" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender