import React from 'react';
import iconSvg from '../icons/normalized/apple-keyboard-control.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-keyboard-control" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender