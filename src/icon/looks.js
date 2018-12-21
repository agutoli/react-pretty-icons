import React from 'react';
import iconSvg from '../icons/normalized/looks.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__looks" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender