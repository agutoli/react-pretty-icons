import React from 'react';
import iconSvg from '../icons/normalized/brightness-auto.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__brightness-auto" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender