import React from 'react';
import iconSvg from '../icons/normalized/format-superscript.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-superscript" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender