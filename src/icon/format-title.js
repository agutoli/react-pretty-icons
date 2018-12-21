import React from 'react';
import iconSvg from '../icons/normalized/format-title.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-title" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender