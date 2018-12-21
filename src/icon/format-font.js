import React from 'react';
import iconSvg from '../icons/normalized/format-font.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-font" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender