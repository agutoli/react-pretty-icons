import React from 'react';
import iconSvg from '../icons/normalized/scanner-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__scanner-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender