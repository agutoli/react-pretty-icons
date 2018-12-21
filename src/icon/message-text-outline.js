import React from 'react';
import iconSvg from '../icons/normalized/message-text-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-text-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender