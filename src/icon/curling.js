import React from 'react';
import iconSvg from '../icons/normalized/curling.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__curling" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender