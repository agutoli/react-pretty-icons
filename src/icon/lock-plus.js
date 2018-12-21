import React from 'react';
import iconSvg from '../icons/normalized/lock-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender