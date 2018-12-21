import React from 'react';
import iconSvg from '../icons/normalized/toolbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__toolbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender