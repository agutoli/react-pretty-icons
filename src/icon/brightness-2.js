import React from 'react';
import iconSvg from '../icons/normalized/brightness-2.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__brightness-2" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender