import React from 'react';
import iconSvg from '../icons/normalized/waves.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__waves" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender