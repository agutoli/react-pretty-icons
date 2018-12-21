import React from 'react';
import iconSvg from '../icons/normalized/tune.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tune" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender