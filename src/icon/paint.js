import React from 'react';
import iconSvg from '../icons/normalized/paint.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__paint" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender