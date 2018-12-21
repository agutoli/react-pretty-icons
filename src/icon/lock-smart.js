import React from 'react';
import iconSvg from '../icons/normalized/lock-smart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-smart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender