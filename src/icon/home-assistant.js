import React from 'react';
import iconSvg from '../icons/normalized/home-assistant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-assistant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender