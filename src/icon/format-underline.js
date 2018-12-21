import React from 'react';
import iconSvg from '../icons/normalized/format-underline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-underline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender