import React from 'react';
import iconSvg from '../icons/normalized/pipe-disconnected.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pipe-disconnected" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender