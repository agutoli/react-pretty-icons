import React from 'react';
import iconSvg from '../icons/normalized/headphones-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__headphones-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender