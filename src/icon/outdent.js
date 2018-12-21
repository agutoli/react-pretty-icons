import React from 'react';
import iconSvg from '../icons/normalized/outdent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__outdent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender