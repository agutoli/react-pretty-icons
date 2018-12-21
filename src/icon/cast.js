import React from 'react';
import iconSvg from '../icons/normalized/cast.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cast" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender