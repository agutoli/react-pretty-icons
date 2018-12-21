import React from 'react';
import iconSvg from '../icons/normalized/file-percent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-percent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender