import React from 'react';
import iconSvg from '../icons/normalized/notification-clear-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__notification-clear-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender