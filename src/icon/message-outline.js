import React from 'react';
import iconSvg from '../icons/normalized/message-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender