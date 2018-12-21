import React from 'react';
import iconSvg from '../icons/normalized/send.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__send" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender