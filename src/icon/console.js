import React from 'react';
import iconSvg from '../icons/normalized/console.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__console" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender