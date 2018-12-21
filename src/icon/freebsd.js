import React from 'react';
import iconSvg from '../icons/normalized/freebsd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__freebsd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender