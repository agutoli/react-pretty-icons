import React from 'react';
import iconSvg from '../icons/normalized/google-assistant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-assistant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender