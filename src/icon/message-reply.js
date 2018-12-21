import React from 'react';
import iconSvg from '../icons/normalized/message-reply.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-reply" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender