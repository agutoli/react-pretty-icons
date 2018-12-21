import React from 'react';
import iconSvg from '../icons/normalized/square-inc-cash.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-inc-cash" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender