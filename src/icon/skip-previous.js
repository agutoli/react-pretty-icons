import React from 'react';
import iconSvg from '../icons/normalized/skip-previous.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skip-previous" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender