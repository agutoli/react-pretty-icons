import React from 'react';
import iconSvg from '../icons/normalized/brightness-5.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__brightness-5" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender