import React from 'react';
import iconSvg from '../icons/normalized/medium.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__medium" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender