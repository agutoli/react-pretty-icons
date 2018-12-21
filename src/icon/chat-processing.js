import React from 'react';
import iconSvg from '../icons/normalized/chat-processing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chat-processing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender