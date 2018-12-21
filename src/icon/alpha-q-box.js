import React from 'react';
import iconSvg from '../icons/normalized/alpha-q-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-q-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender