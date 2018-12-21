import React from 'react';
import iconSvg from '../icons/normalized/box-upload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__box-upload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender