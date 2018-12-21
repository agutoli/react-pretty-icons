import React from 'react';
import iconSvg from '../icons/normalized/send-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__send-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender