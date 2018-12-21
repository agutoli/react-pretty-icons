import React from 'react';
import iconSvg from '../icons/normalized/apple-keyboard-command.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-keyboard-command" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender