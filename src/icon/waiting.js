import React from 'react';
import iconSvg from '../icons/normalized/waiting.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__waiting" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender