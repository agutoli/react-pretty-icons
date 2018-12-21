import React from 'react';
import iconSvg from '../icons/normalized/format-section.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-section" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender