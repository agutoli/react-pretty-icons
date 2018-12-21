import React from 'react';
import iconSvg from '../icons/normalized/chat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender