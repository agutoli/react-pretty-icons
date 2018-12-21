import React from 'react';
import iconSvg from '../icons/normalized/format-italic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-italic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender