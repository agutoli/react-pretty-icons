import React from 'react';
import iconSvg from '../icons/normalized/alpha-f-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-f-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender