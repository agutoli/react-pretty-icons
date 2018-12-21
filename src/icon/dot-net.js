import React from 'react';
import iconSvg from '../icons/normalized/dot-net.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dot-net" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender