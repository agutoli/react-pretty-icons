import React from 'react';
import iconSvg from '../icons/normalized/alpha-u.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-u" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender