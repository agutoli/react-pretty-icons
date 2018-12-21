import React from 'react';
import iconSvg from '../icons/normalized/message-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender