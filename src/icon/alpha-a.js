import React from 'react';
import iconSvg from '../icons/normalized/alpha-a.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-a" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender