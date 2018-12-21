import React from 'react';
import iconSvg from '../icons/normalized/alpha-k.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-k" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender