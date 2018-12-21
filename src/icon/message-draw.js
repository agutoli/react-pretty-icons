import React from 'react';
import iconSvg from '../icons/normalized/message-draw.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-draw" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender