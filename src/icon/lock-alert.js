import React from 'react';
import iconSvg from '../icons/normalized/lock-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender