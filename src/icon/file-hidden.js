import React from 'react';
import iconSvg from '../icons/normalized/file-hidden.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-hidden" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender