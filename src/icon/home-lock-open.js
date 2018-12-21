import React from 'react';
import iconSvg from '../icons/normalized/home-lock-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-lock-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender