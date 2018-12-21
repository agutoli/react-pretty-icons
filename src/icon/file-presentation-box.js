import React from 'react';
import iconSvg from '../icons/normalized/file-presentation-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-presentation-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender