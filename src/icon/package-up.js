import React from 'react';
import iconSvg from '../icons/normalized/package-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__package-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender