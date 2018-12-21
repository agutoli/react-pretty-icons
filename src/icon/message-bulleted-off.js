import React from 'react';
import iconSvg from '../icons/normalized/message-bulleted-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-bulleted-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender