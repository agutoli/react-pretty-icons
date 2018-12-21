import React from 'react';
import iconSvg from '../icons/normalized/message-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender