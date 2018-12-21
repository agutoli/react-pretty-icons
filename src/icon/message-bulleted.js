import React from 'react';
import iconSvg from '../icons/normalized/message-bulleted.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-bulleted" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender