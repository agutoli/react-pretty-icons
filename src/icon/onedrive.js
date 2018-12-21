import React from 'react';
import iconSvg from '../icons/normalized/onedrive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__onedrive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender