import React from 'react';
import iconSvg from '../icons/normalized/lock-reset.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-reset" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender