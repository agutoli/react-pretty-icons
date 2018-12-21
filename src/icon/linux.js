import React from 'react';
import iconSvg from '../icons/normalized/linux.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__linux" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender