import React from 'react';
import iconSvg from '../icons/normalized/file-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender