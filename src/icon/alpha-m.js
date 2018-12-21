import React from 'react';
import iconSvg from '../icons/normalized/alpha-m.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-m" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender