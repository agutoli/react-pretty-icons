import React from 'react';
import iconSvg from '../icons/normalized/lock-pattern.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-pattern" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender