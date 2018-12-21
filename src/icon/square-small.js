import React from 'react';
import iconSvg from '../icons/normalized/square-small.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-small" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender