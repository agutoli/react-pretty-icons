import React from 'react';
import iconSvg from '../icons/normalized/message-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender