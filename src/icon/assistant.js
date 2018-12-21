import React from 'react';
import iconSvg from '../icons/normalized/assistant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__assistant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender