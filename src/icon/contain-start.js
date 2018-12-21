import React from 'react';
import iconSvg from '../icons/normalized/contain-start.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contain-start" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender