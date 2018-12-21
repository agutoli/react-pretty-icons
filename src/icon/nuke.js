import React from 'react';
import iconSvg from '../icons/normalized/nuke.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nuke" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender