import React from 'react';
import iconSvg from '../icons/normalized/apple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender