import React from 'react';
import iconSvg from '../icons/normalized/alpha-n.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-n" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender