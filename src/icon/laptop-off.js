import React from 'react';
import iconSvg from '../icons/normalized/laptop-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__laptop-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender